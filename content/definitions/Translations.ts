import { defineNestedType } from 'contentlayer/source-files'

export const Translations = defineNestedType(() => ({
  name: 'Translations',
  fields: {
    en: { type: 'boolean', required: false },
    pt: { type: 'boolean', required: false }
  }
}))
