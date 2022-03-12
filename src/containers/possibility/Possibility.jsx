import React from 'react';
import './possibility.css';
import  possibilityImg  from '../../assets/possibility.png';

//  Functional component
const Possibility = () =>{

    return(

        <div className="gkd__possibility section__padding" id="possibility">

            <div className="gkd__possibility-image">
                <img src={ possibilityImg } alt="Possibility" />
            </div>
            
            <div className="gkd__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1 className="gradient__text">The possibilities are beyond your imagination</h1>

                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4>Request Early Access to Get Started</h4>
            </div>
        </div>
    )
}


export default Possibility;