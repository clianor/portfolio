import React from 'react';
import Home from "./contentComponents/Home";
import Skills from "./contentComponents/Skills";
import './Content.css';

const Content = () => {
    return (
        <div className="Content">
            <Home />
            <Skills />
        </div>
    );
};

export default Content;