import type { SliceComponentProps } from '@prismicio/react'
import { PrismicNextImage } from '@prismicio/next'
import type { Content } from '@prismicio/client'

/**
 * Props for `ArticleScreenshotComponent`.
 */
export type ArticleScreenshotComponentProps =
  SliceComponentProps<Content.ArticleScreenshotComponentSlice>

/**
 * Component for "ArticleScreenshotComponent" Slices.
 */
const ArticleScreenshotComponent = ({ slice }: ArticleScreenshotComponentProps): JSX.Element => (
  <figure
    className={`
      flex flex-col gap-2 md:gap-4 
      w-full
      px-5 sm:px-12 lg:px-0
      md:mx-auto my-12 md:my-16
    `}
  >
    <PrismicNextImage
      width={480}
      height={270}
      sizes="50vw"
      loader={undefined}
      field={slice.primary.screenshot}
      className={`
        relative object-center
        aspect-video w-full
        rounded-lg
      `}
    />

    <figcaption
      className={`
        text-gray-500 text-center
        text-[6px] min-[390px]:text-[8px] min-[480px]:text-xs
        md:text-sm
      `}
    >
      {slice.primary.legend}
    </figcaption>
  </figure>
)

export default ArticleScreenshotComponent
