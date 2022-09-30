import {link} from 'react-router-dom';
import React from "react";
import PhotoSlider from "../components/photoslider/PhotoSlider";
import './Register.css';
import Bumper from "../components/bumper/Bumper";
import { useForm } from 'react-hook-form';



function Register() {
    const [messageValue, setMessageValue] = React.useState('');
    const [checkedTerms, toggleCheckedTerms] = React.useState(false);

    return(
        <>

<footer>
<div className="container">
<h2 className="kopje">Vertel ons wie je bent</h2>

    <form>
        <fieldset>
            <legend>Schrijf je nu in voor de BoodschapApp</legend>
            <label htmlFor="details-name">
                Naam:
                <input
                    className="textfield"
                    type="text"
                    name="name"
                    id="details-name"
                />
            </label>

            <label htmlFor="details-age">
                Leeftijd:
                <input
                    className="textfield"
                    type="number"
                    name="age"
                    id="details-age"
                />
            </label>

            <label htmlFor="details-sex">
                Geslacht:
                <select className="texfield">
                    <option> man </option>
                    <option>vrouw</option>
                    <option>dier</option>
                    <option>hermafrodiet</option>
                    <option>playboy</option>
                    <option>beyond sex</option>
                </select>
            </label>

            <label htmlFor="details-email">
                Email:
                <input
                    className="textfield"
                    type="text"
                    name="email"
                    id="details-email"
                />
            </label>

            <label htmlFor="details-zip">
                Postcode:
                <input
                className="textfield"
                type="text"
                name="zipcode"
                id="details-zip"
                />
            </label>

            <label htmlFor="details-city">
                Woonplaats:
                <input
                    className="textfield"
                    type="text"
                    name="cityname"
                    id="details-city"
                />
            </label>






            <label htmlFor="recipe-comments">
                Opmerkingen:
                <textarea
                    className="textfield"
                    name="comments"
                    id="recipe-comments"
                    rows="4"
                    cols="40"
                    placeholder="Wat wil je ons vertellen?"
                >
          </textarea>
            </label>



        </fieldset>


        <label htmlFor="terms-and-conditions">
            <input
                type="checkbox"
                name="terms-and-conditions"
                id="terms-and-conditions"
                checked={checkedTerms}
                onChange={() => toggleCheckedTerms(!checkedTerms)}
            />
            Ik ga akkoord met de algemene voorwaarden
        </label>



        <button
        disabled={checkedTerms === false}
        type="submit">
            Ik schrijf me in!
        </button>

    </form>
</div>

</footer>

            <Bumper
                tekst="."/>

                <Bumper
                    tekst="."/>

                    <Bumper
                        tekst="."/>

            <PhotoSlider
                classnaampje="topplaatje6"
                title="koeien?"
                quote="You only live ones (and zero's)"
            />


            </>
    );
}

export default Register;





{/*           <div> Register </div>

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
    </div>*/}



{/*          <label >
            <input className="textfield"
            name="message"
            type="text"
                   id="details-name"
            placeholder="Vertel me alles"
            value={messageValue}
            onChange={(e) => setMessageValue(e.target.value)}
        />
            </label>*/}