import React, { useState } from 'react';
import './App.css';
import Card from './Card';

const cards = [
    {
    questionText: "START",
    answerText: "Click Next to Start!",
  },
  {
    questionText: "What is the capital of France?",
    answerText: "Paris",
    answerImage: "/images/france.jpg"
  },
  {
    questionText: "What is the capital of Germany?",
    answerText: "Berlin",
    answerImage: "/images/germany.jpg"
  },
  {
    questionText: "What is the capital of Japan",
    answerText: "Tokyo",
    answerImage: "/images/japan.jpg"
  },
  { questionText: "What is the capital of Canada?", 
    answerText: "Ottawa",
    answerImage: "/images/canada.jpg"
 },
  { questionText: "What is the capital of Brazil?", 
    answerText: "Brasília",
    answerImage: "/images/brazil.jpg"
},
  { questionText: "What is the capital of Australia?", 
    answerText: "Canberra",
    answerImage: "/images/australia.jpg"
},
  { questionText: "What is the capital of India?", 
    answerText: "New Delhi",
    answerImage: "/images/india.jpg"
},
  { questionText: "What is the capital of Russia?", 
    answerText: "Moscow",
    answerImage: "/images/russia.jpg"
},
  { questionText: "What is the capital of China?", 
    answerText: "Beijing",
    answerImage: "/images/china.jpg"
},
  { questionText: "What is the capital of South Africa?", 
    answerText: "Pretoria",
    answerImage: "/images/southafrica.jpg"
},
  { questionText: "What is the capital of Mexico?", 
    answerText: "Mexico City",
    answerImage: "/images/mexico.jpg"
},
  { questionText: "What is the capital of Italy?", 
    answerText: "Rome",
    answerImage: "/images/italy.webp"
},
  { questionText: "What is the capital of Spain?", 
    answerText: "Madrid",
    answerImage: "/images/spain.jpg"
},
  { questionText: "What is the capital of South Korea?", 
    answerText: "Seoul",
    answerImage: "/images/southkorea.jpg"
},
  { questionText: "What is the capital of Argentina?", 
    answerText: "Buenos Aires",
    answerImage: "/images/argentina.jpg"
},
  { questionText: "What is the capital of Egypt?", 
    answerText: "Cairo",
    answerImage: "/images/egypt.webp"
},
  { questionText: "What is the capital of Thailand?", 
    answerText: "Bangkok",
    answerImage: "/images/thailand.jpg"
 },
  { questionText: "What is the capital of Nigeria?", 
    answerText: "Abuja",
    answerImage: "/images/nigeria.webp"
},
  { questionText: "What is the capital of Turkey?",
     answerText: "Ankara",
     answerImage: "/images/turkey.jpg"
},
  { questionText: "What is the capital of Sweden?", 
    answerText: "Stockholm",
    answerImage: "/images/sweden.webp"
 },
  { questionText: "What is the capital of Norway?", 
    answerText: "Oslo",
    answerImage: "/images/norway.jpg"
 },
  { questionText: "What is the capital of Chile?", 
    answerText: "Santiago",
    answerImage: "/images/chile.jpg"
},
  { questionText: "What is the capital of Vietnam?", 
    answerText: "Hanoi",
    answerImage: "/images/vietnam.jpg"
},
  { questionText: "What is the capital of Indonesia?", 
    answerText: "Jakarta",
    answerImage: "/images/indonesia.jpg"
},
  { questionText: "What is the capital of Poland?", 
    answerText: "Warsaw",
    answerImage: "/images/poland.jpg"
 },
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
          card={cards[currentIndex]}
          flipped={flipped}
          onClick={handleFlip}
        />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default App;