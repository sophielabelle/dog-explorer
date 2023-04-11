import React, { useContext } from "react";
import { DogContext } from '../../DogContext/DogContext';
import "./Card.css";

export const Card = ({url}) => {
  const { addFavs } = useContext(DogContext);
  const [favorites, setFavorites] = addFavs;

  const favoriteDog = (newFav) => {
    setFavorites([...favorites, newFav]);
  }

  return (
    <div className="card">
      <img className="dog-card" src={url} alt=""/>
      <button onClick={() => {
       favoriteDog(url)
       }} className="favorite-button" disabled={false}>Save</button>
    </div>
  );
}