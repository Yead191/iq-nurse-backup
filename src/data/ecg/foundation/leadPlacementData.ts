import {
  Stethoscope,
  Star,
  CheckCircle,
  AlertTriangle,
  Heart,
  MapPin,
} from "lucide-react";
import { InfoBoxData } from "@/components/shared/InfoBox";

export const pageIntro = {
  title: "ECG Lead Placement",
  description:
    "Proper electrode placement is essential for accurate ECG monitoring and interpretation. Different lead configurations provide different views of the heart's electrical activity, allowing healthcare providers to identify rhythm disturbances and localize cardiac abnormalities.",
};

export const understandingLeads = {
  title: "Understanding ECG Leads",
  content:
    "ECG leads are electrical viewpoints of the heart. Each lead records the difference in electrical potential between two points on the body. Think of leads as cameras positioned around the heart, each capturing the electrical activity from a different angle. The more leads used, the more complete the picture of cardiac electrical activity.",
};

export interface Electrode {
  name: string;
  code: string;
  color: string;
  location: string;
  landmark?: string;
  extraInfo?: string;
  dotColor: string; // Taildwind hex or name for the dot
}

export const threeLeadSystem = {
  title: "3-Lead ECG Monitoring",
  purpose:
    "Basic continuous cardiac monitoring, commonly used in telemetry units, emergency departments, and during transport",
  provides: "Leads I, II, and III (limb leads only)",
  electrodes: [
    {
      name: "Right Arm",
      code: "RA",
      color: "White",
      dotColor: "#e2e8f0", // White/Light Gray
      location:
        "Right upper chest, below the clavicle, near the right shoulder",
      landmark: "Second intercostal space, mid-clavicular line on the right",
    },
    {
      name: "Left Arm",
      code: "LA",
      color: "Black",
      dotColor: "#1e293b", // Black/Dark Gray
      location: "Left upper chest, below the clavicle, near the left shoulder",
      landmark: "Second intercostal space, mid-clavicular line on the left",
    },
    {
      name: "Left Leg",
      code: "LL",
      color: "Red",
      dotColor: "#ef4444", // Red
      location: "Left lower chest or abdomen",
      landmark: "Left lower rib cage or left lower quadrant of abdomen",
    },
  ] as Electrode[],
  tips: {
    title: "3-Lead Monitoring Tips",
    defaultColor: "#3b82f6",
    Icon: Stethoscope,
    features: [
      "Lead II is preferred: Usually provides the clearest P waves for rhythm interpretation",
      "Avoid bony prominences: Place electrodes on muscle, not over bones",
      "Skin preparation: Clean skin with alcohol, allow to dry, and shave if necessary",
      "Electrode quality: Ensure electrodes are fresh and have good adhesive",
      "Cable management: Secure cables to prevent tension on electrodes",
    ],
  } as InfoBoxData,
};

export const fiveLeadSystem = {
  title: "5-Lead ECG Monitoring",
  purpose:
    "Enhanced continuous monitoring with additional chest lead, commonly used in critical care units and operating rooms",
  provides:
    "Leads I, II, III, aVR, aVL, aVF, and one chest lead (usually V1 or V5)",
  electrodes: [
    {
      name: "Right Arm",
      code: "RA",
      color: "White",
      dotColor: "#e2e8f0",
      location: "Right upper chest, below the right clavicle",
    },
    {
      name: "Left Arm",
      code: "LA",
      color: "Black",
      dotColor: "#1e293b",
      location: "Left upper chest, below the left clavicle",
    },
    {
      name: "Left Leg",
      code: "LL",
      color: "Red",
      dotColor: "#ef4444",
      location: "Left lower chest or abdomen",
    },
    {
      name: "Right Leg",
      code: "RL",
      color: "Green",
      dotColor: "#22c55e", // Green
      location: "Right lower chest or abdomen (ground electrode)",
    },
    {
      name: "Chest",
      code: "C",
      color: "Brown",
      dotColor: "#78350f", // Brown
      location: "Varies (V1 or V5 positions are common)",
      extraInfo:
        "V1 Location: 4th intercostal space, right sternal border\n\nV5 Location: 5th intercostal space, left anterior axillary line\n\nV1 is best for detecting arrhythmias; V5 is best for detecting ischemia",
    },
  ] as Electrode[],
  advantages: {
    title: "5-Lead Advantages",
    defaultColor: "#22c55e",
    Icon: CheckCircle,
    features: [
      "Provides seven different views of the heart simultaneously",
      "Better detection of ST segment changes and ischemia",
      "Improved arrhythmia identification and differentiation",
      "Can monitor both rhythm and ischemia concurrently",
      "Allows selection of optimal lead for each patient",
    ],
  } as InfoBoxData,
};

