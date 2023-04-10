import React from "react";
import "./Card.css";

export const Card = ({url, favoriteDog, disabled}) => {
  return (
    <div className="card">
      <img className="dog-card" src={url} alt=""/>
      <button onClick={() => {
       favoriteDog(url)
       }} className="favorite-button" disabled={false}>Save</button>
    </div>
  );
}