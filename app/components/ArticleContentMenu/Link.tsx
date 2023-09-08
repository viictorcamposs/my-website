'use client'

import { useCallback } from 'react'

import { ARTICLE_CONTENT_MENU_ITEM_STYLES } from '~/app/lib/constants'

interface IProps {
  children: React.ReactNode
  slug: string
}

export default function Link({ children, slug }: IProps) {
  const scrollToElement = useCallback(() => {
    const element = document.getElementById(slug)

    if (element) {
      const { y } = element.getBoundingClientRect()

      // y (element position) - header (height + spacing)
      window.scrollBy(0, y - (24 + 24 + 24 + 40))
    }
  }, [slug])

  return (
    <button type="button" onClick={scrollToElement} className={ARTICLE_CONTENT_MENU_ITEM_STYLES}>
      {children}
    </button>
  )
}