export const twelveLeadSystem = {
  title: "12-Lead ECG",
  purpose:
    "Comprehensive diagnostic ECG providing a complete picture of cardiac electrical activity from multiple angles",
  provides:
    "12 different views of the heart (6 limb leads + 6 precordial/chest leads)",
  whenToObtain:
    "Chest pain, suspected MI, arrhythmia evaluation, pre-operative assessment, routine screening",
  limbLeads: [
    {
      electrode: "Right Arm (RA)",
      color: "White",
      placement: "Right wrist or right upper arm",
    },
    {
      electrode: "Left Arm (LA)",
      color: "Black",
      placement: "Left wrist or left upper arm",
    },
    {
      electrode: "Right Leg (RL)",
      color: "Green",
      placement: "Right ankle or right lower abdomen (ground)",
    },
    {
      electrode: "Left Leg (LL)",
      color: "Red",
      placement: "Left ankle or left lower abdomen",
    },
  ],
  precordialLeads: [
    {
      lead: "V1",
      location: "4th intercostal space, right sternal border",
      view: "Septum",
    },
    {
      lead: "V2",
      location: "4th intercostal space, left sternal border",
      view: "Septum",
    },
    { lead: "V3", location: "Midway between V2 and V4", view: "Anterior wall" },
    {
      lead: "V4",
      location: "5th intercostal space, left mid-clavicular line",
      view: "Anterior wall",
    },
    {
      lead: "V5",
      location: "5th intercostal space, left anterior axillary line",
      view: "Lateral wall",
    },
    {
      lead: "V6",
      location: "5th intercostal space, left mid-axillary line",
      view: "Lateral wall",
    },
  ],
  landmarksTip: {
    title: "Finding the Correct Intercostal Spaces",
    defaultColor: "#3b82f6", // using blue as "MapPin" concept context
    Icon: MapPin,
    description: "",
    features: [
      "Locate the Angle of Louis: Palpate the sternal notch at the top of the sternum, then move down to feel a bony ridge. This is the Angle of Louis.",
      "Identify the 2nd intercostal space: The Angle of Louis is at the level of the 2nd rib. The space below it is the 2nd intercostal space.",
      "Count down to the 4th intercostal space: From the 2nd intercostal space, count down two more spaces (3rd, then 4th).",
      "Place V1 and V2: V1 is at the 4th intercostal space, right sternal border. V2 is at the 4th intercostal space, left sternal border.",
      "Locate the 5th intercostal space: Count down one more space from V2.",
      "Place V4 first: V4 is at the 5th intercostal space, mid-clavicular line.",
      "Place V3: V3 goes midway between V2 and V4.",
      "Place V5 and V6: Both at the 5th intercostal space. V5 is at the anterior axillary line, V6 is at the mid-axillary line.",
    ],
  } as InfoBoxData,
};

