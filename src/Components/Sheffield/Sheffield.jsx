import React from "react";
import "./Sheffield.css"

function BenefitsCard(props){
    return (
        <div className="Sheffield-container" > 
            <img className="SheffieldImage" src={props.SheffieldImage} alt="image1.webp"/>
            <div >
                <p className='Sheffieldcover1'>{props.SheffieldText1}</p>  
                <h3 className="Sheffieldheading">{props.SheffieldHeading}</h3>
                <p className='Sheffieldcover'>{props.SheffieldText}</p>  
                <p className='Sheffieldcover2'>{props.SheffieldText2}</p>
            </div>  
        </div>
    )
}

export default BenefitsCard