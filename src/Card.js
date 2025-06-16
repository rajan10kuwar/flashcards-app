import React from 'react';
import './Card.css';

const Card = ({ front, back, flipped, onClick }) => {
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="front">{front}</div>
      <div className="back">{back}</div>
    </div>
  );
};

export default Card;