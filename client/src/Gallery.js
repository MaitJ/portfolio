import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';

import {getImages} from './helpFunctions/getImages';

import './css/style.css';

const GalleryItem = (props) => {
    const pildiAlt = "Galeriipilt " + props.key;
    
    return (
        <section className={props.className}>
            <img src={props.img} alt={pildiAlt}/>
        </section>
    )
}



const Gallery = () => {
    return (
        <section className='main-content'>
            <section className='portfolio'>
                <section className = 'portfolio-item small'>
                </section>
                <section className = 'portfolio-item large'> kaks
                    <img src="../pictures/toodeldud3.jpg" alt=""/>
                </section>
                <section className = 'portfolio-item small'>kolm</section>
                <section className = 'portfolio-item medium'>neli</section>
                <section className = 'portfolio-item small'>viis</section>
                <section className = 'portfolio-item tall'>kuus</section>
                <section className = 'portfolio-item wide'>seitse</section>
            </section>
        </section>
    )
}

// function GalleryReturn () {
//     return (
//         <Gallery />
//     )
// }

export default Gallery;