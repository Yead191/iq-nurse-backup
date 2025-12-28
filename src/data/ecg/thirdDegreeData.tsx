import { Siren, Star, TriangleAlert } from "lucide-react";

export const thirdDegreeIntro = {
  title: "Third-Degree AV Block (Complete Heart Block)",
  description:
    "Third-degree AV block, also called complete heart block, occurs when no atrial impulses are conducted to the ventricles. The atria and ventricles beat independently of each other (AV dissociation). This is a serious, potentially life-threatening condition that usually requires permanent pacemaker implantation.",
};

export const definingCharacteristics = [
  {
    parameter: "Atrial Rate",
    criteria: "Normal (60-100 bpm) - SA node firing normally",
  },
  {
    parameter: "Ventricular Rate",
    criteria: "Slow (20-60 bpm) - depends on escape pacemaker location",
  },
  {
    parameter: "P Waves",
    criteria: "Present, regular, normal morphology",
  },
  {
    parameter: "QRS Complex",
    criteria:
      "Regular; narrow if junctional escape, wide if ventricular escape",
  },
  {
    parameter: "PR Interval",
    criteria:
      'Variable and no relationship - P waves "march through" QRS complexes',
    isHighlight: true,
  },
  {
    parameter: "AV Dissociation",
    criteria: "Complete - atria and ventricles beat independently",
  },
];

export const escapePacemaker = [
  {
    location: "Junctional Escape (AV node)",
    features: [
      "Rate: 40-60 bpm",
      "QRS: Narrow (<0.12 seconds)",
      "More reliable, better prognosis",
    ],
  },
  {
    location: "Ventricular Escape (Purkinje fibers)",
    features: [
      "Rate: 20-40 bpm",
      "QRS: Wide (>0.12 seconds)",
      "Less reliable, higher risk of asystole",
    ],
  },
];

export const commonCauses = [
  {
    cause: "Acute myocardial infarction",
    detail: "Especially inferior or anterior MI",
  },
  {
    cause: "Degenerative disease",
    detail: "Aging, fibrosis of conduction system",
  },
  {
    cause: "Medications",
    detail:
      "Excessive beta-blockers, calcium channel blockers, digoxin toxicity",
  },
  {
    cause: "Cardiac surgery",
    detail: "Valve replacement, septal defect repair",
  },
  { cause: "Myocarditis", detail: "Lyme disease, viral infections" },
  { cause: "Congenital", detail: "Present from birth" },
  { cause: "Hyperkalemia", detail: "Severe electrolyte imbalance" },
  { cause: "Infiltrative diseases", detail: "Sarcoidosis, amyloidosis" },
];

export const lifeThreateningEmergency = {
  title: "Life-Threatening Emergency",
  description: "Complete heart block is a serious condition:",
  defaultColor: "#c0392b",
  Icon: Siren,
  features: [
    "Severely decreased cardiac output: Slow ventricular rate compromises perfusion",
    "Risk of asystole: Escape pacemaker can fail at any time",
    "Syncope (Stokes-Adams attacks): Sudden loss of consciousness from inadequate cerebral perfusion",
    "Heart failure: Chronic low cardiac output",
    "Sudden cardiac death: If escape pacemaker fails",
    "Requires immediate intervention: Temporary pacing, then permanent pacemaker",
  ],
};

export const signsAndSymptoms = [
  { sign: "Severe bradycardia", detail: "Heart rate 20-60 bpm" },
  {
    sign: "Hypotension",
    detail: "Low blood pressure from decreased cardiac output",
  },
  { sign: "Syncope or near-syncope", detail: "Fainting or dizziness" },
  { sign: "Fatigue and weakness", detail: "Profound exhaustion" },
  { sign: "Dyspnea", detail: "Shortness of breath, especially with exertion" },
  { sign: "Chest pain", detail: "From decreased coronary perfusion" },
  {
    sign: "Confusion or altered mental status",
    detail: "Decreased cerebral perfusion",
  },
  {
    sign: "Heart failure symptoms",
    detail: "Pulmonary edema, peripheral edema",
  },
  {
    sign: "Cannon A waves",
    detail:
      "Visible jugular venous pulsations when atria contract against closed tricuspid valve",
  },
];

