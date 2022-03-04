import React from 'react';

const btnEvent = label => {
    console.log(`The button ${label} was clicked!`);
}

const Button = ({label}) => {
    
    return (
        <div>
            <button className="btn" onClick={() => {btnEvent(label)}}>{label}</button>
        </div>
        
    )
}

export default Button;