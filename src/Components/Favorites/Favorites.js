import React from "react"
import { Card } from "../Card/Card"
import "./Favorites.css"

export const Favorites = ({favorites}) => {
  const allFavorites = favorites.map(favorite => <Card url={favorite}/>)
  return(
    <section className="favorites">
      {allFavorites}
    </section>
  )
}