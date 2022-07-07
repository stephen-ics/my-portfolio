import React from 'react'

const ExperienceSection = ({
    position,
    subheading,
    description,
    logo,
}) => {
  return (
    <div className='text-white flex'>
        <div className=''>
            <h1 className='text-5xl font-bold'>{position}</h1>
            <h2 className='text-3xl'>{subheading}</h2>
            <h3 className='text-xl'>{description}</h3>
        </div>
        <img src={logo} className='w-64 h-64 rounded-full object-cover'></img>

    </div>
  )
}

export default ExperienceSection