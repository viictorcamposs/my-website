import sharp from 'sharp'
import path from 'path'
import GithubSlugger from 'github-slugger'
import { defineDocumentType } from 'contentlayer/source-files'

import { Hero } from './Hero'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    releaseDate: { type: 'date', required: true },
    keywords: { type: 'list', of: { type: 'string' }, required: true },
    hero: { type: 'nested', of: Hero, required: true }
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
    },
    image: {
      type: 'json',
      resolve: async article => {
        const imageSource = `/static/img/posts/${article._id.replace('.mdx', '.webp')}`

        const file = path.join('./public', imageSource)

        const placeholder: Buffer | string = await sharp(file).resize(32, 32).toBuffer()

        return {
          src: imageSource,
          alt: `${article.title} | Background Image`,
          placeholder: `data:image/jpg;base64,${placeholder.toString('base64')}`
        }
      }
    }
  }
}))
