import React from 'react';
import Slider1 from '../assets/images/adoption.jpeg';

function Introduction() {
    return (
        <div>
            <img
                src={Slider1}
                alt="Slide 1"
                style={{
                width: "100%"
            }}
            />
        </div>
    )
}

export default Introduction;