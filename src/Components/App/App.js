import React, {useEffect, useState} from 'react';
import { DogContext } from '../../DogContext/DogContext';
import { fetchData } from '../../data/apiCall';
import { Home } from '../Home/Home';
import { Nav } from '../Nav/Nav';
import { ExhibitContainer } from '../ExhibitContainer/ExhibitContainer';
import { BreedPage } from '../BreedPage/BreedPage';
import { Favorites } from '../Favorites/Favorites';
import { Redirect, Route, Switch } from "react-router-dom";
import './App.css';

const App = () => {
  const [breed, setBreed] = useState('');
  const [breedUrls, setBreedUrls] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  const fetchDogData = () => {
    fetchData(`bree/${breed}/images`)
    .then(data => {
      setBreedUrls(data.message);
    })
    .catch(err => {
      console.log(err)
      setError(err.message)
    });
  }

  useEffect(() => {
    if(breed !== ''){
      fetchDogData()
    }
  }, [breed]);

  return (
    <>
      <DogContext.Provider value={{urls: breedUrls, addFavs: [favorites, setFavorites], chooseBreed: setBreed}}>
        <Nav />
        <Switch>
          <Route path="/dogexhibits/:breed" render={({match} ) => <BreedPage breed={match.params.breed} /> } />
          <Route path="/dogexhibits" render={() => <ExhibitContainer /> } />
          <Route path="/favorites" render={() => <Favorites favorites={favorites}/>} />
          <Route exact path="/" render={() => <Home />} />
          <Redirect from="*" to="/"/> 
        </Switch>
      </DogContext.Provider>
      {error && <p> Sorry there was a {error} error. Please try again later </p>}
    </>
  )
}

export default App;
