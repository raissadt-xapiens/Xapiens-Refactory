import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <div>
            <hr/>
            <h6
                className="ending"
            >
                OIPA &copy; Copyright - {new Date().getFullYear()}.
            </h6>
        </div>
    )
}

export default Footer;