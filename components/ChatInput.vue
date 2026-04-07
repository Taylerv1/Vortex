<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  loading: boolean
}>()

const emit = defineEmits<{
  submit: [text: string]
}>()

const draft = ref('')

const canSend = computed(() => {
  return draft.value.trim().length > 0 && !props.loading
})

function handleSubmit() {
  if (!canSend.value) {
    return
  }

  emit('submit', draft.value)
  draft.value = ''
}

function handleKeydown(event: KeyboardEvent) {
  if (event.key === 'Enter' && !event.shiftKey) {
    event.preventDefault()
    handleSubmit()
  }
}
</script>

<template>
  <form
    class="chat-input-card rounded-[18px] border border-slate-200 bg-white p-2.5 shadow-[0_8px_24px_rgba(15,23,42,0.06)]"
    @submit.prevent="handleSubmit"
  >
    <label
      for="chat-input"
      class="sr-only"
    >
      Ask Votrex something
    </label>

    <div class="chat-input-row flex items-end gap-3">
      <button
        type="button"
        class="chat-input-action flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:bg-slate-50 hover:text-slate-800"
        aria-label="Add command"
      >
        <svg
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 4V16M4 10H16"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-width="1.8"
          />
        </svg>
      </button>

      <textarea
        id="chat-input"
        v-model="draft"
        rows="1"
        class="max-h-32 min-h-[40px] flex-1 resize-none bg-transparent px-1 py-2 text-[15px] text-slate-700 outline-none placeholder:text-slate-400"
        placeholder="Type '/' for commands"
        :disabled="loading"
        @keydown="handleKeydown"
      />

      <button
        type="submit"
        class="chat-send-action flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#caa93f] text-[#171919] shadow-sm transition hover:bg-[#b8952e] disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-400"
        :disabled="!canSend"
        aria-label="Send message"
      >
        <svg
          class="h-4 w-4"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 4.16675V15.8334M10 4.16675L5.83334 8.33341M10 4.16675L14.1667 8.33341"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
          />
        </svg>
      </button>
    </div>

    <div class="chat-input-meta mt-2 flex items-center justify-between px-1 text-[11px] text-slate-400">
      <span>Shift + Enter adds a new line</span>
      <span>{{ loading ? 'Generating response...' : 'OpenRouter - gpt-4o-mini' }}</span>
    </div>
  </form>
</template>
