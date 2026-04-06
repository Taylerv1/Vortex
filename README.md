# Votrex

Votrex is a small educational demo built with Nuxt 3, Vue 3, and Tailwind CSS.


## Project Purpose

This project is intentionally small.
It is not a full ChatGPT clone and it does not include authentication, a database, real chat persistence, file uploads, or advanced settings.

The goal is to clearly demonstrate:

- reusable Vue components
- props and emits
- `ref` and `computed`
- `v-model`
- conditional rendering with `v-if` and `v-else`
- list rendering with `v-for`
- form submission and click events
- Nuxt pages routing
- `NuxtLink` navigation
- composables
- server API routes
- frontend-to-backend communication with `$fetch`
- environment variable usage with `OPENROUTER_API_KEY`

## Tech Stack

- Nuxt 3
- Vue 3 Composition API with `<script setup>`
- Tailwind CSS
- OpenAI JavaScript SDK
- OpenRouter API

## Install Dependencies

```bash
npm install
```

## Run the Project

```bash
npm run dev
```

Open the local Nuxt URL shown in the terminal.

## Environment Variables

1. Copy `.env.example` to `.env`
2. Add your OpenRouter key:

```env
OPENROUTER_API_KEY=your_key_here
```

The key is read only on the server inside `server/api/chat.post.ts`, so it is not exposed in the browser.
This demo sends requests through OpenRouter and uses the `openai/gpt-4o-mini` model.

## Project Structure

```text
pages/
  index.vue
  chat.vue

components/
  Sidebar.vue
  ChatHeader.vue
  MessageList.vue
  MessageItem.vue
  ChatInput.vue
  EmptyState.vue
  LoadingIndicator.vue
  ErrorMessage.vue

composables/
  useChat.ts

server/
  api/
    chat.post.ts

assets/
  css/
    main.css
```

## Vue Concepts Demonstrated

- Components: each part of the UI is separated into its own Vue component
- Props: `MessageList`, `MessageItem`, `ChatHeader`, `Sidebar`, and `ErrorMessage` receive data from parents
- Emits: `ChatInput`, `ChatHeader`, `Sidebar`, and `ErrorMessage` emit events upward
- `ref`: used for messages, loading state, error state, and the local chat input
- `computed`: used for button disabled states, message labels, and role-based styling
- `v-model`: used on the chat textarea
- `v-if / v-else`: used for error, loading, and empty state rendering
- `v-for`: used for messages, sidebar items, and example prompts
- Event handling: buttons use `@click`, and the form uses `@submit.prevent`
- `<script setup>`: used in every Vue file

## Nuxt Concepts Demonstrated

- Pages-based routing with `pages/index.vue` and `pages/chat.vue`
- Navigation with `NuxtLink`
- Reusable components inside `components/`
- A composable in `composables/useChat.ts`
- A server API route in `server/api/chat.post.ts`
- Frontend calls to `/api/chat` using `$fetch`
- Environment variable usage with `OPENROUTER_API_KEY`
- Separation between client UI and server logic

## Do We Need a Database?

No.

This demo does not need a database because:

- messages only live in the frontend state while the page is open
- there is no login system
- there is no saved chat history
- the goal is to demonstrate Vue and Nuxt basics, not persistence

## Presentation Talking Points

- The home page demonstrates Nuxt routing and navigation.
- The chat page demonstrates component composition and page structure.
- The input component demonstrates `v-model`, emits, and form events.
- The message list demonstrates `v-for`, props, and conditional rendering.
- The composable centralizes the chat state in one readable place.
- The server route explains why API keys stay on the server.
- The project stays intentionally small so each concept is easy to explain live.
