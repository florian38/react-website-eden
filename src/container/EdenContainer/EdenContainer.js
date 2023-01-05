import React from 'react'

import Accordeon from '../../component/Accordeon/Accordeon'
import SliderMobile from '../../component/SliderMobile/SliderMobile'
import Button from '../../component/Button/Button'
import Title from '../../component/Title/Title'

import arbre from '../../assets/background/pommier.png'
import arbre2 from '../../assets/background/pommier2.png'
import arbre3 from '../../assets/background/pommier3.png'

import './EdenContainer.css'


import Wrapper from '../../component/Wrapper/Wrapper'

export default function EdenContainer() {

  return (
    <div className='edenSection' id='edenSection'> 
      <div className='containerEden'>

        <Title title="L'Eden"/>

        <img className='imgEden' src={arbre} alt='fondEcran1'/>
        <img className='imgEden2' src={arbre2} alt='fondEcran1'/>
        <img className='imgEden3' src={arbre3} alt='fondEcran1'/>

        <Accordeon className='test' site='eden'/>
        <SliderMobile site='eden'></SliderMobile>
        <Wrapper site='eden'></Wrapper>
        <Button site='eden'></Button>
        
      </div>
    </div>

  )
}
