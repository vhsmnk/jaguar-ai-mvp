import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/github-dark.css'

function JaguarAvatar() {
  return (
    <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-yellow-400/20 bg-[#1c1c1c] shadow-lg shadow-black/20">
      <div className="absolute h-4 w-6 rounded-[70%_15%_70%_15%] border border-yellow-400/40" />

      <div className="relative z-10 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#d9a441] shadow-[0_0_10px_rgba(242,201,76,0.25)]">
        <div className="h-2.5 w-1 rounded-full bg-[#111111]" />
      </div>
    </div>
  )
}

function UserAvatar() {
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/5 bg-[#202020]">
      <span className="text-sm font-semibold text-yellow-400">
        V
      </span>
    </div>
  )
}

function CodeBlock({ children, className }) {
  const [copied, setCopied] = useState(false)

  const language = className?.replace('language-', '') || 'code'

  const code = String(children).replace(/\n$/, '')

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)

      setCopied(true)

      setTimeout(() => {
        setCopied(false)
      }, 2000)
    } catch (error) {
      console.error('Erro ao copiar código:', error)
    }
  }

  return (
    <div className="my-4 overflow-hidden rounded-xl border border-white/10 bg-[#101010]">
      <div className="flex items-center justify-between border-b border-white/5 bg-[#161616] px-4 py-2">
        <span className="text-xs font-medium text-zinc-500">
          {language}
        </span>

        <button
          onClick={handleCopy}
          className="rounded-md px-2 py-1 text-xs text-zinc-500 transition hover:bg-white/5 hover:text-yellow-400"
        >
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>

      <pre className="overflow-x-auto p-4 text-sm leading-6">
        <code className={className}>
          {code}
        </code>
      </pre>
    </div>
  )
}

function Message({ role, content }) {
  const isUser = role === 'user'

  const [displayedContent, setDisplayedContent] = useState(
    isUser ? content : ''
  )

  useEffect(() => {
    if (isUser) {
      return
    }

    let currentIndex = 0

    const interval = setInterval(() => {
      currentIndex += 1

      setDisplayedContent(content.slice(0, currentIndex))

      if (currentIndex >= content.length) {
        clearInterval(interval)
      }
    }, 3)

    return () => {
      clearInterval(interval)
    }
  }, [content, isUser])

  return (
    <div
      className={`flex gap-4 animate-message ${
        isUser ? 'justify-end' : 'justify-start'
      }`}
    >
      {!isUser && <JaguarAvatar />}

      <div
        className={`max-w-2xl rounded-2xl px-4 py-3 text-sm leading-7 ${
          isUser
            ? 'rounded-br-md bg-[#d9a441] text-[#111111] shadow-lg shadow-yellow-500/5'
            : 'rounded-bl-md border border-white/5 bg-[#181818] text-zinc-300'
        }`}
      >
        {isUser ? (
          content
        ) : (
          <div className="markdown-content">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                p: ({ children }) => (
                  <p className="mb-4 last:mb-0">
                    {children}
                  </p>
                ),

                h1: ({ children }) => (
                  <h1 className="mb-4 mt-6 text-2xl font-semibold text-white first:mt-0">
                    {children}
                  </h1>
                ),

                h2: ({ children }) => (
                  <h2 className="mb-3 mt-6 text-xl font-semibold text-white first:mt-0">
                    {children}
                  </h2>
                ),

                h3: ({ children }) => (
                  <h3 className="mb-2 mt-5 text-lg font-semibold text-white first:mt-0">
                    {children}
                  </h3>
                ),

                strong: ({ children }) => (
                  <strong className="font-semibold text-white">
                    {children}
                  </strong>
                ),

                ul: ({ children }) => (
                  <ul className="mb-4 ml-5 list-disc space-y-1.5">
                    {children}
                  </ul>
                ),

                ol: ({ children }) => (
                  <ol className="mb-4 ml-5 list-decimal space-y-1.5">
                    {children}
                  </ol>
                ),

                li: ({ children }) => (
                  <li className="pl-1">
                    {children}
                  </li>
                ),

                blockquote: ({ children }) => (
                  <blockquote className="my-4 border-l-2 border-yellow-400/40 pl-4 italic text-zinc-400">
                    {children}
                  </blockquote>
                ),

                code: ({ inline, className, children }) => {
                  if (inline) {
                    return (
                      <code className="rounded-md bg-black/40 px-1.5 py-0.5 text-[13px] text-yellow-300">
                        {children}
                      </code>
                    )
                  }

                  return (
                    <CodeBlock className={className}>
                      {children}
                    </CodeBlock>
                  )
                },

                pre: ({ children }) => children,

                hr: () => (
                  <hr className="my-5 border-white/10" />
                ),
              }}
            >
              {displayedContent}
            </ReactMarkdown>
          </div>
        )}

        {!isUser && displayedContent.length < content.length && (
          <span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-yellow-400 align-middle" />
        )}
      </div>

      {isUser && <UserAvatar />}
    </div>
  )
}

export default Message