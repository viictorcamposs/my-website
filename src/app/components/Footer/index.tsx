import Link from 'next/link'

import { GithubLogo, LinkedinLogo, Article, EnvelopeSimple } from './icons'

const GITHUB = 'https://github.com/viictorcamposs'
const LINKEDIN = 'https://linkedin.com/in/camposviictor'
const ARTICLE = '/articles'
const MAIL = '/email'

const Footer: React.FC = () => (
  <footer className="flex items-center gap-4 justify-center h-full">
    <a className="sm:flex sm:items-center sm:gap-1" href={GITHUB}>
      <span className="hidden sm:block">github</span>
      <GithubLogo className="w-7 h-7 sm:w-5 sm:h-5" />
    </a>

    <Link className="sm:flex sm:items-center sm:gap-1" href={MAIL}>
      <span className="hidden sm:block">email</span>
      <EnvelopeSimple className="w-7 h-7 sm:w-5 sm:h-5" />
    </Link>

    <a className="sm:flex sm:items-center sm:gap-1" href={LINKEDIN}>
      <span className="hidden sm:block">linkedIn</span>
      <LinkedinLogo className="w-7 h-7 sm:w-5 sm:h-5" />
    </a>

    <Link className="sm:flex sm:items-center sm:gap-1 group" href={ARTICLE}>
      <span className="hidden sm:block">articles</span>
      <Article className="w-7 h-7 sm:w-5 sm:h-5 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-200" />
    </Link>
  </footer>
)

export default Footer
