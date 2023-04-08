import React from "react";
import "./BreedPage.css";

export const BreedPage = ({breedURLs}) => {
  const breedCards = breedURLs.map(dogURL => <Card url={dogURL}/>)
  return (
    <div className="breed-page">
      {breedCards}
    </div>
  )
}