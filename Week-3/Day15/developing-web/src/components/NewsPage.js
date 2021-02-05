import React from 'react';
import Header from '../components/Header';
import AllNews from '../components/Menu/AllNews';
import Footer from '../components/Footer';

function News() {
    return (
        <div className="news-page">
            <Header />
            <AllNews />
            <Footer />
        </div>
    )
}

export default News;