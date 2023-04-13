import React, { useContext, useState } from "react";
import { DogContext } from '../../DogContext/DogContext';
import "./BreedCard.css";

export const BreedCard = ({url}) => {
  const { addFavs } = useContext(DogContext);
  const [favorites, setFavorites] = addFavs;
  const [disabled, setDisabled] = useState(false)

  const favoriteDog = (newFav) => {
    setFavorites([...favorites, newFav]);
  }

  return (
    <div className="card">
      <img className="dog-card" src={url} alt=""/>
      <button onClick={() => {
        favoriteDog(url) 
        setDisabled(true)
        }} className="favorite-button" disabled={disabled}>Save</button>
    </div>
  );
}