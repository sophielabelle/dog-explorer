import React, { useContext } from "react";
import { DogContext } from '../../DogContext/DogContext';
import "./FavoriteCard.css";

export const FavoriteCard = ({url}) => {
  const { addFavs } = useContext(DogContext);
  const [favorites, setFavorites] = addFavs;

  const deleteFavorite = (url) => {
    const filterFav = favorites.filter(favorite => favorite !== url)
    setFavorites(filterFav);
  }

  return (
    <div className="fave-card">
      <img className="fave-dog" src={url} alt=""/>
      <button onClick={() => deleteFavorite(url)} className="delete-button">Delete</button>
    </div>
  );
}