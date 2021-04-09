import { useState } from "react";
import {BiRightArrow, BiLeftArrow, BiExitFullscreen} from 'react-icons/bi';

const PicModal = ({image, modalStatus, toggleModal, picState, checkNumbers}) => {
    const {key, img, width, height} = image;
    const {index, setIndex} = picState;
    return(
        <div className={`${modalStatus ? 'picture-modal-container show-modal' : 'picture-modal-container'}`}
        >
            <img src={`${img}`} alt={img} className="modal-picture"/>
            <button className="prev-button" onClick={() => setIndex(checkNumbers(index - 1))}><BiLeftArrow/></button>
            <button className="next-button" onClick={() => setIndex(checkNumbers(index + 1))}><BiRightArrow/></button>
            <button className="exit-button" onClick={() => toggleModal(false)}><BiExitFullscreen/></button>
        </div>
    );
};

export default PicModal;