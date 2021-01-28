import React from 'react';
import '../assets/css/Header.css';
import '../assets/css/bootstrap.css';
import Product1 from '../assets/img/product/cyber-security.jpeg';
import Product2 from '../assets/img/product/development-workflow.png';
import Product3 from '../assets/img/product/device-information.png';
import Product4 from '../assets/img/product/end-user.png';
import Product5 from '../assets/img/product/mobile-application.jpeg';
import Product6 from '../assets/img/product/professional-service.png';


export default function Project() {
    return (
        <section className="p-5">
            <div className="container">
                <div className="row mb-3">
                    <div className="col">
                        <br></br>
                        <br></br>
                        <br></br>
                        <h3 style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:42,color:'white'}}>#Project</h3>
                        <div className="row">
                            <div className="col">
                                <div className="card" style={{width: '21rem', height: '25rem', marginTop: '15px', marginBottom: '15px'}}>
                                    <img src={Product1} className="card-img-top" alt="Project 1" style={{height: '15rem'}} />
                                    <div className="card-body" style={{fontFamily: 'Montserrat', fontWeight: 'bold', margin: 'auto'}}>
                                        <h5 className="card-title" style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:22, textAlign: 'center'}}>Cyber Security</h5>
                                        {/* <br />
                                        <a href="https://platform.refactory.id" className="btn btn-dark">Read more</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{width: '21rem', height: '25rem', marginTop: '15px', marginBottom: '15px'}}>
                                    <img src={Product2} className="card-img-top" alt="Project 2" style={{height: '15rem'}} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:22, textAlign: 'center'}}>Development Workflow</h5>
                                        {/* <p className="card-text">Some quick example</p>
                                        <a href="https://platform.refactory.id" className="btn btn-dark">Read more</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{width: '21rem', height: '25rem', marginTop: '15px', marginBottom: '15px'}}>
                                    <img src={Product3} className="card-img-top" alt="Project 3" style={{height: '15rem'}} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:22, textAlign: 'center'}}>Device Information</h5>
                                        {/* <p className="card-text">Some quick example</p>
                                        <a href="https://platform.refactory.id" className="btn btn-dark">Read more</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{width: '21rem', height: '25rem', marginTop: '15px', marginBottom: '15px'}}>
                                    <img src={Product4} className="card-img-top" alt="Project 4" style={{height: '15rem'}} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:22, textAlign: 'center'}}>End User Management</h5>
                                        {/* <p className="card-text">Some quick example</p>
                                        <a href="https://platform.refactory.id" className="btn btn-dark">Read more</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{width: '21rem', height: '25rem', marginTop: '15px', marginBottom: '15px'}}>
                                    <img src={Product5} className="card-img-top" alt="Project 5" style={{height: '15rem'}} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:22, textAlign: 'center'}}>Mobile Application</h5>
                                        {/* <p className="card-text">Some quick example</p>
                                        <a href="https://platform.refactory.id" className="btn btn-dark">Read more</a> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card" style={{width: '21rem', height: '25rem', marginTop: '15px', marginBottom: '15px'}}>
                                    <img src={Product6} className="card-img-top" alt="Project 6" style={{height: '15rem'}} />
                                    <div className="card-body">
                                        <h5 className="card-title" style={{fontFamily:'Montserrat',fontWeight:'bold',fontSize:22, textAlign: 'center'}}>Professional Service</h5>
                                        {/* <p className="card-text">Some quick example</p>
                                        <a href="https://platform.refactory.id" className="btn btn-dark">Read more</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}