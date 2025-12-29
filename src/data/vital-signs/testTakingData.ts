import { Star, Lightbulb } from "lucide-react";

export const testTakingData = {
  title: "NCLEX-RN Test-Taking Strategies for Vital Signs",
  priorityQuestions: {
    title: "Priority Questions (ABCs)",
    Icon: Star,
    defaultColor: "#e74c3c",
    features: [
      "Airway: Always first priority - assess respiratory rate and effort",
      "Breathing: Adequate oxygenation - check SpO2 and respiratory quality",
      "Circulation: Adequate perfusion - assess pulse and blood pressure",
      "Remember: Unstable vital signs = unstable patient = priority assessment/intervention",
    ],
  },
  questionPatterns: {
    title: "Common NCLEX Question Patterns",
    items: [
      '"Which patient should the nurse assess first?" - Choose patient with most abnormal/critical vital signs',
      '"What is the priority nursing action?" - Address life-threatening vital sign abnormalities first',
      '"Which finding requires immediate intervention?" - Look for critical values or rapid changes',
      '"What should the nurse do before administering medication?" - Assess relevant vital signs (e.g., apical pulse before digoxin)',
      '"Which assessment finding is most concerning?" - Identify the vital sign indicating greatest risk',
    ],
  },
  successTips: {
    title: "NCLEX Success Tips:",
    Icon: Lightbulb,
    items: [
      "Know normal ranges for all age groups",
      'Understand the "why" behind abnormal findings',
      "Practice calculating MAP, pulse pressure, and pulse deficit",
      "Memorize critical values that require immediate action",
      "Remember medication effects on vital signs",
      "Use ABCs to prioritize when multiple abnormalities present",
      "Consider the whole clinical picture, not just isolated values",
    ],
  },
};
