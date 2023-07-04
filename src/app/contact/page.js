import React from 'react'
import ContactForm from '@/components/ContactForm'
import { ToastContainer } from 'react-toastify'

//todo scale using fabform.io or sendgrid for higher quotas

export const metadata = {
  title: 'Olivier-John Nzia | Contact',
  description: 'A cool guy',
}

const page = () => {
  return (
    <main className=' p-12 w-full h-full'>
      <ContactForm />
      <ToastContainer />
    </main>
  )
}

export default page