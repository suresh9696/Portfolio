import './Img.css'
import React from 'react';
import Introimg from "../assets/img/3.jpg";
import { Link } from 'react-router-dom';

const Img = () => {
    return (
        <div className='img'>
            <div className='mask'>
                <img className='into-img'src={Introimg}alt='Introimg'/>

            </div>
            <div className='content'>
                <p>
                    HI,MYSELF SURESH
                </p>
                <h1>
                   Fullstack Developer 
                </h1>
                <div className='bt'>
                <Link to="/Project" className='btn'>Projects</Link>
            <Link to="/Contact" className='btn btn-light'> Contact</Link>
                </div>
            </div>
            
        </div>
        
    );
};

export default Img;