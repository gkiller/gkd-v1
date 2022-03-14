import React from 'react';
import './footer.css';
import logo from '../../assets/logo.png';


//  Functional component
const Footer = () =>{

    return(

        <div className="gkd__footer section__padding">

            <div className="gkd__footer-heading">
                <h1 className="gradient__text">Do you want to step in to the future before others</h1>
            </div>

            <div className="gkd__footer-button">
                <p>Request Early Access</p>
            </div>
            

            <div className="gkd__footer-links">

                <div className="gkd__footer-links_logo">
                    <img src={ logo } alt="logo" />
                    <p>Ipsum nonumy gubergren sed ea accusam dolore aliquyam magna.</p>
                </div>

                <div className="gkd__footer-links_div">
                    <h4>Links</h4>
                    <p>Overons</p>
                    <p>Social Media</p>
                    <p>Counters</p>
                    <p>Contact</p>
                </div>

                <div className="gkd__footer-links_div">
                    <h4>Company</h4>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                    <p>Contact</p>
                </div>

                <div className="gkd__footer-links_div">
                    <h4>Get in Touch</h4>
                    <p>Amet clita tempor takimata voluptua at kasd.</p>
                    <p>800-555-1234</p>
                    <p>info@info.net</p>
                </div>
            </div>

            <div className="gkd__footer-copyright">
                <p>&copy; 2022 - GKD. All rights reserved.</p>
            </div>
        </div>

    )

}


export default Footer;