import React from 'react';
import style from '../imageGalleryItem/ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, largeImageURL, getImage }) => {
    const getImg = () => {
        getImage(largeImageURL) 
    }
    return (
        <li className={style.ImageGalleryItem}>
            <img src={webformatURL} alt="" className={style.ImageGalleryItem_image} onClick={getImg}  />
</li>
    );
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    getImage: PropTypes.func.isRequired,
}