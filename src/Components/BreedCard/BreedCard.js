import React, { useContext, useState } from "react";
import { DogContext } from '../../DogContext/DogContext';
import "./BreedCard.css";
import { Modal } from "./ImageModal/ImageModal";

export const BreedCard = ({url}) => {
  const { addFavs } = useContext(DogContext);
  const [favorites, setFavorites] = addFavs;
  const [disabled, setDisabled] = useState(false)

  const favoriteDog = (newFav) => {
    setFavorites([...favorites, newFav]);
  }

  const showModal = () => {
    return (
    <Modal url={url}/>
    )
  }


  return (
    <div className="card">
      <img onClick={() => showModal()}className="dog-card" src={url} alt=""/>
      <button onClick={() => {
        favoriteDog(url) 
        setDisabled(true)
        }} className="favorite-button" disabled={disabled}>Save</button>
    </div>
  );
}