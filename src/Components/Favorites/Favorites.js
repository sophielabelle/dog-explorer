import React, { useContext } from "react";
import { DogContext } from '../../DogContext/DogContext';
import { FavoriteCard } from "../FavoriteCard/FavoriteCard";
import "./Favorites.css"

export const Favorites = () => {
  const { addFavs } = useContext(DogContext);
  const [favorites, setFavorites] = addFavs;
  console.log(favorites)
  const allFavorites = favorites.map(favorite => <FavoriteCard url={favorite}/>)
  return(
    <section className="favorites">
      {allFavorites}
    </section>
  )
}