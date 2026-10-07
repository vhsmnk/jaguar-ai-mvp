function ChatHeader() {
  return (
    <header className="relative h-16 border-b border-white/5 bg-[#151515]/95 backdrop-blur-xl flex items-center justify-between px-6">

      {/* Pequeno detalhe decorativo */}
      <div className="pointer-events-none absolute right-24 top-1/2 -translate-y-1/2 h-20 w-20 rounded-full bg-yellow-400/[0.02] blur-2xl" />

      <div className="relative z-10 flex items-center gap-3">

        {/* Olho */}
        <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[#1c1c1c] border border-yellow-400/15">

          <div className="absolute h-4 w-6 rounded-[70%_15%_70%_15%] border border-yellow-400/30" />

          <div className="relative z-10 h-2.5 w-1 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(242,201,76,0.7)]" />

        </div>

        <div>

          <div className="flex items-center gap-2">

            <h2 className="text-sm font-semibold tracking-wide text-white">
              JAGUAR AI
            </h2>

            <span className="rounded-full border border-yellow-400/15 bg-yellow-400/[0.05] px-2 py-0.5 text-[10px] text-yellow-400">
              ONLINE
            </span>

          </div>

          <p className="text-xs text-zinc-600">
            Ready to assist
          </p>

        </div>

      </div>

      <button className="relative z-10 flex h-9 w-9 items-center justify-center rounded-lg border border-white/5 text-zinc-600 transition hover:border-yellow-400/20 hover:bg-yellow-400/[0.04] hover:text-yellow-400">
        ⋯
      </button>

    </header>
  )
}

export default ChatHeader