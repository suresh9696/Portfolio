import "./Form.css"
import React from 'react';

const Form = () => {
    
    

    return (
        <div className="form">
            <form >
                
                <input type="text" placeholder="Your Name"></input>
               
                <input type="email" placeholder="Email"></input>
                
                <input type="text" placeholder="Subject"></input>
{/*                 
                <input type="type tel" placeholder="Contact NO"></input> */}
                {/* <lable>Message</lable> */}
               <textarea rows='6' placeholder="Type your Message Here"></textarea>
               <button className="btnnn">
                Submit
               </button>
            </form>
            
        </div>
    );
};

export default Form;
