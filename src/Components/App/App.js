import './App.css';
import React, {useEffect, useState} from 'react'
import { Home } from '../Home/Home';
import { Nav } from '../Nav/Nav';
import { fetchData } from '../../data/apiCall';

const App = () => {
  const [breed, setBreed] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')

  const fetchDogData = () => {
   fetchData("breed/schnauzer/images")
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }

  useEffect(() => fetchDogData(), [])



  return (
    <div>
      <Nav />
      <Home />
    </div>
  )
}

export default App;
