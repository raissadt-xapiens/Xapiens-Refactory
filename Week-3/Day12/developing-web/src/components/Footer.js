import React from 'react';
import '../assets/styles/Footer.css';

const Footer = () => {
    return (
        <div>
            <hr/>
            <h6
                className="ending"
            >
                Copyright &copy; {new Date().getFullYear()} - OIPA. All Rights Reserved.
            </h6>
        </div>
    )
}

export default Footer;