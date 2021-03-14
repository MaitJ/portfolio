import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import Gallery from 'react-photo-gallery';
import {getImageNames} from './helpFunctions/getImageNames';

import './css/general.css';
import './css/style.css';


const RowGallery = () => {
    const [imageList, setImageList] = useState([]);

    useEffect(() =>{
        getImageNames(setImageList);
    }, []);

    const galleryPhotos = imageList.map((value) => {
        const fileWithDir = "galeriipildid/" + value.img;
        return {src: `${fileWithDir}`, width: Math.round((value.width / 1000)), height: Math.round((value.height / 1000))};
    });

    return (
        <React.Fragment>
            <Gallery photos={galleryPhotos}/>
        </React.Fragment>
    );


}

// function GalleryReturn () {
//     return (
//         <Gallery />
//     )
// }

export default RowGallery;