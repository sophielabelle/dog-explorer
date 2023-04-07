import './App.css';
import React from 'react'
import { Home } from '../Home/Home';
import { Nav } from '../Nav/Nav';
import { fetchData } from '../../data/apiCall';

function App() {
  return (
    <div>
      <Nav />
      <Home />
    </div>
  )
}

export default App;
