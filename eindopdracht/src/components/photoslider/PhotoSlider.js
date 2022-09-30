import React from 'react';
import './PhotoSlider.css';


function PhotoSlider({ title, quote, classnaampje }){
    return(
        <div className={classnaampje}>
         <h1>{title}</h1>
        <h3> -- Quote: {quote} -- </h3>
    </div>
    );
}

export default PhotoSlider;