import {
  Activity,
  CheckCircle,
  AlertTriangle,
  Stethoscope,
  Info,
  Star,
  Siren,
  Zap,
} from "lucide-react";
import { InfoBoxData } from "@/components/shared/InfoBox";

// --- SINUS BRADYCARDIA DATA ---

export const bradyPageIntro = {
  title: "Sinus Bradycardia",
  description:
    "Sinus Bradycardia is a rhythm where the SA node fires at a rate less than 60 beats per minute. It may be a normal finding in well-conditioned athletes or during sleep, but can also be a sign of SA node dysfunction or reaction to medication.",
};

export const bradyAssessment = {
  systematic: [
    "Vital signs: Heart rate, blood pressure, respiratory rate, oxygen saturation, temperature",
    "Hemodynamic status: Signs of adequate vs. inadequate perfusion",
    "Neurological status: Level of consciousness, orientation, pupil response",
    "Cardiac assessment: Heart sounds, peripheral pulses, capillary refill",
    "Respiratory assessment: Breath sounds, work of breathing, signs of pulmonary congestion",
    "Skin assessment: Color, temperature, moisture",
    "Urine output: Adequate (>0.5 mL/kg/hr) vs. decreased",
    "Symptom assessment: Chest pain, dizziness, fatigue, dyspnea",
    "Medication review: Recent doses of rate-controlling medications",
    "12-lead ECG: To rule out MI or heart block",
  ],
};

export const bradyInterventions = {
  asymptomatic: [
    "Continuous monitoring: Telemetry to detect changes in rate or rhythm",
    "Assess for symptoms: Regularly evaluate for development of symptoms",
    "Review medications: Hold or adjust rate-controlling medications as ordered",
    "Identify underlying cause: Investigate and address reversible causes",
    "Document findings: Record heart rate trends and patient tolerance",
    "Patient education: Teach to report symptoms immediately",
  ],
  symptomatic: {
    title: "Immediate Interventions (ACLS Protocol)",
    steps: [
      {
        text: "Maintain airway and breathing: Administer oxygen to maintain SpO2 >94%",
      },
      { text: "Establish IV access: For medication administration" },
      {
        text: "Obtain 12-lead ECG: Identify underlying rhythm and rule out MI or heart block",
      },
      {
        text: "Atropine 0.5 mg IV: First-line medication for symptomatic bradycardia",
        sub: [
          "May repeat every 3-5 minutes",
          "Maximum total dose: 3 mg",
          "Increases heart rate by blocking vagal effects on SA node",
        ],
      },
      {
        text: "If atropine ineffective, consider:",
        sub: [
          "Transcutaneous pacing: Temporary external pacing",
          "Dopamine infusion: 2-10 mcg/kg/min",
          "Epinephrine infusion: 2-10 mcg/min",
        ],
      },
      {
        text: "Prepare for transvenous pacing: If transcutaneous pacing is ineffective or prolonged pacing is needed",
      },
      {
        text: "Treat underlying cause: Address MI, electrolyte imbalances, medication toxicity",
      },
      {
        text: "Notify provider immediately: For further orders and possible ICU transfer",
      },
    ],
  },
};

export const bradyPacing = {
  title: "Transcutaneous Pacing",
  description:
    "When pharmacological interventions are ineffective or contraindicated:",
  points: [
    "Indications: Symptomatic bradycardia unresponsive to atropine, high-degree AV blocks, bradycardia with ventricular escape rhythms",
    "Procedure: Apply pacing pads (anterior-posterior or anterior-lateral), set rate (typically 60-80 bpm), increase output until electrical capture is achieved",
    "Nursing considerations: Provide analgesia/sedation (pacing is uncomfortable), verify mechanical capture (check pulse), monitor for skin burns, prepare for transvenous pacing if needed long-term",
  ],
};

export const bradyConsiderations: InfoBoxData = {
  title: "Important Considerations",
  defaultColor: "#f59e0b", // Orange
  Icon: AlertTriangle,
  features: [
    "Atropine may be ineffective in: Heart transplant patients (denervated heart), high-degree AV blocks, ventricular escape rhythms",
    "Avoid atropine in: Hypothermia (may precipitate ventricular fibrillation)",
    "Do not delay pacing: If patient is severely symptomatic or unstable, initiate pacing while preparing medications",
    "Assess for MI: Bradycardia may be a sign of inferior wall MI affecting the SA node",
  ],
};

