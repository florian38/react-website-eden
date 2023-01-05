import React from 'react'

import './HutteContainer.css'

import plante from '../../assets/background/plante.png'
import plante1 from '../../assets/background/plante1.png'


import Accordeon from '../../component/Accordeon/Accordeon'
import Wrapper from '../../component/Wrapper/Wrapper'
import SliderMobile from '../../component/SliderMobile/SliderMobile'
import Button from '../../component/Button/Button'


export default function HutteContainer() {
  
  return (
    <div className='hutteSection' id='hutteSection'>
      <div className='containerHutte'>
        <h1 className='title'>La Hutte</h1>
        <img className='imgHutte' src={plante} alt='fondEcran1'/>
        <img className='imgHutte1' src={plante1} alt='fondEcran2'/>
        <Accordeon site='hutte'/>
        <SliderMobile site='hutte'></SliderMobile>
        <Wrapper site='hutte'></Wrapper>
        <Button site='hutte'></Button>
      </div>
    </div>

  )
}
