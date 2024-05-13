import { useState, useEffect } from 'react'
import Form from '../../common/Form'
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'

const Contact = () => {

    const [containerMotion, setContainerMotion] = useState("hidden");
    const [headindMotion, setHeadindMotion] = useState("hidden");

    useEffect(() => {
        const setContainerVisibility = () => {
            if (window.innerWidth >= 768) {
                setContainerMotion("show");
                setHeadindMotion("show");
            }
            else {
                setHeadindMotion("show");
                setContainerMotion("hidden");
            }
        };
        setContainerVisibility();
    }, []);
    return (
        <>
            <motion.div
                id='contact'
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={containerMotion}
                viewport={{ once: false, amount: 0.7 }}

                className="my-28 grid grid-cols-4 gap-4 md:pt-0 lg:pt-20  2xl:pt-80">
                <div
                    className='
                        md:col-span-2 col-span-4 
                        border-2 rounded-xl border-fuchsia-300
                        md:order-1 order-2 px-4 md:px-12 py-6'>
                    <Form />
                </div>
                <motion.div
                    id='contact'
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={headindMotion}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:col-span-2 col-span-4 md:order-2 order-1 grid place-items-center'>
                    <span className='text-3xl md:text-3xl lg:text-5xl  2xl:text-7xl mb-5 font-semibold'>
                        Connect with me
                        <div className='flex justify-center gap-6  2xl:gap-12 py-6'>
                            <a className='w-9 h-9  2xl:w-16' href="https://x.com/risiidhan" target="blank">

                                <svg viewBox="0 0 128 128">
                                    <path d="M75.916 54.2 122.542 0h-11.05L71.008 47.06 38.672 0H1.376l48.898 71.164L1.376 128h11.05L55.18 78.303 89.328 128h37.296L75.913 54.2ZM60.782 71.79l-4.955-7.086-39.42-56.386h16.972L65.19 53.824l4.954 7.086 41.353 59.15h-16.97L60.782 71.793Z" fill="#FFFFFF"></path>
                                </svg>

                            </a>
                            <a className='w-9 h-9  2xl:w-16' href="https://www.linkedin.com/in/risiidhan/" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="risiidhan punniyamoorthy" /></a>
                            <a className='w-9 h-9  2xl:w-16' href="https://instagram.com/risiidhan" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/instagram.svg" alt="risiidhan" /></a>
                            <a className='w-9 h-9  2xl:w-16' href="https://www.hackerrank.com/rkishon4" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/hackerrank.svg" alt="risiidhan" /></a>
                        </div>
                    </span>
                </motion.div>
            </motion.div>

        </>
    )
}

export default Contact