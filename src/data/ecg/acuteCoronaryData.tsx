import { Siren, Target, Zap } from "lucide-react";

export const acsIntro = {
  title: "Acute Coronary Syndromes (ACS)",
  description:
    "Acute Coronary Syndromes encompass a spectrum of conditions caused by acute myocardial ischemia, ranging from unstable angina to myocardial infarction. Recognizing ECG changes associated with ACS is critical for prompt diagnosis and treatment, as time is muscle - every minute of delay increases myocardial damage.",
};

export const spectrumOfAcs = [
  "**Unstable Angina (UA):** Ischemia without myocardial necrosis; no troponin elevation",
  "**Non-ST Elevation Myocardial Infarction (NSTEMI):** Myocardial necrosis without ST elevation; troponin elevated",
  "**ST Elevation Myocardial Infarction (STEMI):** Transmural myocardial necrosis with ST elevation; troponin elevated",
];

export const pathophysiology = [
  "**Atherosclerotic plaque rupture:** Exposes thrombogenic material",
  "**Thrombus formation:** Partially or completely occludes coronary artery",
  "**Myocardial ischemia:** Inadequate oxygen supply to myocardium",
  "**Myocardial injury/necrosis:** If ischemia prolonged (>20-30 minutes)",
];

export const ecgChanges = {
  evolutionTable: [
    {
      time: "Hyperacute (Minutes)",
      changes: "Tall, peaked T waves",
      pathophysiology: "Early ischemia",
    },
    {
      time: "Acute (Hours)",
      changes: "ST segment elevation, T wave inversion begins",
      pathophysiology: "Acute injury",
    },
    {
      time: "Evolving (Days)",
      changes: "Q waves develop, ST elevation decreases, T waves inverted",
      pathophysiology: "Myocardial necrosis",
    },
    {
      time: "Chronic (Weeks-Months)",
      changes:
        "Pathologic Q waves persist, ST normalizes, T waves may normalize",
      pathophysiology: "Scar tissue formation",
    },
  ],
  findings: [
    {
      title: "1. ST Segment Changes",
      items: [
        {
          head: "ST Elevation (STEMI):",
          points: [
            "≥1 mm elevation in two contiguous leads (limb leads)",
            "≥2 mm elevation in two contiguous precordial leads",
            "Indicates transmural ischemia/injury",
            "Requires immediate reperfusion therapy",
          ],
        },
        {
          head: "ST Depression (NSTEMI/Unstable Angina):",
          points: [
            "≥0.5 mm depression in two contiguous leads",
            "Indicates subendocardial ischemia",
            "May also represent reciprocal changes",
          ],
        },
      ],
    },
    {
      title: "2. T Wave Changes",
      items: [
        {
          head: "",
          points: [
            "**T wave inversion:** Indicates ischemia or evolving infarction",
            "**Hyperacute T waves:** Tall, peaked T waves in early MI",
            "**Symmetric T wave inversion:** Suggests significant ischemia",
          ],
        },
      ],
    },
    {
      title: "3. Q Waves",
      items: [
        {
          head: "Pathologic Q waves:",
          points: [
            "Width: ≥0.04 seconds (1 small square)",
            "Depth: ≥25% of R wave height or ≥1 mm deep",
            "Indicates myocardial necrosis (transmural infarction)",
            "Usually permanent (scar tissue)",
          ],
        },
        {
          head: "",
          points: ["**Timing:** Develop within hours to days of MI"],
        },
      ],
    },
  ],
};

export const localizationTable = [
  {
    location: "Anterior",
    leads: "V3, V4",
    artery: "LAD (Left Anterior Descending)",
    complications: "Heart failure, cardiogenic shock, high mortality",
  },
  {
    location: "Septal",
    leads: "V1, V2",
    artery: "LAD",
    complications: "Bundle branch blocks, complete heart block",
  },
  {
    location: "Lateral",
    leads: "I, aVL, V5, V6",
    artery: "LCx (Left Circumflex)",
    complications: "Usually smaller infarcts",
  },
  {
    location: "Inferior",
    leads: "II, III, aVF",
    artery: "RCA (Right Coronary Artery)",
    complications: "Bradycardia, AV blocks, RV infarction",
  },
  {
    location: "Posterior",
    leads: "Tall R waves in V1-V2, ST depression V1-V3",
    artery: "RCA or LCx",
    complications: "Often missed; need posterior leads (V7-V9)",
  },
  {
    location: "Right Ventricular",
    leads: "ST elevation in V4R (right-sided lead)",
    artery: "RCA (proximal)",
    complications: "Hypotension, requires fluid resuscitation",
  },
];

export const reciprocalChanges = [
  "**Inferior MI:** Reciprocal ST depression in I, aVL",
  "**Anterior MI:** Reciprocal ST depression in II, III, aVF",
  "**Significance:** Confirms diagnosis of STEMI; not a separate area of ischemia",
];

