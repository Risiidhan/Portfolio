import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'

const Stats = () => {

    let statWidth = 0

    if (window.innerWidth > 1300)
        statWidth = 700
    else if (window.innerWidth >= 768 && window.innerWidth < 1300)
        statWidth = 500
    else
        statWidth = 250

    return (
        <>
            <motion.div
                id="about"
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}

                className="lg:h-96 my-28 grid grid-cols-3 gap-4 md:pt-0 lg:pt-28 xl:pt-80">
                <div
                    className='
                        md:col-span-2 col-span-3 
                        border-2 rounded-xl border-fuchsia-300
                        md:order-1 order-2 grid place-items-center md:place-items-center
                        px-6 py-6
                        '>
                    <img src={`https://github-readme-stats.vercel.app/api/top-langs?username=risiidhan&showicons=true&locale=en&layout=compact&theme=bear&hide_border=true&card_width=${statWidth}px&line_height=50`} alt="" />
                </div>
                <div className='md:col-span-1 col-span-3 md:order-2 order-1 grid place-items-center'>
                    <span className='text-3xl md:text-3xl lg:text-4xl xl:text-7xl mb-5 font-semibold'>
                        Github Statistics
                    </span>
                </div>
            </motion.div>
        </>
    )
}

export default Stats