import { poppins } from '../fonts'

import './globals.css'
import 'server-only'

export const metadata = {
  title: 'Victor Campos | Web Developer from Brazil',
  description: 'Built with Next.js, Tailwind, MDX and Vercel'
}

interface IRootLayout {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body
        className={`
          py-[100px]
          bg-[#06080d]
        `}
      >
        {children}
      </body>
    </html>
  )
}
