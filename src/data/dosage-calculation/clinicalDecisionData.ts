import { Star, Lightbulb, AlertTriangle, Gem } from "lucide-react";

export const clinicalDecisionHeader = {
  title: "Clinical Decision Making & Safety",
  description:
    "Accurate calculation is only part of safe medication administration. Critical thinking and clinical judgment are essential to prevent medication errors and ensure patient safety.",
};

export const fiveRightsData = {
  title: "The Five Rights:",
  defaultColor: "#EAB308",
  features: [
    "Right Patient: Verify patient identity using two identifiers (name and date of birth)",
    "Right Medication: Check the medication label three times",
    "Right Dose: Calculate accurately and verify safe dose range",
    "Right Route: Ensure the route matches the order and is appropriate",
    "Right Time: Administer within the appropriate time window",
  ],
};

export const nclexHighlight1 = {
  title: "NCLEX-RN HIGHLIGHT",
  Icon: Star,
  defaultColor: "#F59E0B",
  features: [
    'NCLEX-RN Expansion: Modern practice includes additional "rights": Right Documentation, Right Reason, Right to Refuse, and Right Response (evaluation). The NCLEX-RN may test your understanding of all these principles in medication administration scenarios.',
  ],
};

export const safeDoseVerification = {
  title: "Safe Dose Verification Example",
  Icon: Lightbulb,
  defaultColor: "#10B981",
  features: [
    "Order: Amoxicillin 400 mg PO TID for a 4-year-old",
    "Child's weight: 18 kg",
    "Safe range: 20-40 mg/kg/day divided TID",
    "Calculate minimum: 20 mg/kg × 18 kg = 360 mg/day",
    "Calculate maximum: 40 mg/kg × 18 kg = 720 mg/day",
    "Ordered dose: 400 mg × 3 = 1200 mg/day",
    "Decision: UNSAFE - exceeds maximum safe dose. Contact prescriber.",
  ],
};

export const safetyAlert1 = {
  title: "SAFETY ALERT",
  Icon: AlertTriangle,
  defaultColor: "#EF4444",
  features: [
    "Critical Action: If a calculated dose falls outside the safe range, NEVER administer the medication. Contact the prescriber immediately to clarify the order. Document your actions and the prescriber's response.",
  ],
};

export const deviceSelection = {
  title: "Measurement Device Selection:",
  defaultColor: "#EAB308",
  features: [
    "Oral Syringe: For liquid oral medications, especially volumes less than 10 mL",
    "Medicine Cup: For larger volumes of oral liquids (5-30 mL)",
    "Calibrated Dropper: For precise small volumes (pediatric medications)",
    "Tuberculin Syringe: For volumes less than 1 mL (0.01 mL precision)",
    "3 mL Syringe: For most IM and SubQ injections",
    "Insulin Syringe: ONLY for insulin (marked in units, not mL)",
  ],
};

export const clinicalPearl1 = {
  title: "CLINICAL PEARL",
  Icon: Gem,
  defaultColor: "#A855F7",
  features: [
    "Never use an insulin syringe for any medication other than insulin, and never use a regular syringe for insulin. This prevents potentially fatal dosing errors.",
  ],
};

export const safetyAlert2 = {
  title: "SAFETY ALERT",
  Icon: AlertTriangle,
  defaultColor: "#EF4444",
  description: "High-Risk Error Situations:",
  features: [
    "Decimal point errors (10-fold or 100-fold overdoses)",
    "Confusing mg with mcg (1000-fold error)",
    "Incorrect weight conversions (lb vs kg)",
    "Misreading drug labels (look-alike/sound-alike medications)",
    "Calculation errors under time pressure",
    "Failing to verify safe dose ranges",
  ],
};

export const errorPrevention = {
  title: "Error Prevention Strategies:",
  defaultColor: "#EAB308",
  features: [
    "Always use a calculator for complex calculations",
    "Double-check all calculations using a different method",
    "Have another nurse verify high-alert medication calculations",
    "Use leading zeros (0.5 mg) and avoid trailing zeros (5 mg, not 5.0 mg)",
    'Write out "units" instead of using "U" to prevent misreading',
    "Question orders that seem unusual or excessive",
    "Consult drug references when unfamiliar with a medication",
    "Never rush medication administration",
  ],
};

export const nclexHighlight2 = {
  title: "NCLEX-RN HIGHLIGHT",
  Icon: Star,
  defaultColor: "#F59E0B",
  features: [
    "NCLEX-RN Critical Thinking: The NCLEX-RN tests not just your ability to calculate doses, but also your clinical judgment. Questions may present scenarios where the calculated dose is mathematically correct but clinically inappropriate. You must recognize these situations and select the safest nursing action, which often involves contacting the prescriber.",
  ],
};

export const criticalThinkingScenario = {
  title: "Critical Thinking Scenario",
  Icon: Lightbulb,
  defaultColor: "#10B981",
  description:
    "Situation: You calculate that a patient needs 15 tablets of a medication for a single dose. \nCritical Thinking Questions:",
  features: [
    "Is this a reasonable number of tablets?",
    "Did I use the correct strength from the label?",
    "Did I convert units correctly?",
    "Is there a decimal point error?",
    "Should I verify this order with the prescriber?",
    "Action: Recalculate, verify the order, and consult with the prescriber before administering.",
  ],
};

export const documentationRequirements = {
  title: "Documentation Requirements:",
  defaultColor: "#EAB308",
  features: [
    "Document immediately after administration (never before)",
    "Include medication name, dose, route, time, and site (for injections)",
    "Document patient response and any adverse effects",
    "Document refusals and reasons",
    "Document any clarifications obtained from prescriber",
    "Use only approved abbreviations per facility policy",
  ],
};

export const clinicalPearl2 = {
  title: "CLINICAL PEARL",
  Icon: Gem,
  defaultColor: "#A855F7",
  features: [
    "When communicating medication concerns to prescribers, use the SBAR format (Situation, Background, Assessment, Recommendation) to ensure clear, concise communication and promote patient safety.",
  ],
};
