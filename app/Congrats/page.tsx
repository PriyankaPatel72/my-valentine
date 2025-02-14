'use client'
import { useEffect } from 'react';
import Image from 'next/image';
import confetti from 'canvas-confetti';

export default function CongratsPage() {
  useEffect(() => {
    confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 },
    });

    const audio = new Audio('/sounds/happy-music.mp3');
    audio.play();
  }, []);

  return (
    <div className="valentine-theme min-h-screen p-6 pb-10 sm:p-8 font-[family-name:var(--font-geist-sans)]" style={{ backgroundColor: 'lightpink' }}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl font-extrabold text-red-600 text-center animate-bounce mt-10">Congratulations!</h1>
        <p className="text-xl text-center text-gray-800 mt-4">You found Priyanka! You are the Boyfriend of the Year!</p>
        <div className="mt-6">
          <Image
            src="/images/me.jpeg"
            alt="Me"
            width={300}
            height={300}
            className="square-image"
          />
        </div>
        <a
          href="/reward"
          className="mt-10 px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105"
        >
          See Your Reward
        </a>
      </div>
    </div>
  );
}
