import React, { useState } from 'react';
import './ResponsiveModal.css'; // Create a CSS file for styling the modal

const ResponsiveModal = () => {
  const [modalOpen, setModalOpen] = useState(true);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <div className="modal-wrapper">
      {modalOpen && (
        <div className="modal-backdrop">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <p>This is the content of the modal.</p>
            <div className='modal-checkbox-container'></div>
              <input type='checkbox' />
              <span>Don't show again</span>
            <button onClick={toggleModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponsiveModal;