export const clinicalPresentation = {
  classic: {
    title: "Classic Symptoms",
    items: [
      {
        head: "Chest pain/discomfort:",
        points: [
          "Substernal, pressure, squeezing, heaviness",
          "May radiate to left arm, jaw, neck, back, epigastrium",
          "Lasts >20 minutes (MI) vs. <20 minutes (angina)",
          "Not relieved by rest or nitroglycerin (MI)",
        ],
      },
      {
        head: "Associated symptoms:",
        points: [
          "Dyspnea or shortness of breath",
          "Diaphoresis (sweating)",
          "Nausea and vomiting",
          "Lightheadedness or dizziness",
          "Sense of impending doom",
          "Fatigue or weakness",
        ],
      },
    ],
  },
  atypical: {
    title: "Atypical Presentations",
    subtitle: "More common in women, elderly, and diabetics:",
    items: [
      "Epigastric discomfort or indigestion",
      "Dyspnea without chest pain",
      "Fatigue or weakness",
      "Syncope",
      "Confusion or altered mental status",
      "Silent MI (no symptoms)",
    ],
  },
};

export const timeSensitiveWarning = {
  title: "Time-Sensitive Emergency",
  description: '"Time is Muscle" - Every minute counts!',
  Icon: Siren,
  defaultColor: "#c0392b",
  features: [
    "Door-to-balloon time: Goal <90 minutes for PCI",
    "Door-to-needle time: Goal <30 minutes for thrombolytics",
    "First medical contact to device time: Goal <90 minutes",
    "Myocardial salvage: Decreases with each minute of delay",
    "Mortality increases: With longer time to reperfusion",
  ],
};

export const nursingAssessment = {
  title: "Rapid, Systematic Assessment",
  items: [
    "**MONA protocol initiation:** (see below)",
    {
      text: "**Focused history:**",
      subItems: [
        "Onset, duration, quality of chest pain",
        "Radiation of pain",
        "Associated symptoms",
        "Cardiac risk factors",
        "Previous cardiac history",
        "Recent cocaine use (contraindication to some treatments)",
      ],
    },
    "**Vital signs:** Blood pressure (both arms), heart rate, respiratory rate, oxygen saturation",
    {
      text: "**Physical examination:**",
      subItems: [
        "Cardiac: Heart sounds, murmurs, extra sounds (S3, S4)",
        "Respiratory: Breath sounds, signs of pulmonary edema",
        "Peripheral: Pulses, perfusion, edema",
        "Neurological: Mental status",
      ],
    },
    "**12-lead ECG:** Within 10 minutes of arrival",
    "**Cardiac biomarkers:** Troponin, CK-MB (serial measurements)",
  ],
};

export const immediateManagement = {
  mona: {
    title: "MONA Protocol (Initial Treatment)",
    subtitle: "First-Line Interventions",
    icon: Target,
    items: [
      {
        letter: "M",
        drug: "Morphine",
        dosage: "2-4 mg IV for pain relief",
        points: [
          "Reduces pain and anxiety",
          "Decreases myocardial oxygen demand",
          "Use cautiously; may mask symptoms",
        ],
      },
      {
        letter: "O",
        drug: "Oxygen",
        dosage: "If SpO2 <90% or respiratory distress",
        points: [
          "Goal: Maintain SpO2 ≥94%",
          "Avoid excessive oxygen (may be harmful)",
        ],
      },
      {
        letter: "N",
        drug: "Nitroglycerin",
        dosage: "0.4 mg sublingual every 5 minutes x 3 doses",
        points: [
          "Dilates coronary arteries",
          "Reduces preload and afterload",
          "Contraindications: Hypotension (SBP <90), RV infarction, recent PDE-5 inhibitor use (Viagra, Cialis)",
        ],
      },
      {
        letter: "A",
        drug: "Aspirin",
        dosage: "162-325 mg chewed immediately",
        points: [
          "Antiplatelet effect",
          "Reduces mortality",
          "Give unless true allergy",
        ],
      },
    ],
  },
  additionalMeds: {
    title: "Additional Medications",
    items: [
      {
        title: "Antiplatelet agents:",
        points: [
          "Clopidogrel (Plavix) 300-600 mg loading dose",
          "Ticagrelor (Brilinta) or Prasugrel (Effient)",
        ],
      },
      {
        title: "Anticoagulation:",
        points: [
          "Heparin (unfractionated or low molecular weight)",
          "Bivalirudin",
        ],
      },
      {
        title: "Beta-blockers:",
        points: [
          "Metoprolol 5 mg IV every 5 minutes x 3 doses",
          "Reduces myocardial oxygen demand",
          "Contraindications: Heart failure, bradycardia, hypotension, AV block",
        ],
      },
      {
        title: "ACE inhibitors:",
        points: ["Within 24 hours if no contraindications"],
      },
      {
        title: "Statins:",
        points: ["High-intensity statin therapy"],
      },
    ],
  },
  reperfusion: {
    title: "Reperfusion Therapy for STEMI",
    sections: [
      {
        title: "Primary PCI (Percutaneous Coronary Intervention)",
        items: [
          "**Preferred method:** If available within 90 minutes",
          "**Procedure:** Cardiac catheterization with angioplasty and stent placement",
          "**Advantages:** Higher success rate, lower mortality, less bleeding than thrombolytics",
          "**Nursing role:** Rapid preparation, consent, sheath site care post-procedure",
        ],
      },
      {
        title: "Fibrinolytic Therapy (Thrombolytics)",
        items: [
          "**When used:** If PCI not available within 120 minutes and no contraindications",
          "**Medications:** Alteplase (tPA), Reteplase, Tenecteplase",
          "**Goal:** Dissolve thrombus and restore blood flow",
          "**Contraindications:**",
          [
            "Active bleeding or bleeding disorder",
            "Recent surgery or trauma (<3 weeks)",
            "History of hemorrhagic stroke",
            "Ischemic stroke within 3 months",
            "Suspected aortic dissection",
            "Severe uncontrolled hypertension (>180/110)",
          ], // Nested list for contraindications
          "**Nursing monitoring:** Watch for bleeding, reperfusion arrhythmias, allergic reactions",
        ],
      },
    ],
  },
};

