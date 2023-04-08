import React from "react"
import "./ExhibitCard.css"

export const ExhibitCard = ({breed}) => {
  console.log(breed)
  const altText = breed.toLowerCase()
  return (
    <div className="exhibit-card">
      <img src={require(`../../assets/${breed}.jpeg`)} alt={altText}/>
    </div>
  )
}
