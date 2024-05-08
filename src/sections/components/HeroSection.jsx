import React from 'react'
import profile from '../assets/profile-2.png'
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'

const HeroSection = () => {
  return (
    <>
      <motion.div
        id='hero'
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="lg:h-96 mb-24 md:my-28 grid grid-cols-2 gap-4">
        <div className='md:col-span-1 col-span-2 md:order-1 order-2 grid place-items-center'>
          <div className="grid place-content-center">
            <span className='text-3xl md:text-4xl lg:text-8xl mb-1 font-semibold tracking-widest'>Hi,</span>
            <p className='text-3xl md:text-4xl lg:text-6xl mb-5 font-semibold tracking-widest'>I'm Risiidhan Punniymoorthy</p>
            <p className='text-base tracking-widest mb-5'>Software engineer | BEng in (Hons) | Full-Stack Developer</p>
            <div className='typewriter'>
              <p className='text-base tracking-widest'>WELCOME TO MY PORTFOLIO</p>
            </div>
            {/* <button
              type="button"
              className="
              bg-gradient-to-r from-cyan-500 to-fuchsia-500
              w-1/2 lg:w-1/4 text-center p-2 rounded-full 
              text-xs font-medium uppercase mt-4"
              data-twe-ripple-init>
              Download CV
            </button> */}
          </div>
        </div>

        <div className='
            md:col-span-1 col-span-2 
            md:order-2 order-1 
            md:pl-16 p-1 grid place-items-center'>
          <img
            className="h-auto w-auto"
            src={profile}
            alt="Portfolio Picture"
          />
        </div>
      </motion.div>
    </>
  )
}

export default HeroSection