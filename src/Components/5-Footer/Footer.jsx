import React from 'react'
import '../5-Footer/Footer.module.css'
import { motion } from 'framer-motion'

export default function Footer() {
    return (
        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 2 }} className='flex flex-wrap justify-between lg:px-10'>
            <ul className='lg:w-1/2 w-full flex justify-center gap-5 lg:justify-normal mb-5 lg:mb-0'>
                <li className='hover:tracking-wider hover:text-[#2bd5b6] duration-200'><a href="">About</a></li>
                <li className='hover:tracking-wider hover:text-[#2bd5b6] duration-200'><a href="">Projects</a></li>
                <li className='hover:tracking-wider hover:text-[#2bd5b6] duration-200'><a href="">Speaking</a></li>
            </ul>
            <div className='lg:w-1/2 w-full flex justify-center lg:justify-end'>
                <p className='text-slate-500'>© 2024 Spencer Sharp. All rights reserved</p>
            </div>
        </motion.footer>
    )
}
