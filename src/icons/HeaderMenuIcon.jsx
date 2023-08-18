import { useContext } from "react"
import MenuContext from "../context/MenuContext"



export function HeaderMenuIcon(){
   const {menuActive, toggleMenu} = useContext(MenuContext)
   return(
      <button onClick={toggleMenu} className={`${menuActive ? 'absolute top-4 right-20' : ''} sm:hidden rounded-full flex justify-center items-center hover:bg-white hover:bg-opacity-10 hover:rotate-90 transition-transform active:bg-opacity-5 duration-150 ease-in-out w-10 h-10`}>
         <svg className="w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>
      </button>
      
   )
}
