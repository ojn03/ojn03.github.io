import NavBar from '@/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'
import GA from '@/components/Analytics'
import Script from 'next/script'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Olivier-John Nzia',
  description: 'A cool guy',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=' m-0 p-0 '>
          <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PF5DSP6');
        `}
    </Script>
   <head>
       
        <link rel='icon' href='/icon.svg' />
      </head>
      <body className='m-0 p-0 w-screen h-screen bg-light -z-10 flex flex-col'>
        <NavBar />
        {children}
        <noscript
        dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PF5DSP6" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
        }} 
    />
      </body>
    </html>
  )
}
