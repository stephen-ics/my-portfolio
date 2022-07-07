import React from 'react'
import Nav from './Nav'

const Layout = ( {children} ) => {
  return (
    <div className='bg-blue-950 overflow-auto h-full w-full fixed'>
        <Nav />
        <main>{children}</main>
    </div>
  )
}

export default Layout