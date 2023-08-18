import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import MenuContext from "../context/MenuContext";

export function DarkModeButton(){
   const {menuActive} = useContext(MenuContext)
   const {theme, toggleTheme} = useContext(ThemeContext);

   return(
      <button onClick={toggleTheme} className={`${menuActive ? 'absolute top-4 right-7' : ''} bg-aqua-green-800 hover:bg-aqua-green-700 w-10 h-10 flex justify-center items-center rounded-full hover:rotate-12 transition-transform`}>
         {
            theme === 'dark' ? 
            <SunIcon/>
            :
            <MoonIcon/>
         }
      </button>
   )
}