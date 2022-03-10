import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import './navbar.css';


//  NEW: functional component (inline) for menu links
const Menu = () =>{

    return(

        <>
            <p><a href="#home">Home</a></p>
            <p><a href="#wgkd">What is GKD?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
        </>
    )
}


//  Functional component with BEM
const Navbar = () =>{

    //  Set state for mobile menu display
    const[toggleMenu, setToggleMenu] = useState(false);


    return(

        <div className="gkd__navbar">

            <div className="gkd__navbar-links">
                <div className="gkd__navbar-links_logo">
                    <img src={ logo } alt="Logo" />
                </div>    
                
                <div className="gkd__navbar-links_container">
                    <Menu />
                </div>
            </div>

            <div className="gkd__navbar-sign">
                <p>Sign In</p>    
                <button type="button">Sign Up</button>
            </div>

            <div className="gkd__navbar-menu">
                { toggleMenu 
                    ? <RiCloseLine color="#fff" size={28} onClick={ () => setToggleMenu(false) } />
                    : <RiMenu3Line color="#fff" size={28} onClick={ () => setToggleMenu(true) } />
                }
                { toggleMenu && (

                    <div className="gkd__navbar-menu_container scale-up-center">
                        <div className="gkd__navbar-menu_container-links">
                            <Menu />

                            <div className="gkd__navbar-menu_container-links-sign">
                                <p>Sign In</p>    
                                <button type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>
                    )
                }
            </div>       
                 
        </div>
    )
}


export default Navbar;