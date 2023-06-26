import React from 'react'
// import { motion } from 'framer-motion'
import { projects } from '@/utils/info'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'
import Head from 'next/head'

const page = () => {
  return (
    <>
      <Head>
        <title>Olivier-John Nzia | Contact</title>
      </Head>
      <main className=' p-12 w-full h-full'>
        <ContactForm />
      </main>

    </>
  )
}

export default page