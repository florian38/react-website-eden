import React from 'react';
import Slider from 'infinite-react-carousel';

import './CommentaryContainer.css'

import imgReview from '../../assets/background/imgReview.png'
import logoAirbnb from '../../assets/background/airbnb.png'
import logoGoogle from '../../assets/background/google.png'
import etoile from '../../assets/background/etoile.png'


import { GrScorecard } from 'react-icons/gr'
import { SiAirbnb } from 'react-icons/si'
import { BiHotel } from 'react-icons/bi'

import ReviewMobile from "../../component/ReviewMobile/ReviewMobile";
import ReviewAirbnb from "../../component/Review/ReviewAirbnb";
import ReviewGoogle from "../../component/Review/ReviewGoogle";




export default function CommentaryContainer() {

  const settings =  {
    arrows: false,
    dots: true
  };

  return (

  <div className="commentarySection" id="review">

      <div className="commentaryContainer">
      <h1 className='title'>Avis</h1>
      <img src={imgReview} className="imgAvis"></img>

      <Slider { ...settings } className='slideReview'>

          <div className="commentaryAirbnb">
            <img className='logo' src={logoAirbnb} alt='logoAirbnb'></img>
            <img className='logo' src={etoile} alt='logoEtoile'></img>
            <ReviewAirbnb></ReviewAirbnb>
          </div>

          <div className="commentaryGoogle">
            <img className='logo' src={logoGoogle} alt='logoGoogle'></img>
            <img className='logo' src={etoile} alt='logoEtoile'></img>
            <ReviewGoogle></ReviewGoogle>
          </div>

        </Slider>

        <div className="reviewMobile">
          <ReviewMobile/>
          <div className="infoReviewMobile">Faites défiler les avis</div>
        </div>

        <div className="wrapper">
          <div className="icon">
            <SiAirbnb className='reactIcon' size={20}></SiAirbnb>
            <div className='textIcon'>AirBnB SuperHost</div>     
          </div>

          <div className="icon">
            <GrScorecard className='reactIcon' size={20}></GrScorecard>
            <div className='textIcon'>Note de 4,98 / 5 </div>     
          </div>

          <div className="icon">
            <BiHotel className='reactIcon' size={20}></BiHotel>
            <div className='textIcon'>+ de 500 visites </div>     
          </div>

        </div>

      </div>
    </div>
  );
};