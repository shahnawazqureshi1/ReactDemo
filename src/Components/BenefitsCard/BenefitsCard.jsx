import React from "react";
import "./BenefitsCard.css"

function BenefitsCard(props){
    return (
        <div className="card-container" >
            <img className="imgyoung1" src={props.cardImage} alt="med-1.svg"/>
            <p className='para'>{props.cardText}</p> 
        </div>
    )
}

export default BenefitsCard