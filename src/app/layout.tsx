import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReduxProvider } from '@/redux/features/provider'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Apple Store',
  description: 'Apple accessories store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={roboto.className}>
        <ReduxProvider>
          <Navbar />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  )
}
