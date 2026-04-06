export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    // We use an OpenRouter key because the demo now targets Claude through OpenRouter.
    openrouterApiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY,
  },
  app: {
    head: {
      title: 'Votrex',
      meta: [
        {
          name: 'description',
          content: 'Votrex is a minimal AI chat demo built with Nuxt 3, Vue 3, and Tailwind CSS.',
        },
      ],
    },
  },
})
