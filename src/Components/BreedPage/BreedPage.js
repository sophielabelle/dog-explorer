import React, { useContext, useState } from "react";
import { DogContext } from '../../DogContext/DogContext';
import { BreedCard } from "../BreedCard/BreedCard";
import "./BreedPage.css";


export const BreedPage = () => {
  const { urls, showError } = useContext(DogContext);
  const breedUrls = urls;
  const error = showError
  const breedCards = breedUrls.map(url => <BreedCard url={url} />)
  const displayMessage = !error && !breedCards.length ? <p className="loading">Loading...</p> : error ? <p className="error-message">{error}</p> : breedCards

  return (
    <>
      <div className="breed-page">
        {displayMessage}
      </div>
    </>
  )
}