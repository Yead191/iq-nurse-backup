import {
  Siren,
  AlertTriangle,
  ClipboardList,
  CheckCircle,
  Phone,
  Clock,
  FileText,
  Zap,
} from "lucide-react";

export const priorityIntro = {
  title: "Clinical Prioritization Guide",
  description:
    "Not all cardiac rhythms require the same level of urgency. Understanding which rhythms demand immediate intervention versus those that can be monitored is critical for safe, effective nursing practice. This guide provides a framework for prioritizing care based on rhythm interpretation and patient status.",
};

export const priorityLevels = [
  {
    level: 1,
    title: "Level 1: IMMEDIATE LIFE-THREATENING (Code/Rapid Response)",
    boxColor: "bg-red-50 border-red-200",
    headerColor: "text-red-700",
    icon: Siren,
    boxHeader: "IMMEDIATE ACTION REQUIRED",
    subtitle: "These rhythms require immediate intervention - seconds matter!",
    sections: [
      {
        title: "Pulseless Rhythms (Cardiac Arrest)",
        items: [
          {
            name: "Ventricular Fibrillation (VF)",
            details: [
              "Action: CPR + Defibrillation immediately",
              "Follow ACLS pulseless arrest algorithm",
              "Survival decreases 7-10% per minute without defibrillation",
            ],
          },
          {
            name: "Pulseless Ventricular Tachycardia",
            details: [
              "Action: Same as VF - CPR + Defibrillation",
              "Treat identically to VF",
            ],
          },
          {
            name: "Asystole",
            details: [
              "Action: CPR + Epinephrine",
              "Search for reversible causes (H's and T's)",
              "Do NOT defibrillate asystole",
            ],
          },
          {
            name: "Pulseless Electrical Activity (PEA)",
            details: [
              "Action: CPR + Treat underlying cause",
              "Aggressively search for reversible causes",
            ],
          },
        ],
      },
      {
        title: "Unstable Rhythms with Pulse",
        items: [
          {
            name: "Unstable VT (with pulse)",
            details: [
              "Signs: Hypotension, altered mental status, chest pain, acute heart failure",
              "Action: Immediate synchronized cardioversion",
              "Can deteriorate to pulseless VT/VF at any moment",
            ],
          },
          {
            name: "Unstable SVT",
            details: [
              "Signs: Severe hypotension, altered mental status, chest pain",
              "Action: Synchronized cardioversion",
            ],
          },
          {
            name: "Unstable A-fib with RVR",
            details: [
              "Signs: Hemodynamic instability, acute heart failure",
              "Action: Synchronized cardioversion",
            ],
          },
        ],
      },
    ],
  },
  {
    level: 2,
    title: "Level 2: URGENT (Immediate Notification Required)",
    boxColor: "bg-amber-50 border-amber-200",
    headerColor: "text-amber-700",
    icon: AlertTriangle,
    boxHeader: "URGENT - Notify Provider Immediately",
    subtitle: "These rhythms require prompt intervention within minutes:",
    items: [
      {
        name: "Symptomatic Bradycardia",
        details: [
          "Heart rate <50 with hypotension, altered mental status, or chest pain",
          "Action: Atropine, prepare for pacing",
          "Can progress to asystole",
        ],
      },
      {
        name: "Third-Degree (Complete) Heart Block",
        details: [
          "Complete AV dissociation, slow ventricular rate",
          "Action: Transcutaneous pacing, prepare for transvenous pacing",
          "High risk of asystole",
        ],
      },
      {
        name: "Mobitz Type II Second-Degree AV Block",
        details: [
          "Constant PR with sudden dropped QRS",
          "Action: Prepare for pacing, avoid AV node blockers",
          "Can progress to complete heart block",
        ],
      },
      {
        name: "Stable VT (with pulse)",
        details: [
          "Wide-complex tachycardia, regular, rate >100",
          "Action: Amiodarone, prepare for cardioversion",
          "Monitor closely - can become unstable",
        ],
      },
      {
        name: "Torsades de Pointes",
        details: [
          "Polymorphic VT with prolonged QT",
          "Action: Magnesium sulfate 2g IV",
          "Can degenerate to VF",
        ],
      },
      {
        name: "New-Onset A-fib with RVR",
        details: [
          "Irregular rhythm, rate >100, no P waves",
          "Action: Rate control, anticoagulation consideration",
          "Risk of hemodynamic compromise",
        ],
      },
      {
        name: "STEMI (ST Elevation MI)",
        details: [
          "ST elevation ≥1mm in two contiguous leads",
          "Action: Activate cath lab, prepare for reperfusion",
          "Time is muscle - every minute counts",
        ],
      },
    ],
  },
  {
    level: 3,
    title: "Level 3: SEMI-URGENT (Notify Provider Promptly)",
    boxColor: "bg-blue-50 border-blue-200",
    headerColor: "text-blue-700",
    icon: ClipboardList,
    boxHeader: "Requires Prompt Attention",
    subtitle: "These rhythms need attention within 30-60 minutes:",
    items: [
      {
        name: "Stable SVT",
        details: [
          "Regular, narrow-complex tachycardia, rate 150-250",
          "Action: Vagal maneuvers, adenosine if ordered",
          "Usually well-tolerated but uncomfortable",
        ],
      },
      {
        name: "Atrial Flutter",
        details: [
          "Sawtooth pattern, regular or irregular ventricular response",
          "Action: Rate control, anticoagulation",
          "Similar stroke risk to A-fib",
        ],
      },
      {
        name: "Controlled A-fib",
        details: [
          "Irregular rhythm, rate 60-100",
          "Action: Continue rate control, ensure anticoagulation",
          "Monitor for rate changes",
        ],
      },
      {
        name: "Frequent PVCs",
        details: [
          ">6 per minute, multifocal, or couplets/triplets",
          "Action: Assess for underlying cause, monitor closely",
          "Can progress to VT",
        ],
      },
      {
        name: "Mobitz Type I (Wenckebach)",
        details: [
          "Progressive PR lengthening with dropped QRS",
          "Action: Monitor, hold AV node blockers if ordered",
          "Usually benign but monitor for progression",
        ],
      },
      {
        name: "NSTEMI/Unstable Angina",
        details: [
          "Chest pain with ST depression or T wave changes",
          "Action: MONA protocol, antiplatelet therapy",
          "Risk of progression to STEMI",
        ],
      },
    ],
  },
  {
    level: 4,
    title: "Level 4: ROUTINE MONITORING",
    boxColor: "bg-green-50 border-green-200",
    headerColor: "text-green-700",
    icon: CheckCircle,
    boxHeader: "Routine Monitoring Adequate",
    subtitle: "These rhythms can be monitored with routine care:",
    items: [
      {
        name: "Normal Sinus Rhythm",
        details: [
          "Rate 60-100, regular, normal P-QRS-T",
          "Action: Continue monitoring, routine care",
        ],
      },
      {
        name: "Sinus Tachycardia",
        details: [
          "Rate >100, regular, normal P-QRS-T",
          "Action: Treat underlying cause (pain, fever, anxiety)",
          "Usually physiologic response",
        ],
      },
      {
        name: "Asymptomatic Sinus Bradycardia",
        details: [
          "Rate <60, regular, patient stable",
          "Action: Monitor, may be normal for patient",
          "Common in athletes",
        ],
      },
      {
        name: "First-Degree AV Block",
        details: [
          "PR interval >0.20 seconds, all P waves conducted",
          "Action: Monitor, usually benign",
          "Watch for progression",
        ],
      },
      {
        name: "Occasional PVCs",
        details: [
          "Infrequent, unifocal, patient asymptomatic",
          "Action: Monitor, usually benign",
          "Common in healthy individuals",
        ],
      },
      {
        name: "Sinus Arrhythmia",
        details: [
          "Slight irregularity with respiration",
          "Action: None needed, normal variant",
          "Common in young, healthy individuals",
        ],
      },
    ],
  },
];

