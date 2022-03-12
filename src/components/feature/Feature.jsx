import React from 'react';
import './feature.css';


//  Functional component
//  Props { ... } are passed to function from WGKD component
const Feature = ( { title, text } ) =>{

    return(

        <div className="gkd__features-container__feature">
            <div className="gkd__features-container__feature-title">
                <div></div>
                <h1>{ title }</h1>
            </div>

            <div className="gkd__features-container__feature-text">
                <p>{ text }</p>
            </div>

        </div>
    )
}


export default Feature;