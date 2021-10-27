import React, { useState, useEffect } from "react";

import { Questionaire } from "./components";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, []);

  const handleAnswer = (answer) => {
    const newIndex = currentIndex+1
    setCurrentIndex(newIndex);

    if (answer === questions[currentIndex].correct_answer) {
      setScore(score + 1);
    }

    if(newIndex >= questions.length) {
      setGameEnded(true);
    }
    // check for the answer

    //show another question

    //change score if correct
  };

  return gameEnded ? (
    <h1 className="text-3xl text-white font-bold">Your score was {score}</h1>
  ) : questions.length > 0 ? (
    <div className="container">
      <h1 className="text-5xl font-bold text-center mb-8 ">Music Quiz</h1>
      <Questionaire
        data={questions[currentIndex]}
        handleAnswer={handleAnswer}
      ></Questionaire>
    </div>
  ) : (
    <h1 className="font-bold text-xl">Loading...</h1>
  );
}

export default App;
