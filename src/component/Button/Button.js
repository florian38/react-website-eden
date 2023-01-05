import React from 'react'
import { useState, useEffect } from 'react'

import './Button.css'

export default function Button(props) {

    const [title, setTitle] = useState("")

    useEffect(() => {
        if(props.site === 'eden'){
            setTitle('resEden')
        } 
        if(props.site == 'hutte'){
            setTitle('resHutte')
        }
    }, [])

  return (
    <div className="button">
        <button className={title}>Reservation</button>
        <div className='descriptifButton'>A partir de 180 euros/nuit</div>
    </div>   

  )
}
