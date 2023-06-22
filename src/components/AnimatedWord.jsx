"use client"

import React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { variant } from '../utils/motionVariants.js'

const AnimatedWord = ({ className, wordi, gen }) => {
  const [word, setWord] = useState(wordi)
  return (
    <motion.span
      onClick={() => { setWord(gen( word )) }}
      variants={variant}
      initial='hidden'
      animate='visible'
      whileHover={{ cursor: 'pointer', scale: 1.1 }}
      key={word}
      className={className}
    >
      {word}
    </motion.span>
  )
}

export default AnimatedWord