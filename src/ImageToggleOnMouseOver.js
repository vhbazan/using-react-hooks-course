import React, {useRef} from 'react'


const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {

    const imageRef = useRef(null);

    return (
        <img src={primaryImg} 
        onMouseOver={ () => {
            imageRef.current.src = secondaryImg;
        }}
        onMouseOut={ () => {
            imageRef.current.src = primaryImg;
        }}
        alt={primaryImg} height="300px"
        ref={imageRef}
        />
    )
}

export default ImageToggleOnMouseOver;