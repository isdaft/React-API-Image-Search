import React from 'react';

import './modal.css';

const LightBoxModal = ({ handleClose, show, children, imageUrl, imageLikes }) => {
    
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    
    return (
        <div className={showHideClassName}>
          <section className="modal-main">
            <div className="modal-image-container">
                <img src={imageUrl} />
            </div>
            <div className="modal-icons">
            </div>
            <button onClick={handleClose}>close</button>
          </section>
        </div>
  );
}

export default LightBoxModal;