export const nursingAssessment = [
  {
    action: "Identify complete AV dissociation",
    detail: "P waves and QRS complexes independent",
  },
  {
    action: "Count atrial and ventricular rates separately",
    detail: "Atrial rate faster than ventricular",
  },
  {
    action: "Assess QRS width",
    detail: "Narrow (junctional) vs. wide (ventricular) escape",
  },
  {
    action: "Evaluate hemodynamic status",
    detail: "Blood pressure, perfusion, mental status",
  },
  {
    action: "Check for symptoms",
    detail: "Syncope, dizziness, chest pain, dyspnea",
  },
  {
    action: "Assess escape rhythm reliability",
    detail: "Is ventricular rate adequate?",
  },
  { action: "Review medications", detail: "Recent doses of AV node blockers" },
  {
    action: "Obtain 12-lead ECG",
    detail: "Assess for MI or other abnormalities",
  },
];

export const management = {
  immediate: {
    unstable: [
      {
        action: "Transcutaneous pacing",
        detail: "Apply pacing pads immediately",
      },
      { action: "Set rate", detail: "60-80 bpm" },
      {
        action: "Increase output",
        detail: "Until electrical and mechanical capture achieved",
      },
      {
        action: "Provide analgesia/sedation",
        detail: "(pacing is uncomfortable)",
      },
    ],
    stable: [
      {
        action: "Atropine 0.5 mg IV",
        detail: "May try, but often ineffective (block is below AV node)",
      },
      {
        action: "Dopamine or epinephrine infusion",
        detail: "If atropine ineffective",
      },
      {
        action: "Prepare for transvenous pacing",
        detail: "More definitive temporary solution",
      },
    ],
    general: [
      { action: "Oxygen", detail: "Maintain SpO2 >94%" },
      { action: "IV access", detail: "For medications" },
      { action: "Continuous monitoring", detail: "Watch for asystole" },
      {
        action: "Notify provider immediately",
        detail: "Cardiology consult for pacemaker",
      },
    ],
  },
  definitive: [
    {
      title: "Temporary transvenous pacing",
      detail: "Bridge to permanent pacemaker",
      points: [
        "Pacing wire inserted through central vein to right ventricle",
        "Provides reliable pacing until permanent device placed",
      ],
    },
    {
      title: "Permanent pacemaker",
      detail: "Definitive treatment",
      points: [
        "Dual-chamber pacemaker (DDD) preferred",
        "Restores AV synchrony and maintains cardiac output",
        "Usually implanted within 24-48 hours",
      ],
    },
    {
      title: "Treat underlying cause",
      detail: "",
      points: [
        "Discontinue offending medications",
        "Correct electrolyte imbalances",
        "Treat MI or myocarditis",
      ],
    },
  ],
};

export const nursingInterventions = [
  {
    action: "Never leave patient alone",
    detail: "High risk of sudden deterioration",
  },
  {
    action: "Transcutaneous pacing pads applied",
    detail: "Ready for immediate use",
  },
  { action: "Crash cart at bedside", detail: "Prepared for emergency" },
  {
    action: "Continuous monitoring",
    detail: "Watch for asystole or rhythm changes",
  },
  { action: "Frequent vital signs", detail: "Every 15 minutes or continuous" },
  {
    action: "Assess perfusion continuously",
    detail: "Mental status, skin color, urine output",
  },
  {
    action: "Hold AV node blocking medications",
    detail: "Beta-blockers, calcium channel blockers, digoxin",
  },
  {
    action: "Prepare for procedures",
    detail: "Transvenous pacing, permanent pacemaker insertion",
  },
  {
    action: "Patient positioning",
    detail: "Elevate head of bed if tolerated, avoid Valsalva",
  },
  {
    action: "Emotional support",
    detail: "Patient and family education about condition and treatment",
  },
];

export const postPacemakerCare = [
  {
    action: "Monitor pacemaker function",
    detail: "Verify capture and sensing",
  },
  {
    action: "Assess insertion site",
    detail: "Check for bleeding, hematoma, infection",
  },
  {
    action: "Arm movement restrictions",
    detail: "Limit movement on pacemaker side for 24-48 hours",
  },
  {
    action: "Chest X-ray",
    detail: "Verify lead placement, rule out pneumothorax",
  },
  {
    action: "Patient education",
    detail: "Pacemaker function, precautions, follow-up care",
  },
  {
    action: "Pacemaker ID card",
    detail: "Ensure patient receives and carries card",
  },
];

export const patientEducation = [
  {
    topic: "Explain complete heart block",
    detail: "Why pacemaker is necessary",
  },
  {
    topic: "Pacemaker function",
    detail: "How device works to maintain heart rate",
  },
  {
    topic: "Activity restrictions",
    detail: "Initial limitations, gradual return to normal",
  },
  {
    topic: "Precautions",
    detail: "Avoid strong magnetic fields, carry pacemaker ID",
  },
  { topic: "Follow-up care", detail: "Regular pacemaker checks, battery life" },
  {
    topic: "Warning signs",
    detail: "Dizziness, syncope, palpitations - report immediately",
  },
  { topic: "Wound care", detail: "Keep insertion site clean and dry" },
  {
    topic: "Lifestyle",
    detail: "Most activities can resume; discuss specific concerns",
  },
];

