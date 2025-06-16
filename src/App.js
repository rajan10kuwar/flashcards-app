import React, { useState } from 'react';
import './App.css';
import Card from './Card';

const cards = [
  { question: "What is the capital of France?", answer: "Paris" },
  { question: "What is the capital of Germany?", answer: "Berlin" },
  { question: "What is the capital of Japan?", answer: "Tokyo" },
  { question: "What is the capital of Canada?", answer: "Ottawa" },
  { question: "What is the capital of Brazil?", answer: "Brasília" },
  { question: "What is the capital of India?", answer: "New Delhi" },
  { question: "What is the capital of Nepal?", answer: "Kathmandu" },
  { question: "What is the capital of USA?", answer: "Washington DC" },
  { question: "What is the capital of Pakistan?", answer: "Islamabad" },
  { question: "What is the capital of Bangladesh?", answer: "Dhaka" },
  { question: "What is the capital of China?", answer: "Beijing" },
  { question: "What is the capital of Brazil?", answer: "Brasília" },
  { question: "What is the capital of Australia?", answer: "Canberra" },
  { question: "What is the capital of Russia?", answer: "Moscow" },
  { question: "What is the capital of Italy?", answer: "Rome" },
  { question: "What is the capital of Spain?", answer: "Madrid" },
  { question: "What is the capital of Egypt?", answer: "Cairo" },
  { question: "What is the capital of South Africa?", answer: "Pretoria" },
  { question: "What is the capital of Argentina?", answer: "Buenos Aires" },
  { question: "What is the capital of Mexico?", answer: "Mexico City" },
  { question: "What is the capital of South Korea?", answer: "Seoul" },
  { question: "What is the capital of Turkey?", answer: "Ankara" },
  { question: "What is the capital of Indonesia?", answer: "Jakarta" },
  { question: "What is the capital of Vietnam?", answer: "Hanoi" },
  { question: "What is the capital of Thailand?", answer: "Bangkok" },
];

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <h1>Capital Cities Showdown!</h1>
      <p>Think you’re a geography whiz? Prove it by matching all 25 global capitals to their countries!</p>
      <p>Total cards: {cards.length}</p>
      <Card content={cards[currentIndex].question} />
    </div>
  );
};

export default App;