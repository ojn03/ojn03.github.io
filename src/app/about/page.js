import React from 'react'
import me from 'public/me.jpg'
import Image from 'next/image'
import Experiences from '@/components/Experiences'
import Count from '@/components/Counter'
import scrolldown from 'public/scrolldown.gif'
export const metadata = {
  title: 'Olivier-John Nzia | About',
}
//todo scroll down arrow
const page = () => {
  return (


    <main className='flex w-full flex-col items-center justify-center'>
      {/* layout */}
      <div className='h-full inline-block z-0 p-32 pt-16'>
        <h1 className='mb-16 text-center'>Rome wasn&apos;t built in a day</h1>
        <div className='grid w-full grid-cols-8 gap-16'>
          {/* <div className=''>

            </div> */}
          <div className=' col-span-3 flex gap-4 flex-col items-start justify-start '>
            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Bio</h2>
            <p className='font-medium '>
              My name is <b>Olivier John Nzia</b> and I&apos;m a software engineer. I&apos;m pursuing my bachelors in Computer Science (with a software concentration) at <b>Northeastern University</b>.
            </p>
            <p className='font-medium'>
              I love to build things and I do so with a passion. I believe anything worthwile requires <b>dedication, effort, and time</b>, because Rome wasn&apos;t built in a day. Plan, Build, Test, and when you&apos;re done, <b>iterate and repeat</b>.
            </p>

            <p className='font-medium'>
              I&apos;m currently looking for a full-time co-op/internship for the Fall 2023 semester so if you&apos;re interested in working with me, feel free to reach out!
            </p>

            <p className=' font-medium'>
              On another note, I&apos;m a <b>standup comedian</b> on the side, a <b>gym rat</b>, and a <b>One Piece fanatic</b>.
            </p>
          </div>
          <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark p-8 bg-light '>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark ' />
            <Image src={me} alt='me.jpg' className='w-full h-auto rounded-2xl' />
          </div>
          <div className='col-span-2 flex flex-col items-end justify-between'>
            <div className='flex flex-col items-end justify-center'>
              <span className='text-5xl inline-block  font-bold'>
                <Count from={0} to={7} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>
                Years Coding
              </h2>
            </div>

            <div className='flex flex-col items-end justify-center'>
              <span className='text-5xl inline-block font-bold'>
                <Count from={0} to={12} />+
              </span>
              <h2 className='text-xl font-medium capitalize text-dark/75'>
                Languages and Technologies
              </h2>
            </div>

            <div className='flex flex-col items-end justify-center'>
              <span className='text-5xl inline-block font-bold'>
                <Count from={0} to={999} />+
              </span>
              <h2 className='text-base font-medium capitalize text-dark/75'>
                Years until Luffy finds the One Piece
              </h2>
            </div>



            {/* 2 years of experience, 12+ project repositories, 999+ hours coding, 200+ job rejections,  episodes until Luffy finds the One piece, 356 bones ina blue whale, hours of sleep, daily pushups */}

          </div>
          <div className='absolute bottom-5 '>
            <Image src={scrolldown} alt='scrolldown.gif' className='w-8' />
          </div>
        </div>

        <Experiences />
      </div>
    </main>
  )
}

export default page