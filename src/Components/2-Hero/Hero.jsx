import React, { useEffect, useRef, useState } from 'react'
import '../2-Hero/Hero.module.css'
import mainPhoto from '../../assets/mainImg.jpg'
import { motion } from 'framer-motion'
import Lottie from "lottie-react";
import developer from "../../../public/developer.json";


export default function Hero() {

    const [mainText, setMainText] = useState(
        `Full Stack Web Developer skilled in building modern, scalable web applications using React, Next.js, and Node.js. Experienced in crafting dynamic frontends with React, Vite, Tailwind CSS, and efficient backends with Express.js, NestJS, and MongoDB/MySQL. Proficient in implementing RESTful APIs, authentication with JWT, and database performance tuning. Delivered multiple full-stack projects including e-commerce platforms with features like product filtering, shopping carts, and secure user management. Enthusiastic about clean code, agile methodologies, and delivering high-quality solutions in collaborative team environments.`
    )
    const [isOpen, setIsOpen] = useState(false)
    // const [showCv, setShowCv] = useState(false)
    const cv = useRef()
    const cvOut = useRef()
    useEffect(() => {
        window.addEventListener('scroll', () => {
            // console.log(cv.current.classList);
            if (window.scrollY <= 500) {
                cv.current.classList.remove('hidden')
                cvOut.current.classList.add('hidden')
            } else if (window.scrollY > 470) {
                cv.current.classList.add('hidden')
                cvOut.current.classList.remove('hidden')
                cvOut.current.classList.add('fixed')
                cvOut.current.classList.add('flex')
            }
        })
    }, [])


    let pvariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: .03
            }
        }
    }
    let svariants = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
        }
    }


    return (
        <div>
            <section id='about' className='flex flex-wrap mt-20 md:p-16 lg:p-10 p-2'>
                <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-3/5'>
                    <div className='flex items-end mb-10'>
                        <img onClick={() => setIsOpen(!isOpen)} className='cursor-pointer w-40 rounded-full border border-[#414148]' src={mainPhoto} alt="main Img" />
                        <i className="fa-solid fa-check"></i>
                    </div>
                    <motion.h1 variants={pvariants} initial='hidden' whileInView='visible' transition={{ duration: 2 }} className='text-lg dark:text-slate-500 text-slate-900  capitalize'>{mainText.split('').map((chr, index) => <motion.span key={index} variants={svariants}>{chr}</motion.span>)}</motion.h1>
                    <p className='text-slate-800 dark:text-slate-400 my-5'></p>
                    <div className='my-10 z-50'>
                        <a ref={cv} href='Abdalrhman-Mohamed-FullStack.pdf' download={true} className='w-40 from-slate-400 to-emerald-400 hover:from-emerald-400 font-semibold hover:to-slate-700 rounded-lg px-10 py-4 bg-gradient-to-r dark:from-slate-700 dark:to-emerald-800 dark:hover:from-emerald-800 dark:hover:to-slate-700'>Download CV</a>
                    </div>
                    <ul className='flex gap-5'>
                        <motion.li whileHover={{ rotate: '360deg', scale: 1.1, color: '#2bd5b6', scale: 1.5 }} transition={{ duration: 1 }}><a target='_blank' href={'https://github.com/Aminoo0'}><i className="fa-brands fa-github text-2xl cursor-pointer text-slate-900 dark:text-slate-100"></i></a></motion.li>
                        <motion.li whileHover={{ rotate: '360deg', scale: 1.1, color: '#2bd5b6', scale: 1.5 }} transition={{ duration: 1 }}><a target='_blank' href={'https://www.linkedin.com/in/abdalrhman-mohamed-815633260/'} ><i className="fa-brands fa-linkedin text-2xl cursor-pointer text-slate-900 dark:text-slate-100"></i></a></motion.li>
                    </ul>
                </motion.div>
                <motion.div drag dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }} initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-2/5'>
                    <Lottie animationData={developer} />
                </motion.div>
                <div onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'fixed' : 'hidden'} cursor-pointer z-[9999] top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black`}>
                    <img className='w-96 rounded-full border border-[#414148]' src={mainPhoto} alt="main Img" />
                </div>
            </section>
            <motion.div initial={{ y: 100 }} whileHover={{ scale: 1.15 }} whileInView={{ y: 0 }} transition={{ duration: .5 }} ref={cvOut} className={`hidden w-3/4 justify-center bottom-20 z-[9999]`}>
                <a href='Abdalrhman-Mohamed-FullStack.pdf' download={true} className='w-2/3 from-slate-400 to-emerald-400 hover:from-emerald-400 hover:to-slate-400 font-semibold lg:w-1/4 text-center bg-gradient-to-r dark:from-slate-700 dark:to-emerald-800 dark:hover:from-emerald-800 dark:hover:to-slate-700 rounded-lg px-10 py-4'>Download CV</a>
            </motion.div>
        </div>
    )
}
