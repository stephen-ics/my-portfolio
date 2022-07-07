import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='flex justify-center'>
      <div className='flex items-center justfiy-center m-20 mx-24'>
        <div className='flex flex-col w-2/4'>
          <h2 className='text-white text-4xl'>Hello!</h2>
          <h1 className='text-white text-6xl font-bold'>
            I'm Stephen Ni
          </h1>
          <h2 className='text-white text-xl my-5'>Aspiring Full-Stack Developer</h2>
          <div className='flex'>
            <Link href='/experiences'>
              <button className="p-3 mr-4 w-32 text-xl text-white my-5 rounded-xl bg-red-500 hover:bg-red-700">
                Experiences
              </button>
            </Link>
            <Link href='projects'>
                <button className="ml-4 w-32 text-xl text-white my-5 rounded-xl bg-red-500 hover:bg-red-700">
                  Projects
                </button>
            </Link>
          </div>
        </div>
        <img src='panch.webp' className='ml-40 rounded-2xl w-2/4 object-cover'/>
      </div>
    </div>
  )
}
