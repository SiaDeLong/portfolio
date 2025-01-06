"use client"

import { motion } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const NavBar = () => {

  const pathname = usePathname();

  const linkPositions: Record<string, { position: string, size: string }> = {
    '/': { position: '0', size: '1.75rem' },
    '/experience': { position: '7.75rem', size: '3.5rem' },
    '/proficient': { position: '24rem', size: '1.5rem' },
    '/showcase': { position: '32rem', size: '1.5rem' },
  };


  return (
    <div className='top-0 z-20 absolute backdrop-blur-xl w-screen'>
      <div className='flex justify-between gap-6 mx-32 py-4 text-white animate'>
        <div className='flex items-end gap-2'>
          <h1 className='font-bold text-4xl'>Eric Sia</h1>
          <div className='bg-white mb-1 p-4' />
        </div>
        <div className='relative flex gap-5'>
          <motion.div
            className="top-0 z-10 absolute bg-white py-6"
            initial={{ left: "0", paddingLeft: "1.75rem", paddingRight: "1.75rem"}}
            animate={{ left: linkPositions[pathname]?.position ?? '0' , paddingLeft: linkPositions[pathname]?.size ?? '1.75rem', paddingRight: linkPositions[pathname]?.size ?? '1.75rem' }}
            transition={{ duration: 0.75, type: "spring" }}
          />
          <Link href={'/'} className={`p-3 font-light ${pathname === "/" ? "text-stone-950" : "hover:text-stone-300"} z-20 transition duration-300`}>Intro</Link>
          <h1 className='p-3 font-extralight'>/</h1>
          <Link href={'experience'} className={`p-3 font-light ${pathname === "/experience" ? "text-stone-950" : "hover:text-stone-300"} z-20 transition duration-300`}>Experience</Link>
          <h1 className='p-3 font-extralight'>/</h1>
          <Link href={'proficient'} className='p-3 font-light hover:text-stone-300 transition duration-300'>Proficient</Link>
          <h1 className='p-3 font-extralight'>/</h1>
          <Link href={'showcase'} className='p-3 font-light hover:text-stone-300 transition duration-300'>Showcase</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar