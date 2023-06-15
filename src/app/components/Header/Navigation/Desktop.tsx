import ELinks from '~/utils/links'

import ActiveLink from '../ActiveLink'

export default function Desktop() {
  return (
    <nav className="hidden sm:flex sm:items-center">
      <ActiveLink href={ELinks.ABOUT}>ABOUT</ActiveLink>

      <ActiveLink href={ELinks.ARTICLES}>ARTICLES</ActiveLink>

      <ActiveLink href={ELinks.PROJECTS}>PROJECTS</ActiveLink>
    </nav>
  )
}
