import React from "react";
import "./FoundingComponents.css";

function FoundingComponents(props){
    return (
        <div className="FoundingComponents-container App-header2" style={props.style} >
            <img className=" imgyoung" src={props.youngstar} alt="youngstar.webp"/>
            <div className="young">
                <h1 className='heading'>{props.youngText}</h1> 
                <p className='younger'>{props.youngerText}</p>
            </div>
        </div>
    )
}

export default FoundingComponents