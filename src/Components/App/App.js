import './App.css';
import React, {useState} from 'react'
import { Home } from '../Home/Home';
import { Nav } from '../Nav/Nav';
import { fetchData } from '../../data/apiCall';

const App = () => {
  const [breed, setBreed] = useState([])
  const [favorites, setFavorites] = useState([])
  const [error, setError] = useState('')

  return (
    <div>
      <Nav />
      <Home />
    </div>
  )
}

export default App;
