import React from 'react';
import Header from './Header';
import AllTeams from './Menu/AllTeams';
import Footer from './Footer';

function Teams() {
    return (
        <div className="menus-page">
            <Header />
            <AllTeams />
            <Footer />
        </div>
    )
}

export default Teams;