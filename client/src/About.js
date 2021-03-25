import React, {useState} from 'react';
import './css/general.css';
import './css/about.css';
const About = () => {

    return(
        <section className='aboutpage'>
            <div className='about-text'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, amet suscipit tenetur quo quos esse illo aspernatur iure vel, et eaque qui nisi placeat alias voluptatibus unde dolore illum ipsa impedit rerum! Velit nulla inventore non illo qui quae vero magnam modi quam, sunt ab. Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo reiciendis impedit assumenda recusandae aliquam enim tempora explicabo aperiam est pariatur.</p>
            </div>
            <div className='about-image'>
                <img src={"./logo_white.png"} alt="Signature placeholder"/>
            </div>
        </section>
        
    );
}

export default About;