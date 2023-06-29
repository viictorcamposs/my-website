import { defineDocumentType, makeSource, defineNestedType } from 'contentlayer/source-files'

const SEO = defineNestedType(() => ({
  name: 'SEO',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    url: { type: 'string', required: true },
    image: { type: 'string', required: true }
  }
}))

const Image = defineNestedType(() => ({
  name: 'Image',
  fields: {
    url: { type: 'string', required: true },
    alt: { type: 'string', required: true }
  }
}))

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    releaseDate: { type: 'date', required: true },
    github: { type: 'string', required: true },
    image: { type: 'nested', of: Image, required: true },
    seo: { type: 'nested', of: SEO, required: true }
  },
  computedFields: {
    url: { type: 'string', resolve: article => `/${article._raw.flattenedPath}` }
  }
}))

export default makeSource({ contentDirPath: 'articles', documentTypes: [Article] })
