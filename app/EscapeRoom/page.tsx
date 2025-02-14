"use client";

import { useState, useEffect } from "react";

const shuffleArray = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export default function EscapeRoom() {
  const [pieces, setPieces] = useState<number[]>([]);

  useEffect(() => {
    setPieces(shuffleArray([...Array(9).keys()]));
  }, []);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.dataTransfer.setData("pieceIndex", index.toString());
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    const draggedPieceIndex = parseInt(e.dataTransfer.getData("pieceIndex"), 10);
    const newPieces = [...pieces];
    [newPieces[index], newPieces[draggedPieceIndex]] = [newPieces[draggedPieceIndex], newPieces[index]];
    setPieces(newPieces);
  };

  return (
    <div className="valentine-theme min-h-screen p-0 pb-0 sm:p-0 font-[family-name:var(--font-geist-sans)]" style={{ backgroundColor: 'lightpink' }}>
      <div className="flex flex-col items-center justify-start min-h-screen">
        <h1 className="text-5xl font-extrabold text-red-600 text-center animate-bounce mt-10">Escape Room</h1>
        <div className="flex justify-center mt-6">
          <p className="text-2xl text-center text-gray-800">Solve The Puzzle</p>
        </div>
        <div className="grid grid-cols-3 gap-1 mt-2">
          {pieces.map((piece, index) => (
            <div
              key={index}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={(e) => e.preventDefault()}
              className="w-24 h-24 border shadow-lg"
              style={{
                backgroundImage: `url('/images/NandPiyu.jpg')`,
                backgroundPosition: `${(piece % 3) * -100}px ${Math.floor(piece / 3) * -100}px`,
                backgroundSize: '300px 300px',
              }}
            ></div>
          ))}
        </div>
        <a href="/Escape-p2" className="mt-4 px-8 py-4 text-2xl font-bold text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 transition-transform transform hover:scale-110">
          Completed
        </a>
      </div>
    </div>
  );
}