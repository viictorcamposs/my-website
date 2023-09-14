import Footer from '../components/Footer'

import { poppins, inter } from '../fonts'

import './globals.css'
import 'server-only'

export const metadata = {
  title: {
    default: 'Victor Campos',
    template: `%s | Victor Campos`
  },
  description: 'Built with TypeScript, Next.js, Tailwind, MDX, Framer Motion and Vercel.',
  keywords: ['nextjs', 'blog', 'react', 'typescript', 'development', 'tech', 'career']
}

interface IRootLayout {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="flex flex-col py-[100px]">
        {children}

        <Footer />
      </body>
    </html>
  )
}
