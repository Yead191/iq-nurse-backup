import {
  CheckCircle,
  AlertTriangle,
  Stethoscope,
  Info,
  Star,
  Zap,
} from "lucide-react";
import { InfoBoxData } from "@/components/shared/InfoBox";

export const pageIntro = {
  title: "Normal Sinus Rhythm (NSR)",
  description:
    "Normal Sinus Rhythm is the baseline cardiac rhythm against which all other rhythms are compared. It represents the heart functioning optimally under the control of the sinoatrial (SA) node, with normal conduction through the entire cardiac conduction system.",
};

export const definingCharacteristics = [
  { parameter: "Rate", criteria: "60-100 beats per minute" },
  {
    parameter: "Rhythm",
    criteria: "Regular (R-R intervals vary by less than 0.12 seconds)",
  },
  {
    parameter: "P Waves",
    criteria: "Present before every QRS; uniform in shape; upright in Lead II",
  },
  {
    parameter: "PR Interval",
    criteria: "0.12-0.20 seconds; constant from beat to beat",
  },
  {
    parameter: "QRS Complex",
    criteria: "0.06-0.12 seconds; follows every P wave",
  },
  {
    parameter: "P:QRS Ratio",
    criteria: "1:1 (one P wave for every QRS complex)",
  },
];

export const physiologicalSignificance = [
  "The SA node is functioning as the primary pacemaker",
  "Electrical impulses are conducting normally through the atria",
  "The AV node is conducting impulses appropriately to the ventricles",
  "Ventricular depolarization is occurring normally",
  "The heart rate is appropriate for the body's metabolic needs at rest",
  "There is coordinated atrial and ventricular contraction",
];

export const clinicalSignificance: InfoBoxData = {
  title: "Clinical Significance",
  defaultColor: "#22c55e", // Green
  Icon: CheckCircle,
  description:
    "Normal Sinus Rhythm is the desired cardiac rhythm for most patients. It indicates proper cardiac function and adequate perfusion. However, always assess the patient clinically - a patient can have NSR on the monitor but still be symptomatic from other conditions (hypotension, respiratory distress, etc.).",
  features: [],
};

export const variationsOfNormal = {
  sinusArrhythmia:
    "A normal variant, especially common in young, healthy individuals. The heart rate increases with inspiration and decreases with expiration due to changes in vagal tone. The rhythm is slightly irregular, but all other NSR criteria are met. This is considered a benign finding and requires no treatment.",
  ageRelated: [
    {
      label: "Infants and children",
      text: "Normal heart rates are higher (infants: 100-160 bpm; children: 70-120 bpm)",
    },
    {
      label: "Athletes",
      text: "May have resting heart rates below 60 bpm due to increased vagal tone (athletic bradycardia)",
    },
    {
      label: "Elderly",
      text: "May have slightly slower resting heart rates and decreased heart rate variability",
    },
  ],
};

export const nursingAssessment: InfoBoxData = {
  title: "Nursing Assessment for NSR",
  defaultColor: "#e11d48", // Rose/Red
  Icon: Stethoscope,
  features: [
    "Verify rhythm: Confirm all NSR criteria are met using a rhythm strip",
    "Calculate heart rate: Use the 6-second method or 1500 method for accuracy",
    "Assess patient status: Vital signs, level of consciousness, skin color and temperature",
    "Evaluate symptoms: Ask about chest pain, shortness of breath, dizziness, or palpitations",
    "Check perfusion: Assess peripheral pulses, capillary refill, and urine output",
    "Review medications: Note any cardiac medications that may affect heart rate or rhythm",
    "Document findings: Record rhythm interpretation and patient assessment",
  ],
};

export const monitorClosely: InfoBoxData = {
  title: "Monitor Closely If:",
  defaultColor: "#f59e0b", // Orange/Amber
  Icon: AlertTriangle,
  features: [
    "New onset NSR: Patient was previously in an abnormal rhythm (e.g., atrial fibrillation) and converted to NSR - monitor for recurrence",
    "Post-cardioversion: After electrical or chemical cardioversion, monitor for rhythm stability",
    "Symptomatic patient: Patient has NSR but reports chest pain, dyspnea, or other concerning symptoms",
    "Hemodynamic instability: NSR present but blood pressure is low or patient shows signs of poor perfusion",
    "Rate at extremes: Heart rate consistently at 60 or 100 bpm (borderline bradycardia or tachycardia)",
    "Post-cardiac event: Recent MI, cardiac surgery, or other cardiac intervention",
  ],
};

export const patientEducation = [
  "Explain that their heart rhythm is normal and functioning well",
  "Discuss the importance of maintaining heart health through diet, exercise, and medication compliance",
  "Teach recognition of symptoms that should prompt seeking medical attention",
  "Emphasize the importance of follow-up appointments and monitoring",
  "Address any concerns or questions about their cardiac health",
];

export const quickReference: InfoBoxData = {
  title: "Quick Reference: NSR Criteria",
  defaultColor: "#3b82f6", // Blue
  Icon: Info, // Or Zap maybe? Infobox uses generic Icon/LucideIcon
  description: 'Remember the "5 P\'s" of NSR:',
  features: [
    "1. Pace: 60-100 bpm",
    "2. Pattern: Regular rhythm",
    "3. P waves: Present and upright before each QRS",
    "4. PR interval: 0.12-0.20 seconds, constant",
    "5. Proportion: 1:1 P:QRS ratio",
  ],
};

export const nclexHighYield: InfoBoxData = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea", // Purple
  Icon: Star,
  features: [
    "NSR Criteria: Rate 60-100, regular rhythm, P before every QRS, PR 0.12-0.20, QRS <0.12",
    "Clinical Significance: NSR indicates normal cardiac function - no intervention needed",
    "Assessment Priority: Even with NSR, assess patient's clinical status (BP, symptoms, perfusion)",
    "Documentation: Always document rhythm interpretation and patient's clinical response",
    "Patient Teaching: NSR is normal; explain what the monitor shows to reduce anxiety",
  ],
};
