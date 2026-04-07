<script setup lang="ts">
import { ref } from 'vue'

const { messageCount } = defineProps<{
  messageCount: number
}>()

const emit = defineEmits<{
  clear: []
  newChat: []
  menu: []
}>()

const isAccentEnabled = ref(false)
</script>

<template>
  <header class="border-b border-slate-200 bg-gradient-to-b from-white to-[#fbfbfa] px-4 py-4 md:px-6">
    <div class="flex flex-wrap items-center justify-between gap-3 xl:gap-4">
      <div class="flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:text-slate-900 lg:hidden"
          aria-label="Open sidebar"
          @click="emit('menu')"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.33334 5.83325H16.6667M3.33334 9.99992H16.6667M3.33334 14.1666H16.6667"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="1.7"
            />
          </svg>
        </button>

        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-[#caa93f]/45 hover:text-[#caa93f]"
          @click="emit('newChat')"
        >
          <svg
            class="h-4 w-4 text-[#caa93f]"
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
          New chat
        </button>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <button
          type="button"
          class="hidden h-10 w-10 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 sm:flex"
          aria-label="Appearance"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2.5V4.16667M10 15.8333V17.5M4.6967 4.6967L5.87521 5.87521M14.1248 14.1248L15.3033 15.3033M2.5 10H4.16667M15.8333 10H17.5M4.6967 15.3033L5.87521 14.1248M14.1248 5.87521L15.3033 4.6967"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="1.6"
            />
          </svg>
        </button>

        <button
          type="button"
          class="relative inline-flex h-8 w-12 items-center rounded-full p-1 transition"
          :class="isAccentEnabled ? 'bg-[#caa93f]/70' : 'bg-slate-200'"
          @click="isAccentEnabled = !isAccentEnabled"
          aria-label="Theme accent toggle"
        >
          <span
            class="h-6 w-6 rounded-full bg-white shadow-sm transition"
            :class="isAccentEnabled ? 'translate-x-4' : 'translate-x-0'"
          />
        </button>

        <button
          type="button"
          class="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:text-slate-900 md:flex"
          aria-label="Bookmark"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66666 3.33325H13.3333C13.7936 3.33325 14.1667 3.70635 14.1667 4.16659V16.6666L10 13.7499L5.83333 16.6666V4.16659C5.83333 3.70635 6.20642 3.33325 6.66666 3.33325Z"
              stroke="currentColor"
              stroke-linejoin="round"
              stroke-width="1.6"
            />
          </svg>
        </button>

        <button
          type="button"
          class="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:text-slate-900 md:flex"
          aria-label="Archive"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16666 6.66659H15.8333M5 6.66659V14.1666C5 15.0871 5.74619 15.8333 6.66666 15.8333H13.3333C14.2538 15.8333 15 15.0871 15 14.1666V6.66659M7.5 9.99992H12.5M3.33333 4.16659H16.6667V6.66659H3.33333V4.16659Z"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.6"
            />
          </svg>
        </button>

        <button
          type="button"
          class="hidden h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:text-slate-900 md:flex"
          aria-label="Gallery"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16666 5.83325C4.16666 4.91278 4.91285 4.16659 5.83333 4.16659H14.1667C15.0871 4.16659 15.8333 4.91278 15.8333 5.83325V14.1666C15.8333 15.0871 15.0871 15.8333 14.1667 15.8333H5.83333C4.91285 15.8333 4.16666 15.0871 4.16666 14.1666V5.83325Z"
              stroke="currentColor"
              stroke-width="1.6"
            />
            <path
              d="M6.66666 12.5L8.74999 10.4167L10.4167 12.0833L12.5 9.99992L14.1667 11.6666"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.6"
            />
            <circle
              cx="7.08333"
              cy="7.08333"
              r="0.833333"
              fill="currentColor"
            />
          </svg>
        </button>

        <button
          type="button"
          class="flex h-10 items-center gap-2 rounded-xl border border-slate-200 bg-white px-2.5 text-sm font-medium text-slate-600 shadow-sm transition hover:text-rose-500 disabled:cursor-not-allowed disabled:opacity-50 sm:px-3"
          :disabled="messageCount === 0"
          @click="emit('clear')"
        >
          <svg
            class="h-4 w-4"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.66666 5.83325V4.99992C6.66666 4.07944 7.41285 3.33325 8.33333 3.33325H11.6667C12.5871 3.33325 13.3333 4.07944 13.3333 4.99992V5.83325M4.16666 5.83325H15.8333M14.1667 5.83325V14.9999C14.1667 15.9204 13.4205 16.6666 12.5 16.6666H7.5C6.57952 16.6666 5.83333 15.9204 5.83333 14.9999V5.83325M8.33333 8.33325V13.3333M11.6667 8.33325V13.3333"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
            />
          </svg>
          <span class="hidden sm:inline">Clear</span>
        </button>
      </div>
    </div>
  </header>
</template>