export const complications = [
  "**Arrhythmias:** VT, VF, heart blocks (especially with inferior MI)",
  "**Heart failure:** Acute pulmonary edema, cardiogenic shock",
  {
    text: "**Mechanical complications:**",
    subItems: [
      "Papillary muscle rupture (acute mitral regurgitation)",
      "Ventricular septal rupture",
      "Free wall rupture (often fatal)",
    ],
  },
  "**Pericarditis:** Inflammation of pericardium (Dressler's syndrome)",
  "**Ventricular aneurysm:** Bulging of infarcted area",
  "**Mural thrombus:** Clot formation in ventricle; risk of embolization",
];

export const nursingInterventions = {
  title: "Nursing Interventions",
  care: {
    title: "Comprehensive Care",
    icon: Target,
    items: [
      "**Continuous monitoring:** Telemetry for arrhythmia detection",
      "**Hemodynamic monitoring:** Blood pressure, heart rate, oxygen saturation",
      "**Pain management:** Assess and treat chest pain promptly",
      "**Activity restriction:** Bed rest initially, gradual mobilization",
      "**Emotional support:** Reduce anxiety, provide reassurance",
      "**Medication administration:** Ensure timely administration of all cardiac medications",
      "**Patient education:** Explain condition, treatments, and importance of lifestyle modifications",
      "**Cardiac rehabilitation referral:** For recovery and risk factor modification",
    ],
  },
};

export const patientEducation = {
  title: "Patient Education and Secondary Prevention",
  items: [
    "**Medication compliance:** Lifelong antiplatelet therapy, statins, beta-blockers, ACE inhibitors",
    {
      text: "**Risk factor modification:**",
      subItems: [
        "Smoking cessation (most important)",
        "Blood pressure control",
        "Diabetes management",
        "Cholesterol management",
        "Weight loss if overweight",
      ],
    },
    {
      text: "**Lifestyle changes:**",
      subItems: [
        "Heart-healthy diet (Mediterranean or DASH diet)",
        "Regular exercise (cardiac rehabilitation)",
        "Stress management",
        "Limit alcohol consumption",
      ],
    },
    "**Warning signs:** When to seek immediate medical attention",
    "**Follow-up care:** Regular cardiology appointments, medication adjustments",
  ],
};

export const quickReference = {
  title: "Quick Reference: ACS Management",
  items: [
    "**Recognition:** Chest pain + ECG changes + Troponin elevation",
    "**Initial treatment:** MONA (Morphine, Oxygen, Nitroglycerin, Aspirin)",
    "**STEMI:** Immediate reperfusion (PCI or thrombolytics)",
    "**Time goals:** Door-to-balloon <90 min, Door-to-needle <30 min",
    "**Remember:** Time is muscle! Every minute counts!",
  ],
};

export const nclexHighYield = {
  title: "NCLEX-RN High-Yield Points",
  icon: Zap,
  defaultColor: "#7B1FA2",
  features: [
    "STEMI vs NSTEMI: STEMI has ST elevation (transmural MI), NSTEMI has ST depression/T wave changes",
    "STEMI = Emergency: Requires immediate reperfusion (PCI within 90 min or fibrinolytics within 30 min)",
    "MI Localization: Anterior (V1-V4, LAD), Inferior (II, III, aVF, RCA), Lateral (I, aVL, V5-V6, LCx)",
    "Reciprocal Changes: ST depression in opposite leads confirms STEMI diagnosis",
    "MONA Protocol: Morphine, Oxygen (if SpO2 <90%), Nitroglycerin, Aspirin (chew 325mg)",
    "Contraindications: No nitrates if RV infarct (inferior MI), recent sildenafil use, or hypotension",
    "Cardiac Markers: Troponin rises 3-4 hours, peaks 24 hours, elevated 7-10 days (most specific)",
    "Complications: Arrhythmias (VF most common cause of death), cardiogenic shock, heart failure, rupture",
    "Post-MI Care: Bed rest initially, cardiac rehab, lifelong antiplatelet therapy, beta-blockers, ACE inhibitors",
    "Patient Teaching: Recognize warning signs, call 911 immediately, medication compliance critical",
  ],
};
