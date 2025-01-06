import { FaLinkedinIn } from "react-icons/fa";
import LanguageCloud from "./LanguageCloud";
import { FiGithub } from "react-icons/fi";
import Image from "next/image";
import { TfiDownload } from "react-icons/tfi";
import Earth from "./Earth";


export default function HomePage() {
  return (
    <main className="bg-stone-950 h-screen text-white">
      <div className="z-50 flex flex-col gap-20 mx-48 pt-32">
        <div className="flex flex-col gap-6 w-3/4 text-justify">
          <h1 className="font-medium text-3xl">Hi !</h1>
          <h2 className="font-extralight">
            I am <span className="font-medium underline underline-offset-2">full-stack developer</span> proficient in backend development with
            extensive experience in front-end and mobile development; From
            designing and implementing efficient server-side logic to crafting
            intuitive and responsive user interfaces. My
            versatile capabilities ensure that I can contribute effectively to all
            stages of the development lifecycle.
          </h2>
        </div>
        <div className="w-4/6">
          <div className="flex gap-3 w-max">
            <div className="flex flex-col gap-3 w-2/6">
              <div className="rounded-lg overflow-hidden">
                <Image className="opacity-90 rounded-lg transition-transform duration-200 hover:scale-110" src={"/profile.jpg"} alt={"profile"} width={150} height={0} />
              </div>
              <button className="flex justify-between items-center bg-stone-600 p-4 rounded-lg transition-transform duration-200 hover:scale-105">
                <h1 className="font-extralight">Resume.pdf</h1>
                <TfiDownload className="animate-pulse" />
              </button>
            </div>
            <div className="flex flex-col gap-3 w-4/6">
              <div className="flex gap-3">
                <a className="flex justify-center bg-[#0077b7] py-4 rounded-lg w-1/2 font-medium text-3xl transition-transform duration-200 hover:scale-105">
                  <FaLinkedinIn />
                </a>
                <a className="flex justify-center bg-stone-600 py-4 rounded-lg w-1/2 font-medium text-3xl transition-transform duration-200 hover:scale-105">
                  <FiGithub />
                </a>
              </div>
              <div className="bg-stone-800 rounded-lg h-52 transition-transform duration-200 hover:scale-105">
                <LanguageCloud />
              </div>
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
