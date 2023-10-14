import Footer from '../components/Footer'

import { poppins, inter } from '../fonts'

import '../styles/globals.css'
import 'server-only'

export const metadata = {
  metadataBase: new URL('https://victorcampos.vercel.app'),
  title: {
    default: 'Victor Campos',
    template: `%s | Victor Campos`
  },
  description: 'Built with TypeScript, Next.js, Tailwind, MDX, Framer Motion and Vercel.',
  verification: {
    google: '' // ? search how to get this verification id from google
  }
}

interface IRootLayout {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="flex flex-col">
        {children}

        <Footer />
      </body>
    </html>
  )
}
