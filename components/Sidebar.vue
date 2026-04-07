<script setup lang="ts">
defineProps<{
  conversations: string[]
}>()

const emit = defineEmits<{
  newChat: []
}>()
</script>

<template>
  <aside class="flex h-full min-h-0 flex-col overflow-hidden bg-[#171919] px-2.5 py-2.5 text-white">
    <div class="space-y-3">
      <div class="flex items-center justify-between gap-1.5 px-1 py-2">
        <div class="flex items-center gap-2.5 px-1">
          <div class="min-w-0">
            <p class="text-[15px] font-semibold tracking-tight text-white">
              Vortex 4o mini
            </p>
            <p class="text-[13px] leading-tight text-slate-400">
              Demo workspace
            </p>
          </div>
        </div>

        <button
          type="button"
          class="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Switch workspace"
        >
          <svg
            class="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 8L10 12L14 8"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.7"
            />
          </svg>
        </button>
      </div>

      <div class="rounded-2xl border border-white/10 bg-white/5 p-2">
        <div class="mb-2 flex items-center justify-between">
          <p class="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Recent
          </p>
          <button
            type="button"
            class="rounded-lg border border-[#caa93f]/40 bg-[#caa93f]/15 px-2 py-1 text-[10px] font-medium text-[#caa93f] transition hover:bg-[#caa93f]/25"
            @click="emit('newChat')"
          >
            New Chat
          </button>
        </div>

        <ul class="space-y-1.5">
          <li
            v-for="item in conversations"
            :key="item"
            class="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/10"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-auto space-y-2">
      <div class="rounded-[18px] border border-[#caa93f]/35 bg-gradient-to-br from-[#242321] via-[#1d1d1b] to-[#151513] p-2.5 text-white shadow-[0_18px_38px_rgba(0,0,0,0.35)]">
        <div class="text-center">
          <div class="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full border border-[#caa93f]/45 bg-[#caa93f]/18 text-[#e6cd77]">
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 15.5L12 3L19 15.5H5Z"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="1.7"
              />
              <path
                d="M12 15.5V21"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-width="1.7"
              />
            </svg>
          </div>
          <p class="text-[15px] font-semibold text-white">
            Upgrade your
            <span class="rounded-md bg-[#caa93f] px-2 py-0.5 text-[#171919]">Plan</span>
          </p>
          <p class="mt-1.5 text-[10px] leading-4 text-slate-300">
            Faster responses and a cleaner layout.
          </p>
        </div>

        <button
          type="button"
          class="mt-2.5 w-full rounded-xl border border-[#caa93f]/45 bg-[#caa93f]/20 px-4 py-2 text-sm font-medium text-[#edd58a] transition hover:bg-[#caa93f]/30"
        >
          View All Plans
        </button>
      </div>

      <div class="flex items-center gap-2.5 rounded-[18px] bg-white/5 px-3 py-2">
        <div class="flex h-9 w-9 items-center justify-center rounded-full border border-[#caa93f]/55 bg-[#171919] text-sm font-bold text-[#d8bc63] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
          M
        </div>

        <div class="min-w-0 flex-1">
          <p class="truncate text-sm font-semibold text-white">
            Vortex Presenter
          </p>
          <p class="truncate text-[10px] text-slate-400">
            demo@vortex.local
          </p>
        </div>

        <button
          type="button"
          class="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 transition hover:bg-white/5 hover:text-white"
          aria-label="Open profile"
        >
          <svg
            class="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 8L10 12L14 8"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.7"
            />
          </svg>
        </button>
      </div>
    </div>
  </aside>
</template>
