import Link from 'next/link'
import React from 'react'

const ContactForm = () => {
    return (
        <form className='p-10  bg-dark/75 flex flex-col items-center mlg:w-[55%] xl:w-[45%] md:w-4/5 h-fit mx-auto  shadow-2xl rounded-lg'>

            <div className='pb-3  w-full  text-left text-light'>
                <h1 className=' text-5xl'>Contact <span className='text-gold'>Me</span></h1>
                <p>
                    or <Link href='mailto:ndjikenzia.o@northeatern.edu' className='underline decoration-1 underline-offset-2 text-gold'>email</Link> me at <Link href='mailto:ndjikenzia.o@northeatern.edu' className='text-gold'>ndjikenzia.o@northeatern.edu</Link>
                </p>
            </div>

            <div className='flex w-full flex-col gap-5 text-lg'>
                <input className='rounded-md p-2 '
                    type="text" placeholder='Name' />
                <input className='rounded-md p-2'
                    type="email" placeholder='Email' />
                <textarea className='rounded-md p-2'
                    placeholder='Message...' rows={10} />
                <button type='submit' className='bg-gold/70 rounded-md py-2 px-3 text-dark/90 font-bold text-center items-center w-fit hover:bg-gold/100 hover:text-dark/100 h-fitduration-200 hover:cursor-pointer transition-all animate-bounce'>
                    <div className=' '>Send</div>
                </button>
            </div>
        </form>
    )
}

export default ContactForm