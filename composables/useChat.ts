import { ref } from 'vue'

export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  text: string
}

const DEFAULT_ERROR_MESSAGE = 'Something went wrong while contacting the server. Please try again.'

type FetchErrorShape = {
  data?: {
    statusMessage?: string
  }
}

function createMessage(role: ChatMessage['role'], text: string): ChatMessage {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
  }
}

function getServerStatusMessage(error: unknown): string | null {
  if (typeof error !== 'object' || error === null || !('data' in error)) {
    return null
  }

  const statusMessage = (error as FetchErrorShape).data?.statusMessage

  if (typeof statusMessage !== 'string' || statusMessage.trim().length === 0) {
    return null
  }

  return statusMessage
}

export function useChat() {
  const messages = ref<ChatMessage[]>([])
  const loading = ref(false)
  const error = ref('')

  function pushMessage(role: ChatMessage['role'], text: string) {
    messages.value.push(createMessage(role, text))
  }

  async function sendMessage(text: string) {
    const prompt = text.trim()

    if (!prompt || loading.value) {
      return
    }

    error.value = ''
    pushMessage('user', prompt)
    loading.value = true

    try {
      // The frontend only talks to the Nuxt server route.
      const response = await $fetch<{ reply: string }>('/api/chat', {
        method: 'POST',
        body: { prompt },
      })

      pushMessage('assistant', response.reply)
    } catch (caughtError) {
      console.error('Chat request failed:', caughtError)

      error.value = getServerStatusMessage(caughtError) ?? DEFAULT_ERROR_MESSAGE
    } finally {
      loading.value = false
    }
  }

  function clearChat() {
    messages.value = []
    error.value = ''
  }

  function clearError() {
    error.value = ''
  }

  return {
    messages,
    loading,
    error,
    sendMessage,
    clearChat,
    clearError,
  }
}
