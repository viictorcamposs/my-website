import Link from 'next/link'

import links from '../utils/links'

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between w-full max-w-[680px] px-5 min-[375px]:px-7 md:px-0 mx-auto mt-auto py-[100px] font-body">
      <nav className="flex gap-2 md:gap-4 md:items-center text-other">
        {links.map(({ identification, ...link }) => (
          <Link
            {...link}
            key={identification}
            className="text-xs duration-300 md:text-sm hover:text-primary"
          >
            {identification}
          </Link>
        ))}
      </nav>

      <span className="text-xs font-medium md:text-sm text-other ">Built in 2023</span>
    </footer>
  )
}
