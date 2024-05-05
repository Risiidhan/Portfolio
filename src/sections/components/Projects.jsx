import React from 'react'
import Carousel from '../../common/Carousel'
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'

const Projects = () => {
    const x = [1, 2, 3]

    return (
        <>
            <div className="lg:h-96 my-28 grid grid-cols-3 gap-4 md:pt-0 lg:pt-32">
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                    className='md:col-span-1 col-span-3  grid place-items-center'>
                    <span className='text-3xl md:text-4xl lg:text-6xl mb-5 font-semibold'>
                        Projects
                    </span>
                </motion.div>
                <div className='
                    md:col-span-2 col-span-3 
                    place-items-center md:place-items-start
                    px-6 py-6 tracking-wide text-left
                    '>
                    <Carousel props={x} />
                </div>
            </div>
        </>
    )
}

export default Projects