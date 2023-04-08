import React from "react"
import "./ExhibitCard.css"

export const ExhibitCard = ({breed}) => {
  return (
    <div className="exhibit-card">
      <img src={require(`../../assets/${breed}`)}/>
    </div>
  )
}
