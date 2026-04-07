<script setup lang="ts">
import { ref } from 'vue'
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

const recentConversations = ['Introduction', 'Vue Basics', 'Nuxt Demo']
const isMobileSidebarOpen = ref(false)

function openMobileSidebar() {
  isMobileSidebarOpen.value = true
}

function closeMobileSidebar() {
  isMobileSidebarOpen.value = false
}

function handleNewChat() {
  clearChat()
  closeMobileSidebar()
}
</script>

<template>
  <main class="chat-shell h-[100dvh] overflow-hidden bg-[#efe8cf] p-0 text-slate-900">
    <div class="chat-layout grid h-full min-h-0 gap-0 lg:grid-cols-[250px,1fr]">
      <button
        type="button"
        class="chat-sidebar-backdrop lg:hidden"
        :class="{ 'is-open': isMobileSidebarOpen }"
        aria-label="Close navigation"
        :aria-hidden="!isMobileSidebarOpen"
        @click="closeMobileSidebar"
      />

      <Sidebar
        class="chat-sidebar-panel"
        :class="{ 'is-open': isMobileSidebarOpen }"
        :conversations="recentConversations"
        @new-chat="handleNewChat"
      />

      <button
        v-if="isMobileSidebarOpen"
        type="button"
        class="chat-sidebar-close flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-[#171919]/90 text-white shadow-lg lg:hidden"
        aria-label="Close sidebar"
        @click="closeMobileSidebar"
      >
        <svg
          class="h-5 w-5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L14 14M14 6L6 14"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.8"
          />
        </svg>
      </button>

      <section class="chat-main-panel relative flex h-full min-h-0 flex-col overflow-hidden border-l border-slate-200 bg-[#fbfbfa] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        <ChatHeader
          class="chat-header"
          :message-count="messages.length"
          @clear="clearChat"
          @new-chat="clearChat"
          @menu="openMobileSidebar"
        />

        <div class="flex min-h-0 flex-1 flex-col bg-[#fbfbfa]">
          <ErrorMessage
            v-if="error"
            :message="error"
            @dismiss="clearError"
          />

          <MessageList
            class="chat-messages"
            :messages="messages"
          />

          <div class="chat-composer-wrap px-4 pb-4 md:px-8 md:pb-5">
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
