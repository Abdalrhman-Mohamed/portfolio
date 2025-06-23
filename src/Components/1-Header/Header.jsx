import React, { useEffect, useState } from 'react'
import '../1-Header/Header.module.css'
import { motion, AnimatePresence } from 'framer-motion'


export default function Header() {

    const [modle, setModle] = useState(false)
    const [showArrowUp, setShowArrowUp] = useState(false)
    const [theme, setTheme] = useState(localStorage.getItem('mode') ?? 'dark')
    const [showlight, setShowLight] = useState(theme == 'light' ? true : false)

    function toUp() {
        window.scroll({
            top: 0,
            behavior: 'smooth'
        })
    }

    useEffect(() => {
        if (theme === 'light') {
            document.body.classList.add('light')
            document.body.classList.remove('dark')
        } else {
            document.body.classList.add('dark')
            document.body.classList.remove('light')
        }
    }, [theme])


    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            setShowArrowUp(true)
        } else {
            setShowArrowUp(false)
        }
    })

    return (<>
        <motion.header initial={{ opacity: 0, y: -50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='flex md:justify-center items-center gap-16 mt-5 justify-evenly'>
            <div className='hidden md:block'></div>
            <button onClick={() => setModle(true)} className='md:hidden p-2 flex rounded-lg border border-[#e0e0e3] hover:border-[#252529] duration-200'>
                <i className="fa-solid fa-sliders text-2xl"></i>
            </button>
            <nav className='bg-[#bbbbc4] text-[#1e1e20] dark:bg-[#252529] dark:text-[#e0e0e3] p-2 px-5 rounded-3xl border border-[#1b1b1c] dark:border-[#e0e0e3] shadow-lg hidden md:block'>
                <ul className='flex gap-5'>
                    <li className='hover:text-[#1d3c65] dark:hover:text-[#2bd5b6] duration-200'><a href="">About</a></li>
                    <li className='hover:text-[#1d3c65] dark:hover:text-[#2bd5b6] duration-200'><a href="">Articals</a></li>
                    <li className='hover:text-[#1d3c65] dark:hover:text-[#2bd5b6] duration-200'><a href="">Projects</a></li>
                    <li className='hover:text-[#1d3c65] dark:hover:text-[#2bd5b6] duration-200'><a href="">Speaking</a></li>
                    <li className='hover:text-[#1d3c65] dark:hover:text-[#2bd5b6] duration-200'><a href="">Contact</a></li>
                </ul>
            </nav>
            <button onClick={() => {
                setShowLight(!showlight)
                localStorage.setItem('mode', theme == 'dark' ? 'light' : 'dark')
                setTheme(localStorage.getItem('mode'))
            }} className='bg-[#252529] text-[#2bd5b6] dark:bg-slate-300 dark:text-[#161a19] p-3 w-14 rounded-full border border-[#e0e0e3] dark:border-[#19191e] flex items-center justify-center hover:border-[#252529] hover:dark:border-[#82828e] duration-200'>
                {showlight ? <motion.i whileHover={{ rotate: '360deg', scale: 1.3 }} className="fa-solid fa-moon"></motion.i>
                    : <motion.i whileHover={{ rotate: '360deg', scale: 1.3 }} className="fa-regular fa-lightbulb"></motion.i>}
            </button>
            <AnimatePresence>
                {modle ?
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className='fixed top-0 left-0 right-0 bottom-0 bg-[#252529ce] z-10 md:hidden'>
                        <ul className='flex flex-col w-3/4 mx-auto mt-20 bg-[#9d9da3] dark:bg-[#252529] p-5 rounded-xl'>
                            <li className='self-end -mb-1'><motion.button whileHover={{ rotate: '360deg', scale: 1.2, color: '#2bd5b6' }} transition={{ duration: .5 }} onClick={() => setModle(false)} className='self-end'>
                                <i className="fa-solid fa-xmark text-2xl"></i>
                            </motion.button>
                            </li>
                            <li className='p-3 border-b border-[#36363b] hover:tracking-wider hover:text-[#204620] dark:hover:text-[#2bd5b6] duration-300'><a href="">About</a></li>
                            <li className='p-3 border-b border-[#36363b] hover:tracking-wider hover:text-[#204620] dark:hover:text-[#2bd5b6] duration-300'><a href="">Articals</a></li>
                            <li className='p-3 border-b border-[#36363b] hover:tracking-wider hover:text-[#204620] dark:hover:text-[#2bd5b6] duration-300'><a href="">Projects</a></li>
                            <li className='p-3 border-b border-[#36363b] hover:tracking-wider hover:text-[#204620] dark:hover:text-[#2bd5b6] duration-300'><a href="">Speaking</a></li>
                            <li className='p-3 hover:tracking-wider hover:text-[#204620] dark:hover:text-[#2bd5b6] duration-300'><a href="">Contact</a></li>
                        </ul>
                    </motion.div> : null}
            </AnimatePresence>
        </motion.header >
        <AnimatePresence>
            {showArrowUp ? <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} onClick={toUp} className={`fixed right-5 bottom-5 w-10 h-10 rounded-full bg-slate-500 flex items-center justify-center`}>
                <i className="fa-solid fa-angle-up cursor-pointer"></i>
            </motion.div> : null}
        </AnimatePresence>
    </>)
}
