import React from 'react';
import './whatgkd.css';
import { Feature } from '../../components/';

//  Functional component
const WhatGKD = () =>{

    return(

        <div className="gkd__wgkd section__margin" id="wgkd">
            
            <div className="gkd__wgkd-feature">
                <Feature 
                    title="What is GKD?" 
                    text="Labore invidunt voluptua clita et invidunt accusam stet, diam sea ipsum kasd accusam. Dolor dolores duo diam magna ipsum sadipscing tempor et, sed magna sanctus." />
            </div>

            <div className="gkd__wgkd-heading">
                <h1 className="gradient__text">Et rebum diam sit consetetur lorem nonumy vero</h1>    
                <p>Explore the library</p>
            </div>

            <div className="gkd__wgkd-container">
                <Feature 
                    title="Chatbots"
                    text="Dolores ut consetetur gubergren sed tempor amet, diam erat dolores aliquyam et amet ipsum. Stet elitr sed eirmod nonumy, ea dolor aliquyam dolor magna sanctus magna gubergren. Aliquyam sit vero." />   

                <Feature 
                    title="Knowledgebase"
                    text="Accusam sanctus dolore voluptua et dolore elitr erat. Invidunt voluptua at sed sanctus, ut magna sit ea no ea. "/>    

                <Feature 
                    title="Education"
                    text="Est justo kasd amet accusam rebum est amet et. Gubergren ea duo vero ut est duo. Duo sed kasd dolor eirmod ipsum sit, elitr vero nonumy dolore labore ea sanctus." />    
            </div>
        </div>
    )
}


export default WhatGKD;