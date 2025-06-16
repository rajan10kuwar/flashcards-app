import React, { useState } from 'react';
import './App.css';
import Card from './Card';

const cards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the capital of Germany?", answer: "Berlin" },
  { question: "What is the capital of Japan?", answer: "Tokyo" },
  { question: "What is the capital of Canada?", answer: "Ottawa" },
  { question: "What is the capital of Brazil?", answer: "Brasília" },
  { question: "What is the capital of Australia?", answer: "Canberra" },
  { question: "What is the capital of India?", answer: "New Delhi" },
  { question: "What is the capital of Russia?", answer: "Moscow" },
  { question: "What is the capital of China?", answer: "Beijing" },
  { question: "What is the capital of South Africa?", answer: "Pretoria" },
  { question: "What is the capital of Mexico?", answer: "Mexico City" },
  { question: "What is the capital of Italy?", answer: "Rome" },
  { question: "What is the capital of Spain?", answer: "Madrid" },
  { question: "What is the capital of South Korea?", answer: "Seoul" },
  { question: "What is the capital of Argentina?", answer: "Buenos Aires" },
  { question: "What is the capital of Egypt?", answer: "Cairo" },
  { question: "What is the capital of Thailand?", answer: "Bangkok" },
  { question: "What is the capital of Nigeria?", answer: "Abuja" },
  { question: "What is the capital of Turkey?", answer: "Ankara" },
  { question: "What is the capital of Sweden?", answer: "Stockholm" },
  { question: "What is the capital of Norway?", answer: "Oslo" },
  { question: "What is the capital of Chile?", answer: "Santiago" },
  { question: "What is the capital of Vietnam?", answer: "Hanoi" },
  { question: "What is the capital of Indonesia?", answer: "Jakarta" },
  { question: "What is the capital of Poland?", answer: "Warsaw" },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    console.log(`Card clicked, flipping to: ${!flipped}`);
    setFlipped(!flipped);
  };

  const handleNext = () => {
    if (cards.length > 1) {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * cards.length);
      } while (newIndex === currentIndex);
      console.log(`Next card index: ${newIndex}`);
      setCurrentIndex(newIndex);
      setFlipped(false);
    }
  };

  return (
    <div className="app">
      <h1>Capital Cities Showdown!</h1>
      <p>Think you’re a geography whiz? Prove it by matching all 25 global capitals to their countries!</p>
      <p>Total cards: {cards.length}</p>
      <div className="card-container">
        <Card
          key={currentIndex}
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