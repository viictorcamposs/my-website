import Link from 'next/link'

interface IMenu {
  isOpen: boolean
}

export default function Menu({ isOpen }: IMenu) {
  return (
    <dialog
      open={isOpen}
      className="absolute top-[66px] left-2 py-7 pl-4 pr-20 shadow-lg dark:shadow-[#f7f5f9]/10 rounded-lg bg-[#F7F5F9] dark:bg-[#0c0f17]"
    >
      <nav className="flex flex-col gap-5 text-sm font-light font-body text-[#464444] dark:text-[#cdcedf]">
        <Link href="/about">ABOUT</Link>
        <Link href="/articles">ARTICLES</Link>
        <Link href="/contact">EMAIL</Link>
      </nav>
    </dialog>
  )
}
