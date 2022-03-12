import React from 'react';
import './whatgkd.css';
import { Feature } from '../../components/';

//  Functional component
const WhatGKD = () =>{

    return(

        <div className="gkd__whatgkd section__margin" id="wgkd">
            
            <div className="gkd__whatgkd-feature">
                <Feature />
            </div>

            <div className="gkd__whatgkd-heading">
                <h1 className="gradient__text">Et sea ipsum ut eos ut.</h1>    
                <p>Explore the library</p>
            </div>

            <div className="gkd__whatgkd-container">
                <Feature />    
                <Feature />    
                <Feature />    
            </div>
        </div>
    )
}


export default WhatGKD;