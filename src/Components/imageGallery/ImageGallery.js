import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../imageGalleryItem/ImageGalleryItem';
import style from '../imageGallery/ImageGallery.module.css';



const ImageGallery = ({ hits, getImage}) => {
    return (
        <ul className={style.ImageGallery}>
       
            {hits.map(({ id, webformatURL, largeImageURL }) => <ImageGalleryItem key={id} webformatURL={webformatURL} largeImageURL={largeImageURL} getImage={getImage} />)}
        </ul>   

    );
}

export default ImageGallery;

ImageGallery.propTypes = {
    hits: PropTypes.array.isRequired,
    getImage: PropTypes.func.isRequired,
}