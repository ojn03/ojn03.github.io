import { motion } from 'framer-motion';
import React, { useRef } from 'react';
import LineIcon from './LineIcon';

const Exp = ({ exp: { position, location, company, description, date, link } }) => {
    const ref = useRef(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-3/5 mx-auto flex flex-col items-center justify-between '>
            <LineIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: .5, type: 'spring' }}>
                <h3 className='capitalize font-bold text-2xl'>
                    {position}&nbsp;<a className='capitalize text-gold' href={link}>@{company}</a>
                </h3>
                <span className='capitalize font-medium text-dark/75 '>
                    {date} | {location}
                </span>
                <p className='font-medium w-full'>
                    {description}
                </p>
            </motion.div>
        </li>)
}

export default Exp;