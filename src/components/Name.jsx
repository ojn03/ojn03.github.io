'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { genOs, genJs, genNs } from '@/utils/NameGen'
import { useState } from 'react'
import { variant } from '../utils/motionVariants.js'


const Name = () => {
    const [O, setO] = useState("Olivier")
    const [J, setJ] = useState("John")
    const [N, setN] = useState("Nzia")
    return (
        <div
            className="text-dark w-fit rounded-md  hidden md:flex gap-1.5 py-1"
        >
            <motion.span
                onClick={() => { setO(genOs({ O })) }}
                variants={variant}
                initial='hidden'
                animate='visible'
                whileHover={{ cursor: 'pointer', scale: 1.1 }}
                key={O}
                className='z-10'
            >
                {O}
            </motion.span>
            <motion.span
                onClick={() => { setJ(genJs({ J })) }}
                variants={variant}
                initial='hidden'
                animate='visible'
                whileHover={{ cursor: 'pointer', scale: 1.1 }}
                key={J}
                className='z-10'
            >
                {J}
            </motion.span>
            <motion.span
                onClick={() => { setN(genNs({ N })) }}
                variants={variant}
                initial='hidden'
                animate='visible'
                whileHover={{ cursor: 'pointer', scale: 1.1 }}
                key={N}
                className='z-10'
            >
                {N}
            </motion.span>
        </div>

    )
}

export default Name