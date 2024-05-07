import React from 'react'
import Form from '../../common/Form'
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'

const Contact = () => {
    return (
        <>
            <div className="my-28 grid grid-cols-4 gap-4 md:pt-0 lg:pt-20">
                <div
                    className='
                        md:col-span-2 col-span-4 
                        border-2 rounded-xl border-fuchsia-300
                        md:order-1 order-2 px-4 md:px-12 py-6'>
                    <Form />
                </div>
                <motion.div
                    variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:col-span-2 col-span-4 md:order-2 order-1 grid place-items-center'>
                    <span className='text-3xl md:text-4xl lg:text-6xl mb-5 font-semibold'>
                        Connect with me
                        <div className='flex justify-center gap-6 py-6'>
                        <a href="https://x.com/risiidhan" target="blank"><img align="center" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg" alt="risiidhan" height="30" width="40" /></a>
                        <a href="https://www.linkedin.com/in/risiidhan/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="risiidhan punniyamoorthy" height="30" width="40" /></a>
                        <a href="https://instagram.com/risiidhan" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="risiidhan" height="30" width="40" /></a>
                        <a href="https://www.hackerrank.com/rkishon4" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="risiidhan" height="30" width="40" /></a>
                        </div>
                    </span>
                </motion.div>
            </div>

        </>
    )
}

export default Contact