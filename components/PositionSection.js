import React from 'react'

const PositionSection = ({
    position,
    subheading,
    description
}) => {
  return (
    <div className='mb-8'>
        <h1 className='text-4xl font-semibold'>{position}</h1>
        <h2 className='text-3xl'>{subheading}</h2>
    </div>
  )
}

export default PositionSection