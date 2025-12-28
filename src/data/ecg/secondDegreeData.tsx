import { CheckCircle2, Siren, Star } from "lucide-react";

export const secondDegreeIntro = {
  title: "Second-Degree AV Block",
  description:
    "Second-degree AV block occurs when some, but not all, atrial impulses are conducted to the ventricles. There are two types: Mobitz Type I (Wenckebach) and Mobitz Type II, each with different clinical significance and management.",
};

// --- Mobitz Type I (Wenckebach) ---

export const mobitzType1 = {
  title: "Mobitz Type I (Wenckebach)",
  characteristics: [
    {
      parameter: "PR Interval",
      criteria: "Progressively lengthens until a QRS is dropped",
    },
    {
      parameter: "Pattern",
      criteria: "Repeating cycle of lengthening PR intervals",
    },
    {
      parameter: "Dropped Beats",
      criteria: "P wave not followed by QRS (non-conducted P wave)",
    },
    {
      parameter: "RR Interval",
      criteria: "Progressively shortens until dropped beat, then pause",
    },
    { parameter: "Location", criteria: "Block occurs at AV node level" },
  ],
  clinicalSignificance: {
    title: "Usually Benign",
    defaultColor: "#10b981", // Green
    Icon: CheckCircle2,
    features: [
      '"Often asymptomatic": Usually well-tolerated',
      '"Common causes": Inferior MI, increased vagal tone, medications',
      '"Usually temporary": Often resolves spontaneously',
      '"Rarely progresses": Unlikely to progress to complete heart block',
      '"Treatment": Usually observation only; treat if symptomatic',
    ],
  },
};

// --- Mobitz Type II ---

export const mobitzType2 = {
  title: "Mobitz Type II",
  characteristics: [
    {
      parameter: "PR Interval",
      criteria: "Constant - does not lengthen before dropped beat",
      isHighlight: true,
    },
    {
      parameter: "Pattern",
      criteria: "Sudden, unexpected dropped QRS complexes",
    },
    {
      parameter: "Conduction Ratio",
      criteria: "May be 2:1, 3:1, 4:1, or variable",
    },
    {
      parameter: "QRS Width",
      criteria: "Often wide (>0.12 sec) - bundle branch block pattern",
    },
    {
      parameter: "Location",
      criteria: "Block occurs below AV node (His-Purkinje system)",
    },
  ],
  clinicalSignificance: {
    title: "Serious - High Risk",
    defaultColor: "#ef4444", // Red
    Icon: Siren,
    features: [
      '"Unstable rhythm": Can progress to complete heart block suddenly',
      '"Symptomatic": Often causes dizziness, syncope, fatigue',
      '"Decreased cardiac output": Due to dropped beats',
      '"High risk of asystole": Can progress without warning',
      '"Requires pacemaker": Permanent pacing usually indicated',
      '"Do not give AV node blockers": Can worsen block',
    ],
  },
};

// --- Comparison Table ---

export const comparisonTable = [
  {
    feature: "PR Interval",
    type1: "Progressively lengthens",
    type2: "Constant",
  },
  {
    feature: "Block Location",
    type1: "AV node",
    type2: "Below AV node (His-Purkinje)",
  },
  {
    feature: "QRS Width",
    type1: "Usually narrow",
    type2: "Often wide",
  },
  {
    feature: "Prognosis",
    type1: "Benign, usually temporary",
    type2: "Serious, high risk",
  },
  {
    feature: "Progression Risk",
    type1: "Low",
    type2: "High - can progress to 3rd degree",
  },
  {
    feature: "Treatment",
    type1: "Observation, treat if symptomatic",
    type2: "Pacemaker usually required",
  },
];

// --- Nursing Management ---

export const nursingManagement = {
  type1: [
    { action: "Continuous monitoring", detail: "Watch for progression" },
    { action: "Assess symptoms", detail: "Usually asymptomatic" },
    {
      action: "Review medications",
      detail: "Hold AV node blockers if ordered",
    },
    {
      action: "Monitor heart rate",
      detail: "Ensure adequate rate despite dropped beats",
    },
    { action: "Document pattern", detail: "Note conduction ratio" },
    {
      action: "Atropine available",
      detail: "If symptomatic bradycardia develops",
    },
  ],
  type2: [
    { action: "Notify provider immediately", detail: "High-risk rhythm" },
    {
      action: "Continuous monitoring",
      detail: "Watch for progression to complete block",
    },
    {
      action: "Assess hemodynamics",
      detail: "Blood pressure, perfusion, symptoms",
    },
    {
      action: "Prepare for pacing",
      detail: "Transcutaneous pacing pads applied",
    },
    {
      action: "Have atropine ready",
      detail: "May be ineffective but try if symptomatic",
    },
    {
      action: "Avoid AV node blockers",
      detail: "Hold beta-blockers, calcium channel blockers",
    },
    {
      action: "Prepare for transvenous pacing",
      detail: "Temporary pacing likely needed",
    },
    {
      action: "Cardiology consult",
      detail: "For permanent pacemaker evaluation",
    },
  ],
};

// --- Quick Reference ---

export const quickReference = {
  title: "Quick Reference: Second-Degree AV Block",
  type1: {
    title: "Type I (Wenckebach):",
    badges: [
      { label: "Usually Benign", color: "bg-emerald-100 text-emerald-800" },
    ],
    points: [
      "Progressive PR lengthening → dropped QRS",
      "Treatment: Observation",
    ],
  },
  type2: {
    title: "Type II:",
    badges: [{ label: "High Risk", color: "bg-red-100 text-red-800" }],
    points: [
      "Constant PR → sudden dropped QRS",
      "Treatment: Pacemaker usually required",
    ],
  },
};

// --- NCLEX High Yield ---

export const nclexHighYield = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#a855f7",
  Icon: Star,
  features: [
    '"Two Types - Know the Difference": Mobitz I (Wenckebach) vs Mobitz II',
    '"Mobitz I (Wenckebach)": Progressive PR lengthening until QRS drops; usually benign, AV node level',
    '"Mobitz II": Sudden dropped QRS without PR lengthening; more serious, below AV node',
    '"Mobitz I Treatment": Usually observation only; may need atropine if symptomatic',
    '"Mobitz II Treatment": High risk for complete heart block - prepare for pacing',
    '"Pacemaker Indication": Mobitz II often requires permanent pacemaker',
    '"Assessment Priority": Monitor for progression to third-degree block, assess hemodynamic stability',
    '"Medication Review": Hold AV-blocking drugs (beta-blockers, CCBs, digoxin) if symptomatic',
  ],
};
