import { AlertTriangle, Siren, Stethoscope, Zap } from "lucide-react";

export const artifactIntro = {
  title: "ECG Artifact and Troubleshooting",
  description:
    "ECG artifact refers to any distortion or interference on the ECG tracing that is not caused by cardiac electrical activity. Recognizing and eliminating artifact is essential for accurate rhythm interpretation and appropriate patient care. Artifact can mimic life-threatening arrhythmias, leading to unnecessary interventions, or it can obscure actual cardiac rhythms.",
};

export const artifactTypes = [
  {
    type: "tremor",
    title: "1. Muscle Tremor (Somatic Tremor)",
    boxTitle: "Muscle Tremor Artifact",
    appearance:
      'Irregular, chaotic baseline with varying amplitude; looks like "fuzzy" or "shaky" baseline',
    causes: [
      "Patient shivering or cold",
      "Parkinson's disease or essential tremor",
      "Patient anxiety or nervousness",
      "Muscle tension",
      "Seizure activity",
    ],
    solutions: [
      "Warm the patient if cold",
      "Reassure anxious patients",
      "Position patient comfortably",
      "Support limbs to reduce muscle tension",
      "Wait for tremor to subside if possible",
      "Consider sedation if necessary and ordered",
    ],
  },
  {
    type: "wandering",
    title: "2. Wandering Baseline",
    boxTitle: "Wandering Baseline Artifact",
    appearance:
      "Baseline drifts up and down slowly; entire ECG complex moves above and below isoelectric line",
    causes: [
      "Patient movement or repositioning",
      "Respiratory movement (breathing)",
      "Poor electrode contact",
      "Loose or disconnected electrodes",
    ],
    solutions: [
      "Instruct patient to lie still and breathe normally",
      "Check and replace electrodes if needed",
      "Ensure proper skin preparation",
      "Secure electrode cables to prevent tension",
      "Reposition electrodes if over bony prominences",
    ],
  },
  {
    type: "interference",
    title: "3. 60-Cycle (AC) Interference",
    boxTitle: "60-Cycle Interference",
    appearance:
      'Regular, uniform, fine oscillations (60 cycles per second); looks like "fuzzy" baseline with consistent pattern',
    causes: [
      "Electrical equipment near patient or monitor",
      "Improperly grounded equipment",
      "Damaged or frayed cables",
      "Multiple electrical devices plugged into same outlet",
    ],
    solutions: [
      "Unplug unnecessary electrical equipment",
      "Move equipment away from patient",
      "Check for damaged cables and replace if needed",
      "Ensure proper grounding of equipment",
      "Use different electrical outlet",
      "Check electrode connections",
    ],
  },
];

export const leadDisconnection = {
  title: "4. Loose or Disconnected Leads",
  boxTitle: "Lead Disconnection",
  icon: AlertTriangle,
  appearance:
    "Flat line (asystole pattern) or erratic, chaotic waveform; may trigger monitor alarms",
  causes: [
    "Electrode fell off",
    "Cable disconnected from electrode or monitor",
    "Broken or damaged cable",
    "Poor electrode adhesion",
  ],
  criticalAction: [
    "**ALWAYS assess the patient first!** Do not assume flat line is artifact",
    "Check patient responsiveness and pulse immediately",
    "If patient is responsive with pulse, troubleshoot equipment",
    "If patient is unresponsive without pulse, initiate CPR",
  ],
  solutions: [
    "Check all electrode connections",
    "Replace electrodes if not adhering properly",
    "Check cable connections to monitor",
    "Replace damaged cables",
    "Ensure proper skin preparation for electrode adhesion",
  ],
};

export const movementArtifact = {
  title: "5. Patient Movement Artifact",
  boxTitle: "Movement Artifact",
  appearance: "Large, irregular deflections; may mimic VT or other arrhythmias",
  causes: [
    "Patient moving, turning, or repositioning",
    "Coughing, hiccups, or vomiting",
    "Seizure activity",
    "Chest physiotherapy or CPR",
    "Patient scratching or touching electrodes",
  ],
  solutions: [
    "Instruct patient to lie still during ECG recording",
    "Wait for movement to cease before interpreting rhythm",
    "Document patient activity on rhythm strip",
  ],
};

export const distinctionTables = {
  vf: {
    title: "Artifact vs. Ventricular Fibrillation",
    headers: ["Feature", "Artifact", "True VF"],
    rows: [
      {
        feature: "Patient Status",
        artifact: "Awake, talking, moving",
        trueVf: "Unresponsive, no pulse",
      },
      {
        feature: "Pattern",
        artifact: "May have regular pattern or sudden onset/offset",
        trueVf: "Chaotic, no pattern",
      },
      {
        feature: "Multiple Leads",
        artifact: "Often affects only one or two leads",
        trueVf: "Affects all leads",
      },
      {
        feature: "Baseline",
        artifact: "May see underlying rhythm",
        trueVf: "No underlying rhythm visible",
      },
    ],
  },
  vt: {
    title: "Artifact vs. Ventricular Tachycardia",
    headers: ["Feature", "Artifact", "True VT"],
    rows: [
      {
        feature: "Patient Status",
        artifact: "May be alert and stable",
        trueVt: "Often symptomatic or unstable",
      },
      {
        feature: "QRS Morphology",
        artifact: "Irregular, inconsistent",
        trueVt: "Wide, regular, consistent",
      },
      {
        feature: "Rate",
        artifact: "Variable, may be very fast",
        trueVt: "Regular, 150-250 bpm",
      },
      {
        feature: "Onset",
        artifact: "Sudden, related to movement",
        trueVt: "May be sudden or gradual",
      },
    ],
  },
};

