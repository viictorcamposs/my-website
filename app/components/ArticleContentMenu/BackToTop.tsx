'use client'

import { CaretDoubleUp } from '@phosphor-icons/react'

import { ARTICLE_CONTENT_MENU_ITEM_STYLES } from '~/app/lib/constants'

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className={`${ARTICLE_CONTENT_MENU_ITEM_STYLES} group relative flex items-center justify-between w-full`}
    >
      <span className="duration-300 text-other group-hover:text-primary">Back to top</span>
      <CaretDoubleUp size={20} className="duration-300 text-other group-hover:text-secondary" />
    </button>
  )
}
