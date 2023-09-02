import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio',
  description: 'create a portfolio app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+" bg-[url('../public/landingpage4.svg')] bg-center bg-cover bg-no-repeat"}>{children}</body>
    </html>
  )
}
