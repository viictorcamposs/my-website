export const MDX_HEADING_STYLES = `
  font-heading font-medium
  text-[#f4f5f9]
`

export const MDX_LIST_STYLES = `
  font-body font-normal
  text-sm/6 md:text-base/7
  text-[#C1C2E0]
  before:absolute 
  before:left-0 before:top-3.5
  before:content-['']
  before:h-1.5 before:w-1.5 
  before:rounded-full
  before:bg-[#C1C2E030]
`

export const MDX_LINK_STYLES = `
  border-b border-[#01b0ea] 
  transition-all duration-150
  hover:border-transparent hover:text-[#01b0ea]
`

export const MDX_HEADING_LINK_STYLES = `
  before:content-['#'] 
  before:absolute 
  before:-ml-[1em] 
  before:text-[#f4f5f9]/0 hover:before:text-[#f4f5f9]/50 
  pl-[1em] -ml-[1em]
`

export const ARTICLE_CONTENT_MENU_ITEM_STYLES = `
  text-sm font-normal font-body
  text-[#C1C2E080]
  transition-all duration-300
  hover:text-[#C1C2E0]
`
