import React from 'react'

import { useState, useEffect } from 'react'
import { AiFillHome } from "react-icons/ai";
import { GiPositionMarker } from 'react-icons/gi'
import { MdDirectionsTransitFilled } from 'react-icons/md'
import { GiHomeGarage } from 'react-icons/gi'

import './Wrapper.css'

export default function Wrapper(props) {

    const [title, setTitle] = useState([])

    const eden = [  "Laissez-vous tenter par l'Eden",
                    "Loft d'exception",
                    "Proche du centre",
                    "Tramway",
                    "Garage"
                 ]
    
    const hutte = [  "Laissez-vous tenter par la Hutte",
                 "Havre de paix",
                 "Résidence calme",
                 "Tramway",
                 "Parking fermé"
              ]


    useEffect(() => {
        if(props.site == 'eden'){
            setTitle(eden)
        }

        if(props.site == 'hutte'){
            setTitle(hutte)
        }  
    }, [])

  return (

    <div className="wrapper">

        <div className='descriptif'>{title[0]}</div>

            <div className="icon">
            <AiFillHome className='reactIcon' size={20}></AiFillHome>
            <div className='textIcon'>{title[1]}</div>     
            </div>

            <div className="icon">
            <GiPositionMarker className='reactIcon' size={20}></GiPositionMarker>
            <div className='textIcon'>{title[2]}</div>     
            </div>

            <div className="icon">
            <MdDirectionsTransitFilled className='reactIcon' size={20}></MdDirectionsTransitFilled>
            <div className='textIcon'>{title[3]}</div>     
            </div>

            <div className="icon">
            <GiHomeGarage className='reactIcon' size={20}></GiHomeGarage>
            <div className='textIcon'>{title[4]}</div>     
        </div>

    </div>
  )
}
