import { Star } from "lucide-react";

const introData = {
  title: "Introduction to Vital Signs",
  description:
    "Vital signs are objective measurements of the body's basic functions and provide critical information about a patient's physiological status. The four primary vital signs are temperature, pulse, respiration, and blood pressure. Pain is often considered the \"fifth vital sign.\"",

  clinicalTip:
    "Always consider the patient's age, medical history, medications, and current condition when interpreting vital signs. What's normal for one patient may be abnormal for another.",
};

const nclexConcept = {
  title: "NCLEX-RN Key Concept",
  Icon: Star,
  defaultColor: "#E74C3C",
  features: [
    "Priority Assessment: Always assess vital signs before administering medications that affect cardiovascular or respiratory function",
    "Baseline Establishment: Obtain baseline vital signs on admission to compare with subsequent measurements",
    "Trending: Look for patterns and trends rather than isolated values",
    "Notify Provider: Report significant changes from baseline or values outside normal parameters",
  ],
};

export { introData, nclexConcept };
