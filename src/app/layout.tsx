import { Poppins, Inter } from 'next/font/google'

import { PrismicPreview } from '@prismicio/next'

import Header from './components/Header'
import Footer from './components/Footer'

import { repositoryName } from '../../prismicio'

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
    <html lang="en" className={`dark ${inter.variable} ${poppins.variable}`}>
      <body className="grid grid-rows-[66px_1fr_60px] min-h-screen max-w-full bg-[#f7f5f9] dark:bg-[#0c0f17]">
        <Header />

        {children}
        <PrismicPreview repositoryName={repositoryName} />

        <Footer />
      </body>
    </html>
  )
}
