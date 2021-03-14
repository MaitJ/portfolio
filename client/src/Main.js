import React, { useEffect } from 'react';
import {useState} from 'react';
import {getImages} from './helpFunctions/getImages';

import './css/main.css';
import './css/general.css';

const TestContainer = (props) => {
    const altText = "Galeriipilt " + props.id;
    return(
        <div className="TestContainer-item">
            <img src={props.img} alt={altText} key={props.id}/>
        </div>
    );
};

const Main = () => {

    const [imageList, setImageList] = useState([]);


    useEffect(() =>{
        getImages(setImageList);
    }, []);


    return(
        <section className="main">
            <section className="introduction">
                <h1>Mait Jurask</h1>
                <h1>PORTFOLIO</h1>
            </section>
            <section className="TestContainer">
                {imageList.map((obj) =>{
                    const {img, key} = obj;
                    const imgWithDir = "galeriipildid/" + img;
                    return(
                        <TestContainer key={key} id={key} img={imgWithDir}></TestContainer>
                    );
                })}
            </section>
            <section className="about">
                <img src={"./logo_white.png"} alt="Signature placeholder"/>
                <button type="button">Contact Me</button>
            </section>
        </section>
    );
};

export default Main;