# Votrex

Votrex is a modern AI chat web app built with Nuxt 3, Vue 3, and Tailwind CSS.

It includes:
- a landing page
- a chat workspace UI
- a server API endpoint that forwards prompts to OpenRouter

## Quick Run Guide

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file (or copy from `.env.example`) and add your key:

```env
OPENROUTER_API_KEY=your_key_here
```

3. Start the project:

```bash
npm run dev
```

4. Open the local URL shown in the terminal (usually `http://localhost:3000`).

## Main Scripts

- `npm run dev`: start local development server
- `npm run build`: production build
- `npm run preview`: preview production build

## Stack

- Nuxt 3
- Vue 3 (`<script setup>`)
- Tailwind CSS
- OpenAI SDK (with OpenRouter-compatible endpoint)

## Note

`OPENROUTER_API_KEY` is used only on the server in `server/api/chat.post.ts`.
