import { HeaderMenuIcon } from "../icons/HeaderMenuIcon";
import { DarkModeButton } from "./DarkModeButton";
import { Menu } from "./Menu";

export function MainHeader(){
   return (
      <header className="dark:text-white flex h-16 justify-between items-center px-7 py-4">
         <strong className="text-xl">ESALU</strong>
         <div className="flex gap-4">
            <ul className="sm:flex gap-4 hidden items-center">
               <li><a href="#" className="hover:text-pastel-green-800">About Me</a></li>
               <li><a href="#" className="hover:text-pastel-green-800">Projects</a></li>
               <li><a href="#" className="hover:text-pastel-green-800">Skills</a></li>
               <li className="font-bold bg-pastel-green-900 px-3 py-2 text-white rounded-xl hover:bg-pastel-green-700"><a href="#">Contact Me</a></li>
            </ul>
            <HeaderMenuIcon/>
            <DarkModeButton/>
         </div>
        
      </header>
   )
}