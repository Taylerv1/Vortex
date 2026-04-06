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
const SYSTEM_PROMPT =
  'You are Votrex, a helpful assistant inside a simple university demo. Keep answers short, clear, and easy to understand.'

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
