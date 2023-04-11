import React, { useContext } from "react";
import { DogContext } from '../../DogContext/DogContext';
import { Card } from "../Card/Card";
import "./BreedPage.css";


export const BreedPage = () => {
  const { urls } = useContext(DogContext);
  const breedUrls = urls;

  const breedCards = breedUrls.map(url => <Card url={url} />)
  return (
    <div className="breed-page">
      {breedCards}
    </div>
  )
}