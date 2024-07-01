import React from 'react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import Pimg from '../Components/Pimg';
import Form from '../Components/Form';
const Contact = () => {
    return (
        <div>
         <Nav/>
         <Pimg heading="Contact." text="Let's have a Chat"/>
         <Form/>
         <Footer/>
        </div>
    );
};

export default Contact;