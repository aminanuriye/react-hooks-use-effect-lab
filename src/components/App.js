import React, { useState } from "react";
import Question from "./Question";
import questions from "../data/questions";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(10);
  const currentQuestion = questions[currentIndex];

  function handleAnswer(isCorrect) {
    // You can log or track score here if needed
    console.log("Answered correctly?", isCorrect);

    // Move to the next question
    const nextIndex = currentIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentIndex(nextIndex);
    } else {
      alert("You've finished all the questions!");
    }
    setTimeRemaining(10); // reset timer
  }

  return (
    <main>
      <Question
        question={currentQuestion}
        onAnswered={handleAnswer}
        timeRemaining={timeRemaining}
        setTimeRemaining={setTimeRemaining}
      />
      <questions/>
    </main>
  );
}

export default App;
