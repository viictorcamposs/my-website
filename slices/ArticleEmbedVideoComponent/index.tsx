import type { SliceComponentProps } from '@prismicio/react'
import type { Content } from '@prismicio/client'

/**
 * Props for `ArticleEmbedVideoComponent`.
 */
export type ArticleEmbedVideoComponentProps =
  SliceComponentProps<Content.ArticleEmbedVideoComponentSlice>

/**
 * Component for "ArticleEmbedVideoComponent" Slices.
 */
const ArticleEmbedVideoComponent = ({ slice }: ArticleEmbedVideoComponentProps): JSX.Element => (
  <section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
    Placeholder component for article_embed_video_component (variation: {slice.variation}) Slices
  </section>
)

export default ArticleEmbedVideoComponent
