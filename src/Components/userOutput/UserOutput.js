import './UserOutput.css';
import React from 'react';

const userOutput = ( props ) => {
    return (
        <div className="UserOutput">
            <p>Two Way Binding String</p>
            <p>{props.username}</p>
        </div>
    )
};

export default userOutput;
