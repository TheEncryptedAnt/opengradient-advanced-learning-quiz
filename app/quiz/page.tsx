if (finished) {
  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>Quiz Completed 🎉</h1>

      <p>
        Your Score: <b>{score}</b> / {questions.length}
      </p>

      <hr />

      <p>
        📘 Learn more about OpenGradient:
        <br />
        <a
          href="https://docs.opengradient.ai"
          target="_blank"
          rel="noreferrer"
        >
          https://docs.opengradient.ai
        </a>
      </p>

      <hr />

      <p>
        Built by{" "}
        <a
          href="https://x.com/TheEncryptedAnt"
          target="_blank"
          rel="noreferrer"
        >
          @TheEncryptedAnt
        </a>
      </p>

      <button
        onClick={() => window.location.reload()}
        style={{ marginTop: 20 }}
      >
        Restart Quiz
      </button>
    </main>
  );
}