export const quickReference = {
  title: "Quick Reference: Third-Degree AV Block",
  badges: [{ label: "LIFE-THREATENING", color: "bg-red-100 text-red-800" }],
  points: [
    "Key Finding: Complete AV dissociation",
    "P waves and QRS independent: No relationship",
    "Ventricular rate: 20-60 bpm (escape rhythm)",
    "Treatment: Transcutaneous pacing → Transvenous pacing → Permanent pacemaker",
    "Remember: Atropine often ineffective; prepare for pacing!",
  ],
};

export const nclexHighYield = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#a855f7",
  Icon: Star,
  features: [
    '"Complete Heart Block": No communication between atria and ventricles - most serious block',
    '"Key Features": P waves and QRS complexes march independently, no relationship between them',
    '"Ventricular Escape Rhythm": Ventricles beat at 20-40 bpm (Purkinje pacemaker) - very slow!',
    '"High Risk": Can progress to asystole or ventricular standstill - life-threatening',
    '"Immediate Treatment": Transcutaneous pacing if symptomatic, atropine may be tried but often ineffective',
    '"Definitive Treatment": Permanent pacemaker required - this is not optional',
    '"Symptomatic Signs": Syncope, dizziness, fatigue, hypotension, heart failure symptoms',
    '"Nursing Priority": Keep pacing equipment at bedside, monitor continuously, prepare for emergency pacing',
    '"Never Give": Beta-blockers, calcium channel blockers, or other AV-blocking drugs',
  ],
};

// --- Second-Degree AV Block 2:1 Conduction ---

export const block2to1 = {
  title: "Second-Degree AV Block 2:1 Conduction",
  characteristics: [
    { parameter: "Atrial Rate", criteria: "Normal (60-100 bpm)" },
    { parameter: "Ventricular Rate", criteria: "Half the atrial rate" },
    { parameter: "P Waves", criteria: "Two P waves for every QRS complex" },
    { parameter: "PR Interval", criteria: "Constant for conducted beats" },
    {
      parameter: "Pattern",
      criteria: "Every other P wave is blocked (not followed by QRS)",
    },
    {
      parameter: "Classification",
      criteria: "Cannot determine if Mobitz I or II from 2:1 pattern alone",
    },
  ],
  clinicalSignificance: {
    title: "Clinical Significance",
    defaultColor: "#f59e0b", // Amber/Orange
    Icon: TriangleAlert,
    features: [
      '"Ambiguous Classification": 2:1 AV block is unique because you cannot determine if it\'s Mobitz I or Mobitz II from the ECG alone. This matters because treatment differs!',
      '"Clinical Clues":',
      '• "Narrow QRS + 2:1 block": More likely Mobitz I (AV node level) - usually benign',
      '• "Wide QRS + 2:1 block": More likely Mobitz II (infranodal) - more serious',
      '• "Look at other strips": If 3:2 or 4:3 conduction seen elsewhere, can determine type',
      '"Causes": Same as other second-degree blocks - medications, MI (especially inferior), increased vagal tone, degenerative conduction disease',
      '"Symptoms": Depends on ventricular rate - may be asymptomatic or have bradycardia symptoms',
    ],
  },
  nursingAssessment: {
    title: "Nursing Assessment & Interventions",
    points: [
      "Assess Hemodynamic Status: Check BP, perfusion, symptoms",
      "Determine QRS Width: Narrow QRS = likely benign; Wide QRS = more concerning",
      "Review Medications: Check for AV-blocking drugs (beta-blockers, CCBs, digoxin)",
      "Calculate Ventricular Rate: Will be exactly half the atrial rate",
      "Symptomatic Treatment: If bradycardic and symptomatic → atropine 0.5-1 mg IV",
      "Prepare for Pacing: If wide QRS or symptomatic, may need pacing",
      "Continuous Monitoring: Watch for progression to higher-degree block",
      "Look for Pattern Changes: If conduction improves to 3:2 or 4:3, can determine block type",
      "Notify Provider: Report findings and patient status for treatment decisions",
    ],
  },
  nclexHighYield: {
    title: "NCLEX-RN High-Yield Points",
    defaultColor: "#a855f7",
    Icon: Star,
    features: [
      '"2:1 Ratio": Two P waves for every one QRS complex',
      '"Cannot Classify": Can\'t tell if Mobitz I or II from 2:1 pattern alone',
      '"QRS Width Matters": Narrow QRS = likely Mobitz I (benign); Wide QRS = likely Mobitz II (serious)',
      '"Ventricular Rate": Exactly half the atrial rate',
      '"Treatment Depends on Symptoms": Asymptomatic → observe; Symptomatic → atropine, pacing',
      '"Wide QRS = Higher Risk": More likely to need pacemaker',
      '"Medication Review": Hold AV-blocking drugs if symptomatic',
      '"Monitor for Progression": Can worsen to complete heart block',
      '"NCLEX Strategy": 2:1 block with wide QRS → prepare for pacing; narrow QRS → likely benign',
    ],
  },
};

