import { AlertTriangle, Lightbulb, Star, Gem } from "lucide-react";

export const measurementSystemsHeader = {
  title: "Measurement Systems",
  description:
    "Healthcare professionals use multiple measurement systems, with the metric system being the most common. Understanding conversions between systems is essential for accurate medication administration.",
};

// --- Metric System ---
export const metricSystemData = {
  title: "Metric System",
  description:
    "The metric system is the primary measurement system used in healthcare worldwide. It's based on units of 10, making conversions straightforward. Common metric units include grams (g), milligrams (mg), micrograms (mcg), liters (L), and milliliters (mL).",
  table: {
    headers: ["Unit", "Abbreviation", "Equivalent"],
    rows: [
      { unit: "Kilogram", abbreviation: "kg", equivalent: "1000 grams" },
      { unit: "Gram", abbreviation: "g or gm", equivalent: "1000 milligrams" },
      { unit: "Milligram", abbreviation: "mg", equivalent: "1000 micrograms" },
      {
        unit: "Microgram",
        abbreviation: "mcg",
        equivalent: "0.001 milligrams",
      },
      { unit: "Liter", abbreviation: "L", equivalent: "1000 milliliters" },
      { unit: "Milliliter", abbreviation: "mL", equivalent: "0.001 liters" },
    ],
  },
  safetyAlert: {
    title: "SAFETY ALERT",
    Icon: AlertTriangle,
    defaultColor: "#EF4444",
    features: [
      'Critical Safety Point: Never abbreviate "microgram" as "µg" or "ug" - always write "mcg" to prevent confusion with "mg" which could result in a 1000-fold overdose. This is a Joint Commission requirement and NCLEX-RN standard.',
    ],
  },
  example: {
    title: "Example: Metric Conversions",
    Icon: Lightbulb,
    defaultColor: "#10B981",
    features: [
      "Convert 2.5 g to mg: 2.5 g × 1000 = 2500 mg",
      "Convert 500 mcg to mg: 500 mcg ÷ 1000 = 0.5 mg",
      "Convert 1.5 L to mL: 1.5 L × 1000 = 1500 mL",
    ],
  },
};

// --- Household System ---
export const householdSystemData = {
  title: "Household System",
  description:
    "The household system uses common measurements like teaspoons, tablespoons, cups, and ounces. While less precise than the metric system, it's often used for patient education and home medication administration.",
  table: {
    headers: ["Household Unit", "Metric Equivalent"],
    rows: [
      { unit: "1 teaspoon (tsp)", equivalent: "5 mL" },
      { unit: "1 tablespoon (Tbsp)", equivalent: "15 mL" },
      { unit: "1 fluid ounce (oz)", equivalent: "30 mL" },
      { unit: "1 cup", equivalent: "8 oz or 240 mL" },
      { unit: "1 pint", equivalent: "16 oz or 480 mL" },
      { unit: "1 quart", equivalent: "32 oz or 960 mL" },
    ],
  },
  clinicalPearl: {
    title: "CLINICAL PEARL",
    Icon: Gem,
    defaultColor: "#A855F7",
    features: [
      "When teaching patients about liquid medications at home, always provide a calibrated measuring device rather than relying on household spoons, which vary in size and can lead to dosing errors.",
    ],
  },
};

// --- Weight Conversions ---
export const weightConversionsData = {
  title: "Weight Conversions",
  description:
    "Weight conversions are critical for calculating weight-based dosages, especially in pediatrics and critical care. The most common conversion is between pounds and kilograms.",
  formulas: {
    title: "Weight Conversion Formulas",
    items: [
      "Pounds to Kilograms: lb ÷ 2.2 = kg",
      "Kilograms to Pounds: kg × 2.2 = lb",
    ],
  },
  highlight: {
    title: "NCLEX-RN HIGHLIGHT",
    Icon: Star,
    defaultColor: "#F59E0B",
    features: [
      "NCLEX-RN Essential: Most weight-based medication calculations on the NCLEX-RN require converting pounds to kilograms first. Always round to the nearest tenth (one decimal place) for weight conversions unless otherwise specified. Remember 1 kg = 2.2 lb is the standard conversion factor.",
    ],
  },
  example: {
    title: "Example: Weight Conversions",
    Icon: Lightbulb,
    defaultColor: "#10B981",
    features: [
      "Convert 165 lb to kg: 165 ÷ 2.2 = 75 kg",
      "Convert 65 kg to lb: 65 × 2.2 = 143 lb",
    ],
  },
};

// --- Apothecary System ---
export const apothecarySystemData = {
  title: "Apothecary System",
  description:
    "The apothecary system is an older measurement system rarely used in modern healthcare but may still appear on the NCLEX-RN. Key units include grains (gr), drams, and minims.",
  conversions: {
    title: "Common Apothecary Conversions:",
    defaultColor: "#EAB308",
    features: [
      "1 grain (gr) = 60-65 mg (use 60 mg for calculations)",
      "15 grains = 1 gram",
      "1 dram = 4 mL",
    ],
  },
  clinicalPearl: {
    title: "CLINICAL PEARL",
    Icon: Gem,
    defaultColor: "#A855F7",
    features: [
      "While the apothecary system is largely obsolete, you may still see aspirin doses expressed in grains (e.g., aspirin 5 grains = 325 mg). Always convert to metric for calculations.",
    ],
  },
};
