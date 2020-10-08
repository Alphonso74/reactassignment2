import './UserOutput.css';
import React from 'react';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>String: {props.username}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default userOutput;
