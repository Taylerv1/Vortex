<script setup lang="ts">
import { computed } from 'vue'
import type { ChatMessage } from '../composables/useChat'

const props = defineProps<{
  message: ChatMessage
}>()

const isUser = computed(() => props.message.role === 'user')
const authorLabel = computed(() => (isUser.value ? 'You' : 'Votrex'))
const avatarLabel = computed(() => (isUser.value ? 'M' : 'V'))
</script>

<template>
  <article class="flex" :class="isUser ? 'justify-end' : 'justify-start'">
    <div
      class="flex max-w-[820px] gap-4"
      :class="isUser ? 'flex-row-reverse items-end' : 'items-end'"
    >
      <div
        class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold shadow-sm"
        :class="isUser
          ? 'border border-[#caa93f]/45 bg-[#caa93f]/35 text-[#171919]'
          : 'border border-black/20 bg-slate-400/25 text-slate-900'"
      >
        <span v-if="isUser">{{ avatarLabel }}</span>
        <img
          v-else
          src="/VortexLogo.png"
          alt="Vortex logo"
          class="h-7 w-7 object-contain"
        >
      </div>

      <div class="space-y-2">
        <div
          class="rounded-[24px] border px-5 py-4 shadow-sm"
          :class="isUser
            ? 'border-slate-200 bg-white text-slate-800'
            : 'border-slate-200 bg-[#f3f4f6] text-slate-800'"
        >
          <p class="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
            {{ authorLabel }}
          </p>
          <p class="whitespace-pre-wrap text-[15px] leading-7 text-slate-700">
            {{ message.text }}
          </p>
        </div>

        <div
          class="flex flex-wrap items-center text-[11px] text-slate-400"
          :class="isUser ? 'justify-end pr-1' : 'pl-1'"
        >
          <span>Just now</span>
        </div>
      </div>
    </div>
  </article>
</template>
