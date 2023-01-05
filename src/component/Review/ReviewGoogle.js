import { useState, useEffect } from "react";

import user from '../../assets/user.png'
import dataTab from '../../assets/data/dataGoogle'

import './ReviewAirbnb.css'

export default function ReviewGoogle() {
  
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
            <div className="containerReview">{data[0].reviews.map((item, index, elements) => {
              let imgs = elements[index ].img
              if(imgs == null){
                imgs = user
              }
                  return (<div className="card" key={index}>
                            <div className="cardHeader">
                              <img className="avatar" src={imgs} alt='avatar'></img>
                              <h3 className="titleCard">{item.user.name}</h3>
                            </div>
                            <div className="cardTxt">{item.snippet.length > 200 ? ' " ' + item.snippet.substring(0, 200) + '... "' : ' " ' + item.snippet + ' " '}</div>
                          </div>)
                })}
                                            
            </div>}
      </div>
  );
};
