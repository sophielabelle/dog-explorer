import React from "react";
import "./Card.css";

export const Card = ({url, favoriteDog}) => {
  return (
    <div className="card">
      <img className="dog-card" src={url} alt=""/>
      <button onClick={() => favoriteDog(url)}className="favorite-button">Save</button>
    </div>
  );
}