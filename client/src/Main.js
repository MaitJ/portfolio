import React, { useEffect } from 'react';

import './css/main.css';
import './css/general.css';


const Main = () => {



    return(
        <section className="main">
            <section className="introduction">
                <h1>Mait Jurask</h1>
                <h1>PORTFOLIO</h1>
            </section>
            <section className="about">
                <img src={"./logo_white.png"} alt="Signature placeholder"/>
                <button type="button">Contact Me</button>
            </section>
        </section>
    );
};

export default Main;