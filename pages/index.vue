<script setup lang="ts">
import { useHead } from '#imports'

useHead({
  title: 'Votrex',
})

const highlights = [
  'Shows page routing with a home page and a chat page.',
  'Uses reusable Vue components with props, emits, and v-model.',
  'Connects the frontend to a server API without exposing the API key.',
]
</script>

<template>
  <main class="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#171919] px-4 py-6 text-slate-900 md:px-8 md:py-10">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -left-24 -top-20 h-64 w-64 rounded-full bg-sky-200/35 blur-3xl" />
      <div class="absolute -bottom-20 right-12 h-72 w-72 rounded-full bg-sky-200/35 blur-3xl" />
    </div>

    <section class="relative w-full max-w-[1220px] overflow-hidden rounded-[30px] border border-slate-200 bg-[#fbfbfa] p-4 shadow-[0_28px_80px_rgba(15,23,42,0.12)] md:p-8 lg:p-10">
      <div class="grid gap-6 lg:grid-cols-[1.15fr,0.85fr]">
        <div class="space-y-6 rounded-[24px] border border-slate-200 bg-white/70 p-5 md:p-7">
          <div class="flex items-center gap-3">
            <img
              src="/VortexLogo.png"
              alt="Vortex logo"
              class="h-12 w-12 shrink-0 object-contain"
            >
            <img
              src="/VortexName.png"
              alt="Vortex name"
              class="h-8 w-auto object-contain"
            >
          </div>

          <div class="space-y-4">
            <p class="text-[11px] font-semibold uppercase tracking-[0.32em] text-emerald-600">
              Nuxt 3 + Vue 3 Demo
            </p>
            <h1 class="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 md:text-[2.4rem]">
              A clean AI assistant demo with a modern chat-style interface.
            </h1>
            <p class="max-w-2xl text-base leading-8 text-slate-600">
              Built for presentations to show routing, reusable components, and server communication
              in a practical, friendly flow.
            </p>
          </div>

          <div class="flex flex-wrap gap-2.5 text-[13px] text-slate-600">
            <span class="rounded-full border border-slate-200 bg-[#fbfbfa] px-4 py-2">Components</span>
            <span class="rounded-full border border-slate-200 bg-[#fbfbfa] px-4 py-2">Composables</span>
            <span class="rounded-full border border-slate-200 bg-[#fbfbfa] px-4 py-2">API Routes</span>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <NuxtLink
              to="/chat"
              class="inline-flex items-center justify-center rounded-xl bg-[#171919] px-5 py-3 font-medium text-white transition hover:bg-slate-800"
            >
              Open Chat
            </NuxtLink>
            <span class="rounded-xl border border-slate-200 bg-white/10 px-3 py-2 text-xs font-medium text-slate-700">
              Live demo ready
            </span>
          </div>
        </div>

        <div class="space-y-4">
          <div class="rounded-[24px] border border-slate-800/40 bg-gradient-to-b from-[#1b2023] to-[#131719] p-5 text-white shadow-[0_22px_55px_rgba(15,23,42,0.28)] md:p-6">
            <div class="mb-4 flex items-center justify-end">
              <span class="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] text-slate-200">
                Presentation Mode
              </span>
            </div>

            <h2 class="text-2xl font-semibold leading-8">
              Small enough to explain live
            </h2>

            <ul class="mt-4 space-y-3 text-sm leading-7 text-slate-200">
              <li
                v-for="item in highlights"
                :key="item"
                class="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <div class="rounded-[20px] border border-slate-200 bg-white p-4">
            <p class="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Quick Start
            </p>
            <p class="mt-1 text-sm leading-6 text-slate-600">
              Open chat, send your first prompt, and show how the UI updates in real time.
            </p>
            <NuxtLink
              to="/chat"
              class="mt-3 inline-flex items-center rounded-lg border border-slate-200 bg-[#fbfbfa] px-3.5 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300"
            >
              Go to chat
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
