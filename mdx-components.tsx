import type { MDXComponents } from 'mdx/types'

const textStyles = `
  font-main font-normal
  text-sm/6 md:text-base/7
  text-[#dfdff0]
`

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    p: ({ children }) => (
      <p
        className={`
          my-6 ${textStyles}
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
    h3: ({ children }) => (
      <h3
        className={`
          my-11 pt-8
          border-t border-[#dfdff030]
          font-main font-semibold 
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
          font-main font-medium 
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
          ${textStyles}
          before:absolute 
          before:left-0 before:top-3.5
          before:content-['']
          before:h-1.5 before:w-1.5 
          before:rounded-full
          before:bg-[#dfdff030]
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
          underline
          text-[#01B0EA]
        `}
      >
        {children}
      </a>
    ),
    ...components
  }
}
