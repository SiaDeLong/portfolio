"use client"

import React from 'react'
import { experiences } from './experiences'
import { motion } from 'motion/react'

const page = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10 mx-48 pt-32 text-white'>
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          className='relative bg-stone-700 p-6 rounded-lg w-full overflow-hidden group'
          initial={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 100, translateY: 0 }}
          transition={{ duration: (index + 1) * 0.75 }}
        >
          <div className={`group-hover:right-full top-0 right-0 absolute flex justify-center items-center ${exp.theme} rounded-lg w-full h-full transition-all duration-300`}>
            {exp.logo}
          </div>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className='font-medium text-2xl'>{exp.company}<span className='bg-white ml-2 px-2 rounded-md text-stone-700'>{exp.position}</span></h1>
              <h3 className='font-extralight text-sm'>{exp.year}</h3>
            </div>
            {exp.description.map((paragraph, index) => (
              <h2 key={index} className='font-light text-justify text-lg'>
                {paragraph}
              </h2>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  )
}

export default page