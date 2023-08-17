import { Card } from './Card'

export function Projects ( ) {
   return (
      <section className="px-7 flex flex-col">
         <h2 className="text-3xl font-bold text-emerald-900 dark:text-emerald">Projects</h2>
         <div className='px-8 py-4 flex flex-wrap justify-center gap-5'>
            <Card title={"URL Shortener"} imgURL={"https://user-images.githubusercontent.com/66653779/261403525-0903a658-9c2c-474a-9ffe-a9f3a3cea097.png"} contentFirstButton={"Code"} linkFirstButton={"https://github.com/esalu-dev/url-shortener-react"} contentSecondButton={"Website"} linkSecondButton={"https://bit.ly/43qjOQJ"}/>
         
         </div>
            
      </section>
   )
}