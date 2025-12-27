import {
  Activity,
  AlertTriangle,
  CheckCircle,
  Info,
  Siren,
  Stethoscope,
  Star,
  Zap,
} from "lucide-react";
import { InfoBoxData } from "@/components/shared/InfoBox";

export const afibIntro = {
  title: "Atrial Fibrillation (A-fib)",
  description:
    "Atrial Fibrillation is the most common clinically significant arrhythmia. It is characterized by disorganized atrial electrical activity resulting in loss of effective atrial contraction (loss of 'atrial kick') and an irregular ventricular response.",
};

export const rateClassification = [
  "A-fib with RVR (Rapid Ventricular Response): Ventricular rate >100 bpm (uncontrolled)",
  "A-fib with Controlled Ventricular Response: Ventricular rate 60-100 bpm (rate-controlled with medications)",
  "A-fib with Slow Ventricular Response: Ventricular rate <60 bpm (may indicate AV node disease or excessive rate-control medications)",
];

export const commonCauses = {
  cardiac:
    "Hypertension, coronary artery disease, heart failure, valvular disease (especially mitral valve), cardiomyopathy, pericarditis",
  age: "Risk increases significantly after age 65",
  metabolic: "Hyperthyroidism, diabetes, obesity",
  pulmonary: "COPD, pulmonary embolism, obstructive sleep apnea",
  lifestyle:
    "Excessive alcohol consumption ('holiday heart syndrome'), caffeine, stimulant use",
  postOp: "Common after cardiac surgery",
  electrolyte: "Hypokalemia, hypomagnesemia",
  acute: "Sepsis, pneumonia, any critical illness",
};

export const clinicalSignificance: InfoBoxData = {
  title: "Clinical Significance and Complications",
  defaultColor: "#ef4444", // Red
  Icon: AlertTriangle,
  description: "Major Complications:",
  features: [
    "Stroke: 5-fold increased risk due to thrombus formation in left atrial appendage (Blood stasis in fibrillating atria promotes clot formation)",
    "Heart failure: Loss of atrial kick reduces cardiac output by 20-30% (Rapid ventricular rates reduce diastolic filling time)",
    "Cardiomyopathy: Prolonged rapid rates can cause tachycardia-induced cardiomyopathy",
    "Hemodynamic instability: Especially with RVR in patients with poor cardiac reserve",
  ],
};

export const signsAndSymptoms = [
  "Palpitations: Most common symptom; described as rapid, irregular, or 'fluttering' heartbeat",
  "Fatigue and weakness: Due to decreased cardiac output",
  "Dyspnea: Shortness of breath, especially with exertion",
  "Chest discomfort or pain: May indicate ischemia from rapid rate",
  "Dizziness or lightheadedness: From decreased cerebral perfusion",
  "Syncope or near-syncope: In severe cases with very rapid rates",
  "Exercise intolerance: Inability to perform usual activities",
  "Anxiety: From awareness of irregular heartbeat",
];

export const nursingAssessment = {
  comprehensive: [
    "Vital signs: Heart rate (apical and radial - note pulse deficit), blood pressure, respiratory rate, oxygen saturation",
    "Hemodynamic status: Signs of adequate perfusion vs. instability",
    "Cardiac assessment: Irregular pulse, variable pulse amplitude, heart sounds (irregular S1)",
    "Respiratory assessment: Signs of pulmonary congestion or heart failure",
    "Neurological assessment: Mental status, signs of stroke or TIA",
    "Symptom assessment: Onset, duration, severity, associated symptoms",
    "Stroke risk assessment: CHA2DS2-VASc score calculation",
    "Bleeding risk assessment: HAS-BLED score if anticoagulation considered",
    "12-lead ECG: Confirm diagnosis, assess for other abnormalities",
    "Laboratory tests: Thyroid function, electrolytes, cardiac enzymes, coagulation studies",
  ],
};

export const chadsvascScore = [
  { factor: "Congestive heart failure", points: 1 },
  { factor: "Hypertension", points: 1 },
  { factor: "Age ≥75 years", points: 2 },
  { factor: "Diabetes mellitus", points: 1 },
  { factor: "Stroke/TIA/thromboembolism history", points: 2 },
  { factor: "Vascular disease (prior MI, PAD, aortic plaque)", points: 1 },
  { factor: "Age 65-74 years", points: 1 },
  { factor: "Sex category (female)", points: 1 },
];

