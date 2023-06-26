"use client"
import React, { useRef } from 'react'
import { experiences } from '@/utils/info'
import Link from 'next/link'
import { motion, useScroll } from 'framer-motion'
import LineIcon from './LineIcon'
import Exp from './Exp'

const Experiences = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl my-32 w-full text-center'>
                Experiences
            </h2>

            <div ref={ref} className='w-3/4 mx-auto relative'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className=' absolute left-9 top-0 w-1 h-full bg-dark origin-top' />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    {experiences.map((exp, idx) => (<Exp  exp={exp} key={idx} />)
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Experiences
