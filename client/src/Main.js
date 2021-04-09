import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';

import './css/main.css';
import './css/general.css';


const Main = () => {



    return(
        
        <section className="main">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <section className="introduction">
                <h1>Mait Jurask PORTFOLIO</h1>
            </section>
            <section className="about">
                <img src={"./logo_white.png"} alt="Signature placeholder"/>
                <button type="button">Contact Me</button>
            </section>
            <Router>
                <section className='icons'>
                    <Link to='instagram.com' className='fa fa-instagram'></Link>
                    <Link to='flickr.com' className='fa fa-flickr'></Link>
                </section>
            </Router>
        </section>
    );
};

export default Main;