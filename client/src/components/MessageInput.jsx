import { useState } from 'react'

function MessageInput({ onSend }) {
  const [message, setMessage] = useState('')

  function handleSubmit() {
    const trimmedMessage = message.trim()

    if (!trimmedMessage) return

    onSend(trimmedMessage)
    setMessage('')
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSubmit()
    }
  }

  return (
    <div className="px-6 pb-6 pt-3">
      <div className="mx-auto max-w-4xl">

        <div className="group relative flex items-end gap-3 rounded-2xl border border-white/10 bg-[#181818] p-3 shadow-2xl shadow-black/30 transition focus-within:border-yellow-400/30 focus-within:shadow-[0_0_30px_rgba(242,201,76,0.04)]">

          {/* Pequeno detalhe dourado */}
          <div className="pointer-events-none absolute left-4 top-0 h-px w-16 bg-gradient-to-r from-yellow-400/40 to-transparent opacity-0 transition group-focus-within:opacity-100" />

          <textarea
            rows="1"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Pergunte alguma coisa..."
            className="flex-1 resize-none bg-transparent px-2 py-2 text-sm text-white placeholder:text-zinc-600 outline-none"
          />

          <button
            onClick={handleSubmit}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#d9a441] text-[#111111] shadow-lg shadow-yellow-500/10 transition hover:scale-105 hover:bg-[#f2c94c] active:scale-95"
          >
            <span className="text-lg font-semibold">
              ↑
            </span>
          </button>

        </div>

        <p className="mt-3 text-center text-[10px] text-zinc-700">
          Enter para enviar • Shift + Enter para nova linha
        </p>

      </div>
    </div>
  )
}

export default MessageInput