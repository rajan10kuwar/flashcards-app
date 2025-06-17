import React from 'react';
import './Card.css';

const Card = ({ card, flipped, onClick }) => {
  console.log(`Card rendered, flipped: ${flipped}`);
  return (
    <div className={`card ${flipped ? 'flipped' : ''}`} onClick={onClick}>
      <div className="front">
        {card.questionImage && <img src={card.questionImage} alt="Question" />}
        {card.questionText && <p>{card.questionText}</p>}
      </div>
      <div className="back">
        {card.answerImage && <img src={card.answerImage} alt="Answer" />}
        {card.answerText && <p>{card.answerText}</p>}
      </div>
    </div>
  );
};

export default Card;