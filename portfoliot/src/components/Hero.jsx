import React from 'react'
import image from "/src/assets/profile.jpg"

import {motion} from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center
    justify-center py-29 md:px-32">
        <div className="flex flex-col items-center justify-center gap-10 text-white">
          <motion.div
          initial={{y: -50, opacity: 0}}
          animate={{y: 0, opacity:1}}
          transition={{duration: 0.8,delay:0.2}}
          >
            <img src={image} alt="" className="w-[200px] h-[200px] object-cover cursor-pointer rounded-full
            shadow-xl shadow-indigo-900 transtion-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl
            hover:shadow-indigo-600 "/>
            </motion.div>


            <motion.div 
             initial={{y: 50, opacity: 0}}
             animate={{y: 0, opacity:1}}
             transition={{duration: 0.8,delay:0.2}}
             
             


            className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
                <h1 className="bg-gradient-to-r from-blue-500 to-purple-500
                    bg-clip-text text-transparent text-4xl font-light md:text-7xl">Himanshu Tiwari</h1>
                <h3 className="bg-gradient-to-r from-purple-500 to-green-500
                    bg-clip-text text-transparent text-2xl md:text-3xl">Full-Stack Web Developer</h3>
                    <p className="md:text-sm text-pretty text-[10px] text-gray-300">
                    I am a passionate full-stack developer with expertise in React.js, Node.js, and backend technologies like MongoDB and MySQL. My proficiency extends to JavaScript and Java, allowing me to craft robust, efficient, and scalable web applications. I specialize in designing and implementing RESTful APIs, ensuring secure, high-performance communication between the frontend and backend while maintaining clean and modular architecture.
                  </p>
                <a 
                  href="/resume.pdf" 
              
                  className="text-nowrap rounded-lg border-indigo-600 bg-black px-2 py-2
                          text-lg font-medium text-white shadow-lg shadow-indigo-700 transition-all duration-300
                          hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600"
                  >
                  Resume
                </a>

            
            </motion.div>
        </div>
    </div>
  )
}

export default Hero