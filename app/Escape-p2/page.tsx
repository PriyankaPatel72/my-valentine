'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Escape2() {
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const answers = {
      question1: form.question1.value,
      question2: form.question2.value,
      question3: form.question3.value,
      question4: form.question4.value,
      question5: form.question5.value,
    };

    if (
      answers.question1 === 'purple' &&
      answers.question2 === 'enchiladas' &&
      answers.question3 === 'studying' &&
      (answers.question4 === '2022-11-30' || answers.question4 === 'November 30, 2024') &&
      answers.question5 === '3005'
    ) {
      setIsCorrect(true);
    } else {
      window.location.href = '/Lost';
    }
  };

  return (
    <div className="valentine-theme min-h-screen p-6 pb-10 sm:p-8 font-[family-name:var(--font-geist-sans)]" style={{ backgroundColor: 'lightpink' }}>
      <div className="flex flex-col items-center justify-start min-h-screen">
        <h1 className="text-5xl font-extrabold text-red-600 text-center animate-bounce mt-10">Escape Room</h1>
        <div className="flex justify-center mt-6">
          <p className="text-2xl text-center text-gray-800 animate-pulse">Let's see how much you love Priyanka?</p>
        </div>    
        <form className="mt-10 w-full max-w-md bg-white p-6 rounded-lg shadow-lg animate-fade-in" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question1">
              Question 1: What is Priyanka's favorite color?
            </label>
            <select 
              name="question1"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="question1"
            >
              <option value="">Select an answer</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="purple">Purple</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question2">
              Question 2: What is Priyanka's favorite food?
            </label>
            <select 
              name="question2"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="question2"
            >
              <option value="">Select an answer</option>
              <option value="pizza">Pizza</option>
              <option value="sushi">Sushi</option>
              <option value="enchiladas">Enchiladas</option>
              <option value="pasta">Pasta</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question3">
              Question 3: Where did you first meet Priyanka?
            </label>
            <select 
              name="question3"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="question3"
            >
              <option value="">Select an answer</option>
              <option value="studying">Studying</option>
              <option value="party">At a party</option>
              <option value="work">At work</option>
              <option value="gym">At the gym</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question4">
              Question 4: When is your anniversary?
            </label>
            <select 
              name="question4"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="question4"
            >
              <option value="">Select an answer</option>
              <option value="2024-11-20">November 20, 2024</option>
              <option value="2023-11-20">November 15, 2024</option>
              <option value="2022-11-30">November 30, 2024</option>
              <option value="2021-11-20">November 10, 2024</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="question5">
              Question 5: What is your favorite song?
            </label>
            <select 
              name="question5"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              id="question5"
            >
              <option value="">Select an answer</option>
              <option value="3005">3005</option>
              <option value="shape-of-you">Shape of You</option>
              <option value="blinding-lights">Blinding Lights</option>
              <option value="uptown-funk">Uptown Funk</option>
            </select>
          </div>
          <button 
            className="bg-red-600 text-white font-bold py-2 px-4 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105" 
            type="submit"
          >
            Submit
          </button>
        </form>
        {isCorrect && (
          <div className="mt-10 p-6 bg-green-100 text-green-800 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center">Congratulations!</h2>
            <p className="text-center mt-4">You do know her well!</p>
            <Link href="/next-page">
              <div className="mt-4 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 transform hover:scale-105">
                Move On
              </div>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
