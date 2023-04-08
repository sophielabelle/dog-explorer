import React from 'react'
// import { FaDog } from 'react-icons/fa';
import './Nav.css'

export const Nav = () => {
  return (
    <header className="nav-bar">
      <h1> Night at the Dawg Museum</h1>
      <button className='nav-btn'>Favorite Dogs</button>
      <button className='nav-btn'>Home</button>
      <button className='nav-btn'>Choose Your Dog Breed</button>
    </header>
  )
}