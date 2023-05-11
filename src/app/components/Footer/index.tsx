import Link from 'next/link'

import { GithubLogo, LinkedinLogo, Article, EnvelopeSimple } from './icons'

const GITHUB = 'https://github.com/viictorcamposs'
const LINKEDIN = 'https://linkedin.com/in/camposviictor'
const ARTICLE = '/blog'
const MAIL = '/email'

const Footer: React.FC = () => {
  const textClassNames =
    'hidden sm:block sm:text-[#464444] sm:font-body sm:font-normal sm:text-sm xl:text-base'

  const linkClassNames = 'sm:flex sm:items-center sm:gap-1 group'

  const iconClassNames = `
    w-6 h-6
    sm:hidden 
    xl:block xl:w-5 xl:h-5 xl:opacity-0 
    xl:group-hover:opacity-100 
    xl:transition-opacity xl:duration-200
  `

  return (
    <footer className="flex items-center gap-4 sm:gap-5 justify-center h-full">
      <a className={linkClassNames} href={GITHUB}>
        <span className={textClassNames}>github</span>
        <GithubLogo className={iconClassNames} />
      </a>

      <Link className={linkClassNames} href={MAIL}>
        <span className={textClassNames}>email</span>
        <EnvelopeSimple className={iconClassNames} />
      </Link>

      <a className={linkClassNames} href={LINKEDIN}>
        <span className={textClassNames}>linkedin</span>
        <LinkedinLogo className={iconClassNames} />
      </a>

      <Link className={linkClassNames} href={ARTICLE}>
        <span className={textClassNames}>articles</span>
        <Article className={iconClassNames} />
      </Link>
    </footer>
  )
}

export default Footer
