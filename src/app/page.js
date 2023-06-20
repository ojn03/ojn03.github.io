"use client"
import Image from 'next/image'
import headshot from 'public/headShot.jpeg'
import inf from 'public/infinite.jpg'
import bulb from 'public/lightbulb.svg'
import { motion } from 'framer-motion'
import { variant } from '@/utils/motionVariants'

export default function Home() {
  return (
    <div className='xl:p-32 lg:p-28 md:p-24 p-16'>
      <div className=' text-7xl w-4/5 mx-auto justify-center items-center flex gap-5 text-dark2'>
        <Image
          className='mb-5 rounded-3xl h-auto w-full'
          src={headshot}
        />
        <div className=''>
          <span className='inline-block p-2'>
            Hi
          </span>
          <span className='inline-block p-2'>
            I'm
          </span>
          <span className='inline-block '>
            Olivier
          </span>
          <p className='text-xl font-extralight'>
            (O-liv-ee-ay)
          </p>
        </div>
      </div>
      <div className='mx-auto justify-center items-center flex gap-5 text-dark2'>
        {/*make these adjectives interactive too*/}
        <div className='text-action font-extrabold text-3xl '>
          <motion.span
            onClick={() => { }}
            variants={variant}
            initial='hidden'
            animate='visible'
            whileHover={{ cursor: 'pointer', scale: 1.1 }}
            // key={O}
            className='inline-block z-10'
          >
            Leader
          </motion.span>
          <motion.span
            onClick={() => { }}
            variants={variant}
            initial='hidden'
            animate='visible'
            whileHover={{ cursor: 'pointer', scale: 1.1 }}
            // key={O}
            className='inline-block z-10'
          >
            Teammate
          </motion.span>
          <motion.span
            onClick={() => { }}
            variants={variant}
            initial='hidden'
            animate='visible'
            whileHover={{ cursor: 'pointer', scale: 1.1 }}
            // key={O}
            className='inline-block z-10'
          >
            Engineer
          </motion.span>
        </div>
        <p>
          As a software engineer, I turn ideas into reality, and I love what I do. I am a leader, a teammate, and a problem solver.
        </p>
        <p>
          resume
        </p>
        <Image src={bulb} />
        <p>say hi</p>
        {/* add contact icon*/}
      </div>
    </div>
  )
}
