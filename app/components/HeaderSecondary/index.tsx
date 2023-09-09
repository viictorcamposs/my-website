import Link from 'next/link'
import Image from 'next/image'

import links from '~/app/utils/links'

import profile from '~/public/static/img/profile.jpg'

import NavLink from '../NavLink'

export default function HeaderSecondary() {
  return (
    <header
      className={`
        fixed top-6 left-0 min-[680px]:left-[calc(50%-340px)] z-10
        w-full max-w-[680px] 
        py-3 px-5 rounded-lg
        flex items-center min-[600px]:justify-between
        bg-primary/20 backdrop-blur-md
        overflow-auto
      `}
    >
      <Link href="/" className="mr-8">
        <Image
          width={40}
          height={40}
          src={profile}
          alt="Victor Campos"
          placeholder="blur"
          className={`
            mr-8 rounded-full
          bg-[#e4e4e7]
            hover:transform hover:scale-110
            transition duration-300
          `}
        />
      </Link>

      <nav className="flex items-center gap-8">
        {links.map(link => (
          <NavLink key={link.identification} href={link.href} target={link.target}>
            {link.identification}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
