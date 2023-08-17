export function CardButton({ content, link, active }) {
   return (
      <a 
      className={`${active ? '' : 'pointer-events-none'} p-2 border-2 rounded-md active:opacity-50 text-white flex-1 transition-colors hover:bg-white text-center hover:text-gray-500 `}
      href={link}
      rel="noreferrer"
      target="_blank"
      
      >
         {content}
      </a>

   )
}