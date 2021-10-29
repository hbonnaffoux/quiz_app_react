import React from "react";

const Questionaire = ({
  showAnswers,
  handleAnswer,
  handleNextQuestion,
  data: { question, correct_answer, incorrect_answers },
}) => {
  const shuffledAnswers = [correct_answer, ...incorrect_answers].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="flex flex-col">
      <div className="bg-white text-indigo-800 p-10 rounded-lg shadow-md">
        <h2
          className="text-2xl"
          dangerouslySetInnerHTML={{ __html: question }}
        ></h2>
      </div>
      <div className="grid grid-cols-2 gap-6 mt-6">
        {shuffledAnswers.map((answer) => {
          const bgColor = showAnswers
            ? answer === correct_answer
              ? "bg-green-300"
              : "bg-red-300"
            : "bg-white";

            const textColor = showAnswers ?
            'text-white' : 'text-indigo-800';
          return (
            <button
              className={`${bgColor} ${textColor} p-4 font-semibold rounded shadow`}
              onClick={() => handleAnswer(answer)}
              dangerouslySetInnerHTML={{ __html: answer }}
            ></button>
          );
        })}
      </div>
      {showAnswers && (
      <button
      onClick={handleNextQuestion}
      className=" ml-auto p-4 font-semibold rounded shadow bg-blue-900 text-white mt-6">
          Next Question
        </button>
        )}
    </div>
  );
};

export default Questionaire;
