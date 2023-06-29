import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => (
      <p
        className={`
          my-4
          font-main font-normal
          text-sm md:text-base
          text-[#c7c8e0]
        `}
      >
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2
        className={`
          mt-10 mb-5
          font-main font-semibold
          text-lg md:text-2xl
          text-[#f7f5f9]
        `}
      >
        {children}
      </h2>
    ),
    strong: ({ children }) => (
      <strong
        className={`
          font-semibold
          text-[#f7f5f9]
        `}
      >
        {children}
      </strong>
    ),
    em: ({ children }) => (
      <em
        className={`
          font-normal
          text-[#f7f5f9]
        `}
      >
        {children}
      </em>
    ),
    ...components
  }
}
