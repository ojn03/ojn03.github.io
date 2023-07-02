"use client"

import Link from 'next/link'
import React from 'react'
import Name from './Name'
import { usePathname } from 'next/navigation'
import { LinkedIn, Github, } from '../../public/icons'


const LinerClass = (path) => {
  return path !== usePathname() ? 't2' : 'underline decoration-2 underline-offset-[9px]';
}
const NavBar = () => {
  return (

    //todo add hamburger menu on mobile
    //todo add absolute ojn icon
    //todo maybe add theme toggle
    <div className="flex  text-dark justify-between py-5 px-10   text-xl">

      <nav className="flex items-center flex-wrap gap-3">
        <Link className={LinerClass('/')} href='/'>Home</Link>
        <Link className={LinerClass('/about')} href='/about'>About</Link>
        <Link className={LinerClass('/projects')} href='/projects'>Projects</Link>
        <Link className={LinerClass('/contact')} href='/contact'>Contact</Link>
      </nav>
      <nav className="flex items-center flex-wrap gap-5">
        <Name />
        <Link passHref target='_blank' href='https://www.linkedin.com/in/ojn' className='w-6 ml-4'>
          <LinkedIn />
        </Link>
        <Link passHref target='_blank' href='https://github.com/ojn03' className='w-6'>
          <Github />
        </Link>
      </nav>
    </div>
  )
}

export default NavBar