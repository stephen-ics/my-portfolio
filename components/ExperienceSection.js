import React from 'react'
import { useState } from 'react'

const ExperienceSection = ({
    organization,
    logo,
    positionSection,
    showDropdown,
    setShowDropdown,
    section,

}) => {
    
  return (
    <div className='text-white flex flex-col bg-blue-300 m-10 p-5 rounded-3xl mx-20'>
        <div className='flex flex-col items-start'>
            <div className='flex items-start'>
                <img src={logo} className='w-14 h-14 rounded-full object-cover'></img>
                <div className='flex flex-col ml-4'>
                    <h1 className='text-5xl font-bold'>{organization}</h1>
                </div>
            </div>
        </div>
        <button onClick={setShowDropdown} className='text-3xl font-bold'>...</button>
        {showDropdown && <div>{positionSection}</div>}
        

    </div>
  )
}

export default ExperienceSection