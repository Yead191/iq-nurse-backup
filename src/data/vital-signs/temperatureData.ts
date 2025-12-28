import { Star, AlertTriangle, Thermometer } from "lucide-react";

export const temperatureData = {
  title: "Temperature",
  icon: Thermometer,
  normalRanges: {
    title: "Normal Temperature Ranges",
    headers: ["Route", "Normal Range (°F)", "Normal Range (°C)", "Notes"],
    rows: [
      {
        route: "Oral",
        rangeF: "97.6 - 99.6°F",
        rangeC: "36.5 - 37.5°C",
        notes: "Most common method for adults",
      },
      {
        route: "Rectal",
        rangeF: "98.6 - 100.6°F",
        rangeC: "37.0 - 38.1°C",
        notes: "Most accurate core temperature",
      },
      {
        route: "Axillary",
        rangeF: "96.6 - 98.6°F",
        rangeC: "35.9 - 37.0°C",
        notes: "Least accurate method",
      },
      {
        route: "Tympanic",
        rangeF: "97.2 - 100.0°F",
        rangeC: "36.2 - 37.8°C",
        notes: "Quick and convenient",
      },
      {
        route: "Temporal",
        rangeF: "97.2 - 100.0°F",
        rangeC: "36.2 - 37.8°C",
        notes: "Non-invasive, good for children",
      },
    ],
  },
  classifications: {
    title: "Temperature Classifications",
    items: [
      {
        title: "Hypothermia",
        tag: "Critical",
        tagColor: "bg-purple-600 text-white",
        range: "< 95°F (35°C)",
        points: [
          "Mild: 90-95°F (32-35°C)",
          "Moderate: 82-90°F (28-32°C)",
          "Severe: < 82°F (< 28°C)",
        ],
      },
      {
        title: "Normal",
        tag: "Normal",
        tagColor: "bg-green-500 text-white",
        range: "97.6 - 99.6°F (36.5 - 37.5°C)",
        points: [
          "Varies by individual",
          "Lower in morning",
          "Higher in evening",
        ],
      },
      {
        title: "Fever (Pyrexia)",
        tag: "Abnormal",
        tagColor: "bg-red-500 text-white",
        range: "> 100.4°F (38°C)",
        points: [
          "Low-grade: 100.4-102.2°F",
          "Moderate: 102.2-104°F",
          "High: > 104°F (40°C)",
        ],
      },
      {
        title: "Hyperpyrexia",
        tag: "Critical",
        tagColor: "bg-purple-600 text-white",
        range: "> 105.8°F (41°C)",
        points: [
          "Medical emergency",
          "Risk of organ damage",
          "Immediate intervention needed",
        ],
      },
    ],
  },
};

export const nclexPoints = {
  title: "NCLEX-RN High-Yield Points",
  Icon: Star,
  defaultColor: "#E74C3C",
  features: [
    "Contraindications for Oral Temperature: Unconscious patients, mouth breathing, recent oral intake (wait 15-30 minutes), oral surgery, infants/young children",
    "Contraindications for Rectal Temperature: Rectal surgery, diarrhea, hemorrhoids, cardiac patients (vagal stimulation), neutropenic patients (infection risk)",
    "Fever Management: Antipyretics (acetaminophen, ibuprofen), cooling measures, hydration, treat underlying cause",
    "Hypothermia Management: Gradual rewarming, warm blankets, warm IV fluids, monitor for dysrhythmias",
    "Remember: Rectal temperature is approximately 1°F higher than oral; axillary is approximately 1°F lower than oral",
  ],
};

export const criticalFindings = {
  title: "Critical Findings Requiring Immediate Action",
  Icon: AlertTriangle,
  defaultColor: "#C0392B",
  features: [
    "Temperature > 105°F (40.5°C) - Risk of seizures and organ damage",
    "Temperature < 95°F (35°C) - Risk of cardiac dysrhythmias",
    "Rapid temperature spike in immunocompromised patients",
    "Fever with altered mental status, stiff neck, or petechial rash (possible meningitis)",
  ],
};
