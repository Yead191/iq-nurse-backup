const categoryPerformance = [
  {
    category: "Fundamentals",
    score: 85,
    total: 180,
    color: "#10b981",
    peerAverage: 78,
  },
  {
    category: "Medical-Surgical",
    score: 72,
    total: 220,
    color: "#3b82f6",
    peerAverage: 75,
  },
  {
    category: "Pharmacology",
    score: 68,
    total: 150,
    color: "#f59e0b",
    peerAverage: 71,
  },
  {
    category: "Maternal & Newborn",
    score: 81,
    total: 140,
    color: "#ec4899",
    peerAverage: 76,
  },
  {
    category: "Pediatrics",
    score: 75,
    total: 100,
    color: "#8b5cf6",
    peerAverage: 73,
  },
  {
    category: "Mental Health",
    score: 79,
    total: 90,
    color: "#06b6d4",
    peerAverage: 74,
  },
  {
    category: "Community Health",
    score: 65,
    total: 60,
    color: "#f59e0b",
    peerAverage: 70,
  },
  {
    category: "Leadership",
    score: 70,
    total: 45,
    color: "#6366f1",
    peerAverage: 72,
  },
];

const performanceData = [
  { type: "Correct", value: 485, color: "#10b981" },
  { type: "Incorrect", value: 215, color: "#ef4444" },
];

const recommendations = {
  focus: [
    "Pharmacology - Dosage Calculations",
    "Medical-Surgical - Cardiovascular System",
  ],
  maintain: [
    "Maternal & Newborn - Postpartum Care",
    "Mental Health - Therapeutic Communication",
  ],
  strengths: [
    "Fundamentals - Basic Care & Comfort",
    "Pediatrics - Growth & Development",
  ],
};

export { categoryPerformance, performanceData, recommendations };
