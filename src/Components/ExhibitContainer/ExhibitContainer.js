import React from "react"
import "./ExhibitContainer.css"
import { ExhibitCard } from "../ExhibitCard/ExhibitCard"

export const ExhibitContainer = () => {
  const breeds = ["retrievers", "bulldogs", "greyhounds", "australians", "schnauzers"]
  const breedCards = breeds.map(breed => <ExhibitCard breed={breed} />)
  return (
    <div className="exhibit-container">{breedCards}</div>
  )
}