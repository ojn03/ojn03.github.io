"use client"

import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { variant } from '../utils/motionVariants.js'

import { gen } from '@/utils/wordGen.js'

const AnimatedWord = ({ className, wordi, list }) => {
  const [word, setWord] = useState(wordi)
  return (
    <motion.span
      onClick={() => { setWord(gen(list, word)) }}
      variants={variant}
      initial='hidden'
      animate='inOut'
      whileHover={{transition:{duration:1}, cursor: 'pointer', scale: 1.05, opacity: 1}}
      key={word}
      className={className + ' inline-block text-[#ffd700]'}
    >
      {word}
    </motion.span>
  )
}

export default AnimatedWord