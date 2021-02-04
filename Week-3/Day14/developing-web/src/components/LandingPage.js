import React from 'react';
import Header from '../components/Header';
import Introduction from '../components/Home/Introduction';
import Campaign from '../components/Home/Campaign';
import Contact from '../components/Home/Contact';
import Footer from '../components/Footer';


function Landing() {
    return (
        <div className="landing-page">
            <Header />
            <Introduction />
            <Campaign />
            <Contact />
            <Footer />
        </div>
    )
}

export default Landing;