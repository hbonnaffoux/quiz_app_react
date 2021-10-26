import React, { useState, useEffect } from "react";

import { Questionaire } from "./components";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple";

function App() {
  const[questions, setQuestions] = useState([]);

  useEffect(() => {
      fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results); 
      });
  }, []);

  return questions.length > 0 ? (
    <div className="container">
      <Questionaire data={questions[0]}></Questionaire>
    </div>
    ) : (
      <h1 className="font-bold text-xl">Loading...</h1>
  );
}

export default App;
