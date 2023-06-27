import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Olivier-John Nzia',
  description: 'A cool guy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' m-0 p-0 '>
   
      <body className='m-0 p-0 w-screen h-screen bg-light z-0 flex flex-col'>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
