"use client"

import Link from 'next/link'
import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import { Flip, toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {

    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_S_ID, process.env.NEXT_PUBLIC_EMAILJS_T_ID, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_P_KEY)
            .then((result) => {
                console.log(result.text);

                toast.success('Message Sent!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Flip
                });
            }, (error) => {
                console.log(error.text);
                toast.error('Error! please try again later or send me an email', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    transition: Flip

                });
            });
    }

    return (
        <>
            <form ref={formRef} onSubmit={sendEmail} className='p-10  bg-dark flex flex-col items-center mlg:w-[55%] xl:w-[45%] md:w-4/5 h-fit mx-auto  shadow-2xl rounded-lg'>

                <div className='pb-3  w-full  text-left text-light'>
                    <h1 className=' text-5xl'>Contact <span className='text-gold'>Me</span></h1>
                    <p>
                        or <Link href='mailto:ndjikenzia.o@northeatern.edu' className='underline decoration-1 underline-offset-2 text-gold'>email</Link> me at <Link href='mailto:ndjikenzia.o@northeatern.edu' className='text-gold'>ndjikenzia.o@northeatern.edu</Link>
                    </p>
                </div>

                <div className='flex w-full flex-col gap-5 text-lg'>
                    <input className='rounded-md p-2 '
                        type="text" required name='name' placeholder='Name' />
                    <input className='rounded-md p-2'
                        type="email" required name='email' placeholder='Email' />
                    <textarea className='rounded-md p-2'
                        name='message' required placeholder='Message...' rows={10} />
                    <button type='submit' className='bg-gold/70 rounded-md py-2 px-3 text-dark/90 font-bold text-center items-center w-fit hover:bg-gold/100 hover:text-dark/100 h-fitduration-200 hover:cursor-pointer transition-all animate-bounce'>
                        Send
                    </button>
                </div>
            </form>
        </>

    )
}

export default ContactForm