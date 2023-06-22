"use client"

import Link from 'next/link'
import React from 'react'
import Name from './Name'
import Image from 'next/image'
import linkedin from 'public/linkedin.svg'
import githubWhite from 'public/githubWhite.svg'
import github from 'public/github.svg'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'


const linerClass = (path) => {
  return path !== usePathname() ? 't2' : 'underline decoration-2 underline-offset-[9px]';
}
const NavBar = () => {
  return (

    //todo add hamburger menu on mobile
    //todo add absolute ojn icon
    //todo add theme toggle
    <div className="flex bg-light text-dark justify-between p-8 px-10 pb-7  text-lg">

      <nav className="flex items-center flex-wrap gap-3">
        <Link className= {linerClass('/')}href='/'>Home</Link>
        <Link className={linerClass('/about')} href='/about'>About</Link>
        <Link className={linerClass('/projects')} href='/projects'>Projects</Link>
        <Link className={linerClass('/contact')} href='/contact'>Contact</Link>
      </nav>
      <nav className="flex items-center flex-wrap gap-5">
        <Name />
        <Link target='_blank' href='https://www.linkedin.com/in/ojn' className='w-6 ml-4'>
          <Image src={linkedin} />
        </Link>
        <Link target='_blank' href='https://github.com/ojn03' className='w-6'>
          <Image src={github} className='' />
        </Link>
      </nav>
    </div>
  )
}

export default NavBar