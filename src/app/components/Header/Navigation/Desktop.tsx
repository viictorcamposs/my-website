import ActiveLink from '../ActiveLink'

export default function Desktop() {
  return (
    <nav className="hidden sm:flex sm:items-center">
      <ActiveLink href="/about">ABOUT</ActiveLink>

      <ActiveLink href="/blog">ARTICLES</ActiveLink>

      <ActiveLink href="/email">EMAIL</ActiveLink>
    </nav>
  )
}
