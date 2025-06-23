import React, { useState } from 'react'
import '../3-Main/Main.module.css'
import card1 from '../../assets/Reactportfoliowebsite/1.jpg'
import card2 from '../../assets/Reactportfoliowebsite/2.jpg'
import card3 from '../../assets/Reactportfoliowebsite/3.jpg'
import card4 from '../../assets/Reactportfoliowebsite/4.jpg'
import card5 from '../../assets/Reactportfoliowebsite/5.jpg'
import card6 from '../../assets/Reactportfoliowebsite/6.jpg'
import { motion, AnimatePresence } from 'framer-motion'


export default function Main() {

    const [showactive, setShowActive] = useState('1')
    let projects = [
        { id: '1', category: 'javascript', img: card1, title: 'CRUDS', link: 'https://github.com/Aminoo0/CURDS', webSite: 'https://aminoo0.github.io/CURDS/', desc: 'CURDS Operations Using HTML, CSS, Tailwind, JavaScript and localStorge' },
        { id: '2', category: 'javascript', img: card2, title: 'Weather App', link: 'https://github.com/Aminoo0/Weather', webSite: 'https://aminoo0.github.io/Weather/', desc: 'recipes web site Using HTML, CSS, Tailwind, JavaScript and Api' },
        { id: '3', category: 'javascript', img: card2, title: 'Quiz', link: 'https://github.com/Aminoo0/Quiz', webSite: 'https://aminoo0.github.io/Quiz/', desc: 'Quiz App Using HTML, CSS, Tailwind, JavaScript and Api' },
        { id: '4', category: 'javascript', img: card2, title: 'Yummii', link: 'https://github.com/Aminoo0/Yummii', webSite: 'https://aminoo0.github.io/Yummii/', desc: 'Yummi  recipes web site Using HTML, CSS, Tailwind, JavaScript and Api' },
        { id: '5', category: 'html', img: card3, title: '', link: '', webSite: '' },
        { id: '6', category: 'react', img: card4, title: 'E-Commerce-Fresh-Cart', link: 'https://github.com/Aminoo0/E-Commerce-Fresh-Cart', webSite: 'https://aminoo0.github.io/E-Commerce-Fresh-Cart/', desc: 'E-Commerce App Using HTML, CSS, Tailwind, JavaScript, Api, React.js, React-Query , State Management' },
        { id: '7', category: 'react', img: card4, title: 'Alasayal-app', link: 'https://github.com/Aminoo0/Alasayal-app', webSite: 'https://`alasayal-app.vercel.app', desc: 'Using HTML, CSS, Tailwind, JavaScript, React.js, framer-motion, form-spree, ' },
        { id: '8', category: 'react', img: card6, title: 'Alasayal-app-Engilsh', link: 'https://github.com/Aminoo0/Alasayal-app-Engilsh', webSite: 'https://alasayal-app-engilsh.vercel.app', desc: 'Using HTML, CSS, Tailwind, JavaScript, React.js, framer-motion, form-spree, ' },
        { id: '9', category: 'next', img: card5, title: 'On-DM', link: 'https://github.com/Aminoo0/on-dm', webSite: 'https://on-dm.vercel.app/', desc: 'Using HTML, CSS, Tailwind, JavaScript, Next.js, framer-motion, ' },
    ]
    const [allProjects, setAllProjects] = useState(projects)

    function allProject(active, cate) {
        setShowActive(active);
        setAllProjects(cate);
    }

    function filterProject(active, cate) {
        setShowActive(active);
        let categorys = projects.filter((myCate) => myCate.category == cate);
        setAllProjects(categorys);
    }

    return (
        <section className='flex flex-wrap md:p-16 lg:p-10 p-2'>
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full xl:w-1/4'>
                <ul className='text-center font-semibold flex flex-wrap justify-between'>
                    <li onClick={() => allProject('1', projects)} className={`${showactive === '1' ? 'dark:bg-slate-600 bg-slate-700 text-slate-300' : ''} w-full cursor-pointer py-3 dark:bg-[#252529] rounded-2xl mb-2 border border-[#36363b] hover:tracking-widest hover:text-[#2bd5b6] duration-200`}>All Projects</li>
                    <li onClick={() => filterProject('2', "javascript")} className={`${showactive === '2' ? 'dark:bg-slate-600 bg-slate-700 text-slate-300' : ''} w-full cursor-pointer md:w-5/12 xl:w-full py-3 dark:bg-[#252529] rounded-2xl mb-2 border border-[#36363b] hover:tracking-widest hover:text-[#2bd5b6] duration-200`}>Java Script</li>
                    <li onClick={() => filterProject('3', "html")} className={`${showactive === '3' ? 'dark:bg-slate-600 bg-slate-700 text-slate-300' : ''} w-full cursor-pointer md:w-5/12 xl:w-full py-3 dark:bg-[#252529] rounded-2xl mb-2 border border-[#36363b] hover:tracking-widest hover:text-[#2bd5b6] duration-200`}>HTML & CSS</li>
                    <li onClick={() => filterProject('4', "react")} className={`${showactive === '4' ? 'dark:bg-slate-600 bg-slate-700 text-slate-300' : ''} w-full cursor-pointer md:w-5/12 xl:w-full py-3 dark:bg-[#252529] rounded-2xl mb-2 border border-[#36363b] hover:tracking-widest hover:text-[#2bd5b6] duration-200`}>React</li>
                    <li onClick={() => filterProject('5', "next")} className={`${showactive === '5' ? 'dark:bg-slate-600 bg-slate-700 text-slate-300' : ''} w-full cursor-pointer md:w-5/12 xl:w-full py-3 dark:bg-[#252529] rounded-2xl mb-2 border border-[#36363b] hover:tracking-widest hover:text-[#2bd5b6] duration-200`}>Next</li>
                </ul>
            </motion.div>
            <AnimatePresence>
                <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className='w-full xl:w-3/4 flex flex-wrap gap-y-5'>
                    {allProjects.reverse().map((card, index) =>
                        <motion.div key={index} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='px-3 w-full lg:w-1/2 2xl:w-1/3'>
                            <motion.div whileHover={{ rotate: '-5deg', scale: 1.05, borderColor: '#36363b' }} className='border border-[#666667] rounded-lg'>
                                <a target='_blank' href={`${card.webSite}`}>
                                    <img className='w-full rounded-lg' src={card.img} alt="" />
                                </a>
                                <div className='p-3 bg-[#f7f7f9] dark:bg-[#252529]'>
                                    <h2 className='text-2xl text-blackdark: dark:text-white'>{card.title}</h2>
                                    <p className='my-3 text-slate-500 text-md border-b border-[#6666676b]'>{card.desc}</p>
                                    <ul className='flex gap-5'>
                                        <motion.li whileHover={{ rotate: '360deg', scale: 1.1, color: '#2bd5b6' }} transition={{ duration: 1 }}><a target='_blank' href={card.link}><i className="fa-brands fa-github text-xl cursor-pointer"></i></a></motion.li>
                                        <motion.li whileHover={{ rotate: '360deg', scale: 1.1, color: '#2bd5b6' }} transition={{ duration: 1 }}><a target='_blank' href='https://www.linkedin.com/in/abdalrhman-mohamed-815633260/' ><i className="fa-brands fa-linkedin text-xl cursor-pointer"></i></a></motion.li>
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </motion.div>
            </AnimatePresence>
        </section >
    )
}
