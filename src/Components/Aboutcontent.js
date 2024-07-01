import "./Aboutcontent.css"
import React from 'react';
import { Link } from "react-router-dom";
import react1 from "../assets/img/about1.jpg"
import react2 from "../assets/img/about2.jpg"
import resume from "../assets/img/Suresh_T.pdf"
const Aboutcontent = () => {
    return (
        <div className="about">
         
        <div className="left">
             <h1>
                WHO AM I
             </h1>
             <div style={{width:"100%"}}>
             <p>
             Hello, my name is Suresh, and I’m a full stack developer,have a strong command over both front-end and back-end technologies, allowing me to build complete and scalable applications.
           On the front-end side, I specialize in HTML, CSS, and JavaScript frameworks such as React. 
            Moving to the back end, I have familar working with databases 
            such as MySQL and I can design efficient database structures and write optimized queries. I’m familiar with RESTful APIs and know how to integrate them into applications to enable seamless communication between the front end and back end.
             </p>
             </div>
            
                 {/* <Link to="./Contact">
                      <button className="btn"> contact</button>
                 </Link> */}
                 <a href={resume} className="btnb">Resume</a>
              </div>
        <div className="right">
                <div className="img-container">
                  <div className="img-stacktop">
                      <img src={react1} className="img-stack" alt="true"/>
                  </div>
                  <div className="img-stackbottom">
                      <img src={react2} className="img-stack" alt="true"/>
                  </div>
                </div>
        </div>
        </div>
    );
};

export default Aboutcontent;