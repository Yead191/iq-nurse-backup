import { Star, AlertTriangle, Gem } from "lucide-react";

export const nclexSuccessHeader = {
  title: "NCLEX-RN Success Strategies",
  description:
    "Mastering dosage calculations for the NCLEX-RN requires consistent practice and strategic preparation. Here are proven strategies to ensure success.",
};

export const nclexHighlight = {
  title: "NCLEX-RN HIGHLIGHT",
  Icon: Star,
  defaultColor: "#F59E0B",
  features: [
    "NCLEX-RN Calculator Use: The NCLEX-RN provides an on-screen calculator for all dosage calculation questions. However, you must still know which formulas to use, how to set up problems correctly, and how to interpret results. Practice using a basic calculator during your preparation to simulate test conditions.",
  ],
};

export const studyPracticeStrategies = {
  title: "Study and Practice Strategies:",
  defaultColor: "#EAB308",
  features: [
    "Practice calculations daily, even if just 10-15 minutes",
    "Work through problems using multiple methods to verify answers",
    "Create flashcards for common conversions and formulas",
    "Practice with realistic NCLEX-style questions",
    "Time yourself to build speed and confidence",
    "Review your errors to identify patterns and knowledge gaps",
    "Study safe dose ranges for common medications",
    "Practice mental math for simple conversions",
  ],
};

export const testTakingTips = {
  title: "Test-Taking Tips for NCLEX-RN Dosage Questions:",
  defaultColor: "#EAB308",
  features: [
    "Read the entire question carefully before calculating",
    "Identify what the question is asking for (tablets, mL, mL/hr, etc.)",
    "Write down all given information",
    "Convert all measurements to the same units before calculating",
    "Set up your calculation method clearly",
    "Use the calculator for all arithmetic",
    "Check that your answer makes clinical sense",
    "Round according to the question's instructions",
    "Double-check your answer before submitting",
  ],
};

export const clinicalPearlNclex = {
  title: "CLINICAL PEARL",
  Icon: Gem,
  defaultColor: "#A855F7",
  features: [
    'If you\'re unsure about a calculation on the NCLEX-RN, use your critical thinking skills. Ask yourself: "Would I actually give this amount to a real patient?" If the answer is no, recalculate or reconsider your approach.',
  ],
};

export const safetyAlertNclex = {
  title: "SAFETY ALERT",
  Icon: AlertTriangle,
  defaultColor: "#EF4444",
  features: [
    "Final Reminder: Dosage calculation competency is not just about passing the NCLEX-RN - it's about patient safety throughout your nursing career. Take the time to master these skills thoroughly. Lives depend on your accuracy and clinical judgment.",
  ],
};
