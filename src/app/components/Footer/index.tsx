import Link from 'next/link'

import { GithubLogo, LinkedinLogo, Article, EnvelopeSimple } from './icons'

const GITHUB = 'https://github.com/viictorcamposs'
const LINKEDIN = 'https://linkedin.com/in/camposviictor'
const ARTICLE = '/articles'
const MAIL = '/contact'

const Footer: React.FC = () => {
  const textClassNames = `
    hidden sm:block 
    sm:text-[#464444] sm:dark:text-[#cdcedf] sm:dark:hover:text-[#f7f5f9] 
    sm:dark:transition-all sm:dark:duration-200 
    sm:font-body sm:font-normal sm:text-sm xl:text-base
  `

  const linkClassNames = 'sm:flex sm:items-center sm:gap-1 group'

  const iconClassNames = `
    w-6 h-6
    sm:hidden 
    text-[#0c0f17] dark:text-[#cdcedf]
    xl:block xl:w-5 xl:h-5 xl:opacity-0 
    xl:group-hover:opacity-100 
    xl:dark:group-hover:text-[#f7f5f9]
    xl:transition-opacity xl:duration-200
  `

  return (
    <footer className="flex items-center gap-4 sm:gap-5 justify-center h-full">
      <Link className={linkClassNames} href={GITHUB} target="_blank">
        <span className={textClassNames}>github</span>
        <GithubLogo className={iconClassNames} />
      </Link>

      <Link className={linkClassNames} href={MAIL}>
        <span className={textClassNames}>email</span>
        <EnvelopeSimple className={iconClassNames} />
      </Link>

      <Link className={linkClassNames} href={LINKEDIN} target="_blank">
        <span className={textClassNames}>linkedin</span>
        <LinkedinLogo className={iconClassNames} />
      </Link>

      <Link className={linkClassNames} href={ARTICLE}>
        <span className={textClassNames}>articles</span>
        <Article className={iconClassNames} />
      </Link>
    </footer>
  )
}

export default Footer
