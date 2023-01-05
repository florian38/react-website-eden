
import React, {useState} from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";
import Hamburger from 'hamburger-react'

import './NavMenu.css'



export default function NavMenu() {

  const [open, setOpen] = useState(false)


  return (
    <nav className="navBar">
      <Hamburger toggled={open} toggle={setOpen} size={30} color={'hsla(42, 55%, 59%, 1)'}/>
      {open && 
      <motion.div
      initial={{  opacity: 0, scale : 0.5 }}
      animate={{ x: 0, scale: 1, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
      >
        <ul className="linkBar">
          <li className="lienPage"><Link to="home" smooth={true} duration={500}>Accueil</Link></li>
          <li className="lienPage"><Link to="edenSection" smooth={true} duration={500}>L'Eden</Link></li>
          <li className="lienPage"><Link to="hutteSection" smooth={true} duration={500}>La Hutte</Link></li>
          <li className="lienPage"><Link to="review" smooth={true} duration={500}>Avis</Link></li>
        </ul>
          
      </motion.div> }
    </nav>
    
  )
}