export type Question = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const questions: Question[] = [
  {
    id: 1,
    question: "What is the primary goal of OpenGradient?",
    options: [
      "AI content generation",
      "Centralized AI hosting",
      "Verifiable and transparent AI compute on-chain",
      "GPU rental marketplace"
    ],
    correctIndex: 2,
    explanation:
      "OpenGradient focuses on bringing AI compute on-chain with verifiability and transparency."
  }
];
