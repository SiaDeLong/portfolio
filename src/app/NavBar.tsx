import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div className='top-0 z-20 absolute backdrop-blur-xl w-screen'>
      <div className='flex justify-between gap-6 mx-32 py-4 text-white'>
        <div className='flex items-end gap-2'>
          <h1 className='font-bold text-4xl'>Eric Sia</h1>
          <div className='bg-white mb-1 p-4' />
        </div>
        <div className='flex gap-10 py-2'>
          <Link href={'/'} className='font-light'>Intro</Link>
          <Link href={'experience'} className='font-light'>Experience</Link>
          <Link href={'proficient'} className='font-light'>Proficient</Link>
          <Link href={'showcase'} className='font-light'>Showcase</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar