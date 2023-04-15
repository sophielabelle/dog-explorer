import React, { useContext, useState } from "react";
import { DogContext } from '../../DogContext/DogContext';
import "./BreedCard.css";
import { Modal } from "./ImageModal/ImageModal";

export const BreedCard = ({url}) => {
  const { addFavs } = useContext(DogContext);
  const [favorites, setFavorites] = addFavs;
  const [disabled, setDisabled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  let display
  const favoriteDog = (newFav) => {
    setFavorites([...favorites, newFav]);
  }

  const handleShowDialog = () => {
    setIsOpen(true)
    console.log('clicked')
    console.log(url)
     display = isOpen && <Modal  url={url} />
  }


  return (
    <div className="card">
      <img className="dog-card" src={url} alt="" onClick={handleShowDialog}/>
      <button onClick={() => {
        favoriteDog(url) 
        setDisabled(true)
        }} className="favorite-button" disabled={disabled}>Save</button>
        {display}
    </div>
  );
}

// render() {
//   return (
//     <div>
//       <img
//         className="small"
//         src="/Anj.png"
//         onClick={this.handleShowDialog}
//         alt="no image"
//       />
//       {this.state.isOpen && (
//         <dialog
//           className="dialog"
//           style={{ position: 'absolute' }}
//           open
//           onClick={this.handleShowDialog}
//         >
//           <img
//             className="image"
//             src="/Anj.png"
//             onClick={this.handleShowDialog}
//             alt="no image"
//           />
//         </dialog>
//       )}
//     </div>
//   );
// }
// }