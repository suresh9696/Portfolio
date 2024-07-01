import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Pimg from '../Components/Pimg';
import Aboutcontent from '../Components/Aboutcontent';

const About = () => {
    return (
        <div>
          <Nav/>
          <Pimg  heading="About." text="Im  Friendly FullStack Developer"/>
          
          <Aboutcontent/>
          <Footer/>
        </div>
    );
};

export default About;