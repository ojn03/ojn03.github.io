import Image from 'next/image'
import headshot from 'public/me.png'
import inf from 'public/infinite.jpg'
import bulb from 'public/lightbulb.svg'
import AnimatedWord from '@/components/AnimatedWord.jsx'
import { } from '../utils/wordGen'
import { words1, words2, words3, words4,words5,words6,words7,words8, nouns } from '../utils/wordGen.js'
import Link from 'next/link'

export default function Home() {

  return (

    <div className=' relative overflow-x-hidden max-w-full w-full flex lg:flex-row flex-col lg:justify-between self-center mx-0 my-auto '>
      <div className='lg:w-1/2 w-3/4  mx-auto'>
        <Image src={headshot} alt='olivier.jpg' className='p-11 mx-auto' />
      </div>
      <div className='self-center w-3/4 lg:w-1/2 flex gap-4 flex-col items-center my-auto lg:p-24 '>

        <div className='self-center text-center  lg:text-left'>
          <h1 className=' md:text-5xl text-4xl text-dark'>
            Hi I&apos;m Olivier, Software Engineer
          </h1>
          <span className=' block text-lg text-dark font-light pb-2'> (O-liv-ee-ay)</span>
          <p className='font-light text-xl'>
            As an engineer, I&apos;ve learned to turn ideas into reality. Today, I build things because its my passion. I do what I love and I love what I do.
          </p>
        </div>
        <div className=' z-10 w-full  flex lg:justify-normal gap-6 justify-center'>
          <Link
            className='  bg-dark text-light py-2 px-6 rounded-lg font-semibold hover:bg-light border-2 border-solid border-transparent hover:border-dark hover:text-dark transition-colors text-lg'
            href='/OlivierNziaResume.pdf'
            target='_blank' >
            Résumé
          </Link>
          <Link
            className='self-center text-dark underline underline-offset-4 font-semibold'
            target='_blank'
            href='mailto:ndjikenzia.o@northeastern.edu'>
            Say Hi!
          </Link>
        </div>
      </div>

      <div className=' bg-none overflow-hidden w-full h-full  absolute left-0 top-0 lg:flex lg:justify-between text-gold text-6xl hidden'>
        <div className='flex justify-between flex-col '>
          <AnimatedWord list={words1} />
          <AnimatedWord list={words2} />
          <AnimatedWord list={words3} />
        </div>

        <div className='flex text-center flex-col justify-between'>
          <AnimatedWord list={nouns} />
          <AnimatedWord list={words4} />
          <AnimatedWord list={words5} />
        </div>

        <div className='flex flex-col justify-between text-right'>
          <AnimatedWord list={words6} />
          <AnimatedWord list={words7} />
          <AnimatedWord list={words8} />
        </div>
      </div>
    </div>
  )
}
