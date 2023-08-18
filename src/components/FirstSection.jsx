import { GithubButton } from "./GithubButton"
import { LinkedInButton } from "./LinkedInButton"
import {useState} from "react"

export function FirstSection(){

   const [active, setActive] = useState(false)

   const handleMouseEnter = () => {
      setActive(true)
   }
   const handleMouseLeave = () => {
      setActive(false)
   }


   return(
      <section id="first-section" className="w-full h-[600px] flex flex-col items-center pt-20 mb-10">
         <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="w-64 relative animate-fade-up animate-delay-[20ms] animate-ease-in-out">
            <img className={`${active ? 'animate-wiggle animate-infinite animate-duration-[550ms] animate-ease-in-out' : ''} transition-transform z-10 rounded-full relative border-4 border-emerald-600 dark:border-light-green`} src="https://avatars.githubusercontent.com/u/66653779?v=4" alt="Fotografía de Emilio Salas"/>
            <span className={`${active ? 'animate-spin animate-infinite animate-duration-1000 animate-ease-in-out' : ''} transition-transform w-64 h-64 rounded-full bg-gradient-to-bl from-aqua-green-700 to-pastel-green-800 dark:bg-gradient-to-bl dark:from-pastel-green-800 dark:to-emerald absolute top-4 left-4 opacity-70 shadow-2xl`}></span>
         </div>
         <aside className="text-center mt-14 mb-6">
            <p className="animate-fade-up animate-delay-[200ms] animate-ease-in-out dark:text-light-green-800 font-bold text-lg text-emerald-800">Hello! I&apos;m</p>
            <h2 className="animate-fade-up animate-delay-[300ms] animate-ease-in-out font-bold text-4xl dark:text-light-green-200">Emilio Salas</h2>
            <h3 className="animate-fade-up animate-delay-[359ms] animate-ease-in-out dark:text-pastel-green font-bold text-pastel-green-900 text-xl">Front-End Developer & <span className="dark:text-white text-aqua-green-800">Music Composer</span></h3>
         </aside>
         <footer className="flex gap-2 animate-fade-up animate-delay-[500ms] animate-ease-in-out">
            <GithubButton/>
            <LinkedInButton/>
         </footer>
            
      </section>
   )
}