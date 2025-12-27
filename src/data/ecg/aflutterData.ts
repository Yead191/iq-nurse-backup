import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Siren,
  Stethoscope,
  Star,
} from "lucide-react";
import { InfoBoxData } from "@/components/shared/InfoBox";

export const aflutterIntro = {
  title: "Atrial Flutter",
  description:
    "Atrial Flutter is a rapid, regular atrial arrhythmia characterized by a distinctive 'sawtooth' pattern on ECG. The atria depolarize at a rate of 250-350 beats per minute in a circular reentry pattern, typically around the tricuspid valve. The AV node cannot conduct all these impulses, resulting in a physiological block that protects the ventricles from excessively rapid rates.",
};

export const definingCharacteristics = [
  {
    parameter: "Atrial Rate",
    criteria: "250-350 beats per minute (typically 300 bpm)",
  },
  {
    parameter: "Ventricular Rate",
    criteria: "Depends on AV conduction ratio; commonly 75, 100, or 150 bpm",
  },
  {
    parameter: "Rhythm",
    criteria:
      "Atrial rhythm is regular; ventricular rhythm may be regular or irregular",
  },
  {
    parameter: "P Waves",
    criteria: "Absent - replaced by flutter waves (F waves)",
  },
  {
    parameter: "Flutter Waves",
    criteria:
      "Distinctive 'sawtooth' pattern; best seen in leads II, III, aVF, and V1",
  },
  {
    parameter: "AV Conduction Ratio",
    criteria: "Commonly 2:1, 3:1, 4:1, or variable",
  },
  {
    parameter: "QRS Complex",
    criteria: "Usually 0.06-0.12 seconds (narrow)",
  },
];

export const avConductionRatios = [
  "2:1 Flutter: Most common; 2 flutter waves for every QRS (atrial rate 300 → ventricular rate 150 bpm)",
  "3:1 Flutter: 3 flutter waves per QRS (atrial rate 300 → ventricular rate 100 bpm)",
  "4:1 Flutter: 4 flutter waves per QRS (atrial rate 300 → ventricular rate 75 bpm)",
  "Variable Flutter: Changing AV conduction ratio; irregular ventricular rhythm",
];

export const commonCauses = [
  "Cardiac disease: Coronary artery disease, valvular disease (especially mitral or tricuspid), cardiomyopathy",
  "Chronic lung disease: COPD, pulmonary hypertension",
  "Post-cardiac surgery: Especially after valve repair or CABG",
  "Hyperthyroidism: Increased metabolic state",
  "Alcohol use: Acute or chronic consumption",
  "Pulmonary embolism: Acute right heart strain",
  "Atrial septal defect: Structural abnormality",
];

export const clinicalSignificance: InfoBoxData = {
  title: "Clinical Significance",
  defaultColor: "#f59e0b", // Orange/Amber
  Icon: AlertTriangle,
  description:
    "Atrial flutter shares many of the same risks as atrial fibrillation:",
  features: [
    "Stroke risk: Blood stasis in atria can lead to thrombus formation",
    "Hemodynamic compromise: Especially with rapid ventricular rates (2:1 conduction)",
    "Heart failure: Loss of atrial kick and rapid rates can precipitate decompensation",
    "Conversion to A-fib: Atrial flutter frequently converts to atrial fibrillation",
  ],
};

export const signsAndSymptoms = [
  "Palpitations (may feel regular and rapid)",
  "Dyspnea or shortness of breath",
  "Chest discomfort or pressure",
  "Fatigue and weakness",
  "Dizziness or lightheadedness",
  "Exercise intolerance",
];

export const nursingAssessment = {
  title: "Key Assessment Points",
  defaultColor: "#ef4444", // Red
  Icon: Stethoscope,
  features: [
    "Identify flutter waves: Look for sawtooth pattern in inferior leads (II, III, aVF)",
    "Calculate atrial rate: Measure distance between flutter waves",
    "Determine AV ratio: Count flutter waves between QRS complexes",
    "Assess ventricular rate: Calculate heart rate and determine if controlled",
    "Evaluate hemodynamics: Blood pressure, perfusion, symptoms",
    "Check for pulse deficit: Compare apical and radial pulses",
    "Assess stroke risk: Calculate CHA2DS2-VASc score",
  ],
};

export const managementData = {
  rateControl: {
    description: "Similar to atrial fibrillation management:",
    points: [
      "Beta-blockers: Metoprolol, atenolol (first-line)",
      "Calcium channel blockers: Diltiazem, verapamil",
      "Digoxin: May be used in combination",
      "Goal: Ventricular rate <100 bpm at rest",
    ],
  },
  rhythmControl: {
    description:
      "Atrial flutter is often more amenable to cardioversion than A-fib:",
    points: [
      "Electrical cardioversion: Often successful with low energy (50-100 joules)",
      "Pharmacological conversion: Ibutilide, dofetilide, amiodarone",
      "Catheter ablation: Highly effective (>90% success rate) for typical atrial flutter; considered curative",
    ],
  },
  anticoagulation: {
    description:
      "Same stroke risk as atrial fibrillation - anticoagulation is essential:",
    points: [
      "Use CHA2DS2-VASc score to determine need",
      "DOACs or warfarin as appropriate",
      "Same cardioversion precautions as A-fib (3-week rule or TEE)",
    ],
  },
};

export const nursingInterventions = {
  priority: {
    title: "Priority Actions",
    features: [
      "Assess stability: Determine if patient is stable or unstable",
      "If unstable: Prepare for immediate synchronized cardioversion",
      "If stable:",
      "    • Administer rate-control medications as ordered",
      "    • Monitor for rate control effectiveness",
      "    • Assess for symptoms and hemodynamic changes",
      "Continuous monitoring: Watch for conversion to A-fib or NSR",
      "Anticoagulation management: Administer and monitor as ordered",
      "Patient education: Explain rhythm, treatment plan, stroke prevention",
      "Prepare for procedures: Cardioversion or ablation if planned",
    ],
  },
};

export const quickReference = {
  title: "Quick Reference: Atrial Flutter",
  badges: [
    { label: "Sawtooth Pattern", color: "bg-slate-700 text-white" },
    { label: "Atrial: 250-350 bpm", color: "bg-cyan-100 text-cyan-800" },
  ],
  points: [
    "Key Feature: Regular flutter waves",
    "Treatment: Rate control + Anticoagulation OR Ablation",
    "Remember: Ablation is highly effective and often curative!",
  ],
};

export const nclexHighYield: InfoBoxData = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea", // Purple
  Icon: Star,
  features: [
    "Sawtooth Pattern: Classic flutter waves (F waves) - key diagnostic feature",
    "Atrial Rate: Typically 250-350 bpm with variable ventricular response (2:1, 3:1, 4:1 block)",
    "Similar to AFib: Same stroke risk, same anticoagulation needs, same treatment approach",
    "Cardioversion: Often responds well to lower energy (50-100 joules) synchronized cardioversion",
    "Medication Management: Rate control with beta-blockers or calcium channel blockers",
    "Nursing Assessment: Monitor for hemodynamic instability, assess cardiac output",
  ],
};
