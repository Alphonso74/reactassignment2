import './UserInput.css';
import React from 'react';

const userInput = ( props ) => {
    return (
        <div className="UserInput" align="inline">
            <div className="enterName">
            <p>Enter a new Username</p>
            </div>
            <div className="textField">
            <input type="text" onChange={props.change} value={props.currentName} />
            </div>
        </div>
    )
};

export default userInput;
