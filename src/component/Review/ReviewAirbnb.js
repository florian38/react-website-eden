import { useState, useEffect } from "react";

import user from '../../assets/user.png'
import dataTab from '../../assets/data/data.js'

import './ReviewAirbnb.css'

export default function ReviewAirbnb() {

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
      <div className="review">
        {loading && 
            <div className="containerReview">{data.slice(0, 6).map((item, index, elements) => {
                if(index < 5) {
                  let imgs = elements[index + 1].img
                  if(imgs == null){
                    imgs = user
                  }
                  return  (<div className="card" key={index}>
                            <div className="cardHeader">
                              <img className="avatar" src={imgs} alt='avatar'></img>
                              <h3 className="titleCard">{item.name}</h3>
                            </div>
                            <div className="cardTxt">{item.comment.length > 200 ? ' " ' + item.comment.substring(0, 200) + '... "' : ' " ' + item.comment + ' " '}</div>
                          </div>)
                }})}
                                            
            </div>}
      </div>
  );
};
