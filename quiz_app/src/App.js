import React, { useState, useEffect } from "react";

import { Questionaire } from "./components";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(undefined)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
        setCurrentQuestion(data.results[0])
      });
  }, []);

  const handleAnswer = (answer) => {
      // check for the answer

      //show another question

      //change score if correct
  };

  return questions.length > 0 ? (
    <div className="container">
      {currentQuestion && (
      <Questionaire
        data={currentQuestion}
        handleAnswer={handleAnswer}
      ></Questionaire>
      )}
    </div>
  ) : (
    <h1 className="font-bold text-xl">Loading...</h1>
  );
}

export default App;
