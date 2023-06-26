import AnimatedWord from '@/components/AnimatedWord'
import Head from 'next/head'
import React from 'react'
import me from 'public/hs.png'
import Image from 'next/image'
import Experiences from '@/components/Experiences'
//todo find a different picture
const page = () => {
  return (
    <>
      <Head>
        <title>Olivier-John Nzia | About</title>
      </Head>

      <main className='flex w-full flex-col items-center justify-center '>
        {/* layout */}
        <div className='h-full inline-block z-0 p-32 pt-16'>
          <h1 className='mb-16 text-center'>Rome wasn&apos;t built in a day</h1>
          <div className='grid w-full grid-cols-8 gap-16'>
            {/* <div className=''>

            </div> */}
            <div className='col-span-3 flex flex-col items-start justify-start '>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Bio</h2>
              <p className='font-medium '>
                 My name is <b>Olivier John Nzia</b> and I&apos;m a software engineer. I&apos;m pursuing my bachelors in Computer Science (with a software concentration) at Northeastern University.
              </p>
              <p className='my-4 font-medium'>
                I love to build things and I do so with a passion. I believe anything worthwile requires dedication, effort, and time, because Rome wasn&apos;t built in a day. Plan, Build, Test, and when you&apos;re done, iterate and repeat.
              </p>
              <p className='font-medium'>
                Im currently looking for a full-time co-op/internship for the Fall 2023 semester so if you&apos;re interested in working with me, feel free to reach out!
              </p>
            </div>
            <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark p-8 bg-light '>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark '/>
              <Image src={me} alt='me.jpg' className='w-full h-auto rounded-2xl'/>
            </div>
            <div>
              something interesting
            </div>
          </div>
          
          <Experiences />
        </div>
      </main>
    </>)
}

export default page