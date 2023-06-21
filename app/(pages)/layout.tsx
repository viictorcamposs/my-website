import NavBar from '../components/NavBar'
import Menu from '../components/Menu'
import { LinkedinLogo, GithubLogo, Article } from '../components/icons'
import Home from '../components/Home'
import FooterLink from '../components/FooterLink'

import ELink from '~/app/enums/link'

import { inter, poppins } from '../fonts'

import './globals.css'
import 'server-only'

export const metadata = {
  title: 'Victor Campos | Page',
  description: 'Created with ❤️ by Victor Campos'
}

interface IRootLayout {
  children: React.ReactNode
}

export type FooLinks = {
  identification: string
  href: string
  target: string
  icon: JSX.Element
}

export default function RootLayout({ children }: IRootLayout) {
  const fooLinks: FooLinks[] = [
    {
      identification: 'github',
      href: ELink.GITHUB,
      target: '_blank',
      icon: <GithubLogo className="w-6 h-6 xl:w-5 xl:h-5 " />
    },
    {
      identification: 'linkedIn',
      href: ELink.LINKEDIN,
      target: '_blank',
      icon: <LinkedinLogo className="w-6 h-6 xl:w-5 xl:h-5 " />
    },
    {
      identification: 'articles',
      href: ELink.ARTICLES,
      target: '_self',
      icon: <Article className="w-6 h-6 xl:w-5 xl:h-5 " />
    }
  ]

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="grid grid-rows-[66px_1fr_60px] min-h-screen max-w-full bg-[#06080d]">
        <header
          className={`
            relative z-10
            w-screen max-w-7xl mx-auto px-5 sm:px-6 xl:px-5
            flex items-center justify-between
          `}
        >
          <Home />

          <Menu />

          <NavBar />
        </header>

        {children}

        <footer
          className={`
            flex gap-4 sm:gap-5 lg:gap-12 
            items-center justify-center
            h-full
          `}
        >
          {fooLinks.map(link => (
            <FooterLink key={link.identification} {...link}>
              {link.icon}
            </FooterLink>
          ))}
        </footer>
      </body>
    </html>
  )
}
