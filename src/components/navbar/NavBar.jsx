import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';

//  Functional component with BEM
const Navbar = () =>{

    return(

        //  Parent component
        <div className="gkd__navbar">
            <div className="gkd__navbar-links">
                <div className="gkd__navbar-links_logo">
                    <img src={ logo } alt="Logo" />
                </div>    
                <div className="gkd__navbar-links_container">
                    <p><a href="#home">Home</a></p>
                    <p><a href="#wgkd">What is GKD?</a></p>
                    <p><a href="#possibility">Open AI</a></p>
                    <p><a href="#features">Case Studies</a></p>
                    <p><a href="#blog">Library</a></p>
                </div>
            </div>
        </div>
    )

}


export default Navbar;