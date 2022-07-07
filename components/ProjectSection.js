import React from 'react'

const ProjectSection = ({
    title,
    subheading,
    description,
    image,
    project,
    sourceCode,
}) => {
  return (
    <div className='flex justify-between my-10 bg-blue-400 p-5 items-center rounded-3xl mx-20 overflow-hidden'>
        <div className='flex ml-5'>
            <img src={image}
            className='rounded-full w-40 h-40 object-cover'></img>
            <div className='flex flex-col text-white mt-2 ml-10'>
                <h1 className='w-3/4 text-5xl font-bold'>{title}</h1>
                <h2 className='w-3/4 text-3xl'>{subheading}</h2>
                <p className='w-3/4 break-all'>{description}ssssss</p>
            </div>
        </div>
        <div className='flex flex-col items-center text-white'>
            <div className='flex mr-20'>
                <div className='flex flex-nowrap flex-col items-center mr-16 flex-shrink-0'>
                    <p>Project</p>
                    <a>
                        <img src={image} className='rounded-full w-28 h-28 object-cover'></img>
                    </a>
                </div>
                <div className='flex flex-nowrap flex-col items-center flex-shrink-0'>
                    <p1>Source Code</p1>
                    <a>
                        <img src={image} className='rounded-full w-28 h-28 object-cover'></img>
                    </a>
                </div>            
            </div>
        </div>    
    </div>
  )
}

export default ProjectSection