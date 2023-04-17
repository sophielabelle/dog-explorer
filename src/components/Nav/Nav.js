import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <header className="nav-bar">
      <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <h1 className='museum-title'> Night at the Dawg Museum</h1>
      </NavLink>
      <div className="nav-btns">
        <NavLink to="/">
          <button className='nav-btn'>Home</button>
        </NavLink>
        <NavLink to="/dogexhibits">
          <button className='nav-btn'>Choose Your Dog Breed</button>
        </NavLink>
        <NavLink to="/favorites" >
          <button className='nav-btn'>Favorite Dogs</button>
        </NavLink>
      </div>
    </header>
  );
}