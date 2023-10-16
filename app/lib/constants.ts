export const MDX_HEADING_STYLES = `
  font-heading font-medium
  text-primary
`

export const MDX_LIST_STYLES = `
  font-body font-normal
  text-sm/6 md:text-base/7
  text-secondary
  before:absolute 
  before:left-0 before:top-3
  before:content-['']
  before:h-1.5 before:w-1.5 
  before:rounded-full
  before:bg-secondary
`

export const MDX_LINK_STYLES = `
  border-b border-blue-500/50
  transition-all duration-150
  hover:border-blue-500
`

export const MDX_HEADING_LINK_STYLES = `
  before:content-['#'] 
  before:absolute 
  before:-ml-[1em] 
  before:text-other/0 hover:before:text-other
`

export const ARTICLE_CONTENT_MENU_ITEM_STYLES = `
  text-sm font-normal font-body
  text-secondary
  transition-all duration-300
  hover:text-primary
`

export const TITLE_GRADIENT_STYLES = `
  text-transparent 
  bg-clip-text bg-gradient-to-r 
  from-blue-500 to-purple-500
`
