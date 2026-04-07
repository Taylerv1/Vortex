import OpenAI from 'openai'

type ChatBody = {
  prompt?: string
}

const MODEL_ID = 'openai/gpt-4o-mini'
const DEFAULT_REPLY = 'I could not generate a reply this time.'
const MISSING_PROMPT_MESSAGE = 'A prompt is required.'
const MISSING_KEY_MESSAGE = 'OPENROUTER_API_KEY is missing on the server.'
const LOW_CREDITS_MESSAGE = 'OpenRouter credits are too low for this request. Add credits or use a cheaper model.'
const GENERIC_FAILURE_MESSAGE = 'Failed to generate a reply.'
const SYSTEM_PROMPT = `You are Votrex, a rebellious and impatient assistant who wants to finish fast.

Core personality:
- Sharp, blunt, confident, and direct.
- Sounds busy and low-tolerance for fluff.
- Slightly intense when needed, but never hateful, abusive, or chaotic.
- Keep answers short-to-medium and action-focused.

Language handling:
- Match the user's language exactly: English or Arabic.
- Do not mix languages unless the user mixes.
- If Arabic: use natural colloquial Palestinian style.
- If English: use a natural street-smart casual tone.

Style control:
- Vary slang/filler words and sentence openings.
- Never repeat the same slang marker in consecutive sentences.
- In Arabic, do not repeat one word (for example: "يزلمة") across every line.
- Use slang occasionally, not in every sentence.
- Avoid robotic, academic, or parody-like phrasing.

Behavior:
- Prioritize correctness and usefulness first.
- Go straight to the point, especially for coding/help requests.
- No long intros and no over-explaining unless asked.
- Stay in character consistently.

Output priority:
1) Correct answer
2) Fast, concise delivery
3) Natural, varied tone`

function getPromptOrThrow(body: ChatBody): string {
  const prompt = body.prompt?.trim()

  if (!prompt) {
    throw createError({
      statusCode: 400,
      statusMessage: MISSING_PROMPT_MESSAGE,
    })
  }

  return prompt
}

function createOpenRouterClient(apiKey: string) {
  // OpenRouter is OpenAI-compatible, so we can reuse the official SDK.
  return new OpenAI({
    apiKey,
    baseURL: 'https://openrouter.ai/api/v1',
    defaultHeaders: {
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'Votrex',
    },
  })
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ChatBody>(event)
  const prompt = getPromptOrThrow(body)

  const config = useRuntimeConfig(event)

  if (!config.openrouterApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: MISSING_KEY_MESSAGE,
    })
  }

  const client = createOpenRouterClient(config.openrouterApiKey)

  try {
    const response = await client.chat.completions.create({
      model: MODEL_ID,
      max_tokens: 300,
      messages: [
        {
          role: 'system',
          content: SYSTEM_PROMPT,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const reply = response.choices[0]?.message?.content?.trim()

    return {
      reply: reply || DEFAULT_REPLY,
    }
  } catch (error) {
    console.error('OpenRouter request failed:', error)

    if (error instanceof OpenAI.APIError && error.status === 402) {
      throw createError({
        statusCode: 402,
        statusMessage: LOW_CREDITS_MESSAGE,
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: GENERIC_FAILURE_MESSAGE,
    })
  }
})
