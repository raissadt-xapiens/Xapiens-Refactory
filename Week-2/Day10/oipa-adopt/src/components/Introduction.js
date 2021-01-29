import React from 'react';
import '../assets/styles/Content.css';
import Slider1 from '../assets/images/adoption.jpeg';

function Introduction() {
    return (
        <div>
            <img
                className="jumbotron"
                src={Slider1}
                alt="Slide 1"
            />
        </div>
    )
}

export default Introduction;