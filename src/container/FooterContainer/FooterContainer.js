import React from 'react'

import { AiFillFacebook } from 'react-icons/ai'
import { FiInstagram } from 'react-icons/fi'

import './FooterContainer.css'

export default function FooterContainer() {
  return (
    <div className="footer" id='footer'>
        <div className="row">
            <a><AiFillFacebook className='iconFooter' size={30}/></a>
            <a><FiInstagram className='iconFooter' size={30}/></a>
        </div>

        <div className="row">
            <ul>
                <li>06 67 92 42 77</li>
                <li>Bitcoin accepté</li>
                <li><a>Télécharger le réglement</a></li>
            </ul>
        </div>

        <div className="row">
            Copyright © 2023 - All rights reserved || Designed By: Flo
        </div>
    </div>

  )
}
