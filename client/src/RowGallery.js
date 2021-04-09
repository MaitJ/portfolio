import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import Gallery from 'react-photo-gallery';
import {getImageNames} from './helpFunctions/getImageNames';
import PicModal from './PicModal';

import './css/general.css';
import './css/style.css';


const RowGallery = () => {
    const [imageList, setImageList] = useState([]);
    const [isModalOpen, toggleModal] = useState(false);
    const [activePicIndex, setActivePicIndex] = useState(0);

    useEffect(() =>{
        getImageNames(setImageList);
    }, []);



    const handlePicClick = (target) => {
        const picName = target.attributes[1].nodeValue;
        const selectedImg = imageList.find((image) => image.img === picName);
        setActivePicIndex(selectedImg.key);
        toggleModal(true);
        console.log(imageList);
    }

    const checkNumbers = (number) => {
        if (number > (imageList.length - 1)) {
            return 0;
        }
        if (number < 0) {
            return imageList.length - 1;
        }
        return number;
    };

    //

    const galleryPhotos = imageList.map((value) => {
        return {src: value.img, width: Math.round((value.width / 1000)), height: Math.round((value.height / 1000)), alt: value.alt};
    });

    return (
        <React.Fragment>
            <Gallery photos={galleryPhotos} onClick={(e) => handlePicClick(e.target)}/>
            {isModalOpen && <PicModal image={imageList[activePicIndex]} modalStatus={isModalOpen} toggleModal={toggleModal} picState={{index: activePicIndex, setIndex: setActivePicIndex}} checkNumbers={checkNumbers}/>}
        </React.Fragment>
    );


}

// function GalleryReturn () {
//     return (
//         <Gallery />
//     )
// }

export default RowGallery;