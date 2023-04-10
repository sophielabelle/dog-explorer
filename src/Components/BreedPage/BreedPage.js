import React from "react";
import { Card } from "../Card/Card";
import "./BreedPage.css";

export const BreedPage = ({breedUrls, favoriteDog}) => {


  const breedCards = breedUrls.map(dogUrl => <Card url={dogUrl} favoriteDog={favoriteDog}/>)
  return (
    <div className="breed-page">
      {breedCards}
    </div>
  )
}