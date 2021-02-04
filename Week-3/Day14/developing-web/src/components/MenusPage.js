import React from 'react';
import {
    Container
} from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Menus() {
    return (
        <div className="menus-page">
            <Header />
            {/* //ini nanti dipisah lagi jadi allprojects.js */}
            <Container>
                <h1>List</h1>
                <h1>Donation</h1>
            </Container>
            <Footer />
        </div>
    )
}

export default Menus;