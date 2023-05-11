'use client'

import Link from 'next/link'

import { List } from '@phosphor-icons/react'

const Mobile: React.FC = () => (
  <>
    <button className="sm:hidden">
      <List color="#0C0F17" size={24} />
    </button>

    <dialog
      open={false}
      className="absolute top-[66px] left-0 py-7 pl-4 pr-20 shadow-lg rounded-lg bg-[#F7F5F9]"
    >
      <nav className="flex flex-col gap-5 text-sm font-light font-body text-[#464444]">
        <Link href="/about">ABOUT</Link>
        <Link href="/blog">ARTICLES</Link>
        <Link href="/portfolio">PORTFOLIO</Link>
        <Link href="/email">EMAIL</Link>
      </nav>
    </dialog>
  </>
)

export default Mobile
