import { CheckCircle2, Star } from "lucide-react";

export const firstDegreeIntro = {
  title: "First-Degree AV Block",
  description:
    "First-degree AV block is a delay in conduction through the AV node, resulting in a prolonged PR interval. Every atrial impulse is conducted to the ventricles, but conduction is slower than normal. This is generally a benign rhythm that rarely causes symptoms or requires treatment.",
};

export const definingCharacteristics = [
  {
    parameter: "Rate",
    criteria: "Usually 60-100 bpm (depends on underlying rhythm)",
  },
  { parameter: "Rhythm", criteria: "Regular" },
  {
    parameter: "P Waves",
    criteria: "Present before every QRS; normal morphology",
  },
  {
    parameter: "PR Interval",
    criteria: ">0.20 seconds (>5 small squares) - KEY FINDING",
    isHighlight: true,
  },
  {
    parameter: "QRS Complex",
    criteria: "Usually 0.06-0.12 seconds; follows every P wave",
  },
  { parameter: "P:QRS Ratio", criteria: "1:1 (every P wave is conducted)" },
];

export const commonCauses = {
  Medications: "Beta-blockers, calcium channel blockers, digoxin, amiodarone",
  "Increased vagal tone": "Athletes, sleep",
  "Inferior wall MI": "Affects AV node blood supply",
  Myocarditis: "Inflammation of heart muscle",
  "Electrolyte imbalances": "Hyperkalemia",
  Aging: "Degenerative changes in conduction system",
  "Lyme disease": "Can cause AV block",
};

export const clinicalSignificance = {
  title: "Generally Benign",
  defaultColor: "#10b981", // Green
  Icon: CheckCircle2,
  description: "",
  features: [
    '"Usually asymptomatic": Patients typically have no symptoms',
    '"Hemodynamically stable": Cardiac output is maintained',
    '"No treatment needed": In most cases',
    '"Monitor for progression": Can progress to higher-degree blocks',
  ],
};

export const nursingManagement = [
  {
    action: "Measure PR interval",
    detail: "Confirm it's >0.20 seconds",
  },
  {
    action: "Assess patient",
    detail: "Usually asymptomatic",
  },
  {
    action: "Review medications",
    detail: "Check for AV node blocking drugs",
  },
  {
    action: "Monitor for progression",
    detail: "Watch for development of higher-degree blocks",
  },
  {
    action: "Document findings",
    detail: "Record PR interval measurement",
  },
  {
    action: "No immediate intervention",
    detail: "Unless symptomatic or progressing",
  },
];

export const quickReference = {
  title: "Quick Reference: First-Degree AV Block",
  badges: [
    { label: "Usually Benign", color: "bg-emerald-100 text-emerald-800" },
  ],
  points: [
    "Key Finding: PR interval >0.20 seconds",
    "All P waves conducted: 1:1 ratio maintained",
    "Treatment: Usually none needed",
    "Monitor: For progression to higher-degree blocks",
  ],
};

export const nclexHighYield = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#a855f7",
  Icon: Star,
  features: [
    '"Key Feature": PR interval >0.20 seconds (prolonged), but every P wave is followed by QRS',
    '"Clinical Significance": Usually benign, no treatment needed, patient typically asymptomatic',
    '"Common Causes": Medications (beta-blockers, calcium channel blockers, digoxin), increased vagal tone, MI',
    '"Nursing Actions": Monitor for progression to higher-degree blocks, review medications',
    '"No Emergency Treatment": Does not require atropine or pacing unless symptomatic',
    '"Patient Teaching": Usually no activity restrictions, continue prescribed medications',
  ],
};
