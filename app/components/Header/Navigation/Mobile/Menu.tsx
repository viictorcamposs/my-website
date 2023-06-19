import Link from 'next/link'

import Elink from '~/enums/link'

interface IMenu {
  isOpen: boolean
}

const linkClassName = `
  text-sm font-light font-body text-[#c7c8e0]
`

export default function Menu({ isOpen }: IMenu) {
  return (
    <dialog
      open={isOpen}
      aria-label="menu"
      className={`
        absolute top-[66px] left-0 
        bg-transparent h-auto
      `}
    >
      <nav
        className={`
          flex flex-col gap-5
          pt-7 pb-20 pl-5 pr-20
          rounded-lg bg-[#06080d]
          drop-shadow-[4px_4px_4px_#f7f5f905]
        `}
      >
        <Link className={linkClassName} href={Elink.ABOUT}>
          ABOUT
        </Link>
        <Link className={linkClassName} href={Elink.ARTICLES}>
          ARTICLES
        </Link>
        <Link className={linkClassName} href={Elink.PROJECTS}>
          PROJECTS
        </Link>
      </nav>
    </dialog>
  )
}
