import { CardButton } from "./CardButton"
import { useState } from "react"

export function Card({title, imgURL, contentFirstButton, linkFirstButton, contentSecondButton, linkSecondButton}) {
   const [active, setActive] = useState(false)

   const handleMouseEnter = () => {
      setActive(true)
   }
   const handleMouseLeave = () => {
      setActive(false)
   }
   
   return(
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative flex flex-col border-4 dark:border-light-green border-pastel-green-800 dark:bg-emerald-800 dark:text-white bg-pastel-green rounded-md shadow-lg max-w-xs ">
         <img className="rounded-t-sm" src={imgURL} alt="Screenshot of URL Shortener Project" />
         <h3 className="text-center text-xl font-bold py-2">{title}</h3>
         <div className={`${active ? 'opacity-100' : 'opacity-0'} transition-opacity flex absolute bg-black bg-opacity-50 backdrop-blur-sm w-full h-full items-center font-bold gap-4 px-4`}>
            <CardButton content={contentFirstButton} link={linkFirstButton} active={active}/>
            <CardButton content={contentSecondButton} link={linkSecondButton} active={active}/>
         </div>
      </div>
   )
}