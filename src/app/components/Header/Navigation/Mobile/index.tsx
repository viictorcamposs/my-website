'use client'

import { useState, lazy } from 'react'

import { List } from '@phosphor-icons/react'

const Menu = lazy(() => import('./Menu'))

const Mobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleMenu() {
    setIsOpen(prevState => !prevState)
  }

  return (
    <>
      <button onClick={handleMenu} className="sm:hidden">
        <List size={24} className="text-[#0c0f17] dark:text-[#f7f5f9]" />
      </button>

      {isOpen && <Menu isOpen={isOpen} />}
    </>
  )
}

export default Mobile
