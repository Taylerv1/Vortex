/// <reference types="node" />

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css', '~/assets/css/chat-mobile.css'],
  runtimeConfig: {
    // We use an OpenRouter key because the demo now targets Claude through OpenRouter.
    openrouterApiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY,
  },
  app: {
    head: {
      title: 'Vortex',
      meta: [
        {
          name: 'description',
          content: 'Vortex is a minimal AI chat demo built with Nuxt 3, Vue 3, and Tailwind CSS.',
        },
      ],
    },
  },
})
