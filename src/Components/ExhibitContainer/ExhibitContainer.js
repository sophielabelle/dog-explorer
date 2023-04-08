import React from "react"
import "./ExhibitContainer.css"
import { ExhibitCard } from "../ExhibitCard/ExhibitCard"

export const ExhibitContainer = () => {
  const breeds = ["BlackLab.jpeg", "Bulldog.jpeg", "Greyhound.jpeg", "Retriever.jpeg", "Schnauzer.jpeg"]
  const breedCards = breeds.map(breed => <ExhibitCard key={breed} breed={breed} />)
  return (
    <div className="exhibit-container">
      {breedCards}
    </div>
  )
}