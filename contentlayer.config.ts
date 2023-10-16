import rehypeSlug from 'rehype-slug'
import rehypePrettyCode from 'rehype-pretty-code'
import { makeSource } from 'contentlayer/source-files'

import { rehypePrettyCodeOptions } from './app/lib/rehypePrettyCode'

import { Post } from './content/definitions/Post'

export default makeSource({
  contentDirPath: 'content/posts',
  documentTypes: [Post],
  mdx: {
    rehypePlugins: [[rehypeSlug], [rehypePrettyCode, rehypePrettyCodeOptions]]
  }
})
