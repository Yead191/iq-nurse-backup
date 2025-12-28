import { AlertTriangle, Activity, Zap, Stethoscope } from "lucide-react";

export const pacemakerIntro = {
  title: "Pacemaker Rhythms",
  description:
    "Cardiac pacemakers are electronic devices that deliver electrical impulses to stimulate the heart when the natural conduction system fails. Understanding pacemaker function and recognizing pacemaker rhythms on ECG is essential for nursing care of patients with these devices.",
};

export const typesOfPacemakers = {
  byChamber: [
    {
      title: "Single-chamber pacemakers",
      items: [
        "**Atrial (AAI):** Paces atrium only; used for sinus node dysfunction with intact AV conduction",
        "**Ventricular (VVI):** Paces ventricle only; most common single-chamber type",
      ],
    },
    {
      title: "Dual-chamber pacemakers (DDD)",
      items: [
        "Paces both atrium and ventricle",
        "Maintains AV synchrony",
        "Most physiologic pacing mode",
        "Preferred for complete heart block",
      ],
    },
    {
      title: "Biventricular pacemakers (CRT)",
      items: [
        "Cardiac Resynchronization Therapy",
        "Paces both ventricles simultaneously",
        "Used for heart failure with bundle branch block",
      ],
    },
  ],
  byFunction: [
    "**Demand (inhibited) pacemakers:** Fire only when intrinsic heart rate falls below set rate",
    "**Fixed-rate (asynchronous) pacemakers:** Fire at set rate regardless of intrinsic rhythm (rarely used)",
    "**Rate-responsive pacemakers:** Adjust rate based on activity level",
  ],
};

export const pacemakerCode = [
  {
    position: "1st Letter",
    meaning: "Chamber(s) Paced",
    letters: "A (Atrium), V (Ventricle), D (Dual)",
  },
  {
    position: "2nd Letter",
    meaning: "Chamber(s) Sensed",
    letters: "A (Atrium), V (Ventricle), D (Dual), O (None)",
  },
  {
    position: "3rd Letter",
    meaning: "Response to Sensing",
    letters: "I (Inhibited), T (Triggered), D (Dual), O (None)",
  },
  {
    position: "4th Letter",
    meaning: "Rate Modulation",
    letters: "R (Rate-responsive), O (None)",
  },
];

export const commonModes = [
  "**VVI:** Ventricle paced, ventricle sensed, inhibited by intrinsic beats",
  "**DDD:** Dual chambers paced and sensed, dual response (most common)",
  "**AAI:** Atrium paced, atrium sensed, inhibited by intrinsic beats",
];

export const ecgCharacteristics = {
  spike: [
    "**Appearance:** Thin vertical line on ECG",
    "**Represents:** Electrical impulse delivered by pacemaker",
    "**Atrial spike:** Followed by P wave",
    "**Ventricular spike:** Followed by wide QRS complex",
  ],
  ventricularPaced: [
    "**Pacemaker spike** followed by wide QRS complex (>0.12 seconds)",
    "**QRS morphology:** Looks like a PVC or bundle branch block",
    "**T wave:** Opposite direction from QRS",
    "**Rate:** Set by pacemaker (typically 60-80 bpm)",
    "**Rhythm:** Regular if pacing consistently",
  ],
  atrialPaced: [
    "**Pacemaker spike** followed by P wave",
    "**QRS complex:** Narrow (if AV conduction intact)",
    "**PR interval:** Normal (0.12-0.20 seconds)",
  ],
  dualChamberPaced: [
    "**Atrial spike** followed by P wave",
    "**Then ventricular spike** followed by wide QRS",
    "**AV interval:** Programmed delay between atrial and ventricular pacing",
    "**Maintains AV synchrony**",
  ],
};

export const pacemakerFunction = {
  normal: [
    {
      title:
        "Capture: Pacemaker spike followed by appropriate chamber depolarization",
      items: [
        "Atrial capture: Spike → P wave",
        "Ventricular capture: Spike → QRS complex",
      ],
    },
    {
      title:
        "Sensing: Pacemaker detects intrinsic cardiac activity and responds appropriately",
      items: [
        "Inhibits pacing when intrinsic rate is adequate",
        "Resumes pacing when intrinsic rate falls below set rate",
      ],
    },
    {
      title: "Rate: Paces at programmed rate when needed",
      items: [],
    },
  ],
};

export const malfunctions = [
  {
    title: "Failure to Capture",
    definition: "Pacemaker spike present but no resulting depolarization",
    ecgAppearance:
      "Pacemaker spike not followed by P wave (atrial) or QRS (ventricular)",
    causes: [
      "Lead dislodgement or fracture",
      "Battery depletion",
      "Output setting too low",
      "Increased pacing threshold (fibrosis at lead tip)",
      "Electrolyte imbalances (hyperkalemia)",
      "Myocardial perforation",
    ],
    clinicalSignificance:
      "Patient may become symptomatic if dependent on pacemaker",
  },
  {
    title: "Failure to Sense (Undersensing)",
    definition: "Pacemaker fails to detect intrinsic cardiac activity",
    ecgAppearance:
      "Pacemaker spikes occur when they shouldn't (during or after intrinsic beats)",
    causes: [
      "Lead dislodgement",
      "Sensitivity setting too low",
      "Battery depletion",
      "Intrinsic signal too small to detect",
    ],
    clinicalSignificance: "Risk of R-on-T phenomenon if spike falls on T wave",
  },
  {
    title: "Oversensing",
    definition: "Pacemaker detects signals that aren't cardiac activity",
    ecgAppearance:
      "Pacemaker fails to pace when it should; inappropriate inhibition",
    causes: [
      "Sensitivity setting too high",
      "Sensing T waves as QRS complexes",
      "Electromagnetic interference",
      "Muscle potentials (myopotentials)",
    ],
    clinicalSignificance: "Patient may become symptomatic from bradycardia",
  },
];

