import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import logo from '../../assets/logo.png';

//  Functional component with BEM
const Navbar = () =>{

    return(

        //  Parent component
        <div className="gpt3__navabr">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={ logo } alt="Logo" width="60" />
                </div>    
            </div>
        </div>
    )

}


export default Navbar;