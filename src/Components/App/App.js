import React, {useEffect, useState} from 'react';
import { DogContext } from '../../DogContext/DogContext';
import { fetchData } from '../../data/apiCall';
import { Home } from '../Home/Home';
import { Nav } from '../Nav/Nav';
import './App.css';
import { ExhibitContainer } from '../ExhibitContainer/ExhibitContainer';
import { BreedPage } from '../BreedPage/BreedPage';
import { Favorites } from '../Favorites/Favorites';
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  const [breed, setBreed] = useState('')
  const [breedUrls, setBreedUrls] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')
  const [disabled, setDisabled] = useState(false)

  const fetchDogData = () => {
    fetchData(`breed/${breed}/images`)
    .then(data => {
      setBreedUrls(data.message)
    })
    .catch(error => console.log(error))
    
  }

  // const selectBreed = (event) => {
  //   const selected = event.target.parentElement.id;
  //   setBreed(selected);
  // }

  useEffect(() => {
    if(breed !== ''){
      fetchDogData()
    }
  }, [breed])


  const favoriteDog = (newFav) => {
    setFavorites([...favorites, newFav])
    setDisabled(true) 
  }

  return (
    <>
      <DogContext.Provider value={{urls: breedUrls, favorite: favoriteDog, chooseBreed: [breed, setBreed]}}>
        <Nav />
        <Switch>
          <Route path="/dogexhibits/:breed" render={({match} ) => <BreedPage breed={match.params.breed} /> } />
          <Route path="/dogexhibits" render={() => <ExhibitContainer /> } />
          <Route path="/favorites" render={() => <Favorites favorites={favorites}/>} />
          <Route exact path="/" render={() => <Home />} />
          <Redirect from="*" to="/"/> 
        </Switch>
      </DogContext.Provider>
    </>
  )
}

export default App;
