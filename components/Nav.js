import Link from 'next/link';

import React from 'react'

const Nav = () => {
  return (
    <nav>
        <ul className="bg-blue-1000 display flex text-xl justify-between items-center text-white p-4">
    
            <li className='ml-24 hover:border-b hover:border-b-white'>
                <Link href="/">Home</Link>
            </li>
            <div className='flex items-center'>
                <li className='mr-24 hover:border-b hover:border-b-white'>
                    <Link href="/about">About Me</Link>
                </li>
                <li className='mr-24 hover:border-b hover:border-b-white'>
                    <Link href="/experiences">Experiences</Link>
                </li>
                <li className='mr-24 hover:border-b hover:border-b-white'>
                    <Link href="/projects">Projects</Link>
                </li>
            </div>

        </ul>


    </nav>
  )
}

export default Nav