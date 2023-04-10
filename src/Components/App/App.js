import React, {useEffect, useState} from 'react';
import { DogContext } from '../../DogContext/DogContext';
import { fetchData } from '../../data/apiCall';
import { Home } from '../Home/Home';
import { Nav } from '../Nav/Nav';
import './App.css';
import { ExhibitContainer } from '../ExhibitContainer/ExhibitContainer';
import { BreedPage } from '../BreedPage/BreedPage';
import { Redirect, Route, Switch } from "react-router-dom";

const App = () => {
  const [breed, setBreed] = useState('')
  const [breedUrls, setBreedUrls] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')

  const fetchDogData = () => {
    fetchData(`breed/${breed}/images`)
    .then(data => {
      setBreedUrls(data.message)
    })
    .catch(error => console.log(error))
    
  }

  const selectBreed = (event) => {
    const selected = event.target.parentElement.id;
    setBreed(selected);
  }

  useEffect(() => {
      fetchDogData()
  }, [breed])

  return (
    <>
      <DogContext.Provider>
        <Nav />
        <Switch>
          <Route path="/dogexhibits/:breed" render={({match} ) => <BreedPage breed={match.params.breed} breedUrls={breedUrls}/> } />
          <Route path="/dogexhibits" render={() => <ExhibitContainer selectBreed={selectBreed}/> } />
          <Route exact path="/" render={() => <Home />} />
          <Redirect from="*" to="/"/> 
        </Switch>
      </DogContext.Provider>
    </>
  )
}

export default App;
