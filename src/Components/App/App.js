import React, {useEffect, useState} from 'react';
import { DogContext } from '../../DogContext/DogContext';
import { fetchData } from '../../data/apiCall';
import { Home } from '../Home/Home';
import { Nav } from '../Nav/Nav';
import './App.css';

const App = () => {
  const [breed, setBreed] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')

  const fetchDogData = () => {
   fetchData('breed/schnauzer/images')
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  useEffect(() => fetchDogData(), [])



  return (
    <>
      <DogContext.Provider value={{ text, setText }}>
        <Nav />
        <Home />
      </DogContext.Provider>
    </>
  )
}

export default App;
