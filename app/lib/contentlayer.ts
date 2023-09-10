import type { Post } from '~/.contentlayer/generated'

export const getPartialPost = ({
  slug,
  title,
  description,
  headings,
  releaseDate,
  body,
  hero,
  image
}: Post) => ({
  slug,
  title,
  description,
  body: {
    code: body.code
  },
  headings:
    (headings as {
      heading: number
      text: string
      slug: string
    }[]) ?? null,
  releaseDate,
  hero: {
    ...hero,
    image
  }
})
