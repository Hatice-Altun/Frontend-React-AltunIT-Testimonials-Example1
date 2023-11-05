import React from "react";
import user1 from "../../assets/ProfielFotoHatice.png";
import "./Testimonials.css";

function Testimonials() {
    return (
        <div className="testimonials" id="testimonials">
            <div className="container">
                <h2>Testimonials</h2>
                <span className="line"></span>
                <div className="content">
                    <div className="card">
                        <img src={user1} alt="user1"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, aliquid atque cum doloribus, eaque eligendi et facilis incidunt ipsa laboriosam maxime mollitia porro rem repellat, soluta velit. Magni, nesciunt.</p>
                        <p><span>Voornaam Achternaam</span></p>
                        <p>Functie "Naam Organisatie"</p>
                    </div>

                    <div className="card">
                        <img src={user1} alt="user1"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, aliquid atque cum doloribus, eaque eligendi et facilis incidunt ipsa laboriosam maxime mollitia porro rem repellat, soluta velit. Magni, nesciunt.</p>
                        <p><span>Voornaam Achternaam</span></p>
                        <p>Functie "Naam Organisatie"</p>
                    </div>

                    <div className="card">
                        <img src={user1} alt="user1"/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam, aliquid atque cum doloribus, eaque eligendi et facilis incidunt ipsa laboriosam maxime mollitia porro rem repellat, soluta velit. Magni, nesciunt.</p>
                        <p><span>Voornaam Achternaam</span></p>
                        <p>Functie "Naam Organisatie"</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
