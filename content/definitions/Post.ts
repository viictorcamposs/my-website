import GithubSlugger from 'github-slugger'
import { defineDocumentType } from 'contentlayer/source-files'

import { Translations } from './Translations'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    releaseDate: { type: 'date', required: true },
    translations: { type: 'nested', of: Translations, required: false }
  },
  computedFields: {
    slug: { type: 'string', resolve: post => post._raw.flattenedPath },
    headings: {
      type: 'json',
      resolve: async article => {
        const slugger = new GithubSlugger()

        const rgxExtractHeading = /\n(?<flag>#{1,6})\s+(?<content>.+)\n/g

        const headings = Array.from(article.body.raw.matchAll(rgxExtractHeading)).map(
          ({ groups }) => {
            const flag = groups?.flag
            const content = groups?.content

            return {
              heading: flag?.length,
              text: content,
              slug: content ? slugger.slug(content) : undefined
            }
          }
        )

        return headings
      }
    }
  }
}))