// --- High-Grade AV Block ---

export const highGradeBlock = {
  title: "High-Grade AV Block (Advanced Second-Degree AV Block)",
  characteristics: [
    { parameter: "Atrial Rate", criteria: "Normal (60-100 bpm)" },
    { parameter: "Ventricular Rate", criteria: "Slow (usually 30-50 bpm)" },
    {
      parameter: "P Waves",
      criteria: "More P waves than QRS complexes (3:1, 4:1, or worse)",
    },
    {
      parameter: "Pattern",
      criteria: "Two or more consecutive P waves blocked",
    },
    {
      parameter: "PR Interval",
      criteria: "May be constant or variable for conducted beats",
    },
    {
      parameter: "Severity",
      criteria: "Between second-degree and third-degree block",
    },
  ],
  clinicalSignificance: {
    title: "Clinical Significance",
    defaultColor: "#ef4444", // Red
    Icon: Siren,
    features: [
      '"Serious Conduction Abnormality": High-grade AV block indicates severe impairment of AV conduction. It\'s more serious than typical second-degree block and often progresses to complete heart block.',
      '"Definition": Two or more consecutive P waves are blocked (not followed by QRS). This is NOT the same as 2:1 block, which alternates.',
      '"Common Causes":',
      "• Extensive MI (especially inferior MI)",
      "• Degenerative conduction system disease",
      "• Medication toxicity (beta-blockers, calcium channel blockers, digoxin)",
      "• Lyme disease (can cause transient high-grade block)",
      "• Cardiac surgery",
      '"Symptoms": Usually symptomatic due to slow ventricular rate - dizziness, syncope, fatigue, dyspnea, hypotension',
      '"Prognosis": High risk for progression to complete heart block; pacemaker usually required',
    ],
  },
  nursingAssessment: {
    title: "Nursing Assessment & Interventions",
    points: [
      "URGENT SITUATION: This is a serious rhythm requiring immediate attention",
      "Assess Hemodynamics: Check BP, level of consciousness, signs of poor perfusion",
      "Atropine: Give 0.5-1 mg IV if symptomatic (may not be effective)",
      "Transcutaneous Pacing: Prepare immediately - likely will be needed",
      "Hold AV-Blocking Drugs: Stop beta-blockers, CCBs, digoxin immediately",
      "Continuous Monitoring: High risk for progression to complete heart block",
      "Notify Provider Immediately: Patient needs urgent evaluation for pacemaker",
      "Prepare for Transvenous Pacing: Temporary pacemaker likely needed",
      "Monitor for Asystole: Keep emergency equipment at bedside",
      "Permanent Pacemaker: Patient will likely need permanent pacemaker",
    ],
  },
  nclexHighYield: {
    title: "NCLEX-RN High-Yield Points",
    defaultColor: "#a855f7",
    Icon: Star,
    features: [
      '"Definition": Two or more consecutive P waves blocked (3:1, 4:1, or worse conduction)',
      '"SERIOUS RHYTHM": More severe than typical second-degree block',
      '"Key Recognition": Multiple P waves in a row without QRS complexes',
      '"Slow Ventricular Rate": Usually 30-50 bpm - inadequate for perfusion',
      '"High Risk for Complete Block": Often progresses to third-degree AV block',
      '"Pacing Required": Almost always needs pacemaker - prepare for pacing',
      '"Atropine Often Ineffective": Block is usually infranodal, atropine may not help',
      '"Symptomatic": Patients usually have symptoms due to slow rate',
      '"Urgent Treatment": Transcutaneous pacing, then transvenous, then permanent pacemaker',
      '"NCLEX Strategy": High-grade block → prepare for pacing, notify provider urgently',
    ],
  },
};
