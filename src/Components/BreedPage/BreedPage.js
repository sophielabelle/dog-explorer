import React, { useContext } from "react";
import { DogContext } from '../../DogContext/DogContext';
import { BreedCard } from "../BreedCard/BreedCard";
import "./BreedPage.css";


export const BreedPage = () => {
  const { urls } = useContext(DogContext);
  const breedUrls = urls;

  const breedCards = breedUrls.map(url => <BreedCard url={url} />)
  return (
    <div className="breed-page">
      {breedCards}
    </div>
  )
}