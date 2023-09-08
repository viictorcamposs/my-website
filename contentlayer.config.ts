import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { makeSource } from 'contentlayer/source-files'

import { MDX_HEADING_LINK_STYLES } from './app/lib/constants'

import { Post } from './content/definitions/Post'

export default makeSource({
  contentDirPath: 'content/posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [
      [rehypeSlug],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: [MDX_HEADING_LINK_STYLES]
          }
        }
      ]
    ]
  }
})
