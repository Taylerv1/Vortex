<script setup lang="ts">
import ChatHeader from '~/components/ChatHeader.vue'
import ChatInput from '~/components/ChatInput.vue'
import ErrorMessage from '~/components/ErrorMessage.vue'
import LoadingIndicator from '~/components/LoadingIndicator.vue'
import MessageList from '~/components/MessageList.vue'
import Sidebar from '~/components/Sidebar.vue'
import { useChat } from '~/composables/useChat'

useHead({
  title: 'Votrex Chat',
})

const {
  messages,
  loading,
  error,
  sendMessage,
  clearChat,
  clearError,
} = useChat()

const demoConversations = ['Introduction', 'Vue Basics', 'Nuxt Demo']
</script>

<template>
  <main class="h-[100dvh] overflow-hidden bg-[#efe8cf] p-0 text-slate-900">
    <div class="grid h-full min-h-0 gap-0 lg:grid-cols-[250px,1fr]">
      <Sidebar
        :conversations="demoConversations"
        @new-chat="clearChat"
      />

      <section class="relative flex h-full min-h-0 flex-col overflow-hidden border-l border-slate-200 bg-[#fbfbfa] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <ChatHeader
          :message-count="messages.length"
          @clear="clearChat"
          @new-chat="clearChat"
        />

        <div class="flex min-h-0 flex-1 flex-col bg-[#fbfbfa]">
          <ErrorMessage
            v-if="error"
            :message="error"
            @dismiss="clearError"
          />

          <MessageList :messages="messages" />

          <div class="px-4 pb-4 md:px-8 md:pb-5">
            <LoadingIndicator v-if="loading" class="mb-4" />
            <ChatInput
              :loading="loading"
              @submit="sendMessage"
            />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