export const decisionFramework = {
  title: "Decision-Making Framework",
  subtitle: "Key Questions to Ask",
  questions: [
    {
      question: "1. Does the patient have a pulse?",
      answers: [
        "No pulse = Cardiac arrest = Immediate CPR/defibrillation",
        "Pulse present = Assess stability",
      ],
    },
    {
      question: "2. Is the patient hemodynamically stable?",
      answers: [
        "Check: Blood pressure, mental status, perfusion, symptoms",
        "Unstable = Immediate intervention needed",
        "Stable = More time for assessment and treatment",
      ],
    },
    {
      question: "3. What is the ventricular rate?",
      answers: [
        "Too fast (>150) or too slow (<40) = Higher risk",
        "Normal range (60-100) = Lower risk",
      ],
    },
    {
      question: "4. Is the rhythm regular or irregular?",
      answers: [
        "Irregularly irregular = Consider A-fib",
        "Regular = Assess other characteristics",
      ],
    },
    {
      question: "5. Is the QRS wide or narrow?",
      answers: [
        "Wide QRS tachycardia = Assume VT until proven otherwise",
        "Narrow QRS = Supraventricular origin",
      ],
    },
    {
      question: "6. Is the patient symptomatic?",
      answers: [
        "Chest pain, dyspnea, dizziness, syncope = Higher priority",
        "Asymptomatic = Lower priority",
      ],
    },
  ],
};

