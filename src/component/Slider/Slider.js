import React, {useState, useEffect} from 'react'

import eden from "../../assets/imgSlider/edentest.jpg";
import hutte from "../../assets/imgSlider/hutte.png";
import logo from "../../assets/logo.png";

import './Slider.css'

export default function Slider() {

  const [activeSlide, setActiveSlide] = useState(-1);
  const [prevSlide, setPrevSlide] = useState(-1)
  const [sliderReady, setSliderReady] = useState(true)

  let IMAGE_PARTS = 4;
  //let changeTO = null;
  //let AUTOCHANGE_TIME = 4000;
  let className = 'slider__slide'

  useEffect(() => {
    setTimeout(() => {
      setActiveSlide(0)
      setSliderReady(true)
    }, 5);
  
  }, [])


  const slide = [
    {
      city: `L'Eden d'Aphrodite`,
      text: `Paradis des désirs.`,
      img: eden },
    
    {
      city: 'La Hutte',
      text: `Voyager le temps d'un instant.`,
      img: hutte }];

  const changeSlide = (change) => {
    const { length } = slide;
    const prev = activeSlide;
    let active = prev + change;
    if (active < 0) active = length - 1;
    if (active >= length) active = 0;
    setActiveSlide(active)
    setPrevSlide(prev)
  }

  
  return (
    <div className='divSlider'>
      <div className={sliderReady ? "slider s--ready" : "slide"}>
      <img className='logoHome' src={logo} alt='logo'></img>
        <div className='slider__slides'>
          {slide.map((slide, index) => {
                  let test = ''
                  if(activeSlide === index){
                    test += ' s--active'
                  }

                  if(prevSlide === index){
                    test += ' s--prev'
                  }
                  return (
                      <div key={slide.city} className={className + test}>
                        <div className='slider__slide-content'>
                          <h2 className='slider__slide-subheading'>
                            {slide.city}
                          </h2>
                          <p>{slide.text}</p>
                        </div>
                        <div className='slider__slide-parts'>
                            {[...Array(IMAGE_PARTS).fill()].map((x, i) => {
                                return (
                                  <div className='slider__slide-part' key={i}>
                                    <div className='slider__slide-part-inner' style={{ backgroundImage: `url(${slide.img})` }}>
                                        
                                    </div>
                                  </div>
                                )
                            })}
                        </div>
                      </div>  
                  )
              })}
        </div>
          <div className='slider__control' onClick={() => changeSlide(-1)}></div>
          <div className='slider__control slider__control--right' onClick={() => changeSlide(1)}></div>
        </div>
    </div>
  )
}
