import React from "react";
// import { DogContext } from "../../DogContext/DogContext";
import "./ExhibitContainer.css";
import { ExhibitCard } from "../ExhibitCard/ExhibitCard";



export const ExhibitContainer = () => {
 
  const cardNames = ["Labrador", "Bulldog", "Greyhound", "Retriever", "Schnauzer"];
  const breedCards = cardNames.map(card => <ExhibitCard card={card} key={card} />)

  return (
    <div className="exhibit-container">
      {breedCards}
    </div>
  )
}