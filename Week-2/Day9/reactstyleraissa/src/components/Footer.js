import React from 'react';
import '../assets/css/Header.css';
import '../assets/css/bootstrap.css';

import img1 from '../assets/img/social/fb.png';
import img2 from '../assets/img/social/ig.png';
import img3 from '../assets/img/social/twitter.png';

export default function Footer() {
    return (
        <footer className="border-top p-3" style={{backgroundColor:'#061157',color:'white',marginTop:160}}>
        <div className="container">
            <div className="row mb-0 justify-content-between">
                <div className="col-5 pl-3">
                    <p style={{fontFamily:'Montserrat',fontSize:20,fontWeight:'bold',color:'white'}}>© Copyright - Burtech Media 2020</p>
                </div>
                <div className="col-2    text-right">
                    <a href="https//platform.refactory.id">
                        <img src={img1} style={{marginRight:16}} alt="Facebook"/>
                    </a>
                    <a href="https//platform.refactory.id">
                        <img src={img2} style={{marginRight:16}} alt="Instagram"/>
                    </a>
                    <a href="https//platform.refactory.id">
                        <img src={img3} style={{marginRight:16}} alt="Twitter"/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )
}