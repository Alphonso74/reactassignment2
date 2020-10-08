import './UserOutput.css';
import React from 'react';
import UserInput from './UserInput';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>Username: {props.username}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default userOutput;
