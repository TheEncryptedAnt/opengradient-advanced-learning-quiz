"use client";

import { useState } from "react";
import { questions } from "@/data/questions";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  const handleOptionClick = (index: number) => {
    if (selected !== null) return; // prevent re-click
    setSelected(index);
    setShowResult(true);

    if (index === q.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelected(null);
    setShowResult(false);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  };

  if (finished) {
    return (
      <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
        <h1>Quiz Completed 🎉</h1>
        <p>
          Your Score: <strong>{score}</strong> / {questions.length}
        </p>

        <p style={{ marginTop: "20px" }}>
          📚 Learn more:
          <br />
          <a
            href="https://docs.opengradient.ai/"
            target="_blank"
            rel="noreferrer"
          >
            OpenGradient Docs
          </a>
        </p>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px", fontFamily: "sans-serif" }}>
      <h1>OpenGradient Advanced Quiz</h1>

      <p style={{ opacity: 0.7 }}>
        Question {current + 1} of {questions.length}
      </p>

      <h3 style={{ marginTop: "20px" }}>{q.question}</h3>

      <div style={{ marginTop: "20px" }}>
        {q.options.map((option, index) => {
          let background = "#f2f2f2";

          if (showResult) {
            if (index === q.correctIndex) background = "#c8f7c5"; // green
            else if (index === selected) background = "#f7c5c5"; // red
          }

          return (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                background,
                cursor: selected === null ? "pointer" : "default",
              }}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div style={{ marginTop: "15px" }}>
          <p>
            {selected === q.correctIndex ? "✅ Correct!" : "❌ Wrong answer"}
          </p>
          <p style={{ opacity: 0.8 }}>{q.explanation}</p>

          <button
            onClick={nextQuestion}
            style={{
              marginTop: "15px",
              padding: "10px 16px",
              borderRadius: "6px",
              border: "none",
              background: "#000",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Next →
          </button>
        </div>
      )}
    </main>
  );
}
