import { Star, AlertTriangle, Heart } from "lucide-react";

export const pulseData = {
  title: "Pulse (Heart Rate)",
  icon: Heart,
  normalRanges: {
    title: "Normal Pulse Ranges by Age",
    headers: ["Age Group", "Normal Range (bpm)", "Average (bpm)"],
    rows: [
      {
        age: "Newborn (0-1 month)",
        range: "100 - 180",
        average: "140",
      },
      {
        age: "Infant (1-12 months)",
        range: "100 - 160",
        average: "130",
      },
      {
        age: "Toddler (1-3 years)",
        range: "90 - 150",
        average: "120",
      },
      {
        age: "Preschool (3-6 years)",
        range: "80 - 140",
        average: "110",
      },
      {
        age: "School Age (6-12 years)",
        range: "70 - 120",
        average: "95",
      },
      {
        age: "Adolescent (12-18 years)",
        range: "60 - 100",
        average: "80",
      },
      {
        age: "Adult (18+ years)",
        range: "60 - 100",
        average: "70-80",
      },
      {
        age: "Well-Trained Athlete",
        range: "40 - 60",
        average: "50",
      },
    ],
  },
  assessmentTechnique: {
    title: "Pulse Assessment Technique",
    methods: [
      {
        title: "Radial Pulse (Most Common)",
        steps: [
          "Position patient's arm comfortably",
          "Use index and middle fingers (never thumb)",
          "Locate radial artery on thumb side of wrist",
          "Apply gentle pressure",
          "Count for 30 seconds and multiply by 2 (or 60 seconds if irregular)",
          "Note rate, rhythm, and strength",
        ],
      },
      {
        title: "Apical Pulse (Most Accurate)",
        steps: [
          "Position patient supine or sitting",
          "Locate 5th intercostal space at midclavicular line",
          "Place stethoscope diaphragm firmly",
          "Count for full 60 seconds",
          "Note rate and rhythm",
          "Required for infants, irregular rhythms, cardiac medications",
        ],
      },
    ],
  },
  characteristics: {
    title: "Pulse Characteristics",
    boxTitle: "What to Assess",
    items: [
      {
        label: "Rate",
        text: "Number of beats per minute",
      },
      {
        label: "Rhythm",
        text: "Regular or irregular pattern",
      },
      {
        label: "Strength/Amplitude",
        text: "Force of the pulse",
        subItems: [
          "0 = Absent",
          "+1 = Weak, thready, easily obliterated",
          "+2 = Normal, easily palpable",
          "+3 = Full, strong, easily palpable",
          "+4 = Bounding, cannot be obliterated",
        ],
      },
      {
        label: "Equality",
        text: "Compare bilateral pulses for symmetry",
      },
    ],
  },
};

export const pulseNclexPoints = {
  title: "NCLEX-RN High-Yield Points",
  Icon: Star,
  defaultColor: "#E74C3C",
  features: [
    "Tachycardia (> 100 bpm): Causes include fever, pain, anxiety, hypovolemia, hypoxia, heart failure, hyperthyroidism, medications (epinephrine, atropine)",
    "Bradycardia (< 60 bpm): Causes include athletic conditioning, hypothermia, increased intracranial pressure, medications (beta-blockers, digoxin), vagal stimulation",
    "Apical-Radial Pulse Deficit: Difference between apical and radial pulse; indicates ineffective cardiac contractions (common in atrial fibrillation)",
    "Before Cardiac Medications: Always assess apical pulse for 1 full minute before administering digoxin, beta-blockers, or calcium channel blockers",
    "Hold Digoxin if: Apical pulse < 60 bpm in adults or < 90-110 bpm in infants/children",
    "Never use thumb: Your thumb has its own pulse which can cause inaccurate readings",
  ],
};

export const pulseCriticalFindings = {
  title: "Critical Findings Requiring Immediate Action",
  Icon: AlertTriangle,
  defaultColor: "#C0392B",
  features: [
    "Heart rate > 150 bpm or < 40 bpm in adults",
    "New onset irregular rhythm",
    "Weak, thready pulse with signs of shock",
    "Significant pulse deficit (difference > 10 bpm between apical and radial)",
    "Absent peripheral pulses",
  ],
};
