import React from 'react';
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver';


const ImageChangeOnMouseOver = () => {
    return (
        <div>
            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-187.png"
                    secondaryImg="/static/Speaker-187.png" />

            <ImageToggleOnMouseOver primaryImg="/static/speakers/bw/Speaker-1124.png"
                    secondaryImg="/static/Speaker-1124.png"/>

            <div id="footer" className="row">
                <div className="col-12">
                    <p className="text-muted credit">
                    All images are from <a href="http://commons.wikimedia.org">Commons Wikimedia</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ImageChangeOnMouseOver;