import rehypeSlug from 'rehype-slug'
import { makeSource } from 'contentlayer/source-files'

import { Post } from './content/definitions/Post'

export default makeSource({
  contentDirPath: 'content/posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypeSlug]]
  }
})
