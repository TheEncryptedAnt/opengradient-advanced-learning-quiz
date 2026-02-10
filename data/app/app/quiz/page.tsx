"use client";

import { useState } from "react";
import { questions } from "@/data/questions";

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[current];

  function next() {
    if (selected === q.correctIndex) {
      setScore(score + 1);
    }

    setSelected(null);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setFinished(true);
    }
  }

  if (finished) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div
          style={{
            background: "white",
            borderRadius: "16px",
            padding: "32px",
            maxWidth: "480px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "24px" }}>Quiz Complete 🎉</h2>
          <p style={{ marginTop: "12px" }}>
            Your score: <b>{score}</b> / {questions.length}
          </p>

          <a
            href="https://docs.opengradient.ai/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "20px",
              padding: "10px 16px",
              background: "#38BFD1",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none",
            }}
          >
            Learn more from the Docs →
          </a>

          <p style={{ fontSize: "13px", marginTop: "24px" }}>
            Built by{" "}
            <a
              href="https://x.com/TheEncryptedAnt"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#38BFD1" }}
            >
              @TheEncryptedAnt
            </a>
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        background: "#f6feff",
      }}
    >
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          padding: "32px",
          maxWidth: "520px",
          width: "100%",
        }}
      >
        <p style={{ fontSize: "14px", color: "#777" }}>
          Question {current + 1} / {questions.length}
        </p>

        <h2 style={{ marginTop: "12px" }}>{q.question}</h2>

        <div style={{ marginTop: "20px" }}>
          {q.options.map((opt, i) => (
            <div
              key={i}
              onClick={() => setSelected(i)}
              style={{
                padding: "12px",
                borderRadius: "10px",
                border:
                  selected === i
                    ? "2px solid #38BFD1"
                    : "1px solid #ddd",
                marginTop: "10px",
                cursor: "pointer",
              }}
            >
              {opt}
            </div>
          ))}
        </div>

        <button
          disabled={selected === null}
          onClick={next}
          style={{
            marginTop: "24px",
            width: "100%",
            padding: "12px",
            background: selected === null ? "#ccc" : "#38BFD1",
            color: "white",
            border: "none",
            borderRadius: "10px",
            cursor: selected === null ? "not-allowed" : "pointer",
          }}
        >
          Next →
        </button>
      </div>
    </main>
  );
}
