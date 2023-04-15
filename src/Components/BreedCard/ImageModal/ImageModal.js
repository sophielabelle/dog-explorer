import React, { useState } from "react";
import "./ImageModal.css";

export const Modal = ({ url }) => {
  const [isOpen, setIsOpen] = useState(false)
  
  const handleShowDialog = () => {
    setIsOpen(!isOpen)
    console.log('click')
  }

  return (
    <div>
      <img className="dog-card-small" src={url} alt="" onClick={handleShowDialog} tabIndex="0"/>
      {isOpen && (
        <div className="overlay">
          <dialog
            className="dialog"
            onClick={handleShowDialog}
            open
            tabIndex="0"
            >
            <img
              className="dog-card-large"
              src={url}
              alt="no image"
              onClick={handleShowDialog}
              tabIndex="0"
              />
          </dialog>
        </div>
      )}
    </div>

    // <div class="modal-body">
    //   <img className="modal-image "src={url} alt="dog"/>
    // </div>
  );
};
