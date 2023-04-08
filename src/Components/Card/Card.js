import React from "react";
import "./Card.css";

export const Card = ({url}) => {
  return (
    <div className="card">
      <img className="dog-card" src={url} alt=""/>
    </div>
  );
}