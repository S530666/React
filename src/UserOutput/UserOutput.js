import React from 'react';
import './style.css';
const userOutput = (props) => {
    return(
        <div>
            <p>Hi my name is {props.user} and this is my first react app</p>
            <p>Yes I did it</p>
        </div>
    )
}

export default userOutput;