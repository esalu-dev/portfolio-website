import PropTypes from 'prop-types'

MainLink.propTypes = {
   scrollToSection: PropTypes.func.isRequired,
   menuActive: PropTypes.bool.isRequired,
   anchorActiveClasses: PropTypes.string.isRequired,
   section: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   delay: PropTypes.string.isRequired,
}

export function MainLink({scrollToSection, menuActive, anchorActiveClasses, section, name, delay}){
   
   
   return(
      <li>
         <a onClick={(e) => scrollToSection(e, {section})} href="#" className={`${menuActive ? anchorActiveClasses + ` animate-delay-[${delay}]` :''} hover:text-pastel-green dark:hover:text-pastel-green-800`}>{name}</a>
      </li>
   )
}