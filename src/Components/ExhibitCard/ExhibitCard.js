import React from "react";
import { DogContext } from "../../DogContext/DogContext";
import "./ExhibitCard.css";


export const ExhibitCard = ({breed, selectBreed}) => {
  const altText = breed.toLowerCase()
  return (
    <div id={breed} className="exhibit-card-container" onClick={(event) => selectBreed(event)}>
      <div id={altText} className="exhibit-card">
        <img src={require(`../../assets/${breed}.jpeg`)} alt={altText}/>
      </div>
      <p className="breed-name">{breed}</p>
    </div>
  )
}
