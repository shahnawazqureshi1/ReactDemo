import React from "react";

import "../Form/Form.css";

function Form(props){
    return (
        <div style={props.style}>
            <label className='label' >{props.formLabel}</label>
            <input className="form-input"  type="text" value={props.value} onChange={props.onChange} />
        </div> 
    )
}

export default Form

