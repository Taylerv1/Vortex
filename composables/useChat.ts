import { ref } from 'vue'

export type ChatMessage = {
  id: string
  role: 'user' | 'assistant'
  text: string
}

function createMessage(role: ChatMessage['role'], text: string): ChatMessage {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    role,
    text,
  }
}

export function useChat() {
  const messages = ref<ChatMessage[]>([])
  const loading = ref(false)
  const error = ref('')

  async function sendMessage(text: string) {
    const prompt = text.trim()

    if (!prompt || loading.value) {
      return
    }

    error.value = ''
    messages.value.push(createMessage('user', prompt))
    loading.value = true

    try {
      // The frontend only talks to the Nuxt server route.
      const response = await $fetch<{ reply: string }>('/api/chat', {
        method: 'POST',
        body: { prompt },
      })

      messages.value.push(createMessage('assistant', response.reply))
    } catch (caughtError) {
      console.error('Chat request failed:', caughtError)

      if (typeof caughtError === 'object' && caughtError && 'data' in caughtError) {
        const serverMessage = (caughtError as { data?: { statusMessage?: string } }).data?.statusMessage

        if (serverMessage) {
          error.value = serverMessage
        } else {
          error.value = 'Something went wrong while contacting the server. Please try again.'
        }
      } else {
        error.value = 'Something went wrong while contacting the server. Please try again.'
      }
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
