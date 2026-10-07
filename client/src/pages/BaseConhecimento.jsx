import { useState } from 'react'

function BaseConhecimento() {
  // Categorias iniciais do workspace.
  // Futuramente isso virá do banco de dados.
  const [categories, setCategories] = useState([
    {
      id: 1,
      icon: '🏛️',
      name: 'Institucional',
      documents: [
        'Missão, visão e valores',
        'Estrutura organizacional',
        'Diretrizes',
        'Regulamentos',
        'Normas internas',
      ],
    },
    {
      id: 2,
      icon: '📋',
      name: 'Projetos e Processos',
      documents: [
        'Projetos',
        'Planos de ação',
        'Processos internos',
        'Procedimentos',
        'Relatórios',
      ],
    },
    {
      id: 3,
      icon: '📚',
      name: 'Políticas e Normas',
      documents: [
        'Política de segurança',
        'Política de privacidade',
        'Código de conduta',
        'Políticas internas',
        'Regulamentos',
      ],
    },
    {
      id: 4,
      icon: '📊',
      name: 'Dados e Pesquisas',
      documents: [
        'Pesquisas',
        'Indicadores',
        'Estatísticas',
        'Estudos',
        'Diagnósticos',
      ],
    },
    {
      id: 5,
      icon: '💰',
      name: 'Financeiro',
      documents: [
        'Orçamentos',
        'Relatórios financeiros',
        'Contratos',
        'Notas fiscais',
        'Prestação de contas',
      ],
    },
    {
      id: 6,
      icon: '👥',
      name: 'Pessoas e Organização',
      documents: [
        'Equipes',
        'Cargos',
        'Responsabilidades',
        'Treinamentos',
        'Documentos de RH',
      ],
    },
    {
      id: 7,
      icon: '⚖️',
      name: 'Jurídico',
      documents: [
        'Processos',
        'Pareceres jurídicos',
        'Contratos',
        'Legislação',
        'Jurisprudência',
      ],
    },
    {
      id: 8,
      icon: '📢',
      name: 'Comunicação',
      documents: [
        'Comunicados',
        'Notas oficiais',
        'Releases',
        'Discursos',
        'Materiais de comunicação',
      ],
    },
    {
      id: 9,
      icon: '📰',
      name: 'Histórico e Memória',
      documents: [
        'História da organização',
        'Linha do tempo',
        'Eventos',
        'Conquistas',
        'Documentos históricos',
      ],
    },
  ])

  // Guarda qual categoria está sendo editada.
  const [editingCategoryId, setEditingCategoryId] = useState(null)

  // Guarda temporariamente o novo nome da categoria.
  const [editingCategoryName, setEditingCategoryName] = useState('')

  // Controla o campo de criação de nova categoria.
  const [isAddingCategory, setIsAddingCategory] = useState(false)

  const [newCategoryName, setNewCategoryName] = useState('')

  // Documentos que simulam o que futuramente virá do banco.
  const recentDocuments = [
    {
      name: 'Manual da organização',
      type: 'Institucional',
      format: 'PDF',
      size: '2.4 MB',
      status: 'Processado',
    },
    {
      name: 'Plano estratégico 2026',
      type: 'Projetos e Processos',
      format: 'PDF',
      size: '4.8 MB',
      status: 'Processado',
    },
    {
      name: 'Dados internos',
      type: 'Dados e Pesquisas',
      format: 'XLSX',
      size: '840 KB',
      status: 'Processando',
    },
  ]

  // Conexões ainda são apenas visuais/mock.
  const connections = [
    {
      name: 'MySQL',
      description: 'Banco principal do Jaguar',
      status: 'Conectado',
      connected: true,
    },
    {
      name: 'PostgreSQL',
      description: 'Banco de dados externo',
      status: 'Configurar',
      connected: false,
    },
    {
      name: 'Google Cloud Storage',
      description: 'Armazenamento de arquivos',
      status: 'Configurar',
      connected: false,
    },
  ]

  // Começa a edição de uma categoria.
  function startEditingCategory(category) {
    setEditingCategoryId(category.id)
    setEditingCategoryName(category.name)
  }

  // Salva o novo nome da categoria.
  function saveCategoryName(categoryId) {
    const trimmedName = editingCategoryName.trim()

    if (!trimmedName) return

    setCategories((currentCategories) =>
      currentCategories.map((category) =>
        category.id === categoryId
          ? {
              ...category,
              name: trimmedName,
            }
          : category
      )
    )

    setEditingCategoryId(null)
    setEditingCategoryName('')
  }

  // Permite salvar usando Enter.
  function handleCategoryKeyDown(event, categoryId) {
    if (event.key === 'Enter') {
      event.preventDefault()
      saveCategoryName(categoryId)
    }

    if (event.key === 'Escape') {
      setEditingCategoryId(null)
      setEditingCategoryName('')
    }
  }

  // Cria uma nova categoria.
  function addCategory() {
    const trimmedName = newCategoryName.trim()

    if (!trimmedName) return

    setCategories((currentCategories) => [
      ...currentCategories,
      {
        id: Date.now(),
        icon: '📁',
        name: trimmedName,
        documents: [],
      },
    ])

    setNewCategoryName('')
    setIsAddingCategory(false)
  }

  return (
    <div className="flex-1 overflow-y-auto">
      <div className="mx-auto max-w-[1600px] px-6 py-8">

        {/* Cabeçalho */}
        <div className="mb-8">

          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400/70">
            Workspace
          </p>

          <div className="mt-2 flex items-end justify-between gap-6">

            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-white">
                Base de conhecimento
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                Gerencie documentos, informações e fontes que poderão
                fornecer contexto para as respostas do Jaguar.
              </p>
            </div>

            <div className="hidden rounded-xl border border-white/5 bg-[#181818] px-4 py-3 lg:block">

              <p className="text-[10px] uppercase tracking-[0.15em] text-zinc-600">
                Conhecimento
              </p>

              <p className="mt-1 text-lg font-semibold text-zinc-200">
                0
                <span className="ml-1 text-xs font-normal text-zinc-600">
                  documentos
                </span>
              </p>

            </div>

          </div>

        </div>

        {/* Grid principal */}
        <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(280px,1fr)_minmax(420px,1.5fr)_minmax(280px,0.9fr)]">

          {/* ========================================================= */}
          {/* COLUNA 1 — GESTÃO DE ARQUIVOS */}
          {/* ========================================================= */}

          <section className="min-w-0 rounded-2xl border border-white/5 bg-[#181818]">

            <div className="border-b border-white/5 p-5">

              <div className="flex items-center justify-between gap-3">

                <div>
                  <h2 className="text-sm font-semibold text-zinc-200">
                    Gestão de arquivos
                  </h2>

                  <p className="mt-1 text-xs text-zinc-600">
                    Organize o conhecimento do workspace.
                  </p>
                </div>

                <span className="rounded-lg border border-yellow-400/10 bg-yellow-400/[0.05] px-2.5 py-1 text-[10px] text-yellow-400">
                  0 arquivos
                </span>

              </div>

              {/* Busca */}
              <div className="mt-5">

                <div className="flex items-center gap-2 rounded-xl border border-white/5 bg-[#111111] px-3">

                  <span className="text-sm text-zinc-600">
                    ⌕
                  </span>

                  <input
                    type="text"
                    placeholder="Pesquisar por nome, tipo, conteúdo..."
                    className="min-w-0 flex-1 bg-transparent py-3 text-xs text-zinc-200 outline-none placeholder:text-zinc-700"
                  />

                </div>

              </div>

              {/* Filtros */}
              <div className="mt-3 flex gap-2">

                <button className="flex-1 rounded-lg border border-white/5 bg-[#111111] px-3 py-2 text-left text-[11px] text-zinc-500 transition hover:border-yellow-400/20 hover:text-zinc-300">
                  Tipo

                  <span className="float-right text-zinc-700">
                    ▾
                  </span>
                </button>

                <button className="flex-1 rounded-lg border border-white/5 bg-[#111111] px-3 py-2 text-left text-[11px] text-zinc-500 transition hover:border-yellow-400/20 hover:text-zinc-300">
                  Ordenar

                  <span className="float-right text-zinc-700">
                    ▾
                  </span>
                </button>

              </div>

            </div>

            {/* Categorias */}
            <div className="p-3">

              <div className="mb-3 flex items-center justify-between px-2">

                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-700">
                  Categorias
                </p>

                <button
                  onClick={() => setIsAddingCategory(true)}
                  className="text-[10px] text-zinc-600 transition hover:text-yellow-400"
                >
                  + Nova categoria
                </button>

              </div>

              {/* Campo para nova categoria */}
              {isAddingCategory && (
                <div className="mb-3 rounded-xl border border-yellow-400/10 bg-[#111111] p-3">

                  <input
                    autoFocus
                    value={newCategoryName}
                    onChange={(event) =>
                      setNewCategoryName(event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (event.key === 'Enter') {
                        addCategory()
                      }

                      if (event.key === 'Escape') {
                        setIsAddingCategory(false)
                        setNewCategoryName('')
                      }
                    }}
                    placeholder="Nome da categoria..."
                    className="w-full rounded-lg border border-white/5 bg-[#181818] px-3 py-2 text-xs text-zinc-200 outline-none placeholder:text-zinc-700 focus:border-yellow-400/30"
                  />

                  <div className="mt-2 flex justify-end gap-2">

                    <button
                      onClick={() => {
                        setIsAddingCategory(false)
                        setNewCategoryName('')
                      }}
                      className="rounded-lg px-2.5 py-1.5 text-[10px] text-zinc-600 transition hover:text-zinc-300"
                    >
                      Cancelar
                    </button>

                    <button
                      onClick={addCategory}
                      className="rounded-lg bg-[#d9a441] px-2.5 py-1.5 text-[10px] font-medium text-[#111111] transition hover:bg-[#f2c94c]"
                    >
                      Criar
                    </button>

                  </div>

                </div>
              )}

              <div className="space-y-1">

                {categories.map((category) => (
                  <details
                    key={category.id}
                    className="group rounded-xl"
                  >

                    <summary className="flex cursor-pointer list-none items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-500 transition hover:bg-white/[0.03] hover:text-zinc-200">

                      <span className="text-sm">
                        {category.icon}
                      </span>

                      {/* Nome normal ou campo de edição */}
                      {editingCategoryId === category.id ? (
                        <input
                          autoFocus
                          value={editingCategoryName}
                          onChange={(event) =>
                            setEditingCategoryName(event.target.value)
                          }
                          onKeyDown={(event) =>
                            handleCategoryKeyDown(event, category.id)
                          }
                          onClick={(event) => event.stopPropagation()}
                          className="min-w-0 flex-1 rounded-md border border-yellow-400/20 bg-[#111111] px-2 py-1 text-xs text-zinc-200 outline-none"
                        />
                      ) : (
                        <span className="min-w-0 flex-1 truncate">
                          {category.name}
                        </span>
                      )}

                      {/* Editar */}
                      {editingCategoryId === category.id ? (
                        <button
                          onClick={(event) => {
                            event.preventDefault()
                            event.stopPropagation()
                            saveCategoryName(category.id)
                          }}
                          className="shrink-0 text-[10px] text-yellow-400 transition hover:text-yellow-300"
                        >
                          Salvar
                        </button>
                      ) : (
                        <button
                          onClick={(event) => {
                            event.preventDefault()
                            event.stopPropagation()
                            startEditingCategory(category)
                          }}
                          className="shrink-0 text-[10px] text-zinc-700 opacity-0 transition hover:text-yellow-400 group-hover:opacity-100"
                        >
                          Editar
                        </button>
                      )}

                      <span className="text-[10px] text-zinc-700 transition group-open:rotate-180">
                        ▾
                      </span>

                    </summary>

                    <div className="ml-6 border-l border-white/5 pl-3">

                      {category.documents.length > 0 ? (
                        category.documents.map((document) => (
                          <button
                            key={document}
                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs text-zinc-600 transition hover:bg-white/[0.03] hover:text-yellow-400"
                          >
                            <span className="text-[10px] text-zinc-700">
                              •
                            </span>

                            <span className="truncate">
                              {document}
                            </span>
                          </button>
                        ))
                      ) : (
                        <p className="px-3 py-2 text-[10px] text-zinc-700">
                          Nenhum documento nesta categoria.
                        </p>
                      )}

                    </div>

                  </details>
                ))}

              </div>

            </div>

          </section>

          {/* ========================================================= */}
          {/* COLUNA 2 — ADICIONAR FONTE */}
          {/* ========================================================= */}

          <section className="min-w-0 rounded-2xl border border-white/5 bg-[#181818]">

            <div className="border-b border-white/5 p-5">

              <h2 className="text-sm font-semibold text-zinc-200">
                Adicionar fonte manual
              </h2>

              <p className="mt-1 text-xs text-zinc-600">
                Adicione uma nova fonte de conhecimento ao Jaguar.
              </p>

            </div>

            <div className="p-5">

              {/* Drag and drop */}
              <div className="group flex min-h-[250px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-yellow-400/15 bg-[#111111] px-6 text-center transition hover:border-yellow-400/30 hover:bg-yellow-400/[0.02]">

                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/15 bg-[#1c1c1c] shadow-lg shadow-black/20 transition group-hover:border-yellow-400/30">

                  <span className="text-2xl text-yellow-400">
                    ↑
                  </span>

                </div>

                <h3 className="text-sm font-medium text-zinc-300">
                  Arraste um arquivo para cá
                </h3>

                <p className="mt-2 max-w-xs text-xs leading-5 text-zinc-600">
                  Ou clique para selecionar um documento do seu computador.
                </p>

                <div className="mt-4 flex flex-wrap justify-center gap-1.5">

                  {['PDF', 'DOCX', 'XLSX', 'CSV', 'MD', 'TXT'].map(
                    (format) => (
                      <span
                        key={format}
                        className="rounded-md border border-white/5 bg-[#181818] px-2 py-1 text-[9px] text-zinc-600"
                      >
                        {format}
                      </span>
                    )
                  )}

                </div>

              </div>

              {/* Tipo */}
              <div className="mt-6">

                <label className="mb-2 block text-xs font-medium text-zinc-400">
                  Tipo de documento
                </label>

                <select className="w-full rounded-xl border border-white/5 bg-[#111111] px-3 py-3 text-sm text-zinc-400 outline-none transition focus:border-yellow-400/30">
                  <option>Selecione um tipo</option>
                  <option>Política</option>
                  <option>Procedimento</option>
                  <option>Relatório</option>
                  <option>Projeto</option>
                  <option>Plano de ação</option>
                  <option>Contrato</option>
                  <option>Pesquisa</option>
                  <option>Legislação</option>
                  <option>Outro</option>
                </select>

              </div>

              {/* Nome */}
              <div className="mt-5">

                <label className="mb-2 block text-xs font-medium text-zinc-400">
                  Nome do documento
                </label>

                <input
                  type="text"
                  placeholder="Ex: Manual de processos internos"
                  className="w-full rounded-xl border border-white/5 bg-[#111111] px-3 py-3 text-sm text-zinc-200 outline-none transition placeholder:text-zinc-700 focus:border-yellow-400/30"
                />

              </div>

              {/* Processar */}
              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-[#d9a441] px-4 py-3 text-sm font-semibold text-[#111111] shadow-lg shadow-yellow-500/10 transition hover:bg-[#f2c94c] hover:shadow-yellow-500/15 active:scale-[0.99]">

                <span>
                  Salvar e Processar
                </span>

                <span>
                  →
                </span>

              </button>

              <p className="mt-3 text-center text-[10px] text-zinc-700">
                O arquivo será processado e preparado para uso pelo Jaguar.
              </p>

            </div>

          </section>

          {/* ========================================================= */}
          {/* COLUNA 3 — CONEXÕES */}
          {/* ========================================================= */}

          <section className="min-w-0 rounded-2xl border border-white/5 bg-[#181818]">

            <div className="border-b border-white/5 p-5">

              <div className="flex items-start justify-between gap-3">

                <div>
                  <h2 className="text-sm font-semibold text-zinc-200">
                    Conexões de banco
                  </h2>

                  <p className="mt-1 text-xs text-zinc-600">
                    Fontes externas de conhecimento.
                  </p>
                </div>

              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-yellow-400/15 bg-yellow-400/[0.04] px-3 py-2.5 text-xs font-medium text-yellow-400 transition hover:border-yellow-400/30 hover:bg-yellow-400/[0.08]">

                <span className="text-base leading-none">
                  +
                </span>

                Adicionar nova conexão

              </button>

            </div>

            <div className="space-y-2 p-4">

              {connections.map((connection) => (
                <div
                  key={connection.name}
                  className="rounded-xl border border-white/5 bg-[#111111] p-4 transition hover:border-white/10"
                >

                  <div className="flex items-start justify-between gap-3">

                    <div className="flex min-w-0 items-center gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/5 bg-[#1c1c1c]">

                        <span className="text-xs font-semibold text-zinc-400">
                          {connection.name === 'MySQL'
                            ? 'SQL'
                            : connection.name === 'PostgreSQL'
                              ? 'PG'
                              : 'GC'}
                        </span>

                      </div>

                      <div className="min-w-0">

                        <p className="truncate text-sm font-medium text-zinc-200">
                          {connection.name}
                        </p>

                        <p className="mt-1 truncate text-[10px] text-zinc-700">
                          {connection.description}
                        </p>

                      </div>

                    </div>

                    <span
                      className={`shrink-0 rounded-full border px-2 py-1 text-[9px] ${
                        connection.connected
                          ? 'border-emerald-400/10 bg-emerald-400/[0.05] text-emerald-400'
                          : 'border-white/5 bg-white/[0.02] text-zinc-600'
                      }`}
                    >
                      {connection.connected
                        ? '● Conectado'
                        : '○ Configurar'}
                    </span>

                  </div>

                  {!connection.connected && (
                    <button className="mt-4 w-full rounded-lg border border-white/5 px-3 py-2 text-[10px] text-zinc-600 transition hover:border-yellow-400/20 hover:text-yellow-400">
                      Configurar conexão
                    </button>
                  )}

                </div>
              ))}

            </div>

          </section>

        </div>

        {/* Documentos recentes */}
        <section className="mt-5 rounded-2xl border border-white/5 bg-[#181818]">

          <div className="flex items-center justify-between border-b border-white/5 px-5 py-4">

            <div>
              <h2 className="text-sm font-semibold text-zinc-200">
                Documentos recentes
              </h2>

              <p className="mt-1 text-xs text-zinc-600">
                Últimas fontes adicionadas ao workspace.
              </p>
            </div>

            <button className="text-xs text-zinc-600 transition hover:text-yellow-400">
              Ver todos →
            </button>

          </div>

          <div className="divide-y divide-white/5">

            {recentDocuments.map((document) => (
              <div
                key={document.name}
                className="flex items-center gap-4 px-5 py-4 transition hover:bg-white/[0.015]"
              >

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#202020]">

                  <span className="text-xs font-semibold text-yellow-400">
                    {document.format}
                  </span>

                </div>

                <div className="min-w-0 flex-1">

                  <p className="truncate text-sm text-zinc-300">
                    {document.name}
                  </p>

                  <p className="mt-1 text-[10px] text-zinc-700">
                    {document.type} · {document.format} · {document.size}
                  </p>

                </div>

                <span
                  className={`hidden rounded-full border px-2.5 py-1 text-[9px] sm:block ${
                    document.status === 'Processado'
                      ? 'border-emerald-400/10 bg-emerald-400/[0.05] text-emerald-400'
                      : 'border-yellow-400/10 bg-yellow-400/[0.05] text-yellow-400'
                  }`}
                >
                  {document.status}
                </span>

              </div>
            ))}

          </div>

        </section>

      </div>
    </div>
  )
}

export default BaseConhecimento