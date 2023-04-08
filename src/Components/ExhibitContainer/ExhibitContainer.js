import React, { useContext } from "react";
import { DogContext } from "../../DogContext/DogContext";
import "./ExhibitContainer.css";
import { ExhibitCard } from "../ExhibitCard/ExhibitCard";

export const ExhibitContainer = ({setBreed}) => {
  // const { selectBreed } = useContext(DogContext);
  const breeds = ["Labrador", "Bulldog", "Greyhound", "Retriever", "Schnauzer"];
  const breedCards = breeds.map(breed => <ExhibitCard key={breed} breed={breed} setBreed={setBreed} />)

  return (
    <div className="exhibit-container">
      {breedCards}
    </div>
  )
}