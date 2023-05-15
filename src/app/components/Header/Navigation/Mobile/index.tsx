'use client'

import { useState, lazy, Suspense } from 'react'

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
        <List color="#0C0F17" size={24} />
      </button>

      {isOpen && (
        <Suspense>
          <Menu isOpen={isOpen} />
        </Suspense>
      )}
    </>
  )
}

export default Mobile
