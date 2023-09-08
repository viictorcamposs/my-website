'use client'

import { CaretDoubleUp } from '@phosphor-icons/react'

import { ARTICLE_CONTENT_MENU_ITEM_STYLES } from '~/app/lib/constants'

export default function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0 })}
      className={`${ARTICLE_CONTENT_MENU_ITEM_STYLES} group relative flex items-center justify-between w-full`}
    >
      Back to top
      <CaretDoubleUp
        size={20}
        className="text-[#C1C2E050] duration-300 group-hover:text-[#C1C2E080]"
      />
    </button>
  )
}
