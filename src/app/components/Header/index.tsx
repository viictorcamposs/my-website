import ThemeToggle from './ThemeToggle'
import MobileNav from './Navigation/Mobile'
import DesktopNav from './Navigation/Desktop'
import BackToHomePage from './BackToHomePage'

const Header: React.FC = () => (
  <header className="relative flex items-center justify-between w-screen px-4">
    <BackToHomePage />

    <MobileNav />

    <DesktopNav />

    <ThemeToggle />
  </header>
)

export default Header
