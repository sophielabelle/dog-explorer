import React, { useContext } from "react";
import { DogContext } from "../../DogContext/DogContext";
import { FavoriteCard } from "../FavoriteCard/FavoriteCard";
import "./Favorites.css"

export const Favorites = () => {
  const { addFavs } = useContext(DogContext);
  const [favorites] = addFavs;
  const allFavorites = favorites.map(favorite => <FavoriteCard url={favorite} key={favorite}/>);
  const displayFavesLogic = !allFavorites.length ? <p className="fave-message">You haven't favorited any dogs yet...</p> : allFavorites
  
  return(
    <section className="favorites">
      {displayFavesLogic}
    </section>
  );
}