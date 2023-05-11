import Link from 'next/link'

const Desktop: React.FC = () => {
  const linkClassNames = `
    rounded
    py-3 px-5 
    text-sm font-normal font-body text-[#464444]
    hover:bg-[#0c0f17]/10 hover:text-[#0c0f17]
    transition-all duration-200
    xl:text-base
  `

  return (
    <nav className="hidden sm:flex sm:items-center">
      <Link href="/about" className={linkClassNames}>
        ABOUT
      </Link>

      <Link href="/blog" className={linkClassNames}>
        ARTICLES
      </Link>

      <Link href="/portfolio" className={linkClassNames}>
        PORTFOLIO
      </Link>

      <Link href="/email" className={linkClassNames}>
        EMAIL
      </Link>
    </nav>
  )
}

export default Desktop
