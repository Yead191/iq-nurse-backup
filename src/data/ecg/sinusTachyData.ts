import {
  AlertTriangle,
  Stethoscope,
  Activity,
  CheckCircle,
  Star,
  Info,
  Siren,
} from "lucide-react";
import { InfoBoxData } from "@/components/shared/InfoBox";

export const pageIntro = {
  title: "Sinus Tachycardia",
  description:
    "Sinus Tachycardia is a normal physiological response to increased metabolic demands or stress. The SA node fires at a rate greater than 100 beats per minute, but all other characteristics of normal sinus rhythm are maintained. This rhythm is typically a symptom of an underlying condition rather than a primary cardiac problem.",
};

export const definingCharacteristics = [
  {
    parameter: "Rate",
    criteria:
      "Greater than 100 beats per minute (typically 100-180 bpm in adults)",
  },
  { parameter: "Rhythm", criteria: "Regular" },
  {
    parameter: "P Waves",
    criteria:
      "Present before every QRS; uniform; upright in Lead II; may be superimposed on preceding T wave at very fast rates",
  },
  { parameter: "PR Interval", criteria: "0.12-0.20 seconds; constant" },
  {
    parameter: "QRS Complex",
    criteria: "0.06-0.12 seconds; normal morphology",
  },
  { parameter: "P:QRS Ratio", criteria: "1:1" },
];

export const commonCauses = {
  physiological: [
    "Exercise or physical activity: Increased oxygen demand",
    "Emotional stress or anxiety: Sympathetic nervous system activation",
    "Pain: Stress response to acute or chronic pain",
    "Fever: Heart rate increases approximately 10 bpm for each degree Celsius above normal",
    "Pregnancy: Increased blood volume and metabolic demands",
  ],
  pathological: [
    "Hypovolemia/Dehydration: Compensatory mechanism to maintain cardiac output",
    "Hypoxia: Increased heart rate to improve oxygen delivery",
    "Anemia: Compensation for reduced oxygen-carrying capacity",
    "Heart failure: Compensatory response to decreased cardiac output",
    "Pulmonary embolism: Hypoxia and increased right heart strain",
    "Hyperthyroidism: Increased metabolic rate",
    "Sepsis/Infection: Systemic inflammatory response",
    "Shock (any type): Compensatory mechanism",
    "Myocardial infarction: Sympathetic response to cardiac injury",
  ],
  medication: [
    "Stimulants: Caffeine, nicotine, cocaine, amphetamines",
    "Medications: Atropine, epinephrine, dopamine, albuterol, theophylline",
    "Withdrawal: Beta-blocker or clonidine withdrawal",
  ],
};

export const clinicalSignificance: InfoBoxData = {
  title: "Clinical Significance",
  defaultColor: "#f59e0b", // Orange/Amber
  Icon: AlertTriangle,
  description:
    "Sinus tachycardia is a symptom, not a disease. The underlying cause must be identified and treated. While the rhythm itself is rarely dangerous, persistent tachycardia can lead to decreased cardiac output, increased myocardial oxygen demand, and patient discomfort. In patients with coronary artery disease, prolonged tachycardia can precipitate ischemia or infarction.",
  features: [],
};

export const signsAndSymptoms = [
  "Palpitations or awareness of rapid heartbeat",
  "Chest discomfort or pressure",
  "Shortness of breath or dyspnea",
  "Dizziness or lightheadedness",
  "Fatigue or weakness",
  "Anxiety or restlessness",
  "Symptoms related to underlying cause (fever, pain, etc.)",
];

export const nursingAssessment: InfoBoxData = {
  title: "Comprehensive Assessment",
  defaultColor: "#e11d48", // Rose/Red
  Icon: Stethoscope,
  features: [
    "Vital signs: Temperature, blood pressure, respiratory rate, oxygen saturation",
    "Cardiac assessment: Heart rate, rhythm, heart sounds, peripheral pulses",
    "Respiratory assessment: Breath sounds, work of breathing, oxygen requirements",
    "Volume status: Skin turgor, mucous membranes, urine output, daily weights",
    "Pain assessment: Location, intensity, quality, duration",
    "Medication review: Recent medication changes, compliance, potential drug interactions",
    "Recent history: Fluid intake, activity level, recent illness or surgery",
    "Laboratory values: CBC (anemia), electrolytes, thyroid function, cardiac enzymes if indicated",
  ],
};

