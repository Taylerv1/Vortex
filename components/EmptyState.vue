<script setup lang="ts">
const examplePrompts = [
  'Give me Vue setup in plain words. No lecture.',
  'Explain Nuxt routing like I am in a rush.',
  'Fix my component structure and roast it gently.',
]
</script>

<template>
  <div class="empty-state-wrap w-full space-y-2 px-4 py-0 sm:px-8 md:px-40">
    <div class="text-center">
      <div class="mx-auto flex items-center justify-center">
        <img
          src="/VortexLogo.png"
          alt="Vortex logo"
          class="h-12 w-12 object-contain"
        >
      </div>
      <h3 class="mt-1.5 text-lg font-semibold tracking-tight text-slate-900 md:text-[1.25rem]">
        Start a conversation with Votrex
      </h3>
      <p class="mt-0.5 text-[12px] leading-4 text-slate-500 md:text-[12px]">
        Talk like a human. Get fast answers with zero drama.
      </p>
    </div>

    <div class="empty-state-grid space-y-2.5">
      <div class="flex flex-col-reverse items-end gap-2.5 sm:flex-row sm:justify-end sm:gap-3">
        <div class="w-full max-w-[430px]">
          <div class="rounded-[18px] border border-slate-200 bg-white px-3 py-2 shadow-sm">
            <p class="whitespace-pre-wrap text-[12px] leading-5 text-slate-700 md:text-[12px]">
              Yo, build me a tiny Nuxt page with one reusable component. Keep it short, I got no time.
            </p>
          </div>
          <div class="mt-0.5 flex items-center justify-end pr-1 text-[10px] text-slate-400">
            <span>Just now</span>
          </div>
        </div>

        <div class="flex h-10 w-10 items-center justify-center rounded-full border border-[#caa93f]/45 bg-[#caa93f]/35 text-sm font-semibold text-[#171919]">
          M
        </div>
      </div>

      <div class="flex items-start gap-2.5 sm:items-end sm:gap-3">
        <div class="flex h-11 w-11 shrink-0 items-center justify-center">
          <img
            src="/VortexLogo.png"
            alt="Vortex logo"
            class="h-9 w-9 object-contain"
          >
        </div>

        <div class="w-full rounded-[22px] bg-[#f3f4f6] p-2 shadow-sm">
          <div class="rounded-[16px] border border-slate-200 bg-white px-3 py-2">
            <p class="text-[12px] leading-5 text-slate-700 md:text-[12px]">
              Bet. Here is a starter block you can paste right now and keep moving.
            </p>
          </div>

          <div class="mt-1.5 overflow-hidden rounded-[16px] border border-slate-900/90 bg-[#1d1f22] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
            <div class="flex items-center justify-between border-b border-white/5 bg-[#2b2d31] px-2.5 py-1.5 text-[10px] font-medium text-slate-300">
              <div class="flex items-center gap-2">
                <span class="rounded-md bg-white/5 px-3 py-1">HTML</span>
                <span class="rounded-md px-2 py-1 text-slate-500">CSS</span>
                <span class="rounded-md px-2 py-1 text-slate-500">JS</span>
              </div>
              <span>Copy code</span>
            </div>

            <pre class="overflow-x-auto max-h-[120px] px-2.5 py-1.5 text-[10px] leading-4 text-slate-200 md:text-[10px] md:leading-4"><code>&lt;template&gt;
  &lt;ChatInput @submit="sendMessage" /&gt;
&lt;/template&gt;

&lt;script setup lang="ts"&gt;
const message = ref('')
&lt;/script&gt;</code></pre>
          </div>

          <p class="mt-1 text-[12px] leading-5 text-slate-600 md:text-[12px] md:leading-5">
            Quick path: present reusable components, ref, and emits without over-talking.
          </p>

          <div class="mt-1 flex flex-wrap items-center text-[9px] text-slate-400">
            <span>Just now</span>
          </div>
        </div>
      </div>
    </div>

    <ul class="empty-state-quick grid gap-1.5 md:grid-cols-3">
      <li
        v-for="prompt in examplePrompts"
        :key="prompt"
        class="rounded-2xl border border-slate-200 bg-white px-3.5 py-2 text-[12px] text-slate-600 shadow-sm"
      >
        {{ prompt }}
      </li>
    </ul>
  </div>
</template>
