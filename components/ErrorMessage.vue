<script setup lang="ts">
defineProps<{
  message: string
}>()

const emit = defineEmits<{
  dismiss: []
}>()
</script>

<template>
  <div class="border-b border-rose-200 bg-rose-50/80 px-4 py-4 md:px-6">
    <div class="flex flex-col gap-3 rounded-2xl border border-rose-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <p class="text-sm text-rose-500">
        {{ message }}
      </p>

      <button
        class="rounded-xl border border-rose-200 px-3 py-2 text-sm font-medium text-rose-500 transition hover:bg-rose-50"
        @click="emit('dismiss')"
      >
        Dismiss
      </button>
    </div>
  </div>
</template>
