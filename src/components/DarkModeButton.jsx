import { MoonIcon } from "../icons/MoonIcon";
import { SunIcon } from "../icons/SunIcon";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

export function DarkModeButton(){

   const {theme, toggleTheme} = useContext(ThemeContext);

   return(
      <button onClick={toggleTheme} className="bg-aqua-green-800 hover:bg-aqua-green-700 w-10 h-10 flex justify-center items-center rounded-full hover:rotate-12 transition-transform">
         {
            theme === 'dark' ? 
            <SunIcon/>
            :
            <MoonIcon/>
         }
      </button>
   )
}