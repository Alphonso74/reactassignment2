import './UserInput.css';
import React from 'react';

const userInput = ( props ) => {
    return (
        <div className="UserInput" >

            <div className="enterName">
                <input type="text" onChange={props.change} value={props.currentName} />
            </div>

            <div className="textField">
                <div>
                <p>String Length: </p>
                </div>

                <div>
                <h3>{props.stringLength}</h3>
                </div>

            </div>
        </div>
    )
};

export default userInput;
