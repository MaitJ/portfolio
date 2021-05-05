import React, { useEffect } from 'react';
import { BrowserRouter as Router, Link, Redirect, Route } from 'react-router-dom';
import Contact from './Contact';
import ReactGA from 'react-ga';

import './css/main.css';
import './css/general.css';
import { BiWindows } from 'react-icons/bi';


const Main = () => {

    const handleContactClick = () => {
        <Router>
            <Route path="/contact" component={Contact} />
        </Router>
    }


    return(
        
        <section className="main">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <section className="introduction">
                <h1>Mait Jurask PORTFOLIO</h1>
            </section>
            <section className="about">
                <img src={"./logo_white.png"} alt="Signature placeholder"/>
                <Link to='/contact' type='button' className="button">Contact Me</Link>
            </section>
                <section className='icons'>
                    <a target="_blank" href="https://instagram.com/maitjurask" className='fa fa-instagram'></a>
                    <a target="_blank" href="https://www.flickr.com/photos/164370955@N05/" className='fa fa-flickr'></a>
                </section>
        </section>
    );
};

export default Main;