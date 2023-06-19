import Link from 'next/link'

import Elink from '~/enums/link'

import { GithubLogo, LinkedinLogo, Article } from './icons'

const textClassNames = `
    hidden sm:block 
    sm:text-[#c7c8e0] sm:hover:text-[#f7f5f9] 
    sm:transition-all sm:duration-200 
    sm:font-body sm:font-normal sm:text-sm xl:text-base
  `

const linkClassNames = `
  sm:flex sm:items-center sm:gap-1 
  group relative
`

const iconClassNames = `
    w-6 h-6
    sm:hidden 
    text-[#c7c8e0]
    xl:absolute xl:-right-6
    xl:block xl:w-5 xl:h-5 xl:opacity-0 
    xl:group-hover:opacity-100 
    xl:group-hover:text-[#f7f5f9]
    xl:transition-opacity xl:duration-200
  `

export default function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 sm:gap-5 lg:gap-12 h-full">
      <Link className={linkClassNames} href={Elink.GITHUB} target="_blank">
        <span className={textClassNames}>github</span>
        <GithubLogo className={iconClassNames} />
      </Link>

      <Link className={linkClassNames} href={Elink.LINKEDIN} target="_blank">
        <span className={textClassNames}>linkedIn</span>
        <LinkedinLogo className={iconClassNames} />
      </Link>

      <Link className={linkClassNames} href={Elink.ARTICLES}>
        <span className={textClassNames}>articles</span>
        <Article className={iconClassNames} />
      </Link>
    </footer>
  )
}
