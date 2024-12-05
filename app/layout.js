import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Rakesh Mirji - Portfolio',
  description: 'A Portfolio Website with all my works',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+" bg-[url('../public/landingpage4.svg')] bg-center bg-cover bg-no-repeat"}>{children}</body>
    </html>
  )
}
