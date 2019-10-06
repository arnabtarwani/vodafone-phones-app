import React, { useEffect, useState } from 'react';
import ReactBnbGallery from 'react-bnb-gallery';
import ImageGallery from 'react-image-gallery';

const PhonePictureCarousel: React.FC<{ images: any, width: string, height: string }> = ({ images, width, height }) => {

    const [data] = useState(images)

    return (
        <div className="flex flex-row justify-center m-10">
            {Object.values(data).map((element: any, key) => {
                return (
                    <img src={element} key={key} alt={'element'+key} width={width} height={height}/>
                )
            })}
        </div>
    );
}

export default PhonePictureCarousel;
