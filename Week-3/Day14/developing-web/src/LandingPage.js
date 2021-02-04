import React from 'react';
import Header from '../src/components/Header';
import Introduction from '../src/components/Home/Introduction';
import Campaign from '../src/components/Home/Campaign';
import Contact from '../src/components/Home/Contact';
import Footer from '../src/components/Footer';


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