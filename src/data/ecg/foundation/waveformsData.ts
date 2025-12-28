import { Star, Stethoscope, Activity } from "lucide-react";
import { InfoBoxData } from "@/components/shared/InfoBox";

export const pageIntro = {
  title: "ECG Waveforms & Intervals",
  description:
    "The ECG tracing represents the electrical activity of the heart over time. Understanding each component and its physiological significance is essential for accurate rhythm interpretation and clinical decision-making.",
};

export const waveformsDetails = [
  {
    title: "P Wave",
    represents: "Atrial depolarization (electrical activation of the atria)",
    characteristics: [
      "Duration: 0.06-0.12 seconds (1.5-3 small squares)",
      "Amplitude: Less than 2.5 mm in height",
      "Shape: Smooth, rounded, and upright in most leads (especially Lead II)",
      "Consistency: Should look the same from beat to beat in normal sinus rhythm",
    ],
    clinicalSignificance:
      "The P wave indicates that the SA node has fired and the atria are contracting. Abnormal P waves may suggest atrial enlargement, ectopic atrial rhythms, or atrial arrhythmias. Absent P waves are seen in atrial fibrillation and junctional rhythms.",
  },
  {
    title: "PR Interval",
    represents:
      "Time from the beginning of atrial depolarization to the beginning of ventricular depolarization; includes atrial depolarization and the delay at the AV node",
    characteristics: [
      "Duration: 0.12-0.20 seconds (3-5 small squares)",
      "Measurement: From the beginning of the P wave to the beginning of the QRS complex",
      "Consistency: Should be constant from beat to beat in normal sinus rhythm",
    ],
    clinicalSignificance:
      "The PR interval reflects AV node conduction time. A prolonged PR interval (greater than 0.20 seconds) indicates first-degree AV block. Variable PR intervals may indicate second-degree AV block. The PR interval is not measurable in atrial fibrillation or when P waves are absent.",
  },
  {
    title: "QRS Complex",
    represents:
      "Ventricular depolarization (electrical activation of the ventricles)",
    characteristics: [
      "Duration: 0.06-0.12 seconds (1.5-3 small squares)",
      "Components:",
      "Q wave: First negative deflection (not always present)",
      "R wave: First positive deflection",
      "S wave: Negative deflection following the R wave",
      "Amplitude: Varies by lead; typically 5-30 mm in limb leads",
    ],
    clinicalSignificance:
      "The QRS complex indicates ventricular contraction. A narrow QRS (less than 0.12 seconds) suggests normal ventricular conduction originating from above the ventricles. A wide QRS (greater than 0.12 seconds) may indicate bundle branch block, ventricular rhythms, or aberrant conduction. The QRS morphology helps identify the origin of the rhythm.",
  },
  {
    title: "ST Segment",
    represents:
      "Early ventricular repolarization; the period between ventricular depolarization and repolarization",
    characteristics: [
      "Position: Should be at the baseline (isoelectric)",
      "Measurement: From the end of the QRS complex (J point) to the beginning of the T wave",
      "Acceptable variation: Up to 1 mm elevation or depression in limb leads; up to 2 mm in precordial leads",
    ],
    clinicalSignificance:
      "ST segment changes are critical indicators of myocardial ischemia or infarction. ST elevation suggests acute myocardial injury (STEMI), while ST depression indicates ischemia. Other causes of ST changes include pericarditis, ventricular hypertrophy, and electrolyte imbalances. Always correlate ST changes with patient symptoms and clinical presentation.",
  },
  {
    title: "T Wave",
    represents:
      "Ventricular repolarization (electrical recovery of the ventricles)",
    characteristics: [
      "Shape: Asymmetrical, rounded, and slightly asymmetric",
      "Direction: Usually upright in most leads (same direction as QRS)",
      "Amplitude: Less than 5 mm in limb leads; less than 10 mm in precordial leads",
    ],
    clinicalSignificance:
      "T wave changes can indicate ischemia, electrolyte imbalances (especially potassium), or ventricular strain. Inverted T waves may suggest ischemia or previous infarction. Tall, peaked T waves are associated with hyperkalemia. Flattened T waves may indicate hypokalemia or ischemia.",
  },
  {
    title: "QT Interval",
    represents: "Total time for ventricular depolarization and repolarization",
    characteristics: [
      "Duration: Varies with heart rate; typically 0.36-0.44 seconds at normal heart rates",
      "Measurement: From the beginning of the QRS complex to the end of the T wave",
      "Correction: Must be corrected for heart rate (QTc) using Bazett's formula",
      "Normal QTc: Less than 0.44 seconds in men; less than 0.46 seconds in women",
    ],
    clinicalSignificance:
      "Prolonged QT interval increases the risk of torsades de pointes, a life-threatening ventricular arrhythmia. Many medications prolong the QT interval. Short QT intervals are less common but can also predispose to arrhythmias. Always monitor QT interval when administering QT-prolonging medications.",
  },
];

