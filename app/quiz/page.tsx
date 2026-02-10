"use client";

import { useState } from "react";
import { questions } from "./questions";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const q = questions[current];

  function selectOption(index: number) {
    if (showAnswer) return;
    setSelected(index);
    setShowAnswer(true);
    if (index === q.correctIndex) {
      setScore(score + 1);
    }
  }

  function nextQuestion() {
    setSelected(null);
    setShowAnswer(false);
    setCurrent(current + 1);
  }

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif", maxWidth: 600 }}>
      <h1>OpenGradient Quiz</h1>

      {current < questions.length ? (
        <>
          <h3>{q.question}</h3>

          {q.options.map((opt, i) => {
            let bg = "#eee";

            if (showAnswer) {
              if (i === q.correctIndex) bg = "#b6f5c2";
              else if (i === selected) bg = "#f5b6b6";
            }

            return (
              <div
                key={i}
                onClick={() => selectOption(i)}
                style={{
                  padding: 12,
                  marginBottom: 10,
                  borderRadius: 6,
                  cursor: "pointer",
                  background: bg,
                }}
              >
                {opt}
              </div>
            );
          })}

          {showAnswer && (
            <>
              <p><b>Explanation:</b> {q.explanation}</p>
              <button onClick={nextQuestion}>Next</button>
            </>
          )}
        </>
      ) : (
        <h2>
          Quiz Finished 🎉 <br />
          Score: {score} / {questions.length}
        </h2>
      )}
    </main>
  );
}
