import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Siren,
  Stethoscope,
  Star,
  Wind,
  Zap,
} from "lucide-react";
import { InfoBoxData } from "@/components/shared/InfoBox";

// --- SVT DATA ---

export const svtIntro = {
  title: "Supraventricular Tachycardia (SVT)",
  description:
    "Supraventricular Tachycardia is a rapid heart rhythm originating above the ventricles (in the atria or AV node). The most common type is AV Nodal Reentrant Tachycardia (AVNRT), which involves a reentry circuit within or near the AV node. SVT typically starts and stops suddenly, has a very regular rhythm, and a narrow QRS complex.",
};

export const svtCharacteristics = [
  {
    parameter: "Rate",
    criteria: "150-250 beats per minute (typically 150-180 bpm)",
  },
  {
    parameter: "Rhythm",
    criteria: "Very regular - like a metronome",
  },
  {
    parameter: "Onset/Termination",
    criteria: "Sudden (paroxysmal) - starts and stops abruptly",
  },
  {
    parameter: "P Waves",
    criteria: "Often hidden in QRS or T wave; may be inverted if visible",
  },
  {
    parameter: "PR Interval",
    criteria: "Not measurable (P waves usually not visible)",
  },
  {
    parameter: "QRS Complex",
    criteria: "Narrow (0.06-0.12 seconds) - key distinguishing feature from VT",
  },
];

export const svtCauses = [
  "Stimulants: Caffeine, nicotine, alcohol, cocaine, amphetamines",
  "Medications: Decongestants, asthma medications, thyroid medications",
  "Stress and anxiety: Emotional or physical stress",
  "Hyperthyroidism: Increased metabolic state",
  "Structural heart disease: Though many patients have structurally normal hearts",
  "Electrolyte imbalances: Hypokalemia, hypomagnesemia",
  "Accessory pathways: Congenital extra electrical connections (e.g., WPW)",
];

export const svtManagement = {
  stable: {
    maneuvers: [
      "Valsalva maneuver: Bear down as if having a bowel movement for 10-15 seconds (Modified Valsalva with leg lift is more effective)",
      "Carotid sinus massage: Gentle massage of carotid artery (Contraindicated if bruits/stroke history)",
      "Ice water immersion: Submerge face in ice water for 10-15 seconds (diving reflex)",
      "Coughing: Forceful coughing may terminate SVT",
    ],
    adenosine: {
      mechanism:
        "Briefly blocks AV node conduction, breaking the reentry circuit",
      dose: [
        "First dose: 6 mg rapid IV push followed immediately by 20 mL saline flush",
        "Second dose: 12 mg rapid IV push if no response in 1-2 mins",
        "Third dose: May repeat 12 mg once if needed",
      ],
      administration:
        "MUST be given rapid IV push (1-2s) via large proximal vein (antecubital) + arm elevation",
      sideEffects:
        "Chest tightness, flushing, sense of 'impending doom', transient asystole (pause)",
    },
    alternatives: [
      "Diltiazem: 0.25 mg/kg IV over 2 minutes",
      "Metoprolol: 5 mg IV over 2 minutes",
    ],
  },
  unstable: {
    indication:
      "Hypotension, altered mental status, chest pain, acute heart failure",
    action: "Synchronized cardioversion starting at 50-100 joules",
    sedation: "Provide procedural sedation if patient is conscious",
  },
};

export const svtNclex: InfoBoxData = {
  title: "NCLEX-RN High-Yield Points: SVT",
  defaultColor: "#9333ea",
  Icon: Star,
  features: [
    "Classic Presentation: Sudden onset, regular, narrow QRS, rate 150-250 bpm",
    "Vagal Maneuvers First: Try Valsalva or ice to face before medications",
    "Adenosine Protocol: 6 mg rapid IV → 12 mg if needed (Know this sequence!)",
    "Adenosine Administration: Rapid push + 20mL flush + arm lift (very short half-life)",
    "Adenosine Warning: Warn patient of 'impending doom' and brief asystole",
    "Contraindications: Asthmatics (can cause bronchospasm)",
    "Unstable SVT: Hypotension/AMS/Chest Pain → Synchronized Cardioversion",
    "Patient Teaching: Avoid caffeine/stimulants, stress management",
  ],
};

