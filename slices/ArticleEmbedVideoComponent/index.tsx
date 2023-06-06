import type { SliceComponentProps } from '@prismicio/react'
import type { Content } from '@prismicio/client'

/**
 * Props for `ArticleEmbedVideoComponent`.
 */
export type ArticleEmbedVideoComponentProps =
  SliceComponentProps<Content.ArticleEmbedVideoComponentSlice>

async function getSourceFromEmbedVideo(embedLink: string): Promise<string> {
  return await new Promise(resolve =>
    resolve(
      embedLink
        .split(' ')
        .find(attribute => attribute.includes('src'))!
        .replace('src=', '')
        .replaceAll('"', '')
    )
  )
}

/**
 * Component for "ArticleEmbedVideoComponent" Slices.
 */
const ArticleEmbedVideoComponent = async ({
  slice
}: ArticleEmbedVideoComponentProps): Promise<JSX.Element> => (
  <figure
    className={`
      flex flex-col gap-2 md:gap-4 
      w-full max-w-3xl
      px-5 sm:px-12 lg:px-0
      md:mx-auto
    `}
  >
    <iframe
      allowFullScreen
      src={await getSourceFromEmbedVideo(slice.primary.video.html!)}
      title={slice.primary.video.title as string}
      allow={`
        accelerometer; 
        autoplay; 
        clipboard-write; 
        encrypted-media; 
        gyroscope; 
        picture-in-picture; 
        web-share
      `}
      className={`
        aspect-video w-full 
        rounded-lg
      `}
    />

    {slice.primary.legend && (
      <figcaption
        className={`
          text-gray-500 text-center
          text-[6px] min-[390px]:text-[8px] min-[480px]:text-xs
          md:text-sm
        `}
      >
        {slice.primary.legend}
      </figcaption>
    )}
  </figure>
)

export default ArticleEmbedVideoComponent
