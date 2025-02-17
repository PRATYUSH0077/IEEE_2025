import React from 'react';

const SpeakerCard = ({ speaker, onClick }) => {
  return (
    <div className="speaker-card" onClick={() => onClick(speaker)}>
      <img src={speaker.image} alt={speaker.name} className="speaker-image" />
      <h3>{speaker.name}</h3>
    </div>
  );
};

export default SpeakerCard;
