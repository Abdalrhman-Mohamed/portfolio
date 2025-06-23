import React from 'react'
import '../4-ContactUs/ContactUs.module.css'
import { motion } from 'framer-motion'
import { useForm, ValidationError } from '@formspree/react';
import Lottie from 'lottie-react';
import contactUs from '../../../public/contactUs.json'


export default function ContactUs() {

    const [state, handleSubmit] = useForm("meojqpyl");

    return (
        <section className='md:p-16 lg:p-10 p-2'>
            <motion.div initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='flex items-center w-full'>
                <i className="fa-regular fa-envelope text-3xl mr-10"></i>
                <h2 className='text-5xl'>Contact Us</h2>
            </motion.div>
            <motion.p initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='my-10'>Contact us for more infomation.</motion.p>

            <div className='flex flex-wrap items-center'>
                <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="w-full lg:w-1/2">
                    <div className="flex flex-wrap justify-evenly items-center mb-5 w-full">
                        <input type="email" id="email" name='email' className="shadow-sm w-full bg-[#f1f1f3] dark:bg-[#252529] border border-gray-300 text-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" placeholder='Enter Your Email' required />
                        <ValidationError
                            prefix="Email"
                            field="email"
                        // errors={state.errors}
                        />
                        {state.errors ? <div class="p-4 w-full my-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">Email should be an email!</div> : null}
                    </div>
                    <div className='flex flex-wrap justify-evenly items-center'>
                        <textarea id="message" name='message' rows={4} className="block w-full p-2.5 resize-none text-sm text-gray-100 bg-[#f1f1f3] dark:bg-[#252529] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder='Your Message' required />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <motion.button type="submit" disabled={state.submitting} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 3 }} className="text-slate-900 dark:text-white w-full mt-5 bg-[#f1f1f3] dark:bg-[#252529] p-3 px-8 rounded-2xl border border-[#898998] hover:border-[#3f3f44] duration-200">{state.submitting ? 'submitting ...' : 'submit'}</motion.button>
                    {state.succeeded ? <div class="p-4 my-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">Thanks For Message Us</div> : null}
                </motion.form>
                <motion.div drag dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }} initial={{ x: 200, opacity: 0 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} className='w-full lg:w-1/2'>
                    <Lottie style={{ height: '500px', width: '100%' }} animationData={contactUs} />
                </motion.div>
            </div>
        </section>
    )
}