export const bradyManagement = [
  "Permanent pacemaker: Definitive treatment for chronic symptomatic bradycardia or sick sinus syndrome",
  "Medication adjustment: Discontinue or reduce doses of rate-controlling medications if possible",
  "Treat underlying conditions: Thyroid replacement for hypothyroidism, management of sleep apnea",
  "Regular follow-up: Cardiology consultation for ongoing management",
];

export const bradyEducation = [
  "Explain the meaning of bradycardia and its potential causes",
  "Teach symptom recognition: dizziness, lightheadedness, fatigue, syncope",
  "Instruct to report symptoms immediately",
  "Discuss medication compliance and importance of not abruptly stopping cardiac medications",
  "If pacemaker is placed, provide pacemaker education and follow-up instructions",
  "Teach pulse self-monitoring if appropriate",
  "Emphasize importance of follow-up appointments",
];

export const bradyQuickRef = {
  title: "Quick Reference: Sinus Bradycardia",
  description: "Key Decision Point: Is the patient symptomatic?",
  points: [
    { label: "Rate", value: "<60 bpm", color: "bg-cyan-500" },
    { label: "Rhythm", value: "Regular", color: "bg-pink-400" },
  ],
  features: [
    "Asymptomatic: Monitor only",
    "Symptomatic: Atropine → Pacing → Pressors",
    "Remember: Treat the patient, not the monitor!",
  ],
};

export const bradyNclex: InfoBoxData = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea", // Purple
  Icon: Star,
  features: [
    "Symptomatic vs Asymptomatic: Treatment depends on symptoms, not just heart rate",
    "Unstable Signs: Hypotension, altered mental status, chest pain, SOB, signs of shock",
    "First-Line Treatment: Atropine 0.5-1 mg IV push for symptomatic bradycardia",
    "Atropine Caution: May not work in heart transplant patients (denervated heart)",
    "Pacing Indications: If atropine fails or bradycardia is severe, prepare for transcutaneous pacing",
    "Medication Review: Check for beta-blockers, calcium channel blockers, digoxin - may need to hold",
    "Athletic Patients: Bradycardia may be normal in well-conditioned athletes if asymptomatic",
  ],
};

// --- SINUS ARRHYTHMIA DATA ---

export const arrhythmiaIntro = {
  title: "Sinus Arrhythmia",
  description:
    "Sinus Arrhythmia is a variation of normal sinus rhythm where the heart rate varies with respiration.",
};

export const arrhythmiaCharacteristics = [
  { parameter: "Rate", criteria: "60-100 bpm (varies with respiration)" },
  {
    parameter: "Rhythm",
    criteria: "Irregular - varies with respiratory cycle",
  },
  {
    parameter: "P Waves",
    criteria: "Normal, upright in lead II, one before each QRS",
  },
  { parameter: "PR Interval", criteria: "0.12-0.20 seconds, constant" },
  { parameter: "QRS Complex", criteria: "<0.12 seconds, normal morphology" },
  {
    parameter: "Pattern",
    criteria:
      "Heart rate increases with inspiration, decreases with expiration",
  },
];

export const arrhythmiaClinical: InfoBoxData = {
  title: "Clinical Significance",
  defaultColor: "#22c55e", // Green
  Icon: CheckCircle,
  features: [],
  description:
    "Benign Variation: Sinus arrhythmia is a normal physiological finding, especially common in children, young adults, and athletes. It reflects healthy autonomic nervous system function and vagal tone.\n\nRespiratory Sinus Arrhythmia: The most common type, where heart rate increases during inspiration (decreased vagal tone) and decreases during expiration (increased vagal tone). This is a sign of good cardiovascular health.\n\nNon-Respiratory Sinus Arrhythmia: Less common, not related to breathing. May be seen with digitalis toxicity or increased intracranial pressure.",
};

export const arrhythmiaAssessment: InfoBoxData = {
  title: "Nursing Assessment & Interventions",
  defaultColor: "#3b82f6", // Blue
  Icon: Stethoscope,
  features: [
    "Recognition: Identify by measuring R-R intervals - will vary by >0.12 seconds (3 small boxes)",
    "Respiratory Correlation: Ask patient to hold breath - if rhythm becomes regular, confirms respiratory sinus arrhythmia",
    "No Treatment Needed: This is a normal, benign finding requiring no intervention",
    "Patient Reassurance: Explain this is normal and actually indicates good heart health",
    "Documentation: Note 'sinus arrhythmia' and whether respiratory or non-respiratory",
    "Monitor Context: If non-respiratory, assess for medications (digoxin) or neurological issues",
  ],
};

