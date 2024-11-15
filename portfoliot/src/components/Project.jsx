import React from 'react'
import {motion} from "framer-motion";



const projectData = [
  {
  
    title:"GetHired",
    description: "MERN web app for student job portal.Integrated Cloudinary for profiles/resumes. Designed backend models, controllers, APIs with Express and MongoDB. Implemented file uploads with Multer. Managed state with Redux and React hooks. Developed auth flows. Demonstrated full-stack skills. Implemented admin job posting, student applications, recruiter approval.",
    technologies:["MongoDB","Express.js","React.js","Node.js","Cloudinary","Multer","Redux","React Hooks"]
 
  },
  {
 
    title:"File Sharing Application",
    description: "A software application that facilities collaboration and file transfer. It allows end User to upload files to a shared storage space and email the link in a predefined format.",
    technologies:["MongoDB","Express.js","Node.js","Multer","Nodemailer"]
 
  },
  {
 
    title:"URL Shortener Application",
    description: "Built a URL shortener service that will accept a URL as an argument over a REST API and return a shortened URL as a result. The URL and shortened URL is stored in a caching solution named Redis.",
    technologies:["Node.js","Redis","Express.js"]
 
  },
  {
 
    title:"E-Commerce Application",
    description: "This full e-commerce website written in React application that uses thReact Router library to handle client-side routing.it defines several routes for different pages of the application,such as home page,about page, shop page, contact page, login page, signup page, forgot password,cart page,checkout page,Blog page, and product details page.",
    technologies:["React.js","React Router","HTML/CSS","Redux"]
  },
]

const ScrollReveal = ({children}) => {
  return (
  <motion.div
    initial={{opacity:0, y:100}}
    whileInView={{opacity: 1, y:0}}
    viewport={{once:true}}
    transition={{duration:0.8}}
  >
    {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) =>{
  return (
    <ScrollReveal >
    <div  id="project" className="flex flex-col items-center gap-8 md:flex-row md:gap-24">

      <div className="flex flex-col gap-5">
        <div>
      <div className="text-xl font-semibold">{project.title}</div>
      <p className="text-sm text-gray-400 italic">{project.description}</p>
      </div>
      <div className="flex flex-wrap gap-5">
        {
          project.technologies.map((tech,index)=>(
            <span key={index} className="rounded-lg bg-gradient-to-r from-purple-900 to-sky-400 p-3 text-center text-white">
              {tech}
            </span>
          ))
        }
      </div>
    
    </div>
    </div>
    </ScrollReveal>
  )

}

const Project = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full  flex-col items-center justify-center gap-16 p-4
    md:px-14 md:py-24">
      <ScrollReveal>
      <h1  className="text-4xl font-light text-white 
    md:text-6xl text-center">Project Showcase</h1>
    </ScrollReveal>
    <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white text-center">
      {
        projectData.map((project,index)=> (
          <ProjectCard  key={index} project={project}/>
        ))
      }
    </div>


    </div>
  )
}

export default Project