// --- PAC DATA ---

export const pacIntro = {
  title: "Premature Atrial Contraction (PAC)",
  description:
    "A PAC is a premature beat arising from an ectopic focus within the atria (often outside the SA node). It interrupts the underlying rhythm and is usually followed by a non-compensatory pause.",
};

export const pacCharacteristics = [
  { parameter: "Rhythm", criteria: "Irregular due to premature beat" },
  {
    parameter: "P Wave",
    criteria: "Premature, abnormal shape (different from sinus P)",
  },
  {
    parameter: "QRS Complex",
    criteria: "Usually narrow; may be wide if aberrantly conducted",
  },
  {
    parameter: "Pause",
    criteria: "Incomplete compensatory pause (less than 2x normal R-R)",
  },
];

export const pacClinical: InfoBoxData = {
  title: "Clinical Significance: PACs",
  defaultColor: "#22c55e",
  Icon: CheckCircle,
  description: "Often benign, but frequent PACs can be a warning sign.",
  features: [
    "Common Finding: Very common in healthy individuals; often benign.",
    "Triggers: Caffeine, alcohol, nicotine, stress, fatigue, electrolytes, hypoxia.",
    "Warning Sign: Frequent PACs (>6/min) may precede AFib or Flutter.",
    "Symptoms: Often asymptomatic; patients may feel 'skipped beat' or palpitations.",
  ],
};

// --- MAT DATA ---

export const matIntro = {
  title: "Multifocal Atrial Tachycardia (MAT)",
  description:
    "MAT is a rapid, irregular rhythm caused by multiple ectopic foci firing in the atria. It is characterized by at least 3 different P-wave morphologies and a rate >100 bpm.",
};

export const matCharacteristics = [
  { parameter: "Rate", criteria: ">100 bpm (usually 100-150 bpm)" },
  { parameter: "Rhythm", criteria: "Irregularly irregular" },
  {
    parameter: "P Waves",
    criteria: "At least 3 different morphologies in same lead",
  },
  {
    parameter: "PR Interval",
    criteria: "Variable, changes with P wave morphology",
  },
];

export const matClinical: InfoBoxData = {
  title: "COPD Connection",
  defaultColor: "#f59e0b",
  Icon: AlertTriangle,
  description: "Strong association with respiratory disease.",
  features: [
    "Primary Cause: COPD/Respiratory Failure (~60% of cases).",
    "Mechanism: Hypoxia and pulmonary hypertension increase atrial pressure/excitability.",
    "Treatment Priority: Treat the underlying LUNG disease (Oxygen, Bronchodilators).",
    "Avoid: Electrical cardioversion is NOT effective for MAT.",
  ],
};

// --- WAP DATA ---

export const wapIntro = {
  title: "Wandering Atrial Pacemaker (WAP)",
  description:
    "WAP is the slower version of MAT. It involves the pacemaker site shifting between the SA node, atria, and AV junction. It is usually a benign finding.",
};

export const wapCharacteristics = [
  { parameter: "Rate", criteria: "Usually 60-100 bpm (Normal Range)" },
  { parameter: "Rhythm", criteria: "Slightly irregular" },
  { parameter: "P Waves", criteria: "At least 3 different morphologies" },
  {
    parameter: "Significance",
    criteria: "Benign; often seen in athletes (high vagal tone)",
  },
];

export const otherBiocards = [
  {
    title: "MAT High-Yield",
    color: "bg-orange-100 text-orange-800",
    points: ["Rate >100", "Assoc w/ COPD", "Treat Hypoxia", "Don't Cardiovert"],
  },
  {
    title: "WAP High-Yield",
    color: "bg-blue-100 text-blue-800",
    points: ["Rate <100", "Benign", "3+ P-wave shapes", "No treatment"],
  },
];
