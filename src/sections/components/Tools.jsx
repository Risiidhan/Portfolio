import React from 'react'
import Marquee from 'react-fast-marquee'
import { motion } from 'framer-motion'
import { fadeIn } from '../partials/framer-motion'
const Tools = () => {
    return (
        <>
            <motion.section
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.7 }}
                className='md:pt-0 md:pr-10 lg:pr-0 lg:pt-20'>
                <div className='inner-glass-effect'>
                    <h1 className='text-center md:text-left text-xl pl-0 md:pl-6 pt-3 md:text-2xl lg:text-3xl font-bold'>
                        Tools</h1>
                    <h1 className='text-center md:text-left text-sm pl-0 md:pl-6 pt-3 md:text-md lg:text-xl mb-4 font-semibold tracking-wide'>
                        Languages and Frameworks:</h1>
                    <Marquee pauseOnHover>
                        <div className='flex items-center space-x-8 py-3 md:py-6'>
                            <a className='w-9 md:w-16 h-9 md:h-16 mx-3' href="https://angular.io" target="blank" rel="noreferrer"> <img src="https://angular.io/assets/images/logos/angular/angular.svg" alt="angular" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://nextjs.org/" target="blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://reactjs.org/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://www.w3schools.com/cs/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg" alt="csharp" /> </a>

                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://nodejs.org" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://dotnet.microsoft.com/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg" alt="dotnet" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://expressjs.com" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://www.docker.com/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://www.mysql.com/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" /> </a>

                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://www.mongodb.com/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://postman.com" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://www.microsoft.com/en-us/sql-server" target="blank" rel="noreferrer"> <img src="https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" alt="mssql" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://firebase.google.com/" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://git-scm.com/" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" /> </a>

                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://getbootstrap.com" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://www.chartjs.org" target="blank" rel="noreferrer"> <img src="https://www.chartjs.org/media/logo-title.svg" alt="chartjs" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://tailwindcss.com/" target="blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" /> </a>

                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://www.typescriptlang.org/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" /> </a>
                            <a className='w-9 md:w-16 h-9 md:h-16' href="https://www.w3.org/html/" target="blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" /> </a>

                        </div>
                    </Marquee>
                </div>
            </motion.section>
        </>
    )
}

export default Tools