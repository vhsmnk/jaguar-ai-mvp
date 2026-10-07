import { useState } from 'react'

import Sidebar from './components/Sidebar'
import ChatHeader from './components/ChatHeader'
import Message from './components/Message'
import MessageInput from './components/MessageInput'

function App() {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function handleSendMessage(content) {
    const userMessage = {
      id: Date.now(),
      role: 'user',
      content,
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
    ])

    setIsLoading(true)

    try {
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: content,
        }),
      })

      if (!response.ok) {
        throw new Error('Erro na resposta do servidor')
      }

      const data = await response.json()

      const aiMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: data.reply,
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        aiMessage,
      ])
    } catch (error) {
      console.error('Erro ao conversar com a API:', error)

      const errorMessage = {
        id: Date.now() + 1,
        role: 'assistant',
        content: 'Não foi possível conectar ao servidor.',
      }

      setMessages((currentMessages) => [
        ...currentMessages,
        errorMessage,
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#111111] text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse 20px 12px at 10% 18%,
              rgba(242, 201, 76, 0.11) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 7px 5px at 13% 20%,
              rgba(242, 201, 76, 0.08) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 23px 13px at 78% 13%,
              rgba(217, 164, 65, 0.10) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 8px 5px at 81% 15%,
              rgba(217, 164, 65, 0.07) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 18px 11px at 91% 48%,
              rgba(242, 201, 76, 0.08) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 7px 5px at 94% 50%,
              rgba(242, 201, 76, 0.06) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 21px 12px at 17% 78%,
              rgba(217, 164, 65, 0.08) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 8px 5px at 20% 80%,
              rgba(217, 164, 65, 0.06) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 19px 11px at 70% 89%,
              rgba(242, 201, 76, 0.08) 0%,
              transparent 70%
            )
          `,
        }}
      />

      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-yellow-400/[0.025] blur-3xl" />

      <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-yellow-500/[0.02] blur-3xl" />

      <div className="relative z-10 flex min-h-screen w-full">
        <Sidebar
          onNewConversation={() => setMessages([])}
        />

        <main className="flex-1 flex flex-col min-w-0">
          <ChatHeader />

          <div className="flex-1 overflow-y-auto">
            <div className="max-w-4xl mx-auto px-6 py-10">
              {messages.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-[-25px] rounded-full bg-yellow-400/[0.06] blur-2xl" />

                    <div className="relative flex h-28 w-40 items-center justify-center">
                      <div className="absolute top-1/2 left-1/2 h-20 w-36 -translate-x-1/2 -translate-y-1/2 rounded-[70%_10%_70%_10%] border border-yellow-400/30 bg-[#181818] shadow-[0_0_35px_rgba(242,201,76,0.08)]" />

                      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-yellow-400/50 bg-[#d9a441] shadow-[0_0_25px_rgba(242,201,76,0.25)]">
                        <div className="h-9 w-3 rounded-full bg-[#111111]" />

                        <div className="absolute left-4 top-3 h-2 w-2 rounded-full bg-white/70" />
                      </div>
                    </div>

                    <div className="absolute -left-8 top-2 h-3 w-5 rounded-full border border-yellow-400/20" />
                    <div className="absolute -right-7 bottom-3 h-3 w-5 rounded-full border border-yellow-400/20" />
                    <div className="absolute -right-10 top-8 h-2 w-3 rounded-full bg-yellow-400/10" />
                  </div>

                  <h1 className="text-3xl font-semibold tracking-tight text-white">
                    O que vamos criar?
                  </h1>

                  <p className="mt-3 max-w-md text-sm leading-6 text-zinc-500">
                    Converse com sua IA, explore ideias, escreva código
                    e transforme perguntas em soluções.
                  </p>

                  <div className="mt-8 flex items-center gap-3">
                    <span className="h-px w-10 bg-gradient-to-r from-transparent to-yellow-400/30" />
                    <span className="h-1.5 w-1.5 rounded-full bg-yellow-400/50 shadow-[0_0_10px_rgba(242,201,76,0.4)]" />
                    <span className="h-px w-10 bg-gradient-to-l from-transparent to-yellow-400/30" />
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  {messages.map((message) => (
                    <Message
                      key={message.id}
                      role={message.role}
                      content={message.content}
                    />
                  ))}

                  {isLoading && (
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-yellow-400/20 bg-[#1c1c1c]">
                        <div className="absolute h-4 w-6 rounded-[70%_15%_70%_15%] border border-yellow-400/40" />

                        <div className="relative z-10 h-3.5 w-3.5 rounded-full bg-[#d9a441]">
                          <div className="absolute left-1/2 top-1/2 h-2.5 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#111111]" />
                        </div>
                      </div>

                      <div className="rounded-2xl rounded-bl-md border border-white/5 bg-[#181818] px-4 py-3">
                        <div className="flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-yellow-400 [animation-delay:-0.3s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-yellow-400 [animation-delay:-0.15s]" />
                          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-yellow-400" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <MessageInput onSend={handleSendMessage} />
        </main>
      </div>
    </div>
  )
}

export default App