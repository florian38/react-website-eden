import React, {useContext} from "react";

import './LoaderContainer.css'

const LoaderContainer = ({ children }) => {
    
    return (
        <div className="loader-container">
            <h1>Bienvenue</h1>
            <div className="gooey">
                <span className="dot"></span>
                <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        
    );
};

export default LoaderContainer;