import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';


const ImageChangeOnScroll = () => {
    return (
        <div>
            {[1124, 187, 23, 56, 1124,, 187, 23, 56].map( (speakerId, index) => {
                return (
                    <div key={speakerId + index}>
                        <ImageToggleOnScroll
                            primaryImg={`/static/speakers/bw/Speaker-${speakerId}.png`}
                            secondaryImg={`/static/speakers/Speaker-${speakerId}.png`}
                            alt=""
                        />
                    </div>
                )
            } ) }
            
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

export default ImageChangeOnScroll;