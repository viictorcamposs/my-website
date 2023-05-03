import { Poppins, Inter } from 'next/font/google'

import Header from './components/Header'
import Footer from './components/Footer'

import './globals.css'

import 'server-only'

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap'
})

const inter = Inter({
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
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
    <html lang="en" className={`${inter.variable} ${poppins.variable} overflow-x-hidden`}>
      <body className="grid grid-rows-[66px_1fr_60px] min-h-screen bg-[#f7f5f9]">
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  )
}
