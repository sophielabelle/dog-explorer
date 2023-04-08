import React, {useEffect, useState} from 'react';
import { DogContext } from '../../DogContext/DogContext';
import { fetchData } from '../../data/apiCall';
import { Home } from '../Home/Home';
import { Nav } from '../Nav/Nav';
import './App.css';
import { ExhibitContainer } from '../ExhibitContainer/ExhibitContainer';
import { BreedPage } from '../BreedPage/BreedPage';

const App = () => {
  const [breed, setBreed] = useState('')
  const [breedUrls, setBreedUrls] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')

  const fetchDogData = (breed) => {
   fetchData(`breed/${breed}/images`)
    .then(data => {
      console.log(data)
      setBreedUrls(data.message)
    })
    .catch(error => console.log(error))
  }

  const selectBreed = (event) => {
    console.log(event.target);
    const selected = event.target;
    setBreed(selected);
  }

  // useEffect(() => fetchDogData(), [])

  return (
    <>
      <DogContext.Provider value={{
          breed,
          actions: {
            breedUrls: breedUrls,
            selectBreed: selectBreed
          }
        }}>
        <Nav />
        <Home />
        <ExhibitContainer selectBreed={selectBreed}/>
        {/* <BreedPage breedUrls={breedUrls}/> */}
      </DogContext.Provider>
    </>
  )
}

export default App;
