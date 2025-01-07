"use client"

import dynamic from "next/dynamic";
import Widgets from "./Widgets";
import { motion } from "motion/react";

export default function HomePage() {

  const Earth = dynamic(() => import('./Earth'), { ssr: false });

  return (
    <main className="text-white">
      <div className="z-10 flex flex-col gap-20 mx-48 pt-32">
        <motion.div
          className="z-10 flex flex-col gap-6 w-3/4 text-justify"
          initial={{ opacity: 0, translateY: 30 }}
          animate={{ opacity: 100, translateY: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-medium text-4xl">Hi !</h1>
          <h2 className="font-extralight text-lg">
            I am <span className="font-medium underline underline-offset-2">full-stack developer</span> with a major in <span className="font-medium underline underline-offset-2">AI</span>.
            I specialize in backend development and have extensive experience in front-end and mobile development. From building efficient server-side logic to creating intuitive and responsive user interfaces, I contribute effectively to all stages of the development lifecycle.
          </h2>
        </motion.div>
        <Widgets />
      </div>
      <div className="right-48 bottom-0 z-0 fixed w-[85vh] h-screen">
        <Earth />
      </div>
    </main>
  );
}
