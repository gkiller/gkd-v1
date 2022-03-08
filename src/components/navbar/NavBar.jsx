import React from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';


//  Functional component with BEM
const Navbar = () =>{

    return(

        //  Parent component
        <div className="gpt3__navabr">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={ logo } alt="Logo" />
                </div>    
            </div>
        </div>
    )

}


export default Navbar;