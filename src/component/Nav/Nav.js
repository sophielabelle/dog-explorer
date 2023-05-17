import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  const location = useLocation();
  const showHome = location.pathname !== "/" ? <button className='nav-btn'>Home</button> : <button className='nav-btn hidden'>Home</button>
  const showFavorites  = location.pathname !== "/favorites" ? <button className='nav-btn'>Favorite Dogs</button> : <button className='nav-btn  hidden'>Favorite Dogs</button>
  const showBreeds = location.pathname !== "/dogexhibits" ? <button className='nav-btn'>Choose Your Dog Breed</button> : <button className='nav-btn hidden'>Choose Your Dog Breed</button>

  return (
    <header className="nav-bar">
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1 className='museum-title'> Night at the Dawg Museum</h1>
      </NavLink>
      <div className="nav-btns">
        <NavLink to="/">
          {showHome}
        </NavLink>
        <NavLink to="/dogexhibits">
          {showBreeds}
        </NavLink>
        <NavLink to="/favorites" >
          {showFavorites}
        </NavLink>
      </div>
    </header>
  );
}