export const pacemakerMediatedTachycardia = {
  title: "Pacemaker-Mediated Tachycardia",
  features: [
    "**Occurs in:** Dual-chamber pacemakers",
    "**Mechanism:** Retrograde conduction creates endless loop tachycardia",
    "**Rate:** Usually at upper rate limit of pacemaker",
    "**Treatment:** Reprogram pacemaker settings",
  ],
};

export const nursingAssessment = {
  title: "Systematic Evaluation",
  sections: [
    {
      title: "Verify pacemaker function:",
      items: [
        "Check for pacemaker spikes on ECG",
        "Verify capture (spike followed by depolarization)",
        "Assess sensing (appropriate inhibition of pacing)",
        "Confirm rate is at or above set rate",
      ],
    },
    {
      title: "Assess patient status:",
      items: [
        "Vital signs, especially heart rate and blood pressure",
        "Symptoms: dizziness, syncope, palpitations, dyspnea",
        "Signs of adequate perfusion",
      ],
    },
    {
      title: "Check pacemaker site:",
      items: [
        "Inspect for swelling, redness, drainage",
        "Palpate for tenderness or hematoma",
        "Assess for signs of infection",
      ],
    },
    {
      title: "Review pacemaker information:",
      items: [
        "Type and mode of pacemaker",
        "Programmed settings (rate, output, sensitivity)",
        "Date of implantation",
        "Battery life and last interrogation",
      ],
    },
  ],
};

export const nursingInterventions = {
  title: "Immediate Actions",
  sections: [
    {
      title:
        "Assess patient first: Is patient symptomatic? Hemodynamically stable?",
      items: [],
    },
    {
      title: "If symptomatic or unstable:",
      items: [
        "Notify provider immediately",
        "Apply transcutaneous pacing pads if available",
        "Prepare for temporary transvenous pacing",
        "Administer medications as ordered (atropine, dopamine)",
      ],
    },
    {
      title: "Troubleshooting steps:",
      items: [
        "Check connections if external pacemaker",
        "Reposition patient (may improve capture)",
        "Check for electromagnetic interference",
        "Obtain chest X-ray to assess lead position",
      ],
    },
    {
      title: "Document malfunction:",
      items: [
        "Obtain rhythm strip showing malfunction",
        "Record patient symptoms and vital signs",
        "Note interventions and response",
      ],
    },
    {
      title:
        "Arrange pacemaker interrogation: Device check by cardiology or pacemaker clinic",
      items: [],
    },
  ],
};

export const patientEducation = {
  title: "Patient Education",
  items: [
    "**Pacemaker function:** Explain how device works and why it's needed",
    "**Incision care:** Keep clean and dry, watch for signs of infection",
    {
      title: "**Activity restrictions:**",
      subItems: [
        "Limit arm movement on pacemaker side for 4-6 weeks",
        "Avoid heavy lifting (>10 lbs) for 4-6 weeks",
        "Gradual return to normal activities",
      ],
    },
    {
      title: "**Precautions:**",
      subItems: [
        "Avoid strong magnetic fields (MRI - check if MRI-compatible)",
        "Keep cell phones 6 inches away from pacemaker",
        "Inform healthcare providers and airport security about pacemaker",
        "Carry pacemaker ID card at all times",
      ],
    },
    {
      title: "**Follow-up care:**",
      subItems: [
        "Regular pacemaker checks (every 3-12 months)",
        "Battery typically lasts 5-15 years",
        "Remote monitoring available for some devices",
      ],
    },
    {
      title: "**Warning signs to report:**",
      subItems: [
        "Dizziness, syncope, or near-syncope",
        "Palpitations or irregular heartbeat",
        "Chest pain or shortness of breath",
        "Swelling, redness, or drainage at pacemaker site",
        "Hiccups (may indicate lead stimulating diaphragm)",
      ],
    },
  ],
};

export const quickReference = {
  title: "Quick Reference: Pacemaker Assessment",
  items: [
    "**Check for:** Capture, Sensing, Rate",
    "**Capture:** Spike → Depolarization",
    "**Sensing:** Appropriate inhibition of pacing",
    "**Malfunctions:** Failure to capture, undersensing, oversensing",
    "**Remember:** Always assess the patient, not just the monitor!",
  ],
};

export const nclexHighYield = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "bg-purple-50",
  icon: Zap,
  points: [
    "**Pacemaker Spike:** Vertical line before P wave (atrial pacing) or QRS (ventricular pacing)",
    "**Capture:** Pacemaker spike followed by appropriate waveform (P or QRS) - this is normal",
    "**Failure to Capture:** Spike present but no P or QRS follows - serious malfunction",
    "**Failure to Pace:** No spike when expected - battery failure or lead problem",
    "**Failure to Sense:** Pacemaker fires when it shouldn't - can cause R-on-T and VF",
    "**Pacemaker Codes:** First letter = chamber paced, Second = chamber sensed, Third = response",
    "**Common Types:** VVI (ventricle paced/sensed/inhibited), DDD (dual chamber)",
    "**Magnet Application:** Placing magnet over pacemaker converts to asynchronous mode (for testing)",
    "**Patient Teaching:** Avoid MRI (unless MRI-safe), carry pacemaker ID card, monitor pulse daily",
    "**Electromagnetic Interference:** Avoid arc welding, large magnets, some medical equipment",
  ],
};
