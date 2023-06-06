import type { SliceComponentProps } from '@prismicio/react'
import { PrismicRichText } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import type { Content } from '@prismicio/client'

/**
 * Props for `ArticleHeroComponent`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>

/**
 * Component for "ArticleHeroComponent" Slices.
 */
const ArticleHeroComponent = ({ slice }: HeroProps): JSX.Element => (
  <section
    className={`
      relative aspect-video
      py-4 px-5 sm:px-10 mb-8 md:mb-12
      flex items-end sm:items-center sm:justify-center
      bg-black/60 sm:rounded-lg overflow-hidden
    `}
  >
    <PrismicNextImage
      fill
      priority
      field={slice.primary.image}
      className="z-[-1]"
      loader={undefined}
    />

    <PrismicRichText
      field={slice.primary.title}
      components={{
        heading1: ({ children }) => (
          <h1
            className={`
              relative 
              font-bold text-2xl min-[790px]:text-4xl xl:text-[42px]/tight 
              sm:text-center text-[#f7f5f9]
            `}
          >
            {children}
          </h1>
        )
      }}
    />
  </section>
)

export default ArticleHeroComponent
