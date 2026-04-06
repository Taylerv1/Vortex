<script setup lang="ts">
import { computed } from 'vue'
import type { ChatMessage } from '~/composables/useChat'

defineOptions({
  name: 'MessageList',
})

const props = defineProps<{
  messages: ChatMessage[]
}>()

const hasMessages = computed(() => props.messages.length > 0)
</script>

<template>
  <div class="soft-scrollbar flex min-h-0 flex-1 overflow-y-auto bg-[#fbfbfa]">
    <div
      v-if="hasMessages"
      class="mx-auto flex w-full max-w-[980px] flex-col gap-8 px-4 py-8 md:px-8"
    >
      <MessageItem
        v-for="message in messages"
        :key="message.id"
        :message="message"
      />
    </div>

    <div
      v-else
      class="flex w-full items-center justify-center px-4 py-5 md:px-6 md:py-6"
    >
      <EmptyState />
    </div>
  </div>
</template>
