import React, { useState, useEffect } from "react";

import { Questionaire } from "./components";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setQuestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswers) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setShowAnswers(true);
  };

  const handleNextQuestion = () => {
    setShowAnswers(false);
    setCurrentIndex(currentIndex + 1);
  };

  return questions.length > 0 ? (
    <div className="container">
      <h1 className="text-5xl font-bold text-center mb-8 text-blue-900 ">
        Music Quiz
      </h1>
      {currentIndex >= questions.length ? (
        <h1 className="text-3xl text-white font-bold">
          Game ended! Your score is : {score}
        </h1>
      ) : (
        <Questionaire
          data={questions[currentIndex]}
          showAnswers={showAnswers}
          handleNextQuestion={handleNextQuestion}
          handleAnswer={handleAnswer}
        ></Questionaire>
      )}
    </div>
  ) : (
    <h1 className="font-bold text-xl">Loading...</h1>
  );
}

export default App;
