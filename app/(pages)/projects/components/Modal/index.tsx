'use client'

import { useEffect } from 'react'

import { createPortal } from 'react-dom'

interface IModal {
  children: React.ReactNode
}

export default function Modal({ children }: IModal) {
  useEffect(() => {
    const document = window.document.documentElement

    document.classList.add('overflow-hidden')

    return () => document.classList.remove('overflow-hidden')
  }, [])

  return createPortal(
    <dialog open>
      <div
        className={`
          fixed z-50 left-0 top-0 bottom-0 right-0
          flex flex-col items-center justify-center
          min-h-screen w-screen px-5
          backdrop-blur-sm bg-[#0c0f17]/90
        `}
      >
        {children}
      </div>
    </dialog>,
    document.body
  )
}
