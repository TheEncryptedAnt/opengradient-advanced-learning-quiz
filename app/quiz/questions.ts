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
      "Decentralized AI computation",
      "GPU rental marketplace"
    ],
    correctIndex: 2,
    explanation:
      "OpenGradient focuses on decentralized AI computation rather than centralized hosting."
  },
  {
    id: 2,
    question: "Which role does the community play in OpenGradient?",
    options: [
      "Only marketing",
      "Passive users",
      "Active contributors and validators",
      "No role"
    ],
    correctIndex: 2,
    explanation:
      "The OpenGradient ecosystem is community-driven with contributors playing an active role."
  }
];
