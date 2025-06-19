import './App.css';
import Card from './Card';
import { useState } from 'react';

const cards = [
  {
    questionText: "START",
    answerText: "Click Next to Start!",
    continent: "intro"
  },
  {
    questionText: "What is the capital of France?",
    answerText: "Paris",
    answerImage: "/images/france.jpg",
    continent: "europe"
  },
  {
    questionText: "What is the capital of Germany?",
    answerText: "Berlin",
    answerImage: "/images/germany.jpg",
    continent: "europe"
  },
  {
    questionText: "What is the capital of Japan",
    answerText: "Tokyo",
    answerImage: "/images/japan.jpg",
    continent: "asia"
  },
  {
    questionText: "What is the capital of Canada?",
    answerText: "Ottawa",
    answerImage: "/images/canada.jpg",
    continent: "north-america"
  },
  {
    questionText: "What is the capital of Brazil?",
    answerText: "Brasília",
    answerImage: "/images/brazil.jpg",
    continent: "south-america"
  },
  {
    questionText: "What is the capital of Australia?",
    answerText: "Canberra",
    answerImage: "/images/australia.jpg",
    continent: "oceania"
  },
  {
    questionText: "What is the capital of India?",
    answerText: "New Delhi",
    answerImage: "/images/india.jpg",
    continent: "asia"
  },
  {
    questionText: "What is the capital of Russia?",
    answerText: "Moscow",
    answerImage: "/images/russia.jpg",
    continent: "europe"
  },
  {
    questionText: "What is the capital of China?",
    answerText: "Beijing",
    answerImage: "/images/china.jpg",
    continent: "asia"
  },
  {
    questionText: "What is the capital of South Africa?",
    answerText: "Pretoria",
    answerImage: "/images/southafrica.jpg",
    continent: "africa"
  },
  {
    questionText: "What is the capital of Mexico?",
    answerText: "Mexico City",
    answerImage: "/images/mexico.jpg",
    continent: "north-america"
  },
  {
    questionText: "What is the capital of Italy?",
    answerText: "Rome",
    answerImage: "/images/italy.webp",
    continent: "europe"
  },
  {
    questionText: "What is the capital of Spain?",
    answerText: "Madrid",
    answerImage: "/images/spain.jpg",
    continent: "europe"
  },
  {
    questionText: "What is the capital of South Korea?",
    answerText: "Seoul",
    answerImage: "/images/southkorea.jpg",
    continent: "asia"
  },
  {
    questionText: "What is the capital of Argentina?",
    answerText: "Buenos Aires",
    answerImage: "/images/argentina.jpg",
    continent: "south-america"
  },
  {
    questionText: "What is the capital of Egypt?",
    answerText: "Cairo",
    answerImage: "/images/egypt.webp",
    continent: "africa"
  },
  {
    questionText: "What is the capital of Thailand?",
    answerText: "Bangkok",
    answerImage: "/images/thailand.jpg",
    continent: "asia"
  },
  {
    questionText: "What is the capital of Nigeria?",
    answerText: "Abuja",
    answerImage: "/images/nigeria.webp",
    continent: "africa"
  },
  {
    questionText: "What is the capital of Turkey?",
    answerText: "Ankara",
    answerImage: "/images/turkey.jpg",
    continent: "asia"
  },
  {
    questionText: "What is the capital of Sweden?",
    answerText: "Stockholm",
    answerImage: "/images/sweden.webp",
    continent: "europe"
  },
  {
    questionText: "What is the capital of Norway?",
    answerText: "Oslo",
    answerImage: "/images/norway.jpg",
    continent: "europe"
  },
  {
    questionText: "What is the capital of Chile?",
    answerText: "Santiago",
    answerImage: "/images/chile.jpg",
    continent: "south-america"
  },
  {
    questionText: "What is the capital of Vietnam?",
    answerText: "Hanoi",
    answerImage: "/images/vietnam.jpg",
    continent: "asia"
  },
  {
    questionText: "What is the capital of Indonesia?",
    answerText: "Jakarta",
    answerImage: "/images/indonesia.jpg",
    continent: "asia"
  },
  {
    questionText: "What is the capital of Poland?",
    answerText: "Warsaw",
    answerImage: "/images/poland.jpg",
    continent: "europe"
  }
];

