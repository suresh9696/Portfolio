import React, { Component } from 'react';
import './Pimg.css'

class Pimg  extends Component {
    render(){
    return (
        <div className='pimg'>
            <div className='heading'>
               <h1>
              {this.props.heading}
               </h1>
               <p>{this.props.text}</p>
            </div>
        </div>
    );
};
};

export default Pimg;