import type { MDXComponents } from 'mdx/types'

// text-[#CDCEDF]
// text-[#c1c2e0]

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => (
      <p
        className={`
          font-body font-normal
          text-sm/6 md:text-base/7
        text-[#c1c2e0] my-6 
        `}
      >
        {children}
      </p>
    ),
    h2: ({ children }) => (
      <h2
        className={`
          mt-10 mb-5
          font-heading font-semibold
          text-lg md:text-2xl
          text-[#f7f5f9]
        `}
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3
        className={`
          my-11 pt-8
          border-t border-[#c1c2e030]
          font-heading font-semibold 
          text-xl md:text-2xl
          text-[#f7f5f9]
        `}
      >
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4
        className={`
          my-8
          font-heading font-medium 
          text-lg md:text-xl
          text-[#f7f5f9]
        `}
      >
        {children}
      </h4>
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
    ul: ({ children }) => (
      <ul
        className={`
          my-8 space-y-3
          [&>li]:relative [&>li]:pl-7
          [&>li>p]:my-0
        `}
      >
        {children}
      </ul>
    ),
    li: ({ children }) => (
      <li
        className={`
          font-body font-normal
          text-sm/6 md:text-base/7
        text-[#c1c2e0]
          before:absolute 
          before:left-0 before:top-3.5
          before:content-['']
          before:h-1.5 before:w-1.5 
          before:rounded-full
          before:bg-[#c1c2e030]
        `}
      >
        {children}
      </li>
    ),
    a: ({ children, href }) => (
      <a
        href={href}
        target="_blank"
        className={`
          border-b border-[#01b0ea] 
          transition-all duration-150
          hover:border-transparent hover:text-[#01b0ea]
        `}
      >
        {children}
      </a>
    ),
    ...components
  }
}
