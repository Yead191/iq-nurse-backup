import type React from "react";

export interface SkillStep {
  id: number;
  title: string;
  description: string;
  note?: string;
}

export interface ClinicalSkill {
  id: string;
  name: string;
  description: string;
  duration: { min: number; max: number };
  status: "not_started" | "in_progress" | "completed";
  likes: number;
  checklist: string[];
  procedureSteps: SkillStep[];
  videoUrl?: string;
  isBookmarked?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  token: number;
  logo: string;
  skills: ClinicalSkill[];
}

export const clinicalSkillsData: SkillCategory[] = [
  {
    id: "basic-skills",
    title: "Basic Skills",
    token: 20,
    logo: "❤️",
    skills: [
      {
        id: "blood-pressure",
        name: "Blood Pressure Measurement",
        description:
          "Accurately measure systolic and diastolic blood pressure using both manual and automated methods.",
        duration: { min: 5, max: 10 },
        status: "not_started",
        likes: 3,
        checklist: [
          "Sphygmomanometer (BP cuff)",
          "Stethoscope",
          "Alcohol wipes",
          "Patient chart or electronic health record",
          "Pen and paper for recording",
        ],
        procedureSteps: [
          {
            id: 1,
            title: "Prepare the patient",
            description:
              "Explain the procedure to the patient. Ensure patient has been resting for at least 5 minutes and is in a seated position with arm supported at heart level.",
          },
          {
            id: 2,
            title: "Select appropriate cuff size",
            description:
              "Choose a cuff with bladder width that is 40% of arm circumference and length that encircles 80–100% of the arm.",
          },
          {
            id: 3,
            title: "Position the cuff",
            description:
              "Palpate brachial artery in antecubital fossa. Place cuff 2–3 cm above antecubital fossa with center of bladder over arterial pulsation.",
            note: "Critical step: Incorrect cuff placement can lead to inaccurate readings.",
          },
          {
            id: 4,
            title: "Determine maximum inflation level",
            description:
              "Palpate radial pulse while inflating cuff. Note pressure at which pulse disappears and add 30 mmHg to estimate maximum inflation level.",
          },
        ],
      },
      {
        id: "temperature",
        name: "Temperature Measurement",
        description:
          "Measure body temperature using various methods including oral, tympanic, and axillary.",
        duration: { min: 3, max: 5 },
        status: "in_progress",
        likes: 5,
        checklist: [
          "Thermometer (appropriate type)",
          "Probe covers",
          "Lubricant (for rectal)",
          "Gloves",
        ],
        procedureSteps: [
          {
            id: 1,
            title: "Hand Hygiene",
            description: "Perform hand hygiene and put on gloves if indicated.",
          },
          {
            id: 2,
            title: "Prepare Equipment",
            description: "Ensure thermometer is functioning and clean.",
          },
        ],
      },
      {
        id: "pulse-oximetry",
        name: "Pulse Oximetry",
        description:
          "Monitor oxygen saturation levels using pulse oximeter devices.",
        duration: { min: 2, max: 4 },
        status: "completed",
        likes: 7,
        checklist: ["Pulse Oximeter", "Alcohol wipes"],
        procedureSteps: [
          {
            id: 1,
            title: "Select Site",
            description:
              "Choose an appropriate site with good perfusion (finger, earlobe, toe).",
          },
        ],
      },
    ],
  },
  {
    id: "gastrointestinal",
    title: "Gastrointestinal",
    token: 15,
    logo: "🫃",
    skills: [
      {
        id: "ng-tube",
        name: "NG Tube Insertion",
        description:
          "Insertion of Nasogastric tube for decompression or feeding.",
        duration: { min: 15, max: 20 },
        status: "not_started",
        likes: 12,
        checklist: ["NG Tube", "Lubricant", "Syringe", "Tape", "pH paper"],
        procedureSteps: [
          {
            id: 1,
            title: "Measure",
            description:
              "Measure from tip of nose to earlobe to xyphoid process.",
          },
        ],
      },
    ],
  },
  {
    id: "genitourinary",
    title: "Genitourinary",
    token: 12,
    logo: "⚡",
    skills: [],
  },
  {
    id: "infectious-diseases",
    title: "Infectious Diseases",
    token: 25,
    logo: "🦠",
    skills: [],
  },
  {
    id: "emergency-care",
    title: "Emergency Care",
    token: 18,
    logo: "🚑",
    skills: [],
  },
  {
    id: "neurological",
    title: "Neurological",
    token: 22,
    logo: "🧠",
    skills: [],
  },
];

export const clinicalSkils = {
  getClinicalSkillsData: clinicalSkillsData,
};
