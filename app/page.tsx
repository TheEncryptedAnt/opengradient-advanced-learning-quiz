export default function Home() {
  return (
    <main style={{ padding: 40, fontFamily: "sans-serif" }}>
      <h1>OpenGradient Advanced Learning Quiz</h1>
      <p>Community-built interactive quiz.</p>

      <a
        href="/quiz"
        style={{
          display: "inline-block",
          marginTop: 20,
          padding: "12px 20px",
          background: "#7c3aed",
          color: "#fff",
          borderRadius: 8,
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Start Quiz →
      </a>
    </main>
  );
}
