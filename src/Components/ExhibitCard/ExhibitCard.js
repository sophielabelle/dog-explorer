import React from "react";
import { DogContext } from "../../DogContext/DogContext";
import "./ExhibitCard.css";


export const ExhibitCard = ({breed}) => {
  const altText = breed.toLowerCase()
  return (
    <div className="exhibit-card-container">
      <div className="exhibit-card">
        <img src={require(`../../assets/${breed}.jpeg`)} alt={altText}/>
      </div>
      <p className="breed-name">{breed}</p>
    </div>
  )
}
