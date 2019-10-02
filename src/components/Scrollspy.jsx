import React from 'react';
import './Scrollspy.css';

const Scrollspy = (props) => {
    return (
        <section className="Scrollspy" id={props.anchor}>
            {props.anchor.charAt(0).toUpperCase()+props.anchor.slice(1)}
        </section>
    );
};

export default Scrollspy;