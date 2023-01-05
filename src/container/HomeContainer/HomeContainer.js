import React from 'react'

import { Link } from "react-scroll";
import Slider from '../../component/Slider/Slider'

import './HomeContainer.css'


export default function HomeContainer() {
  return (
    <div className='home' id='home'>

      <Slider/>  

      <Link to="edenSection" smooth={true} duration={500} className="scroll-downs">
        <div className="mousey">
          <div className="scroller"></div>
        </div>
      </Link>

      <div className='messageHome'>Location appartement Grenoble</div>
      
    </div>
    
  )
}
