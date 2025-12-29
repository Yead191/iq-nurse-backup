import { Star } from "lucide-react";

export const factorsAffectingData = {
  title: "Factors Affecting Vital Signs",
  physiologicalFactors: {
    title: "Physiological Factors",
    items: [
      "Age: Infants/children have higher HR and RR, lower BP",
      "Gender: Males typically have slightly higher BP",
      "Exercise: Increases HR, RR, BP, and temperature",
      "Stress/Anxiety: Increases all vital signs",
      "Pain: Increases HR, RR, and BP",
      "Fever: Increases HR and RR (approximately 10 bpm per 1°F increase)",
      "Circadian Rhythm: Temperature lowest in early morning, highest in late afternoon",
    ],
  },
  environmentalFactors: {
    title: "Environmental & External Factors",
    items: [
      "Temperature: Hot environment increases HR and RR; cold decreases",
      "Altitude: High altitude increases RR and HR",
      "Medications: Various effects depending on drug class",
      "Caffeine/Nicotine: Increases HR and BP",
      "Alcohol: Initially increases then decreases BP",
      "Body Position: Standing increases HR; lying decreases",
      "Time of Day: Vital signs vary throughout day",
    ],
  },
};

export const medicationEffectsData = {
  title: "NCLEX-RN: Medication Effects on Vital Signs",
  Icon: Star,
  defaultColor: "#e74c3c",
  features: [
    "Beta-Blockers: Decrease HR and BP (e.g., metoprolol, atenolol)",
    "Calcium Channel Blockers: Decrease HR and BP (e.g., diltiazem, verapamil)",
    "ACE Inhibitors: Decrease BP (e.g., lisinopril, enalapril)",
    "Diuretics: Decrease BP (e.g., furosemide, hydrochlorothiazide)",
    "Digoxin: Decreases HR, increases contractility",
    "Atropine: Increases HR",
    "Epinephrine: Increases HR, BP, and RR",
    "Opioids: Decrease RR and may decrease BP",
    "Bronchodilators: May increase HR (e.g., albuterol)",
    "Antipyretics: Decrease temperature (e.g., acetaminophen, ibuprofen)",
  ],
};
