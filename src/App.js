//import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Gallery from "./Gallery.js";
//import { BrowserRouter as Router } from "react-router-dom";
import './css/style.css';


function Navbar() {
    return (
        <Router>
            <div>
                <section className='navbar'>
                        <Link to="/home">Home </Link>
                        <Link to="/gallery">Gallery </Link>
                        <Link to="/about">About </Link>
                        <Link to="/contact">Contact </Link>
                </section>
                <section className='content'>
                    <Route path="/gallery" component={Gallery}/>
                </section>
            </div>
        </Router>
    );
}

function App() {
    return(
         <Navbar />
    )
};

export default App;