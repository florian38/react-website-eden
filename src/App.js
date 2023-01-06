import './App.css';
import React, {useState, useEffect} from 'react';
import LoaderContainer from './container/LoaderContainer/LoaderContainer';
import HomeContainer from './container/HomeContainer/HomeContainer';
import NavMenu from './component/NavMenu/NavMenu';
import EdenContainer from './container/EdenContainer/EdenContainer';
import HutteContainer from './container/HutteContainer/HutteContainer';
import CommentaryContainer from './container/CommentaryContainer/CommentaryContainer';
import FooterContainer from './container/FooterContainer/FooterContainer';
import { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";


function App() {

  const [isLoading, setIsLoading] = useState(true);
  /*const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 50, delay: 0 });*/

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  
  return (
    <div className='App'>
        {isLoading ? (<LoaderContainer/>) :
            (<>
              <NavMenu/>
              <HomeContainer></HomeContainer>
              <EdenContainer/>
              <HutteContainer/>
              <CommentaryContainer/>
              <FooterContainer/>
            </>
            )
        }
    </div>
  );
}

export default App;
