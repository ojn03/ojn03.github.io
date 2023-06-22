import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Olivier John Nzia',
  description: 'A cool guy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
      <body className=' bg-light'>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