export const specialPopulations = [
  {
    title: "Elderly Patients",
    points: [
      "May not tolerate tachycardia or bradycardia as well",
      "Higher risk of complications from arrhythmias",
      "May have atypical presentations",
      "Lower threshold for intervention",
    ],
  },
  {
    title: "Patients with Heart Disease",
    points: [
      "Arrhythmias more likely to cause hemodynamic compromise",
      "Higher risk of progression to life-threatening rhythms",
      "May need more aggressive treatment",
      "Closer monitoring required",
    ],
  },
  {
    title: "Post-Cardiac Surgery Patients",
    points: [
      "High risk for arrhythmias in first 48-72 hours",
      "A-fib very common post-operatively",
      "May need temporary pacing wires",
      "Electrolyte management critical",
    ],
  },
];

export const notificationGuide = {
  title: "Communication and Documentation",
  subtitle: "When to Notify Provider",
  levels: [
    {
      title: "Immediate Notification (Call Now)",
      icon: Phone,
      color: "text-red-600",
      items: [
        "Any pulseless rhythm",
        "Unstable tachycardia or bradycardia",
        "New-onset VT",
        "Complete heart block",
        "Mobitz Type II",
        "STEMI",
        "Significant change in rhythm with symptoms",
      ],
    },
    {
      title: "Prompt Notification (Within 30-60 minutes)",
      icon: Clock,
      color: "text-orange-600",
      items: [
        "New-onset A-fib or atrial flutter",
        "Stable SVT",
        "Frequent or concerning PVCs",
        "First-degree AV block (new)",
        "Symptomatic sinus bradycardia or tachycardia",
      ],
    },
    {
      title: "Routine Notification (Next rounds or shift report)",
      icon: FileText,
      color: "text-slate-600", // Using slate/gray as green might be confusing with 'safe'
      items: [
        "Occasional PVCs",
        "Sinus tachycardia with known cause",
        "Stable, chronic arrhythmias",
        "Minor rhythm changes without symptoms",
      ],
    },
  ],
};

export const effectiveCommunication = {
  title: "Effective Communication",
  subtitle: "Use SBAR format when notifying provider:",
  items: [
    '**S - Situation:** "Patient is in ventricular tachycardia"',
    '**B - Background:** "History of CAD, recent MI"',
    '**A - Assessment:** "Patient is hypotensive, BP 80/50, altered mental status"',
    '**R - Recommendation:** "I think we need to cardiovert immediately"',
  ],
};

export const documentation = {
  title: "Documentation",
  items: [
    "**Rhythm interpretation:** Document specific rhythm identified",
    "**Patient assessment:** Vital signs, symptoms, hemodynamic status",
    "**Interventions:** All actions taken and patient response",
    "**Rhythm strips:** Attach to chart with date, time, and interpretation",
    "**Provider notification:** Document who was notified, when, and their response",
    "**Ongoing monitoring:** Frequency of assessments and any changes",
  ],
};

export const quickReference = {
  title: "Quick Reference: Prioritization",
  subtitle: "Remember the ABCs of Rhythm Prioritization:",
  items: [
    "**A - Assess the patient first:** Never treat the monitor alone",
    "**B - Blood pressure and perfusion:** Stability determines urgency",
    "**C - Call for help early:** Don't wait until patient deteriorates",
  ],
  goldenRule:
    "**Golden Rule:** When in doubt, treat the patient as if the rhythm is serious until proven otherwise!",
};

export const nclexHighYield = {
  title: "NCLEX-RN High-Yield Points",
  Icon: Zap,
  defaultColor: "#9C27B0",
  features: [
    "ABCs Always First: Airway, Breathing, Circulation - assess before interpreting rhythm",
    "Immediate Life Threats: VF, pulseless VT, asystole, PEA - start CPR immediately",
    "Urgent Rhythms: Unstable VT, symptomatic bradycardia, unstable SVT - prepare for cardioversion/pacing",
    "Priority Assessment: Level of consciousness, vital signs, chest pain, SOB, signs of shock",
    "Delegation: Can delegate vital signs and basic monitoring to UAP, but rhythm interpretation is RN responsibility",
    "Chain of Command: Notify provider immediately for life-threatening rhythms, document interventions",
    "Code Blue Response: Call for help, start CPR, bring crash cart, assign roles, document",
    "Post-Resuscitation: Continuous monitoring, therapeutic hypothermia, ICU transfer, family support",
    "NCLEX Strategy: Choose answer that addresses most life-threatening problem first",
    "Documentation: Record rhythm strips, interventions, patient response, provider notification",
  ],
};
