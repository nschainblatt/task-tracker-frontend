import React from "react";
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div className="scroll" style={{overflowY: 'scroll'}}>
            {props.children}
        </div>
    );
}

export default Scroll;