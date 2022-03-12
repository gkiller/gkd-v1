import React from 'react';
import './features.css';
import { Feature } from '../../components/';



//  Create array to populate Feature component instead of adding
//  it four times manually.  Use array map() method iterate through each.
const featuresData = [
    
    {
        title: 'Improving end distrusts instantly',
        text: 'Stet diam justo labore voluptua et tempor lorem, justo kasd ut sed et dolor ipsum sanctus dolore sanctus. Dolores dolor.'
    },
    
    {
        title: 'Become the tended active',
        text: 'Stet diam justo labore voluptua et tempor lorem, justo kasd ut sed et dolor ipsum sanctus dolore sanctus. Dolores dolor.'
    },

    {
        title: 'Message or am nothing',
        text: 'Stet diam justo labore voluptua et tempor lorem, justo kasd ut sed et dolor ipsum sanctus dolore sanctus. Dolores dolor.'
    },

    {
        title: 'Really boy law county',
        text: 'Stet diam justo labore voluptua et tempor lorem, justo kasd ut sed et dolor ipsum sanctus dolore sanctus. Dolores dolor.'
    }
];

//  Functional component
const Features = () =>{

    return(

        <div className="gkd__features section__padding" id="features">

            <div className="gkd__features-heading">
                <h1 className="gradient__text">The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
                <p>Request Early Access to Get Started</p>
            </div>

            <div className="gkd__features-container">
                { featuresData.map( (item, i) => 
                
                    <Feature title={item.title} text={item.text} key={item.title + i} />
                ) }
            </div>
        </div>
    )

}


export default Features;