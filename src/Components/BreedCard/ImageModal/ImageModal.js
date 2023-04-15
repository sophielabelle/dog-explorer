import React from "react";
import "./ImageModal.css";

export const Modal = ({ url }) => {

  return (

  <dialog
    className="dialog"
    style={{ position: 'absolute' }}
    open
  >
    <img
      className="image"
      src={url}
      alt="no image"
    />
  </dialog>

    // <div class="modal-body">
    //   <img className="modal-image "src={url} alt="dog"/>
    // </div>
  );
};
