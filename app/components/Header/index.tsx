import NavBar from './NavBar'
import Menu from './Menu'
import Home from './Home'

export default function Header() {
  return (
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
  )
}
