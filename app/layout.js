import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['greek'] }) //`cyrillic`, `cyrillic-ext`, `greek`, `greek-ext`, `latin`, `latin-ext`, `vietnamese`
import Footer from './components/footer'

export const metadata = {
  title: 'Rakesh Mirji - Portfolio',
  description: 'A Portfolio Website with all my works',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className+" bg-[#121a21] "}>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
