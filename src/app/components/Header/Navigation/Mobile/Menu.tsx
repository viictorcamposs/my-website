import Link from 'next/link'

import ELinks from '~/utils/links'

interface IMenu {
  isOpen: boolean
}

const linkClassName = `
  text-sm font-light font-body text-[#cdcedf]
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
          rounded-lg bg-[#0c0f17]
          drop-shadow-[4px_4px_4px_#f7f5f905]
        `}
      >
        <Link className={linkClassName} href={ELinks.ABOUT}>
          ABOUT
        </Link>
        <Link className={linkClassName} href={ELinks.ARTICLES}>
          ARTICLES
        </Link>
        <Link className={linkClassName} href={ELinks.PROJECTS}>
          PROJECTS
        </Link>
      </nav>
    </dialog>
  )
}
