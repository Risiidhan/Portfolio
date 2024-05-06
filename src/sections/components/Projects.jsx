import React from 'react'
import Carousel from '../../common/Carousel'
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'
import { useState, useEffect } from 'react';

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const [cachedRepos, setCachedRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/risiidhan/starred', {
          headers: {
            Authorization: `token ${import.meta.env.VITE_API_TOKEN}`,
          },
        });

        if (response.ok) {
          const data = await response.json();

          console.log(data);

          if (cachedRepos.length == 0) {
            setCachedRepos(data);
          }
        } else {
          console.error('Error fetching repositories:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching repositories:', error);
      }
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
      <div className="lg:h-96 my-28 grid grid-cols-4 gap-3 md:pt-0 lg:pt-32">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='md:col-span-1 col-span-4  grid place-items-center'>
          <span className='text-3xl md:text-4xl lg:text-6xl m font-semibold text-center md:text-left'>
            Projects
            <br />
            <a className='text-sm md:text-md lg:text-lg mb-5 underline underline-offset-8 md:tracking-normal lg:tracking-wide cursor-pointer'
              onClick={() => window.open('https://github.com/Risiidhan?tab=repositories', "_blank")}>
              View All Projects - Github
            </a>
          </span>
        </motion.div>
        <div className='
                    md:col-span-3 col-span-4 
                    place-items-center md:place-items-start
                    px-6 py-6 tracking-wide text-left
                    '>
          <Carousel props={cachedRepos} />
        </div>
      </div>
    </>
  )
}

export default Projects