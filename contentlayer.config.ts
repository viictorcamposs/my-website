import { defineDocumentType, makeSource } from 'contentlayer/source-files'

export const Article = defineDocumentType(() => ({
  name: 'Article',
  filePathPattern: './app/articles/*.mdx',
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    releaseDate: { type: 'date', required: true },
    github: { type: 'string', required: true }
  },
  computedFields: {
    url: { type: 'string', resolve: article => `/articles/${article._raw.flattenedPath}` }
  }
}))

export default makeSource({ contentDirPath: './app/articles', documentTypes: [Article] })
