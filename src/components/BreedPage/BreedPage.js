import React, { useContext } from "react";
import { DogContext } from "../../DogContext/DogContext";
import { BreedCard } from "../BreedCard/BreedCard";
import "./BreedPage.css";

export const BreedPage = () => {
  const { urls, showError } = useContext(DogContext);
  const breedUrls = urls;
  const error = showError;
  const breedCards = breedUrls.map(url => <BreedCard url={url} key={url} />);

  return (
      <div className="breed-page">
        {breedCards}
        <p className="error-message">{error}</p> 
      </div>
  )
}