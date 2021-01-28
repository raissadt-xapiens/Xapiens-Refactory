import React from 'react';
import '../assets/css/Header.css';
import '../assets/css/bootstrap.css';
import img1 from '../assets/img/background/code.jpg';


export default function Headers() {
    return (
        <div className="layer">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container">
                        <a class="navbar-brand" href="https//platform.refactory.id">
                            <h3 style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Bur Tech</h3>
                        </a>
                        <div className="collapse navbar-collapse text-right offset-6" id="navbarNav">
                        <ul className="navbar-nav text-uppercase mx-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="https//platform.refactory.id" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https//platform.refactory.id" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https//platform.refactory.id" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Product</a>
                            </li>
                            
                            <li className="nav-item">
                                <a className="nav-link" href="https//platform.refactory.id" style={{fontFamily: 'Montserrat',fontWeight:'bold'}}>Teams</a>
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
        <div className="card-body">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                </ol>
            <div className="carousel-inner">
            <div className="carousel-item active">
                <img className="d-block w-100" style={{height:590}} src={img1} alt="First slide"/>
            </div>
            </div>
        </div>
        </div>


{/* <div className="card-body">
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={img1} class="d-block w-100" alt="First Slide">
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="Second Slide">
                    </div>
                    <div class="carousel-item">
                        <img src="..." class="d-block w-100" alt="Third Slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
</div> */}

        </div>
    )
}