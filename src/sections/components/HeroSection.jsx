import React from 'react'
import profile from '../assets/profile-2.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'

const HeroSection = () => {
  return (
    <>
      <div className="lg:h-96 my-28 grid grid-cols-2 gap-4">
        <div className='md:col-span-1 col-span-2 md:order-1 order-2 grid place-items-center'>
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}

            className="grid place-content-center">
            <span className='text-3xl md:text-4xl lg:text-8xl mb-1 font-semibold tracking-widest'>Hi,</span>
            <span className='text-3xl md:text-4xl lg:text-6xl mb-5 font-semibold tracking-widest'>I'm Risiidhan Punniymoorthy</span>
            <span className='text-base tracking-widest mb-5'>Software engineer | BEng in (Hons) | Full-Stack Developer</span>
            <span className='text-base tracking-widest'>WELCOME TO MY PORTFOLIO</span>
            <button
              type="button"
              class="
              bg-gradient-to-r from-fuchsia-500 to-cyan-500
              w-1/2 lg:w-1/4 text-center p-2 rounded-full 
              text-xs font-medium uppercase mt-4"
              data-twe-ripple-init>
              Download CV
            </button>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='
            md:col-span-1 col-span-2 
            md:order-2 order-1 
            md:pl-16 p-1 grid place-items-center'>
          <img
            className="h-full w-auto"
            src={profile}
            alt="Portfolio Picture"
          />
        </motion.div>
      </div>
    </>
  )
}

export default HeroSection