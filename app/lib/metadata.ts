import type { ReferrerEnum } from 'next/dist/lib/metadata/types/metadata-types'

/* eslint-disable @typescript-eslint/no-explicit-any */
export function getArticlePageMetadataProps({
  title,
  description,
  image,
  previousImages,
  keywords
}: {
  title: string
  description: string
  image: string
  keywords: string[]
  previousImages: any[]
}) {
  return {
    title: `${title} | Victor Campos`,
    description,
    referrer: 'origin-when-cross-origin' as ReferrerEnum,
    keywords,
    openGraph: {
      images: [image, ...previousImages]
    }
  }
}