export const arrhythmiaNclex: InfoBoxData = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea", // Purple
  Icon: Star,
  features: [
    "Normal Finding: Sinus arrhythmia is NORMAL, especially in young, healthy individuals",
    "Key Recognition: Irregular rhythm but all other parameters normal (P waves, PR, QRS)",
    "Respiratory Variation: Rate increases with inspiration, decreases with expiration",
    "No Treatment Required: This is not a pathological arrhythmia - reassure patient",
    "Common in Athletes: Sign of good vagal tone and cardiovascular fitness",
    "Differentiate from AFib: Sinus arrhythmia has normal P waves; AFib has no P waves",
    "NCLEX Strategy: If question describes irregular rhythm with normal P waves in young patient → likely sinus arrhythmia (benign)",
  ],
};

// --- SINUS ARREST DATA ---

export const arrestIntro = {
  title: "Sinus Arrest (Sinus Pause)",
  description: "Prolonged pause when SA node fails to fire.",
};

export const arrestCharacteristics = [
  { parameter: "Rate", criteria: "Usually 60-100 bpm when present" },
  { parameter: "Rhythm", criteria: "Irregular due to pause" },
  {
    parameter: "P Waves",
    criteria: "Normal when present; absent during pause",
  },
  {
    parameter: "Pause Duration",
    criteria: "Variable - can be several seconds",
  },
  {
    parameter: "Pause Pattern",
    criteria: "NOT a multiple of the basic P-P interval (vs. sinus block)",
  },
  {
    parameter: "Escape Beats",
    criteria: "May see junctional or ventricular escape beats if pause is long",
  },
];

export const arrestSignificance: InfoBoxData = {
  title: "Clinical Significance",
  defaultColor: "#f59e0b", // Orange
  Icon: AlertTriangle,
  description:
    "SA Node Dysfunction: Sinus arrest indicates the SA node temporarily fails to generate an impulse. The severity depends on the duration and frequency of pauses.",
  features: [
    "Common Causes: Increased vagal tone (carotid sinus massage, vomiting, straining), Medications (beta-blockers, CCBs, digoxin), Sick sinus syndrome, MI, Hypoxia/Hyperkalemia",
    "Symptoms: Brief pauses may be asymptomatic. Longer pauses can cause dizziness, syncope, or cardiac arrest if no escape rhythm emerges.",
  ],
};

export const arrestAssessment: InfoBoxData = {
  title: "Nursing Assessment & Interventions",
  defaultColor: "#4A90C9", // Blue
  Icon: Stethoscope,
  features: [
    "Assess Symptoms: Dizziness, lightheadedness, syncope, near-syncope episodes",
    "Monitor Pause Duration: Pauses >3 seconds are clinically significant",
    "Check Vital Signs: Blood pressure, level of consciousness during and after pauses",
    "Review Medications: Hold or reduce AV-blocking drugs if causing symptomatic pauses",
    "Atropine for Symptomatic: 0.5-1 mg IV if patient symptomatic with bradycardia",
    "Pacing Preparation: Have transcutaneous pacing ready for prolonged or frequent pauses",
    "Identify Triggers: Assess for vagal stimulation (vomiting, bearing down, coughing)",
    "Continuous Monitoring: Watch for progression to more serious conduction problems",
    "Notify Provider: Report symptomatic pauses or pauses >3 seconds immediately",
  ],
};

export const arrestNclex: InfoBoxData = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea",
  Icon: Star,
  features: [
    "SA Node Failure: Sinus arrest = SA node temporarily stops firing (no impulse generated)",
    "Key Recognition: Sudden pause in rhythm with flat baseline, then rhythm resumes",
    "Pause Measurement: NOT a multiple of normal P-P interval (this differentiates from sinus block)",
    "Symptomatic Treatment: If patient symptomatic → atropine, pacing, treat underlying cause",
    "Medication Review Critical: Check for beta-blockers, CCBs, digoxin - may need to hold",
    "Escape Rhythms: Long pauses may trigger junctional or ventricular escape beats (protective mechanism)",
    "Sick Sinus Syndrome: Recurrent sinus arrest may indicate need for permanent pacemaker",
    "Priority Assessment: Check patient's symptoms and hemodynamic stability during pauses",
    "NCLEX Strategy: Symptomatic sinus arrest → atropine first, then pacing if needed",
  ],
};
