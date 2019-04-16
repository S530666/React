import React from 'react';

const userInput = (props) => {
    return(
        <div>
            <input style = {props.style} onChange = {props.click} value = {props.user}/>
        </div>              
    )
}

export default userInput;