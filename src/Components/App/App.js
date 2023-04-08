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

  const fetchDogData = () => {
    console.log('fetch dog')
  
    console.log('hi',breed)
    fetchData(`breed/${{breed}}/images`)
    .then(data => {
      console.log(data)
      setBreedUrls(data.message)
    })
    .catch(error => console.log(error))
    
  }

  const selectBreed = (event) => {
    console.log(event.target.parentElement.id);
    const selected = event.target.parentElement.id;
    setBreed(selected);
    console.log('', breed)
  }

  useEffect(() => {
    if(breed !== ''){
      fetchDogData()
}}, [])

  return (
    <>
      <DogContext.Provider>
        <Nav />
        <Home />
        <ExhibitContainer setBreed={setBreed}/>
        {/* <BreedPage breedUrls={breedUrls}/> */}
      </DogContext.Provider>
    </>
  )
}

export default App;
