import React from 'react'
import ProjectSection from '../components/ProjectSection'
import { motion } from 'framer-motion'

const projects = () => {
  return (
    <div className='flex flex-col items-center'>
        
        <div className='flex'>
            <ProjectSection
            title='Tile'
            subheading='Subheading'
            image='panch.webp'/>
 
            <ProjectSection
            title='Title'
            subheading='Subheading'
            image='panch.webp'/>
        </div>
        <div className='flex'>
            <ProjectSection
            title='Title'
            subheading='Subheading'
            image='panch.webp'/>
            <ProjectSection
            title='Title'
            subheading='Subheading'
            image='panch.webp'/>
        </div>
        <div className='flex'>
            <ProjectSection
            title='Title'
            subheading='Subheading'
            image='panch.webp'/>
            <ProjectSection
            title='Title'
            subheading='Subheading'
            image='panch.webp'/>
        </div>

    </div>

    
  )
}

export default projects