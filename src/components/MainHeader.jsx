import { HeaderMenuIcon } from "../icons/HeaderMenuIcon";
import { DarkModeButton } from "./DarkModeButton";
import MenuContext from "../context/MenuContext";
import { useEffect, useState } from "react";
import { MainLink } from "./MainLink";


export function MainHeader(){

   

   const [menuActive, setMenuActive] = useState(false)
   const [menuClasses, setMenuClasses] = useState("dark:text-white flex fixed h-16 justify-between items-center px-7 py-4 w-full z-20 backdrop-blur-md")
   const [windowWidth, setWindowWidth] = useState({width: window.innerWidth})

   const menuInactiveClasses = "animate-fade animate-ease-in-out dark:text-white flex fixed h-16 justify-between items-center px-7 py-4 w-full z-20 backdrop-blur-md"
   const menuActiveClasses = "animate-fade-down animate-duration-300  dark:text-white flex flex-col bg-emerald-900/50 justify-center items-center fixed h-full px-7 py-4 w-full z-20 backdrop-blur-2xl"
   const strongActiveClasses = 'absolute top-5 left-7'
   const anchorActiveClasses = 'flex justify-center items-center w-screen h-20  text-2xl font-bold animate-fade-right'

   const scrollToSection = (event, targetId) => {
      closeMenu()
      event.preventDefault()
      const target = document.getElementById(targetId.section)
      console.log(target)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    };

   const toggleMenu = () => {
      setMenuActive(!menuActive)
      menuActive ? setMenuClasses(menuInactiveClasses) : setMenuClasses(menuActiveClasses)

   }

   const closeMenu = () => {
      setMenuActive(false)
      setMenuClasses(menuInactiveClasses)
   }


   useEffect(()=>{
      const handleResize = () => {
         setWindowWidth({
           width: window.innerWidth,
         })
       }
       
       if(windowWidth.width > 640){
         setMenuActive(false)
         setMenuClasses(menuInactiveClasses)
       }
       // Attach the handler to the resize event
       window.addEventListener('resize', handleResize)

       return () => {
         window.removeEventListener('resize', handleResize)
       }

   },[windowWidth])


   return (
      <MenuContext.Provider value={{menuActive, toggleMenu}}>
         <header className={menuClasses}>
            <strong className={`${menuActive ? strongActiveClasses : ''} text-xl animate-fade-right`}><a className="cursor-pointer" onClick={(e)=>scrollToSection(e, {section:"first-section"})}>ESALU</a></strong>
            <nav className="flex gap-4">
               <ul className={`${menuActive ? '' : 'hidden'} sm:flex gap-4 items-center`}>
                  <MainLink delay="100ms" scrollToSection={scrollToSection} menuActive={menuActive} anchorActiveClasses={anchorActiveClasses} section={"aboutme-section"} name={"About Me"}/>
                  <MainLink delay="200ms" scrollToSection={scrollToSection} menuActive={menuActive} anchorActiveClasses={anchorActiveClasses} section={"project-section"} name={"Projects"}/>
                  <MainLink delay="300ms" scrollToSection={scrollToSection} menuActive={menuActive} anchorActiveClasses={anchorActiveClasses} section={"skills-section"} name={"Skills"}/>
                  <li><a onClick={toggleMenu} href="#" className={`${menuActive ? anchorActiveClasses :''} hover:text-pastel-green dark:hover:text-pastel-green-800 sm:font-bold sm:bg-pastel-green-900 sm:px-3 sm:py-2 animate-delay-[400ms] sm:text-white sm:rounded-xl sm:hover:bg-pastel-green-700`}>Contact Me</a></li>
               </ul>
               <HeaderMenuIcon/>
               <DarkModeButton/>
            </nav>
         
         </header>
      </MenuContext.Provider>
   )
}