function Sidebar({
  onNewConversation,
  activeSection,
  onSectionChange,
}) {
  const recentConversations = [
    {
      title: "Como aprender React?",
      active: true,
    },
    {
      title: "Projeto de portfólio",
      active: false,
    },
    {
      title: "Dúvidas sobre JavaScript",
      active: false,
    },
    {
      title: "Estrutura do projeto Jaguar",
      active: false,
    },
  ]

  return (
    <aside className="relative flex h-screen w-72 flex-col overflow-hidden border-r border-white/5 bg-[#151515]">

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

      <div className="relative z-10 flex h-full min-h-0 flex-col">

        {/* Logo */}
        <div className="px-5 py-6">

          <div className="flex items-center gap-3">

            {/* Símbolo */}
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-yellow-400/20 bg-[#1c1c1c] shadow-lg shadow-black/30">

              <div className="absolute h-5 w-7 rounded-[70%_15%_70%_15%] border border-yellow-400/40" />

              <div className="relative z-10 h-3 w-1.5 rounded-full bg-yellow-400 shadow-[0_0_12px_rgba(242,201,76,0.4)]" />

            </div>

            <div>
              <h1 className="font-semibold tracking-[0.08em] text-white">
                JAGUAR
              </h1>

              <p className="text-xs text-zinc-500">
                Intelligent workspace
              </p>
            </div>

          </div>

        </div>

        {/* Nova conversa */}
        <div className="mb-6 px-4">

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

        {/* Navegação principal */}
        <div className="px-4">

          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
            Workspace
          </p>

          <div className="space-y-1">

            {/* Conversas */}
            <button
              onClick={() => onSectionChange('conversations')}
              className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-sm transition ${
                activeSection === 'conversations'
                  ? 'border-yellow-400/10 bg-yellow-400/[0.06] text-yellow-300'
                  : 'border-transparent text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-200'
              }`}
            >

              <span className="text-base">
                💬
              </span>

              <span>
                Conversas
              </span>

            </button>

            {/* Base de conhecimento */}
            <button
              onClick={() => onSectionChange('knowledge')}
              className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-sm transition ${
                activeSection === 'knowledge'
                  ? 'border-yellow-400/10 bg-yellow-400/[0.06] text-yellow-300'
                  : 'border-transparent text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-200'
              }`}
            >

              <span className="text-base">
                🗂
              </span>

              <span>
                Base de conhecimento
              </span>

            </button>

            {/* Usuários */}
            <button
              onClick={() => onSectionChange('users')}
              className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-sm transition ${
                activeSection === 'users'
                  ? 'border-yellow-400/10 bg-yellow-400/[0.06] text-yellow-300'
                  : 'border-transparent text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-200'
              }`}
            >

              <span className="text-base">
                👥
              </span>

              <span>
                Usuários
              </span>

            </button>

            {/* Configurações */}
            <button
              onClick={() => onSectionChange('settings')}
              className={`flex w-full items-center gap-3 rounded-xl border px-3 py-3 text-sm transition ${
                activeSection === 'settings'
                  ? 'border-yellow-400/10 bg-yellow-400/[0.06] text-yellow-300'
                  : 'border-transparent text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-200'
              }`}
            >

              <span className="text-base">
                ⚙
              </span>

              <span>
                Configurações
              </span>

            </button>

          </div>

        </div>

        {/* Conversas recentes */}
        <div className="mt-7 flex min-h-0 flex-1 flex-col px-4">

          <div className="mb-3 flex items-center justify-between">

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Recentes
            </p>

            <span className="text-[10px] text-zinc-700">
              {recentConversations.length}
            </span>

          </div>

          {/* Lista com scroll próprio */}
          <div className="min-h-0 flex-1 space-y-1 overflow-y-auto pr-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">

            {recentConversations.map((conversation) => (
              <button
                key={conversation.title}
                className={`group flex w-full items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm transition ${
                  conversation.active
                    ? "border-yellow-400/10 bg-yellow-400/[0.05] text-zinc-200"
                    : "border-transparent text-zinc-500 hover:bg-white/[0.03] hover:text-zinc-200"
                }`}
              >

                {/* Indicador */}
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition ${
                    conversation.active
                      ? "bg-yellow-400 shadow-[0_0_8px_rgba(242,201,76,0.45)]"
                      : "bg-zinc-700 group-hover:bg-zinc-500"
                  }`}
                />

                <span className="min-w-0 flex-1 truncate">
                  {conversation.title}
                </span>

              </button>
            ))}

          </div>

        </div>

        {/* Usuário */}
        <div className="mt-4 border-t border-white/5 p-4">

          <div className="flex items-center gap-3">

            <div className="relative">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/5 bg-[#202020]">

                <span className="text-sm font-semibold text-yellow-400">
                  V
                </span>

              </div>

              <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#151515] bg-emerald-400" />

            </div>

            <div className="min-w-0 flex-1">

              <p className="truncate text-sm font-medium text-zinc-200">
                Usuário
              </p>

              <p className="truncate text-xs text-zinc-600">
                Personal workspace
              </p>

            </div>

            <button className="text-lg leading-none text-zinc-600 transition hover:text-yellow-400">
              ⋯
            </button>

          </div>

        </div>

      </div>

    </aside>
  )
}

export default Sidebar