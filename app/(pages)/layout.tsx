import { Poppins, Inter } from 'next/font/google'

import Header from '~/app/components/Header'
import Footer from '~/app/components/Footer'

import './globals.css'

import 'server-only'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata = {
  title: 'Victor Campos | Page',
  description: 'Created with ❤️ by Victor Campos'
}

interface IRootLayout {
  children: React.ReactNode
}

export default function RootLayout({ children }: IRootLayout) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="grid grid-rows-[66px_1fr_60px] min-h-screen max-w-full bg-[#06080d]">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
