import React from 'react'
import { motion } from 'framer-motion'

const ProjectSection = ({
    title,
    subheading,
    image,
    project,
    sourceCode,
}) => {
  return (
    <motion.button
        whileHover={{scale:1.1}}
        whileTap={{scale:0.9}}
        onClick={() => null}>
        <div className='flex p-2 items-center rounded-3xl mx-20 my-10 px-10 border-2 bg-blue-300 bg-opacity-50 border-blue-400 hover:bg-blue-400 hover:bg-opacity-50'>
            <div className='flex'>
                <img src={image}
                className='rounded-full w-20 h-20 object-cover'></img>
                <div className='flex flex-col text-white mx-10'>
                    <h1 className='text-4xl font-bold'>{title}</h1>
                    <h2 className='text-2xl'>{subheading}</h2>
                </div>
            </div>
            <div className='flex flex-col items-center text-white'>
                <div className='flex flex-col items-center justify-end'>
                    <div className='flex flex-col items-center flex-shrink-0'>
                        <p>Devpost</p>
                        <a>
                            <img src={image} className='rounded-full w-16 h-16 object-cover'></img>
                        </a>
                    </div>
                    <div className='flex flex-col items-center flex-shrink-0'>
                        <p1>Github</p1>
                        <a>
                            <img src={image} className='rounded-full w-16 h-16 object-cover'></img>
                        </a>
                    </div>            
                </div>
            </div>    
        </div>
    </motion.button>
  )
}

export default ProjectSection