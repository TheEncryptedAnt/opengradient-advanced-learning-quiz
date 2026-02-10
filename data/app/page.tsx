import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #6FE7E8, #38BFD1)",
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
          maxWidth: "520px",
          width: "100%",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <img
          src="/logo.png"
          alt="OpenGradient"
          width={80}
          style={{ marginBottom: "16px" }}
        />

        <h1 style={{ fontSize: "28px", fontWeight: 700 }}>
          OpenGradient Learning Quiz
        </h1>

        <p style={{ color: "#555", marginTop: "12px" }}>
          Test your understanding of decentralized, verifiable AI —
          from basics to advanced concepts.
        </p>

        <Link href="/quiz">
          <button
            style={{
              marginTop: "24px",
              padding: "12px 20px",
              background: "#38BFD1",
              color: "white",
              borderRadius: "10px",
              border: "none",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Start Quiz →
          </button>
        </Link>

        <p style={{ fontSize: "13px", color: "#777", marginTop: "24px" }}>
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
