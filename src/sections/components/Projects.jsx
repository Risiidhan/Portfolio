import Carousel from '../../common/Carousel'
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'
import React, { useState, useEffect, useMemo } from 'react';
import { getRepos } from '../../services/getRepos';

const Projects = () => {
  const [cachedRepos, setCachedRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      let res = await getRepos();
      setCachedRepos(res);
    };
    // Check if cached data exists
    if (cachedRepos.length === 0) {
      fetchRepos();
    } else {
      console.log('Using cached repository data:', cachedRepos);
    }
  }, [cachedRepos]); 

  // Memoize Carousel component
  const MemoizedCarousel = useMemo(() => React.memo(Carousel), []);

  return (
    <>
      <div id='projects' className="content-section grid grid-cols-4 gap-3 md:my-12 ">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className='md:col-span-1 col-span-4  grid place-items-center'>
          <span className='text-3xl font-semibold text-center md:text-left'>
            Projects
            <br />
            <a className='text-sm md:text-md mb-5 underline underline-offset-8  cursor-pointer'
              onClick={() => window.open('https://github.com/Risiidhan?tab=repositories', "_blank")}>
              View All Projects - Github
            </a>
          </span>
        </motion.div>
        <div className='
                    md:col-span-3 col-span-4 lg:h-96 xl:h-[44rem]
                    place-items-center md:place-items-start pt-6'>
           <MemoizedCarousel props={cachedRepos} />
        </div>
      </div>
    </>
  )
}

export default Projects