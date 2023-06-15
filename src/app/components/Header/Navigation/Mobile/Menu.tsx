import Link from 'next/link'

interface IMenu {
  isOpen: boolean
}

export default function Menu({ isOpen }: IMenu) {
  return (
    <dialog
      open={isOpen}
      aria-label="menu"
      className="absolute top-[66px] left-2 py-7 pl-4 pr-20 rounded-lg bg-[#0c0f17]"
    >
      <nav className="flex flex-col gap-5 text-sm font-light font-body text-[#cdcedf]">
        <Link href="/about">ABOUT</Link>
        <Link href="/articles">ARTICLES</Link>
        <Link href="/contact">EMAIL</Link>
      </nav>
    </dialog>
  )
}
