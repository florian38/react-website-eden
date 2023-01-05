import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import user from '../../assets/user.png'
import dataTab from '../../assets/data/data.js'


// Import Swiper styles
import 'swiper/css';
import './ReviewMobile.css'

export default function ReviewMobile() {
    
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
      //const url = "https://simplescraper.io/api/2xQEEIEjyrtiySVKnhlw?apikey=gtkq5Tciju8tGxMESKl2nBjKZeSQGA0J&limit=100";

      /*const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              setData(json.data)
              setLoading(true)
              
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData()*/
      const fetchData = async () => {
        try {
            setData(dataTab)
            setLoading(true)
            
        } catch (error) {
            console.log("error", error);
        }
    };

    fetchData()


  }, []);



  return (

        loading && 
            <div className="containerMobileReview">
                <Swiper
                spaceBetween={100}
                slidesPerView={1}
                className='swiperMobile'
                >
                {data.slice(0, 6).map((item, index, elements) => {
                    if(index < 5) {
                    let imgs = elements[index + 1].img

                        if(imgs == null){
                            imgs = user
                        }
                    
                    return  <SwiperSlide key={index}>
                                <div className="cardMobile">
                                    <div className="cardHeaderMobile">
                                        <img className="avatarMobile" src={imgs}></img>
                                        <h3 className="titleCardMobile">{item.name}</h3>
                                    </div>
                                    <div className="cardTxtMobile">{item.comment.length > 200 ? ' " ' + item.comment.substring(0, 200) + '... "' : ' " ' + item.comment + ' " '}</div>
                                </div>
                            </SwiperSlide>
                }})}
                </Swiper>                           
            </div>
  );
};
