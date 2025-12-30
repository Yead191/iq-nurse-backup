import { Star, Gem, Lightbulb } from "lucide-react";

export const calculationMethodsHeader = {
  title: "Calculation Methods",
  description:
    "There are several methods for calculating medication dosages. Proficiency in multiple methods allows you to verify your answers and choose the most efficient approach for different situations.",
};

export const methodsListData = [
  {
    id: 1,
    title: "1. Ratio and Proportion Method",
    description:
      "This method sets up two equivalent ratios and solves for the unknown value. It's versatile and works for most calculation problems.",
    formula: {
      label: "Setup",
      content: "Have/Vehicle = Desired/X",
    },
    example: {
      title: "Example Problem",
      icon: Lightbulb,
      lines: [
        "Order: Amoxicillin 500 mg PO",
        "Available: 250 mg per 5 mL",
        "Setup: 250 mg/5 mL = 500 mg/X mL",
        "Solve: 250X = 2500",
        "Answer: X = 10 mL",
      ],
    },
  },
  {
    id: 2,
    title: "2. Desired Over Have (Formula Method)",
    description:
      "This straightforward method divides what you want (desired) by what you have, then multiplies by the vehicle (quantity).",
    formula: {
      label: "Formula",
      content: "Desired/Have × Vehicle = Amount to Give",
    },
    example: {
      title: "Example Problem",
      icon: Lightbulb,
      lines: [
        "Order: Digoxin 0.25 mg PO",
        "Available: 0.125 mg tablets",
        "Calculate: 0.25/0.125 × 1 tablet = 2 tablets",
        "Answer: Give 2 tablets",
      ],
    },
  },
  {
    id: 3,
    title: "3. Dimensional Analysis",
    description:
      "This method uses conversion factors to cancel out units, leaving only the desired unit. It's particularly useful for complex conversions.",
    formula: {
      label: "Setup",
      content: "Desired Unit = Given × Conversion Factors",
    },
    example: {
      title: "Example Problem",
      icon: Lightbulb,
      lines: [
        "Order: Erythromycin 0.5 g PO",
        "Available: 250 mg tablets",
        "Setup: 0.5 g × (1000 mg/1 g) × (1 tab/250 mg)",
        "Calculate: 0.5 × 1000 ÷ 250 = 2 tablets",
        "Answer: Give 2 tablets",
      ],
    },
  },
];

export const nclexHighlightMethods = {
  title: "NCLEX-RN HIGHLIGHT",
  Icon: Star,
  defaultColor: "#F59E0B",
  features: [
    "NCLEX-RN Strategy: Choose the calculation method you're most comfortable with and use it consistently. However, learn all three methods so you can verify your answers using a different approach. On the NCLEX-RN, double-checking calculations using two different methods can prevent errors and increase confidence.",
  ],
};

export const clinicalPearlMethods = {
  title: "CLINICAL PEARL",
  Icon: Gem,
  defaultColor: "#A855F7",
  features: [
    "In clinical practice, always perform calculations twice using the same or different methods. If answers don't match, recalculate. Never administer a medication if you're uncertain about the calculation - consult with a colleague or pharmacist.",
  ],
};
