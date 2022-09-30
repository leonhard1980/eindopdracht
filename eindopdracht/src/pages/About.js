import {link} from 'react-router-dom';
import PhotoSlider from "../components/photoslider/PhotoSlider";
import React from "react";
import Bumper from "../components/bumper/Bumper";


function About() {
    return(
        <div>


<h1> About US!!! </h1>
            <Bumper tekst="." />
            <article className="page-container">
                <p className="colums-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corporis cumque exercitationem minus optio, perferendis quos sunt.
                    Accusamus ad aliquid autem consequatur, eos ex excepturi illum impedit maiores molestias nam quod rem, voluptatibus. Mollitia, quidem voluptas?
                    Consectetur dolorem dolorum exercitationem iure magni molestias quaerat quas reprehenderit sit voluptates? Adipisci eius eveniet quas ullam!
                    Atque autem deserunt esse et fuga laudantium nostrum omnis repudiandae voluptates voluptatibus. At, corporis cupiditate dolor eligendi eos
                    exercitationem harum impedit maxime molestias neque perferendis praesentium, provident reprehenderit sapiente sequi voluptates voluptatum?
                    Debitis odio perferendis repellendusidem quis quisquam tempore ut veritatis vitae. At autem blanditiis cum, dignissimos dolore
                    facere illo quis ullam vero. Cum deleniti dolorum earum et, explicabo facilis hic illo minima nisi obcaecati odio omnis porro rerum vel velit.
                    Autem cum delectus deserunt exercitationem, fugiat illum iste iusto natus nobis nostrum perferendis provident qui quos recusandae sapiente tempora
                    tempore unde, voluptas. Ab, deserunt est fugiat fugit ipsam saepe sint ullam?
                </p> </article>

            <PhotoSlider
                classnaampje="topplaatje6"
                title="koeien?"
                quote="You only live ones (and zero's)"
            />
        </div>
    );
}

export default About;