export const summaryTableData = [
  {
    component: "P Wave",
    normalDuration: "0.06-0.12 sec",
    smallSquares: "1.5-3 squares",
    represents: "Atrial depolarization",
  },
  {
    component: "PR Interval",
    normalDuration: "0.12-0.20 sec",
    smallSquares: "3-5 squares",
    represents: "Atrial depolarization + AV node delay",
  },
  {
    component: "QRS Complex",
    normalDuration: "0.06-0.12 sec",
    smallSquares: "1.5-3 squares",
    represents: "Ventricular depolarization",
  },
  {
    component: "QT Interval",
    normalDuration: "0.36-0.44 sec",
    smallSquares: "9-11 squares",
    represents: "Ventricular depolarization + repolarization",
  },
];

export const nursingAssessmentTips: InfoBoxData = {
  title: "Nursing Assessment Tips",
  defaultColor: "#3b82f6",
  Icon: Stethoscope,
  features: [
    "Systematic approach: Always assess waveforms and intervals in the same order",
    "Use calipers or paper: Measure intervals accurately for precise interpretation",
    "Compare to baseline: Look for changes from the patient's previous ECGs",
    "Consider clinical context: Correlate ECG findings with patient symptoms and vital signs",
    "Document findings: Record any abnormalities and notify the provider as appropriate",
    "Monitor trends: Serial ECGs help identify evolving changes, especially in ACS",
  ],
};

export const nclexHighYieldPoints: InfoBoxData = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea",
  Icon: Star,
  features: [
    "P Wave: Atrial depolarization; absent in AFib, flutter waves in atrial flutter",
    "PR Interval (0.12-0.20 sec): Prolonged = heart block; short = WPW syndrome",
    "QRS Complex (0.06-0.10 sec): Wide QRS (>0.12) = ventricular origin or bundle branch block",
    "ST Segment: Elevation = STEMI (acute MI); depression = ischemia or NSTEMI",
    "T Wave: Repolarization; peaked = hyperkalemia; inverted = ischemia",
    "QT Interval: Prolonged QT increases risk of Torsades de Pointes (lethal arrhythmia)",
    "Critical Measurements: Know normal values - tested frequently on NCLEX",
  ],
};

export const pacemakerHighYieldPoints: InfoBoxData = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea",
  Icon: Star,
  features: [
    "Pacemaker Spike: Vertical line before P wave (atrial pacing) or QRS (ventricular pacing)",
    "Capture: Pacemaker spike followed by appropriate waveform (P or QRS) - this is normal",
    "Failure to Capture: Spike present but no P or QRS follows - serious malfunction",
    "Failure to Pace: No spike when expected - battery failure or lead problem",
    "Failure to Sense: Pacemaker fires when it shouldn't - can cause R-on-T and VF",
    "Pacemaker Codes: First letter = chamber paced, Second = chamber sensed, Third = response",
    "Common Types: VVI (ventricle paced/sensed/inhibited), DDD (dual chamber)",
    "Magnet Application: Placing magnet over pacemaker converts to asynchronous mode (for testing)",
    "Patient Teaching: Avoid MRI (unless MRI-safe), carry pacemaker ID card, monitor pulse daily",
    "Electromagnetic Interference: Avoid arc welding, large magnets, some medical equipment",
  ],
};
