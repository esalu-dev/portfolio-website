import { GithubButton } from "./GithubButton"
import { LinkedInButton } from "./LinkedInButton"

export function FirstSection(){
   return(
      <section className="w-full h-[600px] flex flex-col items-center pt-20 mb-10">
         <div className="w-64 relative">
            <img className="z-10 rounded-full relative border-4 border-emerald-600 dark:border-light-green" src="https://avatars.githubusercontent.com/u/66653779?v=4" alt="Fotografía de Emilio Salas"/>
            <span className=" w-64 h-64 rounded-full bg-gradient-to-bl from-aqua-green-700 to-pastel-green-800 dark:bg-gradient-to-bl dark:from-pastel-green-800 dark:to-emerald absolute top-4 left-4 opacity-70 shadow-2xl"></span>
         </div>
         <aside className="text-center mt-14 mb-6">
            <p className="dark:text-light-green-800 font-bold text-lg text-emerald-800">Hello! I&apos;m</p>
            <h2 className="font-bold text-4xl dark:text-light-green-200">Emilio Salas</h2>
            <h3 className="dark:text-pastel-green font-bold text-pastel-green-900 text-2xl">Front-End Developer & <span className="dark:text-white text-aqua-green-800">Music Composer</span></h3>
         </aside>
         <footer className="flex gap-2">
            <GithubButton/>
            <LinkedInButton/>
         </footer>
            
      </section>
   )
}