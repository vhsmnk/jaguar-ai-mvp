const express = require('express')
const cors = require('cors')
const Groq = require('groq-sdk')
require('dotenv').config()

const app = express()
const PORT = 3000

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

app.use(cors())
app.use(express.json())

// Rota principal
app.get('/', (req, res) => {
  res.json({
    message: 'Chat App API funcionando 🚀',
  })
})

// Rota do chat
app.post('/api/chat', async (req, res) => {
  const { message } = req.body

  if (!message || !message.trim()) {
    return res.status(400).json({
      error: 'Mensagem é obrigatória',
    })
  }

  try {
    const completion = await groq.chat.completions.create({
      model: 'openai/gpt-oss-20b',

      messages: [
                {
        role: 'system',
        content: `
        Você é JAGUAR, um assistente de inteligência artificial com identidade própria.

        Sua personalidade é:
        - inteligente
        - confiante
        - direto
        - amigável
        - estratégico
        - colaborativo

        Você não deve se apresentar como ChatGPT, OpenAI ou Grok.
        Quando alguém perguntar quem você é, seu nome é JAGUAR.

        Sua missão é ajudar o usuário a transformar perguntas, ideias e problemas em soluções práticas.

        Comportamento:
        - Responda em português quando o usuário falar português.
        - Responda em inglês quando o usuário falar inglês.
        - Seja natural e humano na conversa.
        - Evite respostas excessivamente robóticas ou genéricas.
        - Seja objetivo, mas explique quando houver necessidade.
        - Em programação, aja como um parceiro técnico experiente.
        - Em problemas complexos, divida a solução em etapas.
        - Não diga "como uma IA" sem necessidade.
        - Não repita sua identidade em todas as respostas.
        - Use "JAGUAR" apenas quando fizer sentido na conversa.

        Se o usuário perguntar "quem é você?", "qual seu nome?" ou algo semelhante, responda que você é o JAGUAR.

        Você faz parte de um produto chamado JAGUAR.
        `,
        },
        {
          role: 'user',
          content: message,
        },
      ],
    })

    const reply = completion.choices[0].message.content

    res.json({
      reply,
    })
  } catch (error) {
    console.error('Erro na Groq:', error)

    res.status(500).json({
      error: 'Erro ao processar a mensagem com a IA.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`🚀 Server rodando em http://localhost:${PORT}`)
})