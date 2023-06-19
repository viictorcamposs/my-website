import Elink from '~/enums/link'

import ActiveLink from '../ActiveLink'

export default function Desktop() {
  return (
    <nav className="hidden sm:flex sm:items-center">
      <ActiveLink href={Elink.ABOUT}>ABOUT</ActiveLink>

      <ActiveLink href={Elink.ARTICLES}>ARTICLES</ActiveLink>

      <ActiveLink href={Elink.PROJECTS}>PROJECTS</ActiveLink>
    </nav>
  )
}
