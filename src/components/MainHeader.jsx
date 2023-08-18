import { HeaderMenuIcon } from "../icons/HeaderMenuIcon";
import { DarkModeButton } from "./DarkModeButton";
import MenuContext from "../context/MenuContext";
import { useEffect, useState } from "react";


export function MainHeader(){

   const [menuActive, setMenuActive] = useState(false)
   const [menuClasses, setMenuClasses] = useState("dark:text-white flex fixed h-16 justify-between items-center px-7 py-4 w-full z-20 backdrop-blur-md")
   const [windowWidth, setWindowWidth] = useState({width: window.innerWidth})

   const menuInactiveClasses = "dark:text-white flex fixed h-16 justify-between items-center px-7 py-4 w-full z-20 backdrop-blur-md"
   const menuActiveClasses = "dark:text-white flex flex-col bg-emerald-900/50 justify-center items-center fixed h-full px-7 py-4 w-full z-20 backdrop-blur-2xl"

   const strongActiveClasses = 'absolute top-5 left-7'

   const anchorActiveClasses = 'flex justify-center items-center w-screen h-20  text-2xl font-bold'

   const toggleMenu = () => {
      setMenuActive(!menuActive)
      menuActive ? setMenuClasses(menuInactiveClasses) : setMenuClasses(menuActiveClasses)
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
            <strong className={`${menuActive ? strongActiveClasses : ''} text-xl`}>ESALU</strong>
            <nav className="flex gap-4">
               <ul className={`${menuActive ? '' : 'hidden'} sm:flex gap-4 items-center`}>
                  <li><a onClick={toggleMenu} href="#" className={`${menuActive ? anchorActiveClasses :''} hover:text-pastel-green-800`}>About Me</a></li>
                  <li><a onClick={toggleMenu} href="#" className={`${menuActive ? anchorActiveClasses:''} hover:text-pastel-green-800`}>Projects</a></li>
                  <li><a onClick={toggleMenu} href="#" className={`${menuActive ? anchorActiveClasses:''} hover:text-pastel-green-800`}>Skills</a></li>
                  <li className={`${menuActive ? anchorActiveClasses :''} hover:text-pastel-green-800 sm:font-bold sm:bg-pastel-green-900 sm:px-3 sm:py-2 sm:text-white sm:rounded-xl sm:hover:bg-pastel-green-700`}><a onClick={toggleMenu} href="#">Contact Me</a></li>
               </ul>
               <HeaderMenuIcon/>
               <DarkModeButton/>
            </nav>
         
         </header>
      </MenuContext.Provider>
   )
}