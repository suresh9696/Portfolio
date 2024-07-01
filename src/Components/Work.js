
import Card from './Card';
import './Card.css'
import React from 'react';
import Workdata from "./Workdata"


const Work = () => {
    return (
        <div className='card_container'>
           <h1 className='project-heading'>
                     Projects
           </h1>
           <div className='project-container'>
            {Workdata.map((val,ind)=>{
   return(
    <Card key={ind} 
    imgsrc={ val.imgsrc}
    title={val.title}
    text={val.text}
    view={val.view}/>
)

            })}
         
           </div>

        </div>
    );
};

export default Work;