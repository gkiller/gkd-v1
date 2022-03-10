import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';


//  Functional component
const Header = () =>{

    return(

        <div className="gkd__header section__padding" id="home">
            
            <div className="gkd__header-content">

                <h1 className="gradient__text">Build Amazing UIs with GKD Technology</h1>    
                <p>
                    Vero ut ut gubergren aliquyam vero sed dolor, erat takimata diam dolore consetetur. No at ipsum clita elitr et, at aliquyam ea nonumy et sanctus nonumy. Justo dolores dolore dolor rebum lorem gubergren takimata amet dolor. Eos diam takimata lorem.
                </p>

                <div className="gkd__header-content__input">                
                    <input type="email" placeholder="Your email address" />
                    <button type="button">Get Started</button>
                </div>
                
                <div className="gkd__header-content__people">
                    <img src={ people } alt="People" />
                    <p>1600 people have followed our site.</p>
                </div>

            </div>

            <div className="gkd__header-image">
                <img src={ ai } alt="AI" />    
            </div>

        </div>
    )
}


export default Header;