export const leadViews = {
  title: "Lead Views and Cardiac Territories",
  data: [
    {
      territory: "Inferior Wall",
      leads: "II, III, aVF",
      artery: "Right Coronary Artery (RCA)",
    },
    {
      territory: "Lateral Wall",
      leads: "I, aVL, V5, V6",
      artery: "Left Circumflex Artery (LCx)",
    },
    {
      territory: "Anterior Wall",
      leads: "V3, V4",
      artery: "Left Anterior Descending (LAD)",
    },
    {
      territory: "Septal",
      leads: "V1, V2",
      artery: "Left Anterior Descending (LAD)",
    },
  ],
  errorsTip: {
    title: "Common Placement Errors to Avoid",
    defaultColor: "#f59e0b",
    Icon: AlertTriangle,
    features: [
      "Incorrect intercostal space: Counting errors lead to misplaced chest leads, potentially missing or misinterpreting ECG changes",
      "Limb lead reversal: Switching RA and LA electrodes inverts Lead I and can mimic cardiac abnormalities",
      "Chest lead placement too high or low: Even one intercostal space off can significantly alter the ECG appearance",
      "Inconsistent placement: When comparing serial ECGs, leads must be placed in the same locations",
      "Placement over breast tissue: In female patients, place V4-V6 under the breast, not on top of it",
      "Poor skin contact: Inadequate skin preparation leads to artifact and poor signal quality",
    ],
  } as InfoBoxData,
};

export const specialConsiderations = {
  title: "Special Considerations",
  items: [
    {
      label: "Modified Lead Placement",
      content:
        "In certain situations, standard lead placement may need to be modified:",
    },
    {
      label: "Amputations",
      content:
        "Place limb electrodes on the stump or on the torso as close to the standard position as possible",
    },
    {
      label: "Dressings or wounds",
      content:
        "Place electrodes around the affected area while maintaining proper lead orientation",
    },
    {
      label: "Morbid obesity",
      content:
        "May need to lift pannus or breast tissue to access proper anatomical landmarks",
    },
    {
      label: "Pacemakers or ICDs",
      content:
        "Avoid placing electrodes directly over the device; place at least 1 inch away",
    },
    {
      label: "Female patients",
      content:
        "For chest leads V4-V6, place electrodes under the breast tissue, not on top",
    },
    {
      label: "Right-Sided ECG (V3R-V6R)",
      content:
        "Used to detect right ventricular infarction, particularly in inferior wall MI. Mirror the standard chest lead placement on the right side of the chest.",
    },
    {
      label: "Posterior ECG (V7-V9)",
      content:
        "Used to detect posterior wall MI. Place leads at the 5th intercostal space: V7 at posterior axillary line, V8 at mid-scapular line, V9 at left paraspinal area.",
    },
  ],
};

export const nursingResponsibilities = {
  title: "Nursing Responsibilities for ECG Acquisition",
  defaultColor: "#e11d48", // Rose/Red
  Icon: Heart,
  features: [
    "Patient preparation: Explain the procedure, ensure privacy, and position the patient supine",
    "Skin preparation: Clean skin with alcohol, allow to dry completely, shave excess hair if needed",
    "Accurate placement: Use anatomical landmarks to ensure correct electrode positioning",
    "Patient comfort: Ensure patient is relaxed and warm to minimize artifact",
    "Quality check: Verify good signal quality before recording",
    "Documentation: Label the ECG with patient information, date, time, and any relevant clinical data",
    "Comparison: Compare with previous ECGs when available",
    "Communication: Report significant findings to the healthcare provider promptly",
  ],
} as InfoBoxData;

export const nclexHighYield = {
  title: "NCLEX-RN High-Yield Points",
  defaultColor: "#9333ea",
  Icon: Star,
  features: [
    "3-Lead System: Basic monitoring, shows one view, good for rate and rhythm only",
    "5-Lead System: Allows viewing of 7 leads, better for ischemia detection",
    "12-Lead ECG: Gold standard for MI diagnosis, shows all cardiac surfaces",
    "Lead Placement Errors: Can mimic arrhythmias or miss critical findings - verify placement",
    "Limb Leads (I, II, III, aVR, aVL, aVF): View frontal plane of heart",
    "Precordial Leads (V1-V6): View horizontal plane, essential for anterior MI detection",
    "Right-Sided Leads: V4R critical for diagnosing right ventricular infarction",
    "Posterior Leads: Used when posterior MI suspected",
  ],
} as InfoBoxData;
