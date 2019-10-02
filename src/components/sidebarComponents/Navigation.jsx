import React from 'react';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="Navigation" id="navbar">
            <ul className="navbar-menu">
                <li>
                    <a data-scroll="home" href="#home">
                        <span>Home</span>
                    </a>
                </li>
                <li>
                    <a data-scroll="skills" href="#skills">
                        <span>Skills</span>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navigation;