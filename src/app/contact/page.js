import React from 'react'
import ContactForm from '@/components/ContactForm'
import Head from 'next/head'
import { ToastContainer } from 'react-toastify'

const page = () => {
  return (
    <>
      <Head>
        <title>Olivier-John Nzia | Contact</title>
      </Head>
      <main className=' p-12 w-full h-full'>
        <ContactForm />
        <ToastContainer />

      </main>
    </>
  )
}

export default page