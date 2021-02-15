import React from 'react';
import Header from '../components/Header';
import AllProjects from './Menu/AllProjects';
import Footer from '../components/Footer';

function Projects() {
    return (
        <div className="projects-page">
            <Header />
            <AllProjects />
            <Footer />
        </div>
    )
}

export default Projects;