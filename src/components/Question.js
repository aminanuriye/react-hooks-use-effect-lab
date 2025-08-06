import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    // Handle time running out
    if (timeRemaining === 0) {
      setTimeRemaining(10);
      onAnswered(false);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeRemaining, onAnswered]);

  function handleAnswer(index) {
    const isCorrect = index === question.correctIndex;
    setTimeRemaining(10); // reset for next question
    onAnswered(isCorrect);
  }

  const answerButtons = question.answers.map((answer, index) => (
    <button key={answer} onClick={() => handleAnswer(index)}>
      {answer}
    </button>
  ));

  return (
    <section>
      <h1>{question.prompt}</h1>
      <div className="answers">{answerButtons}</div>
      <p>{timeRemaining} seconds remaining</p>
    </section>
  );
}

export default Question;
