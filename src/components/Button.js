import React from 'react';

const btnEvent = label => {
    console.log(`The button ${label} was clicked!`);
}

const Button = props => {
    
    return (
        <div>
            <button className="btn" onClick={() => {btnEvent(props.label)}}>{props.label}</button>
        </div>
        
    )
}

export default Button;