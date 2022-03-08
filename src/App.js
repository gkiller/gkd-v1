//  Import 'unified' component template
import React from 'react';
import { Footer, Blog, Possibility, Features, WhatGKD, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';
import './index.css'

const App = () =>{

    return(

        <div className="App">

            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>

            <Brand />
            <WhatGKD />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />

        </div>
    )
}


export default App