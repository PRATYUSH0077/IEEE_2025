import React from 'react';

const BioModal = ({ speaker, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{speaker.name}</h2>
        <p>{speaker.bio}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default BioModal;