export const managementStrategies = {
  rateVsRhythm: {
    rateControl: {
      strategy: "Accept A-fib but control ventricular rate to 60-100 bpm",
      medications: [
        "Beta-blockers: Metoprolol, atenolol, carvedilol (first-line)",
        "Calcium channel blockers: Diltiazem, verapamil",
        "Digoxin: Less commonly used; for patients with heart failure",
      ],
      advantages: "Simpler, fewer side effects, no need for cardioversion",
      preferredFor:
        "Elderly patients, minimal symptoms, long-standing persistent A-fib",
    },
    rhythmControl: {
      strategy: "Attempt to restore and maintain normal sinus rhythm",
      methods: [
        "Electrical cardioversion: Synchronized shock to restore NSR",
        "Pharmacological cardioversion: Antiarrhythmic medications (amiodarone, flecainide, propafenone)",
        "Catheter ablation: Pulmonary vein isolation for recurrent A-fib",
      ],
      advantages:
        "Restores atrial kick, may improve symptoms and quality of life",
      preferredFor:
        "Young patients, highly symptomatic, new-onset A-fib, heart failure",
    },
  },
  anticoagulation: {
    doacs: {
      name: "Direct Oral Anticoagulants (DOACs)",
      details:
        "Preferred for most patients. Examples: Apixaban (Eliquis), Rivaroxaban (Xarelto), Dabigatran (Pradaxa), Edoxaban (Savaysa). Advantages: No routine monitoring, fewer drug interactions.",
    },
    warfarin: {
      name: "Warfarin (Coumadin)",
      details:
        "Traditional anticoagulant. Requires INR monitoring (target 2-3). Many drug and food interactions. Still used in patients with mechanical valves or severe renal disease.",
    },
    aspirin:
      "No longer recommended as sole therapy; insufficient stroke prevention",
  },
  underlyingCauses: [
    "Manage hypertension and heart failure",
    "Treat thyroid disorders",
    "Correct electrolyte imbalances",
    "Manage sleep apnea",
    "Lifestyle modifications: Weight loss, alcohol reduction, smoking cessation",
  ],
};

export const nursingInterventions = {
  stable: {
    title: "For Stable A-fib with Controlled Rate",
    items: [
      {
        action: "Continuous monitoring",
        detail: "Telemetry to assess rate control and detect rhythm changes",
      },
      {
        action: "Administer medications as ordered",
        detail: "Rate-control and anticoagulation medications",
      },
      {
        action: "Monitor for bleeding",
        detail:
          "If on anticoagulation - assess for signs of bleeding, monitor labs",
      },
      {
        action: "Assess symptom control",
        detail: "Evaluate effectiveness of rate control on symptoms",
      },
      {
        action: "Patient education",
        detail: "Medication compliance, stroke risk, when to seek help",
      },
      {
        action: "Fall precautions",
        detail: "Especially for elderly patients on anticoagulation",
      },
      {
        action: "Document response",
        detail: "Heart rate trends, symptoms, medication effectiveness",
      },
    ],
  },
  unstable: {
    title: "For A-fib with RVR (Rapid Ventricular Response)",
    urgent: [
      {
        condition:
          "If unstable (hypotensive, altered mental status, chest pain, acute heart failure)",
        actions: [
          "Prepare for immediate synchronized cardioversion",
          "Administer sedation as ordered",
          "Ensure defibrillator is in sync mode",
          "Initial energy: 120-200 joules biphasic",
        ],
      },
      {
        condition: "If stable",
        actions: [
          "Administer IV rate-control medications as ordered: Metoprolol 2.5-5 mg IV or Diltiazem 0.25 mg/kg IV",
          "Monitor blood pressure closely during medication administration",
          "Assess for rate control (target <100 bpm)",
        ],
      },
    ],
    general: [
      "Oxygen therapy: Maintain SpO2 >94%",
      "IV access: Establish for medication administration",
      "12-lead ECG: Confirm diagnosis and assess for ischemia",
      "Continuous monitoring: Watch for rate control and rhythm changes",
    ],
  },
};

export const cardioversionConsiderations: InfoBoxData = {
  title: "Important: Cardioversion and Stroke Risk",
  defaultColor: "#f59e0b", // Orange/Amber
  Icon: AlertTriangle,
  description: "Before elective cardioversion:",
  features: [
    "If A-fib duration <48 hours: Can cardiovert without prolonged anticoagulation (but start anticoagulation immediately after)",
    "If A-fib duration >48 hours or unknown: Must anticoagulate for 3 weeks before cardioversion OR perform TEE to rule out clot",
    "Rationale: Cardioversion can dislodge atrial thrombi, causing stroke",
  ],
};

export const patientEducation = [
  "Explain A-fib: What it is, why it occurs, potential complications",
  "Stroke risk: Emphasize importance of anticoagulation compliance",
  "Medication education: Purpose, importance, side effects, bleeding precautions",
  "Symptom recognition: When to seek immediate medical attention (stroke signs, chest pain)",
  "Lifestyle modifications: Limit alcohol/caffeine, healthy weight, stress management",
  "Follow-up care: Importance of regular cardiology appointments and INR monitoring if on warfarin",
];

export const quickReference = {
  title: "Quick Reference: Atrial Fibrillation",
  description: "",
  badges: [
    {
      label: "Irregularly Irregular",
      color: "bg-fuchsia-200 text-fuchsia-800",
    },
    { label: "No P Waves", color: "bg-slate-200 text-slate-800" },
  ],
  points: [
    "Key Complications: Stroke, Heart Failure",
    "Management: Rate/Rhythm Control + Anticoagulation",
    "Remember: Anticoagulation is critical for stroke prevention!",
  ],
};

export const nclexHighYield: InfoBoxData = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea", // Purple
  Icon: Star,
  features: [
    "Key Features: Irregularly irregular rhythm, no P waves, fibrillatory waves",
    "Major Complication: Stroke risk due to atrial blood stasis",
    "CHA₂DS₂-VASc Score: Used to assess stroke risk and need for anticoagulation",
    "Anticoagulation: Warfarin (INR 2-3) or DOACs for stroke prevention",
    "Rate vs Rhythm Control: Rate control (beta-blockers, CCBs) often preferred initially",
    "Cardioversion: If >48 hours, anticoagulate 3 weeks before or TEE first",
    "Priority Assessment: Check pulse deficit (apical vs radial), signs of decreased CO",
  ],
};
