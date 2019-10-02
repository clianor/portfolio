import React from 'react';
import './TopButton.css';

const TopButton = () => {
    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo(0,0);
    } ;

    return (
        <div className="TopButton" onClick={handleClick}>
            TOP
        </div>
    );
};

export default TopButton;