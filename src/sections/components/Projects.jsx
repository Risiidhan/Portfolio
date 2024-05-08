import React from 'react'
import Carousel from '../../common/Carousel'
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'
import { useState, useEffect } from 'react';
import { getRepos } from '../../services/getRepos';

const Projects = () => {
  const [cachedRepos, setCachedRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      let res = await getRepos();
      setCachedRepos(res);
    };
    // Check if cached data exists
    if (cachedRepos.length == 0) {
      fetchRepos();
    } else {
      console.log('Using cached repository data:', cachedRepos);
    }
  }, []);


  return (
    <>
      <div id='projects' className="lg:h-96 my-28 grid grid-cols-4 gap-3 md:pt-0 lg:pt-32">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='md:col-span-1 col-span-4  grid place-items-center'>
          <span className='text-3xl md:text-4xl lg:text-6xl m font-semibold text-center md:text-left'>
            Projects
            <br />
            <a className='text-sm md:text-md lg:text-lg mb-5 underline underline-offset-8  cursor-pointer'
              onClick={() => window.open('https://github.com/Risiidhan?tab=repositories', "_blank")}>
              View All Projects - Github
            </a>
          </span>
        </motion.div>
        <div className='
                    md:col-span-3 col-span-4 
                    place-items-center md:place-items-start pt-6'>
          <Carousel props={cachedRepos} />
        </div>
      </div>
    </>
  )
}

export default Projects