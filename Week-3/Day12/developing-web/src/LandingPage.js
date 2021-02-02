import React from 'react';
import Header from '../src/components/Header';
import Introduction from '../src/components/Introduction';
import Campaign from '../src/components/Campaign';
import Contact from '../src/components/Contact';
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