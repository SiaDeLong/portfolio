"use client"

import { motion } from 'motion/react'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { TfiDownload } from 'react-icons/tfi'
import GitHub from './GitHub'
import Image from "next/image";

const Widgets = () => {
    return (
        <div className="z-10 w-full">
            <div className="flex gap-3 w-full">
                <motion.div
                    className="rounded-lg w-max overflow-hidden"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.25, delay: 0.2 }}
                >
                    <Image className="opacity-90 rounded-lg transition-transform duration-200 hover:scale-110" src={"/profile.jpg"} alt={"profile"} width={200} height={0} />
                </motion.div>
                <div className="flex flex-col gap-3 w-2/6">
                    <div className="flex gap-3">
                        <motion.a
                            href={"https://www.linkedin.com/in/eric-sia-b0385a284/"}
                            target="_blank" rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            initial={{ opacity: 0, translateY: 10 }}
                            animate={{ opacity: 1, translateY: 0 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                        >
                            <div className="flex justify-center bg-[#0077b7] p-6 rounded-lg font-medium text-3xl transition duration-300 hover:scale-105">
                                <FaLinkedinIn />
                            </div>
                        </motion.a>
                        <motion.button
                            className='w-full'
                            initial={{ opacity: 0, translateY: 10 }}
                            animate={{ opacity: 100, translateY: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <div className="flex justify-between items-center bg-stone-600 p-7 rounded-lg transition-transform duration-200 hover:scale-105">
                                <h1 className="font-extralight">Resume.pdf</h1>
                                <TfiDownload className="animate-pulse" />
                            </div>
                        </motion.button>
                    </div>
                    <a href={"https://github.com/SiaDeLong"} target="_blank" rel="noopener noreferrer" className='transition-transform duration-200 hover:scale-[1.02]'>
                        <motion.div
                            className='relative bg-stone-700 p-8 rounded-lg'
                            initial={{ opacity: 0, translateY: 10 }}
                            animate={{ opacity: 100, translateY: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                        >
                            <Image className='top-0 left-0 z-0 absolute opacity-20' width={400} height={0} src={'/git.jpg'} alt={'contribution'} />
                            <GitHub />
                        </motion.div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Widgets