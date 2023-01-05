import React from 'react'
import { useState, useEffect } from 'react'

import jacuzzi from '../../assets/eden/jacuzzi.jpg'
import balançoire from '../../assets/eden/balançoire.jpg'
import room from '../../assets/eden/room.jpg'
import cocon from '../../assets/eden/cocon.jpg'
import fauteuil from '../../assets/eden/fauteuil.jpg'

import cuisine from '../../assets/hutte/cuisine.png'
import chambre from '../../assets/hutte/chambre.png'
import douche from '../../assets/hutte/douche.jpg'
import mur from '../../assets/hutte/mur.jpg'
import chemine from '../../assets/hutte/chemine.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import styles
import './SliderMobile.css'
import 'swiper/css';

export default function SliderMobile(props) {

    const eden = [
        { img : jacuzzi, title : 'SPA' },
        { img : balançoire, title : 'Balançoire'},
        { img : room, title : 'Nid'},
        { img : cocon, title : 'Cocon'},
        { img : fauteuil, title : 'Salon tantrique'}
    ]

    const hutte = [
        { img : cuisine, title : 'Cuisine' },
        { img : chambre, title : 'Nid'},
        { img : douche, title : 'Douche'},
        { img : mur, title : 'Mur' },
        { img : chemine, title : 'Cheminé'}
    ]

    const [tabImg, setTab] = useState(eden)

    useEffect(() => {
        if(props.site == 'eden'){
            setTab(eden)
        } else {
            setTab(hutte)
        }
    }, [])

    
  return (
    
    <Swiper
    spaceBetween={100}
    slidesPerView={1}
    className='swiperMobile'
    >
      <SwiperSlide>
        <div className='slideMobile'>
          <h2 className='titleSlideMobile'>{tabImg[0].title}</h2>
          <img className='imgMobile' src={tabImg[0].img}></img>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='slideMobile'>
          <h2 className='titleSlideMobile'>{tabImg[1].title}</h2>
          <img className='imgMobile' src={tabImg[1].img}></img>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='slideMobile'>
          <h2 className='titleSlideMobile'>{tabImg[2].title}</h2>
          <img className='imgMobile' src={tabImg[2].img}></img>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='slideMobile'>
          <h2 className='titleSlideMobile'>{tabImg[3].title}</h2>
          <img className='imgMobile' src={tabImg[3].img}></img>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className='slideMobile'>
          <h2 className='titleSlideMobile'>{tabImg[4].title}</h2>
          <img className='imgMobile' src={tabImg[4].img}></img>
        </div>
      </SwiperSlide>

    </Swiper>

  )
}