export const troubleshooting = {
  title: "Systematic Approach to Artifact",
  subtitle: "Troubleshooting Steps",
  icon: Stethoscope,
  steps: [
    {
      text: "**ALWAYS assess the patient first:**",
      subItems: [
        "Is patient responsive?",
        "Does patient have a pulse?",
        "Is patient symptomatic?",
        "Never assume monitor display is artifact without checking patient",
      ],
    },
    {
      text: "**Check electrode placement and adhesion:**",
      subItems: [
        "Are electrodes in correct positions?",
        "Are electrodes adhering to skin?",
        "Is skin clean and dry under electrodes?",
      ],
    },
    {
      text: "**Inspect cables and connections:**",
      subItems: [
        "Are all cables connected securely?",
        "Are cables damaged or frayed?",
      ],
    },
  ],
};

export const skinPrep = {
  title: "Proper Skin Preparation",
  subtitle: "Good skin preparation is key to reducing artifact:",
  items: [
    "**Clean the skin:** Use alcohol wipe and allow to dry completely",
    "**Remove oils:** Skin should be clean and dry",
    "**Shave if necessary:** Remove excess hair for better electrode contact",
    "**Abrade skin gently:** Lightly rub with gauze or prep pad to remove dead skin cells",
    "**Avoid bony prominences:** Place electrodes on muscle, not bone",
    "**Use fresh electrodes:** Check expiration date; old electrodes lose adhesion",
  ],
};

export const specialConsiderations = {
  title: "Special Considerations",
  sections: [
    {
      title: "Patients with Tremors",
      items: [
        "Place limb electrodes more proximally (closer to torso)",
        "Support limbs to minimize movement",
        "Consider timing ECG when tremor is minimal",
        "Document tremor on ECG",
      ],
    },
    {
      title: "Diaphoretic Patients",
      items: [
        "Dry skin thoroughly before electrode application",
        "Use tincture of benzoin to improve adhesion",
        "Replace electrodes more frequently",
        "Consider using electrodes designed for diaphoretic skin",
      ],
    },
    {
      title: "Obese Patients",
      items: [
        "Ensure electrodes are on flat surface, not in skin folds",
        "May need to lift pannus or breast tissue",
        "Use longer cables if needed",
        "Secure cables to prevent tension",
      ],
    },
  ],
};

export const criticalSafety = {
  title: "Critical Safety Rule",
  description:
    "NEVER assume a flat line or chaotic rhythm is artifact without assessing the patient!",
  Icon: Siren,
  defaultColor: "#C0392B",
  features: [
    "Always check patient responsiveness and pulse first",
    "If patient is unresponsive without pulse, initiate CPR immediately",
    "Do not delay life-saving interventions to troubleshoot equipment",
    "When in doubt, treat the patient, not the monitor",
  ],
};

export const documentation = {
  title: "Documentation",
  items: [
    '**Note artifact on rhythm strips:** Write "artifact" or "patient movement" on strip',
    "**Document troubleshooting:** Record steps taken to eliminate artifact",
    "**Record patient activity:** Note what patient was doing during artifact",
    "**Document resolution:** Note when artifact resolved and how",
    "**Report persistent problems:** Notify biomedical engineering if equipment issues persist",
  ],
};

export const quickReference = {
  title: "Quick Reference: Artifact Troubleshooting",
  items: [
    "**Step 1:** ALWAYS assess patient first!",
    "**Step 2:** Check electrodes and connections",
    "**Step 3:** Assess environment and patient activity",
    "**Step 4:** Replace components as needed",
    "**Remember:** Treat the patient, not the monitor!",
  ],
};

export const nclexHighYield = {
  title: "NCLEX-RN High-Yield Points",
  Icon: Zap,
  defaultColor: "#9C27B0", // Purple shade
  features: [
    "Assess Patient First: Never treat the monitor - always assess patient's clinical status",
    "Common Artifacts: Muscle tremor, patient movement, loose leads, electrical interference",
    "60-Cycle Interference: Thick baseline from electrical equipment - check grounding, unplug devices",
    "Wandering Baseline: Wavy baseline from patient movement or respiratory effort",
    "Troubleshooting Steps: Check patient → check leads → check equipment → replace electrodes if needed",
    "Lead Placement Errors: Incorrect placement can mimic arrhythmias - verify placement",
    "Asystole on Monitor: Check patient first! May be lead disconnection, not true asystole",
    "Electrode Preparation: Clean skin, shave if needed, ensure good contact for quality tracing",
  ],
};
