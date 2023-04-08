import React from "react"
import "./ExhibitContainer.css"
import { ExhibitCard } from "../ExhibitCard/ExhibitCard"

export const ExhibitContainer = () => {
  const breeds = ["BlackLab", "Bulldog", "Greyhound", "Retriever", "Schnauzer"]
  const breedCards = breeds.map(breed => <ExhibitCard key={breed} breed={breed} />)
  return (
    <div className="exhibit-container">
      {breedCards}
    </div>
  )
}