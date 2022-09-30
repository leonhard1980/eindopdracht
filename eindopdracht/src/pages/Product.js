import {link} from 'react-router-dom';
import React from "react";
import Bumper from "../components/bumper/Bumper";
import PhotoSlider from "../components/photoslider/PhotoSlider";

function Product() {
    return(
        <div>

            <h1> Our Products </h1>

            <Bumper tekst="." />

            <PhotoSlider
                classnaampje="topplaatje3"
                title="koeien?"
                quote="You only live ones (and zero's)"
            />

   </div>

    );
}

export default Product;