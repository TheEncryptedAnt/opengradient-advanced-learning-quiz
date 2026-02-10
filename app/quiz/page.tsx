"use client";

import { useState } from "react";
import { questions } from "./questions";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const q = questions[current];

  function next() {
    if (selected === q.correctIndex) setScore(score + 1);
    setShowAnswer(false);
    setSelected(null);
    setCurrent(current + 1);
  }

  if (!q) {
    return (
      <main style={{ padding: 40 }}>
        <h2>Quiz Finished 🎉</h2>
        <p>
          Score: {score} / {questions.length}
        </p>
        <a href="/">Go Home</a>
      </main>
    );
  }

  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h2>{q.question}</h2>

      {q.options.map((opt, i) => {
        let bg = "#eee";
        if (showAnswer) {
          if (i === q.correctIndex) bg = "#bbf7d0";
          else if (i === selected) bg = "#fecaca";
        }

        return (
          <button
            key={i}
            onClick={() => setSelected(i)}
            style={{
              display: "block",
              width: "100%",
              marginTop: 10,
              padding: 12,
              background: bg,
              border: "1px solid #ccc",
              cursor: "pointer",
            }}
          >
            {opt}
          </button>
        );
      })}

      {!showAnswer ? (
        <button
          disabled={selected === null}
          onClick={() => setShowAnswer(true)}
          style={{ marginTop: 20 }}
        >
          Check Answer
        </button>
      ) : (
        <>
          <p style={{ marginTop: 10 }}>{q.explanation}</p>
          <button onClick={next}>Next</button>
        </>
      )}
    </main>
  );
}
