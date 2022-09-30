import {link} from 'react-router-dom';
import React from "react";

function Register() {
    return(
        <>
            <div> Register </div>

    <div className="container">
        <div className="search-wrapper">
            <input
                type="text"
                id="country-inp"
                placeholder="Enter a country name here..."
            />
            <button id="search-btn">Search</button>
        </div>
        <div id="result"></div>
    </div>
            </>
    );
}

export default Register;