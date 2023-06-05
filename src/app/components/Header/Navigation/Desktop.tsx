import ActiveLink from '../ActiveLink'

export default function Desktop() {
  return (
    <nav className="hidden sm:flex sm:items-center">
      <ActiveLink href="/about">ABOUT</ActiveLink>

      <ActiveLink href="/articles">ARTICLES</ActiveLink>

      <ActiveLink href="/contact">EMAIL</ActiveLink>
    </nav>
  )
}