const App = () => {
  const [displayCards, setDisplayCards] = useState(cards);
  const [masteredCards, setMasteredCards] = useState([]); // New state for mastered cards
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [guess, setGuess] = useState('');
  const [guessStatus, setGuessStatus] = useState(null);

  const handleFlip = () => {
    console.log(`Card clicked, flipping to: ${!flipped}`);
    setFlipped(!flipped);
  };

  const handleNext = () => {
    if (currentIndex < displayCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setFlipped(false);
      setGuess('');
      setGuessStatus(null);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setFlipped(false);
      setGuess('');
      setGuessStatus(null);
    }
  };

  const shuffleFromIndex = (array, startIndex) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > startIndex; i--) {
      const j = Math.floor(Math.random() * (i - startIndex + 1)) + startIndex;
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const handleShuffle = () => {
    const shuffledCards = shuffleFromIndex(displayCards, 1);
    setDisplayCards(shuffledCards);
    setCurrentIndex(1); // Start from the first flashcard after "START"
    setFlipped(false);
    setGuess('');
    setGuessStatus(null);
  };

  const handleGuessChange = (e) => {
    setGuess(e.target.value);
    setGuessStatus(null);
  };

  const handleSubmit = () => {
    const correctAnswer = displayCards[currentIndex].answerText.toLowerCase();
    const userGuess = guess.toLowerCase().trim();
    setGuessStatus(userGuess === correctAnswer ? 'correct' : 'incorrect');
  };

  const handleMaster = () => {
    if (currentIndex > 0) { // Only master cards after "START"
      const masteredCard = displayCards[currentIndex];
      const newDisplayCards = displayCards.filter((_, index) => index !== currentIndex);
      setDisplayCards(newDisplayCards);
      setMasteredCards([...masteredCards, masteredCard]);
      if (currentIndex >= newDisplayCards.length) {
        setCurrentIndex(newDisplayCards.length - 1);
      }
      setFlipped(false);
      setGuess('');
      setGuessStatus(null);
    }
  };

  return (
    <div className="app">
      <h1>Capital Cities Showdown!</h1>
      <p>Think you’re a geography whiz? Prove it by matching all 25 global capitals to their countries!</p>
      <p>Total cards: {displayCards.length - 1}</p>
      <div className="card-container">
        <Card
          key={currentIndex}
          card={displayCards[currentIndex]}
          flipped={flipped}
          onClick={handleFlip}
        />
      </div>
      {flipped && currentIndex > 0 && (
        <button onClick={handleMaster} className="master-button">Mark as Mastered</button>
      )}
      {currentIndex > 0 && !flipped && (
        <div className="guess-section">
          <input
            type="text"
            value={guess}
            onChange={handleGuessChange}
            placeholder="Enter your guess"
          />
          <button onClick={handleSubmit}>Submit</button>
          {guessStatus && (
            <p className={guessStatus}>
              {guessStatus === 'correct' ? 'Correct!' : 'Incorrect!'}
            </p>
          )}
        </div>
      )}
      <div className="navigation-buttons">
        <button
          onClick={handlePrevious}
          disabled={currentIndex === 0}
          className={`navigation-button ${currentIndex === 0 ? 'disabled' : ''}`}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === displayCards.length - 1}
          className={`navigation-button ${currentIndex === displayCards.length - 1 ? 'disabled' : ''}`}
        >
          Next
        </button>
        <button onClick={handleShuffle} className="navigation-button">
          Shuffle
        </button>
      </div>
      <div className="mastered-cards">
        <h2>Mastered Cards</h2>
        <ul>
          {masteredCards.map((card, index) => (
            <li key={index}>{card.questionText}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;