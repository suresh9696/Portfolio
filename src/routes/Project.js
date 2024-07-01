import React from 'react';
import Nav from '../Components/Nav';
import Pimg from '../Components/Pimg';
import Footer from '../Components/Footer';
import Work from '../Components/Work';
const Project = () => {
    return (
        <div>
            <Nav/>
            <Pimg heading="PROJECTS." text="Some of the most Recent Works"/>
            
            <Work/>
            <Footer/>
        </div>
    );
};

export default Project;