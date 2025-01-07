import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import { TfiDownload } from "react-icons/tfi";
import dynamic from "next/dynamic";
import GitHub from "./GitHub";


export default function HomePage() {

  const Earth = dynamic(() => import('./Earth'), { ssr: false });

  return (
    <main className="text-white">
      <div className="z-10 flex flex-col gap-20 mx-48 pt-32">
        <div className="z-10 flex flex-col gap-6 w-3/4 text-justify">
          <h1 className="font-medium text-4xl">Hi !</h1>
          <h2 className="font-extralight text-lg">
            I am <span className="font-medium underline underline-offset-2">full-stack developer</span> with a major in <span className="font-medium underline underline-offset-2">AI</span>.
            I specialize in backend development and have extensive experience in front-end and mobile development. From building efficient server-side logic to creating intuitive and responsive user interfaces, I contribute effectively to all stages of the development lifecycle.
          </h2>
        </div>
        <div className="z-10 w-4/6">
          <div className="flex gap-3 w-max">

            <div className="rounded-lg overflow-hidden">
              <Image className="opacity-90 rounded-lg transition-transform duration-200 hover:scale-110" src={"/profile.jpg"} alt={"profile"} width={160} height={0} />
            </div>


            <div className="flex flex-col gap-3 w-4/6">
              <div className="flex gap-3">
                <a href={"https://www.linkedin.com/in/eric-sia-b0385a284/"} target="_blank" rel="noopener noreferrer" className="flex justify-center bg-[#0077b7] p-3 rounded-lg font-medium text-3xl transition-transform duration-200 hover:scale-105">
                  <FaLinkedinIn />
                </a>
                <button className="flex justify-between items-center bg-stone-600 p-4 rounded-lg w-full transition-transform duration-200 hover:scale-105">
                  <h1 className="font-extralight">Resume.pdf</h1>
                  <TfiDownload className="animate-pulse" />
                </button>
              </div>
              <GitHub />
              {/* <div className="bg-stone-800 rounded-lg h-52 transition-transform duration-200 hover:scale-105">
                <LanguageCloud />
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="right-48 bottom-0 z-0 fixed w-[85vh] h-screen">
        <Earth />
      </div>
    </main>
  );
}
