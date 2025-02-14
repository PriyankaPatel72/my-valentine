'use client'
import { useState } from 'react';
import Image from 'next/image';

const piyuImages = [
  '/images/piyu1.jpeg',
  '/images/piyu2.jpeg',
  '/images/piyu3.jpeg',
  '/images/piyu4.jpeg',
  '/images/piyu5.jpeg',
  '/images/piyu6.jpeg',
];

const nandImages = [
  '/images/nand1.JPG', // matches with piyu1
  '/images/nand2.JPG', // matches with piyu2
  '/images/nand3.JPG', // matches with piyu3
  '/images/nand4.JPG', // matches with piyu4
  '/images/nand5.JPG', // matches with piyu5
  '/images/nand6.JPG', // matches with piyu6
];

const shuffleArray = (array) => {
  const shuffledArray = [...array];
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

export default function Page() {
  const [showMessage, setShowMessage] = useState(false);
  const [startChallenge, setStartChallenge] = useState(false);
  const [cards, _setCards] = useState(shuffleArray([...new Set([...piyuImages, ...nandImages])]));
  const [flippedCards, setFlippedCards] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  const handleCardClick = (index) => {
    if (flippedCards.length === 2 || flippedCards.includes(index)) return;

    const newFlippedCards = [...flippedCards, index];
    setFlippedCards(newFlippedCards);

    if (newFlippedCards.length === 2) {
      const [firstIndex, secondIndex] = newFlippedCards;
      const firstCard = cards[firstIndex];
      const secondCard = cards[secondIndex];

      const isMatch = piyuImages.includes(firstCard) && nandImages.includes(secondCard) &&
                      piyuImages.indexOf(firstCard) === nandImages.indexOf(secondCard) ||
                      nandImages.includes(firstCard) && piyuImages.includes(secondCard) &&
                      nandImages.indexOf(firstCard) === piyuImages.indexOf(secondCard);

      if (isMatch) {
        setMatchedCards([...matchedCards, firstIndex, secondIndex]);
      }
      setTimeout(() => setFlippedCards([]), 1000);
    }
  };

  const handleSubmit = () => {
    if (matchedCards.length === cards.length) {
      window.location.href = '/Congrats';
    } else {
      window.location.href = '/Lost';
    }
  };

  return (
    <div className="valentine-theme min-h-screen p-6 pb-10 sm:p-8 font-[family-name:var(--font-geist-sans)]" style={{ backgroundColor: 'lightpink' }}>
      <div className="flex flex-col items-center justify-start min-h-screen">
        <h1 className="text-5xl font-extrabold text-red-600 text-center animate-bounce mt-10">Escape Room</h1>
        {!showMessage && (
          <button className="mt-10 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105" onClick={() => setShowMessage(true)}>Message from Priyanka</button>
        )}
        {showMessage && !startChallenge && (
          <>
            <div className="bg-white p-6 rounded-lg shadow-lg mt-4 max-w-md text-center">
              <p className="text-2xl text-gray-800 mb-4" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>Dear Nand,</p>
              <p className="text-lg text-gray-700 mb-4" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>
                Don&#39;t worry, I&#39;m okay. You&#39;re doing such a good job! The kidnapper asked me what the next challenge should be, and since we didn&#39;t meet for 19 years, I thought this challenge could make up for lost time.
              </p>
              <p className="text-lg text-gray-700" style={{ fontFamily: 'Comic Sans MS, Comic Sans, cursive' }}>XOXO, Priyanka</p>
            </div>
            <button className="mt-10 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105" onClick={() => setStartChallenge(true)}>Start Challenge</button>
          </>
        )}
        {startChallenge && (
          <>
            <p className="text-xl text-center text-gray-800 mt-4">Match the images up to relive these moments with her and save Priyanka!</p>
            <div className="grid grid-cols-3 gap-4 mt-6">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`w-32 h-32 border shadow-lg relative overflow-hidden ${flippedCards.includes(index) || matchedCards.includes(index) ? '' : 'bg-gray-300'}`}
                  onClick={() => handleCardClick(index)}
                >
                  {(flippedCards.includes(index) || matchedCards.includes(index)) && (
                    <Image
                      src={card}
                      alt={`Card ${index}`}
                      layout="fill"
                      objectFit="cover"
                    />
                  )}
                </div>
              ))}
            </div>
            <button onClick={handleSubmit} className="mt-4 px-8 py-4 text-2xl font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-transform transform hover:scale-110">
              Submit
            </button>
          </>
        )}
      </div>
    </div>
  );
}