'use client'

import { useState, lazy, startTransition } from 'react'

import { List } from '~/app/components/icons'

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
        <List size={30} className="text-[#f7f5f9]" />
      </button>

      {isOpen && <Menu isOpen={isOpen} />}
    </>
  )
}
