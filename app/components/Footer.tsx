import Link from 'next/link'

import links from '../utils/links'

export default function Footer() {
  return (
    <footer
      className={`
        flex flex-col md:flex-row gap-4
        md:items-center md:justify-between 
        w-full max-w-[680px]
        px-5 min-[375px]:px-7 md:px-0
        mx-auto mt-auto pt-[100px]
        font-body
      `}
    >
      <nav
        className={`
          flex gap-2 md:gap-4 md:items-center
          text-[#C1C2E050]
        `}
      >
        {links.map(({ identification, ...link }) => (
          <Link
            key={identification}
            {...link}
            className="text-xs md:text-sm duration-300 hover:text-[#C1C2E0]"
          >
            {identification}
          </Link>
        ))}
      </nav>

      <span className="text-xs md:text-sm font-medium text-[#C1C2E050]">Built in 2023</span>
    </footer>
  )
}
