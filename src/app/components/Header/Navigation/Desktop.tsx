import ActiveLink from '../../ActiveLink'

const Desktop: React.FC = () => (
  <nav className="hidden sm:flex sm:items-center">
    <ActiveLink href="/about">ABOUT</ActiveLink>

    <ActiveLink href="/blog">ARTICLES</ActiveLink>

    <ActiveLink href="/email">EMAIL</ActiveLink>
  </nav>
)

export default Desktop
