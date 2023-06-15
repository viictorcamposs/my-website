'use client'

import { useState, lazy, startTransition } from 'react'

import { List } from '@phosphor-icons/react'

const Menu = lazy(() => import('./Menu'))

export default function Mobile() {
  const [isOpen, setIsOpen] = useState(false)

  function handleMenu() {
    startTransition(() => {
      setIsOpen(prevState => !prevState)
    })
  }

  return (
    <>
      <button onClick={handleMenu} className="sm:hidden">
        <List size={24} className="text-[#f7f5f9]" />
      </button>

      {isOpen && <Menu isOpen={isOpen} />}
    </>
  )
}
