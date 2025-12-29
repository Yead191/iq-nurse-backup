import { Star } from "lucide-react";

export const documentationData = {
  title: "Documentation Guidelines",
  properDocumentation: {
    title: "Proper Vital Signs Documentation",
    example:
      "Vital signs assessed at 0800: T 98.6°F (oral), P 78 (radial, regular, +2 strength), R 16 (regular, unlabored), BP 122/78 (right arm, sitting), SpO2 98% on room air, Pain 3/10 (dull ache in lower back, relieved by position change). Patient resting comfortably in bed.",
    points: [
      "Include date and time of assessment",
      "Specify route for temperature (oral, rectal, axillary, tympanic, temporal)",
      "Note pulse site, rhythm, and quality",
      "Document respiratory rate, rhythm, depth, and effort",
      "Include BP site, patient position, and cuff size if non-standard",
      "Record oxygen saturation and oxygen delivery method",
      "Document pain score, location, quality, and interventions",
      "Note any abnormal findings and actions taken",
      "Document patient response to interventions",
    ],
  },
};

export const nclexDocumentationPrinciples = {
  title: "NCLEX-RN Documentation Principles",
  Icon: Star,
  defaultColor: "#e74c3c",
  features: [
    "Accuracy: Record exact values, never estimate or round significantly",
    "Timeliness: Document as soon as possible after assessment",
    "Completeness: Include all relevant information",
    "Objectivity: Use factual, descriptive terms; avoid judgmental language",
    "Legal Document: \"If it wasn't documented, it wasn't done\"",
    "Never: Chart in advance, alter records, or leave blank spaces",
  ],
};
