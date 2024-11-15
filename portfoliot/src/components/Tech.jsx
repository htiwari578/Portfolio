import React from 'react'
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGit } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { DiRedis } from "react-icons/di";
import {motion} from "framer-motion";

import { FaNode } from "react-icons/fa";

const Tech = () => {

  const variants = {
    hidden:{opacity:0,y:50},
    visible:{opacity:1, y:0}
  }
  return (
    <div id="tech" className="flex-min-h-[70vh] w-full flex-col
    items-center justify-center gap-16 md:gap-32">
    <motion.h1 
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}}
    
    className="text-4xl font-light text-white text-center
    md:text-6xl">What I Work With</motion.h1>

    <div className="flex flex-wrap item-center justify-center gap-10 p-5 ">
    <motion.div   
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}}>
    <FaJava  className="cursor-pointer text-[80px] text-red-500 transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px] lg:text=[40]"/>
    </motion.div>

    <motion.div  
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}} >
    <IoLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px]"/>
    </motion.div>

    <motion.div  
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}} >
    <SiRedux className="cursor-pointer text-[80px] text-[#e9eaeb44] transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px]"/>
    </motion.div>

    <motion.div    
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}}>
    <FaReact className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px]"/>
    </motion.div>

    <motion.div  
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}} > 
    <FaNode className="cursor-pointer text-[80px] text-green-500 transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px]"/>
    </motion.div>

    <motion.div    
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}}>
    <SiExpress className="cursor-pointer text-[80px] text-[#ce1f1faa] transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px]"/>
    </motion.div>


    <motion.div    
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}} >
    <DiMysql className="cursor-pointer text-[80px] text-sky-900 transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px]"/>
    </motion.div>


    <motion.div   
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}}>
    <FaDocker className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px]"/>
    </motion.div>

    <motion.div  
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}}>
    <BiLogoMongodb className="cursor-pointer text-[80px] text-green-900 transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px]"/>
    </motion.div>


    <motion.div  
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}}>
    <FaGit className="cursor-pointer text-[80px] text-[#eb7610aa] transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px]"/>
    </motion.div>

    <motion.div    
    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}}>
    <SiPostman className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px]"/>
    </motion.div>

    <motion.div    variants={variants}
    initial="hidden"
    whileInView="visible"
    transition={{duration:0.5}}>
    <DiRedis className="cursor-pointer text-[80px] text-red-500 transition-all duration-300
    hover:-translate-y-5 sm:text-[60px] md:text-[120px]"/>
    </motion.div>





    </div>

    </div>
  );
}

export default Tech