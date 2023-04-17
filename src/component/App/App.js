import React, {useEffect, useState} from "react";
import { DogContext } from "../../DogContext/DogContext";
import { fetchData } from "../../data/apiCall";
import { Home } from "../Home/Home";
import { Nav } from "../Nav/Nav";
import { ExhibitContainer } from "../ExhibitContainer/ExhibitContainer";
import { BreedPage } from "../BreedPage/BreedPage";
import { Favorites } from "../Favorites/Favorites";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  const [breed, setBreed] = useState('');
  const [breedUrls, setBreedUrls] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');
  
  const fetchDogData = () => {
    fetchData(`breed/${breed}/images`)
      .then(data => {
        setBreedUrls(data.message);
      })
      .catch(err => {
        setError(`Sorry there was a ${err.message} error please try again`);
      });
  }

  useEffect(() => {
    if(breed !== ''){
      fetchDogData()
    }  
  }, [breed]);

  return (
    <>
      <DogContext.Provider value={{urls: breedUrls, addFavs: [favorites, setFavorites], chooseBreed: setBreed, showError: [error, setError]}}>
        <Nav />
        <Switch>
          <Route path="/dogexhibits/:breed" render={({match} ) => <BreedPage breed={match.params.breed} /> } />
          <Route path="/dogexhibits" render={() => <ExhibitContainer /> } />
          <Route path="/favorites" render={() => <Favorites favorites={favorites} />} />
          <Route exact path="/" render={() => <Home />} />
          <Redirect from="*" to="/"/> 
        </Switch>
      </DogContext.Provider>
    </>
  );
}

export default App;