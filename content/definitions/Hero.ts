import { defineNestedType } from 'contentlayer/source-files'

const Unsplash = defineNestedType(() => ({
  name: 'Unsplash',
  fields: {
    account: { type: 'string', required: true },
    image: { type: 'string', required: true }
  }
}))

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: { type: 'string', required: true },
    unsplash: { type: 'nested', of: Unsplash, required: true }
  }
}))

export const Hero = defineNestedType(() => ({
  name: 'Hero',
  fields: {
    author: { type: 'nested', of: Author, required: true }
  }
}))
