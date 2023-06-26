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


const LinerClass = (path) => {
  return path !== usePathname() ? 't2' : 'underline decoration-2 underline-offset-[9px]';
}
const NavBar = () => {
  return (

    //todo add hamburger menu on mobile
    //todo add absolute ojn icon
    //todo add theme toggle
    <div className="flex  text-dark justify-between py-5 px-10   text-lg">

      <nav className="flex items-center flex-wrap gap-3">
        <Link className= {LinerClass('/')}href='/'>Home</Link>
        <Link className={LinerClass('/about')} href='/about'>About</Link>
        <Link className={LinerClass('/projects')} href='/projects'>Projects</Link>
        <Link className={LinerClass('/contact')} href='/contact'>Contact</Link>
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