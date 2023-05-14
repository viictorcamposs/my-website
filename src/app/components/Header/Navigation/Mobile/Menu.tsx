import Link from 'next/link'

interface IMenu {
  isOpen: boolean
}

const Menu: React.FC<IMenu> = ({ isOpen }) => (
  <dialog
    open={isOpen}
    className="absolute top-[66px] left-2 py-7 pl-4 pr-20 shadow-lg rounded-lg bg-[#F7F5F9]"
  >
    <nav className="flex flex-col gap-5 text-sm font-light font-body text-[#464444]">
      <Link href="/about">ABOUT</Link>
      <Link href="/blog">ARTICLES</Link>
      <Link href="/portfolio">PORTFOLIO</Link>
      <Link href="/email">EMAIL</Link>
    </nav>
  </dialog>
)

export default Menu
