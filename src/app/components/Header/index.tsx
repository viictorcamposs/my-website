import ThemeToggle from './ThemeToggle'
import MobileNav from './Navigation/Mobile'
import DesktopNav from './Navigation/Desktop'
import BackToHomePage from './BackToHomePage'

export default function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between w-screen max-w-7xl mx-auto px-4">
      <BackToHomePage />

      <MobileNav />

      <DesktopNav />

      <ThemeToggle />
    </header>
  )
}