export const nursingInterventions = {
  priority: [
    {
      action: "Identify and treat underlying cause",
      detail: "This is the primary intervention",
      subItems: [
        "Administer antipyretics for fever",
        "Provide fluid resuscitation for hypovolemia",
        "Administer oxygen for hypoxia",
        "Provide pain management",
        "Treat infection with antibiotics",
      ],
    },
    {
      action: "Monitor continuously",
      detail: "Telemetry monitoring to track heart rate trends",
    },
    {
      action: "Assess hemodynamic stability",
      detail: "Blood pressure, perfusion, mental status",
    },
    {
      action: "Reduce anxiety",
      detail: "Provide calm environment, reassurance, relaxation techniques",
    },
    {
      action: "Limit stimulants",
      detail: "Restrict caffeine, ensure adequate rest",
    },
    {
      action: "Promote comfort",
      detail:
        "Position for optimal breathing, maintain comfortable temperature",
    },
    {
      action: "Document and communicate",
      detail: "Report significant changes to provider",
    },
  ],
  medical: [
    "Fluid resuscitation: IV fluids for hypovolemia or dehydration",
    "Oxygen therapy: Supplemental oxygen for hypoxia",
    "Blood transfusion: For significant anemia",
    "Antibiotics: For infection or sepsis",
    "Beta-blockers: Rarely used; only if tachycardia is causing ischemia and underlying cause is being addressed",
    "Anxiolytics: For anxiety-related tachycardia",
  ],
  escalate: {
    title: "When to Escalate Care",
    defaultColor: "#ef4444", // Red (Danger)
    Icon: Siren, // Or AlertOctagon
    description: "Notify the healthcare provider immediately if:",
    features: [
      "Heart rate exceeds 150 bpm at rest",
      "Patient develops chest pain or signs of cardiac ischemia",
      "Blood pressure becomes unstable or drops significantly",
      "Patient shows signs of decreased perfusion (altered mental status, decreased urine output, cool extremities)",
      "Tachycardia persists despite treatment of underlying cause",
      "Patient develops new symptoms or clinical deterioration",
      "Rhythm changes from sinus tachycardia to another arrhythmia",
    ],
  },
};

export const patientEducation = [
  "Explain that the rapid heart rate is the body's response to an underlying condition",
  "Teach importance of treating the underlying cause",
  "Discuss lifestyle modifications: adequate hydration, stress management, limiting caffeine",
  "Instruct on when to seek medical attention (persistent palpitations, chest pain, dizziness)",
  "Emphasize medication compliance if prescribed",
  "Teach pulse self-monitoring if appropriate",
];

export const quickReference = {
  title: "Quick Reference: Sinus Tachycardia",
  description: "Key Points to Remember:",
  points: [
    { label: "Rate", value: ">100 bpm", color: "bg-cyan-500" },
    { label: "Rhythm", value: "Regular", color: "bg-pink-400" },
    { label: "Usually Stable", value: "", color: "bg-emerald-400" },
  ],
  features: [
    "Treatment: Address underlying cause",
    "Priority: Identify and treat the cause, not the rhythm",
  ],
};

export const nclexHighYield: InfoBoxData = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea", // Purple
  Icon: Star,
  features: [
    "Treat the Cause, Not the Rate: Sinus tachycardia is a symptom, not a primary problem",
    "Common Causes: Pain, fever, hypovolemia, hypoxia, anxiety, medications (remember: PAIN)",
    "Priority Nursing Actions: Assess for underlying cause; treat pain, give fluids, provide oxygen as needed",
    "When to Worry: Persistent tachycardia despite treatment may indicate serious condition (sepsis, PE, MI)",
    "Medication Caution: Do NOT give beta-blockers for compensatory tachycardia (e.g., hypovolemia)",
    "Patient Assessment: Check vital signs, oxygen saturation, pain level, and signs of shock",
  ],
};
