import Image from 'next/image'
import headshot from 'public/hs.png'
import inf from 'public/infinite.jpg'
import bulb from 'public/lightbulb.svg'
import AnimatedWord from '@/components/AnimatedWord.jsx'
import { } from '../utils/wordGen'
import { genWord1,genWord2,genWord3,genNoun } from '../utils/wordGen.js'

export default function Home() {
  return (
    <div className='px-5 mb-0'>
      <div className=' text-[15rem] leading-[1] flex flex-row justify-between'>
        <div className='  p-0 m-0'>
          I am
        </div>
        <div className='opacity-0'>
          hi
        </div>
      </div>

      <div className=' flex flex-row justify-between'>
        <div className='text-9xl'>
          Olivier-John Nzia
        </div>
        <span className='mt-auto'>
        <AnimatedWord wordi='Innovative' className='text-9xl  opacity-0 ' gen={genWord1} />
        </span>
      </div>

      <div className='flex flex-row justify-between'>
        <Image
          className=' max-w-[20rem]  inline-block  '
          src={headshot}
        />

        <div className='self-end flex flex-col    '>
          <span className=' text-right text-[12rem] leading-[1] '>
            Software
          </span>
          <span className=' self-end text-[8rem] leading-[1] '>
            Engineer
          </span>
        </div>


      </div>


      {/* <div className='flex flex-row justify-between'>
        <div className=''>
          left
        </div>

        <div className=' text-auto mt-auto '>
          Engineer
        </div>
      </div> */}
      {/*       
      <div className=' mx-auto flex  flex-col gap-4 md:flex-row lg:p-12 md:p-10 p-5'>
        <Image
          className='mb-5 max-w-xs rounded-3xl inline-block  '
          src={headshot}
        />
        <article className=' flex flex-col justify-center  text-7xl font-semibold'>
          <span className='items-left p-2'>
            Hi
          </span>
          <span className='p-2'>
            I'm
          </span>
          <span className=' '>
            Olivier
          </span>

          <p className='text-xl text-center font-extralight'>
            (O-liv-ee-ay)
          </p>
        </article>
      </div>
      <div className=' justify-center flex gap-5 '>
        {/*make these adjectives interactive too
        <div className='text-action flex gap-5 font-extrabold text-3xl '>
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
        {/* <Image src={bulb} /> */}
      {/* <p>say hi</p> */}
      {/* add contact icon
      </div>

      <p>
        resume
      </p>
      <p>
        As a software engineer, I turn ideas into reality, and I love what I do. I am a leader, a teammate, and a problem solver.
      </p> */}
    </div>
  )
}
