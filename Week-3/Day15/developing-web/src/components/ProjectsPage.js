import React from 'react';
import {
    Container
} from 'reactstrap';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Projects() {
    return (
        <div className="projects-page">
            <Header />
            {/* //ini nanti dipisah lagi jadi allprojects.js */}
            <Container>
                <h1>Projects</h1>
                <br/>
                <h2>Issues</h2>
            </Container>
            <Footer />
        </div>
    )
}

export default Projects;