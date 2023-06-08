import type { SliceComponentProps } from '@prismicio/react'
import { PrismicRichText } from '@prismicio/react'
import type { Content } from '@prismicio/client'

export type TextProps = SliceComponentProps<Content.TextSlice>

const Text = ({ slice }: TextProps): JSX.Element => (
  <PrismicRichText
    field={slice.primary.text}
    components={{
      heading2: ({ children }) => (
        <h2
          className={`
            text-xl sm:text-2xl 
            font-semibold font-body 
            text-[#0c0f17] dark:text-[#f7f5f9]
            mt-10 mb-4
          `}
        >
          {children}
        </h2>
      ),
      paragraph: ({ children }) => (
        <p className="text-base font-normal font-body text-[#464444] dark:text-[#cdcedf]">
          {children}
        </p>
      ),
      list: ({ children }) => (
        <ul
          className={`
            flex flex-col gap-2.5
            my-4 pl-8 
            list-disc
            font-body font-normal text-base 
            text-[#464444] dark:text-[#cdcedf]
          `}
        >
          {children}
        </ul>
      ),
      strong: ({ children }) => <strong className="font-semibold">{children}</strong>
    }}
  />
)

export default Text
