import './Footer.css';
import React from 'react';
import { FaHome ,FaPhone,FaMailBulk, FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa6';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='fcontainer'>
                <div className='left'>
                    <div className='location'>
                          <FaHome size={20} style={{ color:"#fff",marginRight:"2rem"}}/>
                          <div>
                            <p>
                                c-708,Rajapur
                            </p>
                            <p>
                                MBNR,Telangana.
                            </p>
                          </div>
                    </div>
                    <div className='phone'>
                    <h4><FaPhone size={20} style={{ color:"#fff",marginRight:"2rem"}}/> +91 9182031440</h4>
                    </div>
                    <div className='e-mail'>
                    <h4><FaMailBulk size={20} style={{ color:"#fff",marginRight:"2rem"}}/>suresht9696@gmail.com</h4>
                    </div>
                     </div>


                <div className='right'>
                
                <div className='social'>

                    <FaFacebook size={30}style={{color:"#fff",marginRight:"1rem"}}/>
                    <FaLinkedinIn size={30}style={{color:"#fff",marginRight:"1rem"}}/>

                    
                    <FaTwitter size={30}style={{color:"#fff",marginRight:"1rem"}}/>
                    <FaGithub size={30}style={{color:"#fff",marginRight:"1rem"}}/>

                </div>
                


                </div>

            </div>
        </div>
    );
};

export default Footer;