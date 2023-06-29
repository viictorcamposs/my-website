import Profile from '../Profile'
import NavBar from '../NavBar'
import Bio from '../Bio'

export default function Header() {
  return (
    <header
      className={`
        w-full max-w-[680px]
        mx-auto mb-[100px]
        px-5 min-[375px]:px-7 md:px-0
      `}
    >
      <Profile />
      <Bio />
      <NavBar />
    </header>
  )
}
