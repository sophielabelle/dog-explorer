import React, {useEffect, useState} from 'react';
import { DogContext } from '../../DogContext/DogContext';
import { fetchData } from '../../data/apiCall';
import { Home } from '../Home/Home';
import { Nav } from '../Nav/Nav';
import './App.css';
import { ExhibitContainer } from '../ExhibitContainer/ExhibitContainer';

const App = () => {
  const [breed, setBreed] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')

  // const fetchDogData = () => {
  //  fetchData('breed/schnauzer/images')
  //   .then(data => console.log(data))
  //   .catch(error => console.log(error))
  // }

  // useEffect(() => fetchDogData(), [])



  return (
    <>
    {/* {console.log(DogContext)} */}
      <DogContext.Provider>
        <Nav />
        <Home />
        <ExhibitContainer />
      </DogContext.Provider>
    </>
  )
}

export default App;
