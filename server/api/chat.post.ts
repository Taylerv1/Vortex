import OpenAI from 'openai'

type ChatBody = {
  prompt?: string
}

const MODEL_ID = 'openai/gpt-4o-mini'

export default defineEventHandler(async (event) => {
  const body = await readBody<ChatBody>(event)
  const prompt = body.prompt?.trim()

  if (!prompt) {
    throw createError({
      statusCode: 400,
      statusMessage: 'A prompt is required.',
    })
  }

  const config = useRuntimeConfig(event)

  if (!config.openrouterApiKey) {
    throw createError({
      statusCode: 500,
      statusMessage: 'OPENROUTER_API_KEY is missing on the server.',
    })
  }

  // OpenRouter is OpenAI-compatible, so we can reuse the official SDK.
  const client = new OpenAI({
    apiKey: config.openrouterApiKey,
    baseURL: 'https://openrouter.ai/api/v1',
    defaultHeaders: {
      'HTTP-Referer': 'http://localhost:3000',
      'X-Title': 'Votrex',
    },
  })

  try {
    const response = await client.chat.completions.create({
      model: MODEL_ID,
      max_tokens: 300,
      messages: [
        {
          role: 'system',
          content:
            'You are Votrex, a helpful assistant inside a simple university demo. Keep answers short, clear, and easy to understand.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    })

    const reply = response.choices[0]?.message?.content?.trim()

    return {
      reply: reply || 'I could not generate a reply this time.',
    }
  } catch (error) {
    console.error('OpenRouter request failed:', error)

    if (error instanceof OpenAI.APIError && error.status === 402) {
      throw createError({
        statusCode: 402,
        statusMessage: 'OpenRouter credits are too low for this request. Add credits or use a cheaper model.',
      })
    }

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to generate a reply.',
    })
  }
})
