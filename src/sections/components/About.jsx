import { useState, useEffect } from 'react'
import { FaGraduationCap, FaCode } from "react-icons/fa"
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'
const About = () => {

  const [containerMotion, setContainerMotion] = useState("hidden");
  const [headindMotion, setHeadindMotion] = useState("hidden");

  useEffect(() => {
    const setContainerVisibility = () => {
      if (window.innerWidth >= 768){
        setContainerMotion("show");
        setHeadindMotion("show");
      }
      else{
        setHeadindMotion("show");
        setContainerMotion("hidden");
      }
    };
    setContainerVisibility();
  }, []);


  return (

    <>
      <motion.div
        id="about"
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={containerMotion}
        viewport={{ once: false, amount: 0.7 }}

        className="lg:h-96 my-28 grid grid-cols-3 gap-4 md:pt-0 lg:pt-20">
        <div
          className='
            md:col-span-2 col-span-3 
            border-2 rounded-xl border-fuchsia-300
            md:order-1 order-2 grid place-items-center md:place-items-start
            px-6 py-6 2xl:text-3xl tracking-wide text-center md:text-justify
            '>
          <div className='icon-container text-4xl md:text-5xl text-left md:text-left my-3'>
            <FaCode />
          </div>
          Hi Im Risiidhan, as a Software Engineer I have demonstrated a strong ability
          to adapt quickly and learn independently, ensuring timely project completion
          and maintaining a steadfast commitment to excellence. My journey began with a
          role where I served to enhance website responsiveness and cross platform development
          and now I play a full stack role in the development of comprehensive projects.
          <br />
          <div className='icon-container text-4xl md:text-5xl text-left md:text-left my-3'>
            <FaGraduationCap />
          </div>

          Education wise, I hold a Bachelor’s degree in Software Engineering from London
          Metropolitan University, where I graduated with First Class Honors. Recognized
          as the top performer in my graduating batch, I have consistently demonstrated a
          strong aptitude for academic excellence and a passion for continuous learning.
        </div>
        <motion.div
          id="about"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={headindMotion}
          viewport={{ once: false, amount: 0.7 }}
          className='md:col-span-1 col-span-3 md:order-2 order-1 grid place-items-center'>
          <span className='text-3xl md:text-4xl lg:text-6xl 2xl:text-8xl mb-5 font-semibold'>
            About Me
          </span>
        </motion.div>
      </motion.div>
    </>

  )
}

export default About