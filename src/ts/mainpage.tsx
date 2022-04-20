import React from 'react';
import '../css/style.css';

import Anapur from '../images/anapurwhitelogo.png';
import Background from '../images/mountainBackground.jpg';

const MainPage = () => {

    return (
        <div>
            <img src={Background} alt="logo"/>
            <img src={Anapur} alt="logo"/>
            <div className="rectangleLeft">
                <h3 className="WelcomeText">
                    Herzlich Willkommen zur Schulung! <br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                    magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                    rebum.
                    Stet clita kasd
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                    amet,
                    consetetur sadipscing
                    elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed
                    diam
                    voluptua.
                </h3>
            </div>
            <div className="rectangleRight">
                <div className="quote-body">
                    <div className="icon-quote">
                        <span className="icon"/>
                        <i className="fas fa-quote-left"></i>
                        <p className="quote">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                            eirmod
                            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                    <div className="author">― Lorem ipsum</div>

                    <div className="quote-buttons">
                        <div className="social">
                            <a className="twitter-share-button"
                               href="https://twitter.com/intent/tweet?text=Hello%20world">
                                <i className="fab fa-twitter-square"></i>
                            </a>
                        </div>

                        <div className="btn">
                            <button id="quote-btn">Neues Zitat</button>
                        </div>

                    </div>
                </div>
                <a href="Dashboard" className="startnow">JETZT STARTEN</a>

                <script src="../ts/zitate.js"></script>

            </div>
        </div>
    );
}

export default MainPage;
