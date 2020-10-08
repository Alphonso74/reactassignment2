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
                <p>{props.stringLength}</p>
                </div>

            </div>
        </div>
    )
};

export default userInput;
