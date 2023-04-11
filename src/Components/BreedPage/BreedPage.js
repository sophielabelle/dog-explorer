import React, {useContext} from "react";
import { Card } from "../Card/Card";
import "./BreedPage.css";
import { DogContext } from '../../DogContext/DogContext';


export const BreedPage = () => {

  const {urls, favorite} = useContext(DogContext)
  const breedUrls = urls
  const favoriteDog = favorite

  const breedCards = breedUrls.map(dogUrl => <Card url={dogUrl} favoriteDog={favoriteDog}/>)
  return (
    <div className="breed-page">
      {breedCards}
    </div>
  )
}