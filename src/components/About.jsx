import React from 'react'
import aboutimage from '../assets/about.jpg'
import { delay, motion } from "framer-motion"

const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>About <span className='text-neutral-500'>Me</span></h1>
      <div className='flex flex-wrap'>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 0.5 }} className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img src={aboutimage} alt="about" />
          </div>
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'>
              I am an aspiring software engineer with a strong foundation in application development and a passion for creating innovative, user-centric solutions. My expertise lies in **Flutter Development** and the **MERN stack**, where I’ve worked on a variety of projects, including AI-powered applications and full-stack solutions.  
              <br />
              From developing real-time chat applications to creating a virtual legal assistant for the Department of Justice, I specialize in using technologies like **React.js, Node.js, MongoDB, Firebase**, and **Express.js**. I am committed to continuous learning and adapting to new challenges, always striving to improve and push the boundaries of technology.
              <br />
              I thrive in collaborative environments and look forward to contributing my skills and enthusiasm to drive impactful projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
