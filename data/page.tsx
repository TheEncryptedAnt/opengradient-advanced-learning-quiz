export type Question = {
  id: number;
  section: "warmup" | "core" | "challenge";
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const questions: Question[] = [
  // 🟢 WARM-UP (Easy → Medium)

  {
    id: 1,
    section: "warmup",
    question: "What is the primary goal of OpenGradient?",
    options: [
      "AI content generation",
      "Centralized AI hosting",
      "Verifiable and decentralized AI computation",
      "GPU rental marketplace"
    ],
    correctIndex: 2,
    explanation:
      "OpenGradient focuses on enabling verifiable, decentralized AI computation so users don’t need to blindly trust centralized providers."
  },
  {
    id: 2,
    section: "warmup",
    question: "Which component allows users to explore and use AI models in OpenGradient?",
    options: [
      "Validator Network",
      "Model Hub",
      "Governance DAO",
      "Inference Pool"
    ],
    correctIndex: 1,
    explanation:
      "The Model Hub is designed for discovering, testing, and integrating AI models within the OpenGradient ecosystem."
  },
  {
    id: 3,
    section: "warmup",
    question: "Why is decentralization important for AI systems?",
    options: [
      "It increases operational costs",
      "It reduces transparency",
      "It removes single points of failure",
      "It limits user participation"
    ],
    correctIndex: 2,
    explanation:
      "Decentralization improves resilience and trust by avoiding reliance on a single centralized authority."
  },

  // 🟡 CORE UNDERSTANDING (Medium)

  {
    id: 4,
    section: "core",
    question: "What problem does verifiable AI inference primarily solve?",
    options: [
      "Slow computation speed",
      "High storage costs",
      "Blind trust in AI execution",
      "Lack of AI models"
    ],
    correctIndex: 2,
    explanation:
      "Verifiable inference allows anyone to confirm that an AI model executed correctly, removing the need for blind trust."
  },
  {
    id: 5,
    section: "core",
    question: "How does OpenGradient differ from traditional cloud-based AI services?",
    options: [
      "It offers cheaper GPUs only",
      "It prioritizes cryptographic proofs and transparency",
      "It focuses on proprietary models",
      "It removes the need for developers"
    ],
    correctIndex: 1,
    explanation:
      "Unlike traditional cloud AI, OpenGradient emphasizes transparency and verifiability using cryptographic guarantees."
  },
  {
    id: 6,
    section: "core",
    question: "Which activity best represents a high-quality OpenGradient contribution?",
    options: [
      "Posting frequent short messages",
      "Asking for special roles",
      "Creating educational tools or product feedback",
      "Staying inactive but early"
    ],
    correctIndex: 2,
    explanation:
      "High-quality contributions focus on education, testing, and improving the ecosystem rather than visibility farming."
  },
  {
    id: 7,
    section: "core",
    question: "Why is a structured contribution system (like Notion tracking) useful?",
    options: [
      "To rank users by message count",
      "To centralize decision-making",
      "To transparently review meaningful contributions",
      "To replace community discussions"
    ],
    correctIndex: 2,
    explanation:
      "Structured tracking helps reviewers evaluate real impact and consistency rather than raw activity."
  },

  // 🔴 CHALLENGE (Optional – Advanced Thinking)

  {
    id: 8,
    section: "challenge",
    question:
      "If AI inference is verifiable, how does that change trust assumptions in decentralized applications?",
    options: [
      "Trust shifts from cryptography to reputation",
      "Trust shifts from centralized providers to mathematical proof",
      "Trust becomes unnecessary",
      "Trust is replaced by faster execution"
    ],
    correctIndex: 1,
    explanation:
      "Verifiable inference replaces trust in centralized providers with cryptographic proof of correct execution."
  },
  {
    id: 9,
    section: "challenge",
    question:
      "A DAO plans to use AI agents via OpenGradient. Which risk is reduced the most?",
    options: [
      "Model bias",
      "Incorrect or manipulated AI execution",
      "Poor governance decisions",
      "Low participation"
    ],
    correctIndex: 1,
    explanation:
      "Verifiable execution reduces the risk of hidden manipulation, though governance and model quality still matter."
  },
  {
    id: 10,
    section: "challenge",
    question:
      "Which mindset best aligns with an ALPHA OG–level contributor?",
    options: [
      "Maximizing visibility",
      "Optimizing short-term rewards",
      "Designing tools that educate and scale community understanding",
      "Waiting for explicit instructions"
    ],
    correctIndex: 2,
    explanation:
      "ALPHA OG contributors focus on long-term ecosystem value through education, tooling, and thoughtful design."
  }
];
