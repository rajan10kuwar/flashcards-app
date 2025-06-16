import React, { useState } from 'react';
import './App.css';
import Card from './Card';

const cards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the capital of Germany?", answer: "Berlin" },
  { question: "What is the capital of Japan?", answer: "Tokyo" },
  { question: "What is the capital of Canada?", answer: "Ottawa" },
  { question: "What is the capital of Brazil?", answer: "Brasília" },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleNext = () => {
    if (cards.length > 1) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * cards.length);
      } while (newIndex === currentIndex);
      setCurrentIndex(newIndex);
      setFlipped(false);
    }
  };

  return (
    <div>
      <h1>Geography Flashcards</h1>
      <p>Learn about countries and their capitals.</p>
      <p>Total cards: {cards.length}</p>
      <div className="card-container">
        <Card
          front={cards[currentIndex].question}
          back={cards[currentIndex].answer}
          flipped={flipped}
          onClick={handleFlip}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default App;