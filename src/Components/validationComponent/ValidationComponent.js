import './ValidationComponent.css';
import React from 'react';

const validationComponent = ( props ) => {


    let stringLength = props.stringLength;

    // console.log(stringLength, " efeef");


   let stringLengthConditional = (length) => {

        if(length < 5){

            return <h2>String Too Short</h2>
        }
        else{

            return <h2>String Long Enough</h2>
        }
    };

    return (


        <div className="ValidationComponent" >

            {stringLengthConditional(stringLength)}

        </div>

    )
};

export default validationComponent;
