function Sidebar({ onNewConversation }) {
  return (
    <aside className="relative w-72 h-screen overflow-hidden bg-[#151515] border-r border-white/5 flex flex-col">

      {/* Textura sutil */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            radial-gradient(
              ellipse 18px 11px at 15% 22%,
              rgba(242, 201, 76, 0.12) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 7px 4px at 18% 24%,
              rgba(242, 201, 76, 0.08) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 20px 12px at 82% 72%,
              rgba(217, 164, 65, 0.09) 0%,
              transparent 70%
            ),
            radial-gradient(
              ellipse 7px 4px at 85% 74%,
              rgba(217, 164, 65, 0.06) 0%,
              transparent 70%
            )
          `,
        }}
      />

      <div className="relative z-10 flex h-full flex-col">

        {/* Logo */}
        <div className="px-5 py-6">

          <div className="flex items-center gap-3">

            {/* Símbolo */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-[#1c1c1c] border border-yellow-400/20 shadow-lg shadow-black/30">

              <div className="absolute h-5 w-7 rounded-[70%_15%_70%_15%] border border-yellow-400/40 rotate-0" />

              <div className="relative z-10 h-3 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(242,201,76,0.4)]" />

            </div>

            <div>

              <h1 className="text-white font-semibold tracking-[0.08em]">
                JAGUAR
              </h1>

              <p className="text-xs text-zinc-500">
                Intelligent workspace
              </p>

            </div>

          </div>

        </div>

        {/* Nova conversa */}
        <div className="px-4 mb-6">

          <button
        onClick={onNewConversation}
        className="group relative w-full overflow-hidden rounded-xl border border-yellow-400/20 bg-[#1a1a1a] px-4 py-3 transition duration-200 hover:border-yellow-400/40 hover:bg-[#202020]"
        >
        <div className="flex items-center justify-center gap-2 text-sm font-medium text-zinc-200">
            <span className="text-lg leading-none text-yellow-400 transition group-hover:scale-110">
            +
            </span>

            Nova conversa
        </div>
        </button>

        </div>

        {/* Navegação */}
        <div className="px-4">

          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
            Workspace
          </p>

          <div className="space-y-2">

            <button className="w-full flex items-center gap-3 rounded-xl border border-yellow-400/10 bg-yellow-400/[0.06] px-3 py-3 text-sm text-yellow-300">

              <span className="h-2 w-2 rounded-full bg-yellow-400 shadow-[0_0_10px_rgba(242,201,76,0.6)]" />

              Conversas

            </button>

            <button className="w-full flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-zinc-500 transition hover:bg-white/[0.03] hover:text-zinc-200">

              <span className="h-2 w-2 rounded-full bg-zinc-700" />

              Explorar

            </button>

          </div>

        </div>

        {/* Conversas recentes */}
        <div className="mt-7 px-4">

          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
            Recentes
          </p>

          <div className="space-y-1">

            <button className="w-full truncate rounded-lg px-3 py-2.5 text-left text-sm text-zinc-500 transition hover:bg-yellow-400/[0.04] hover:text-zinc-200">
              Como aprender React?
            </button>

            <button className="w-full truncate rounded-lg px-3 py-2.5 text-left text-sm text-zinc-500 transition hover:bg-yellow-400/[0.04] hover:text-zinc-200">
              Projeto de portfólio
            </button>

            <button className="w-full truncate rounded-lg px-3 py-2.5 text-left text-sm text-zinc-500 transition hover:bg-yellow-400/[0.04] hover:text-zinc-200">
              Dúvidas sobre JavaScript
            </button>

          </div>

        </div>

        {/* Usuário */}
        <div className="mt-auto border-t border-white/5 p-4">

          <div className="flex items-center gap-3">

            <div className="relative">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#202020] border border-white/5">

                <span className="text-sm font-semibold text-yellow-400">
                  V
                </span>

              </div>

              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#151515] bg-emerald-400" />

            </div>

            <div className="min-w-0 flex-1">

              <p className="text-sm font-medium text-zinc-200">
                Usuário
              </p>

              <p className="text-xs text-zinc-600">
                Personal workspace
              </p>

            </div>

            <button className="text-zinc-600 transition hover:text-yellow-400">
              ⋯
            </button>

          </div>

        </div>

      </div>

    </aside>
  )
}

export default Sidebar