'use client'

import { startTransition, useState } from 'react'
import dynamic from 'next/dynamic'

const Modal = dynamic(() => import('../Modal'))
import type { IProject } from '~/app/(pages)/portfolio/page'

import ModalContent from '../ModalContent'
import { X } from '../icons'

interface IProjectCardClient {
  children: React.ReactNode
  project: IProject
}

export default function ProjectClient({ children, project }: IProjectCardClient) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    startTransition(() => setIsOpen(true))

    //? Create loading component and see if it works with the useTransition hook
    // startTransition(() => {
    //   setTimeout(() => setIsOpen(true), 5000)
    // })
  }

  const handleCloseModal = () => {
    startTransition(() => setIsOpen(false))
  }

  return (
    <>
      <div aria-hidden="true" onClick={handleOpenModal}>
        {children}
      </div>

      {isOpen && (
        <Modal>
          <button
            onClick={handleCloseModal}
            className={`
              absolute right-5 top-5
              md:right-14 md:top-14
            `}
          >
            <X
              color="#f7f5f9"
              className={`
                h-5 w-5
                md:h-6 md:w-6
              `}
            />
          </button>

          <ModalContent project={project} />
        </Modal>
      )}
    </>
  )
}
