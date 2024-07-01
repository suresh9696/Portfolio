import { NavLink } from 'react-router-dom';

import React from 'react';


const Card = (props) => {
    return (
        
        <div className='project-card'>
            <div className='card'>
        <img src={props.imgsrc} alt=''/>
        <h2 className='project-title'>{props.title} </h2>
        <div className='pro-details'>
             <p>{props.text}</p>
             <div className='pro-btn'>
                 <NavLink to={props.view} className="btn">View</NavLink>
                 <NavLink to=" url.com" className="btnn">Source</NavLink>

             </div>
        </div>
        </div>

        </div>
    );
};

export default Card;