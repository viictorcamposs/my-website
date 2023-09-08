import type { Post } from '~/.contentlayer/generated'

export const getPartialPost = ({
  url,
  title,
  description,
  translations,
  headings,
  releaseDate,
  body
}: Post) => ({
  url,
  title,
  description,
  translations: translations ?? null,
  body: {
    code: body.code
  },
  headings:
    (headings as {
      heading: number
      text: string
      slug: string
    }[]) ?? null,
  releaseDate
})
