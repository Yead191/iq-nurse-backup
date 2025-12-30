export const quickReferenceHeader = {
  title: "Quick Reference Guide",
};

export const essentialFormulas = [
  "Desired/Have × Vehicle = Amount to Give",
  "Flow Rate (mL/hr) = Volume (mL) ÷ Time (hr)",
  "Drip Rate (gtt/min) = (Volume × Drop Factor) ÷ Time (min)",
  "Weight (kg) = Weight (lb) ÷ 2.2",
];

export const criticalConversions = {
  headers: ["From", "To", "Conversion"],
  rows: [
    { from: "1 kg", to: "lb", conversion: "2.2 lb" },
    { from: "1 g", to: "mg", conversion: "1000 mg" },
    { from: "1 mg", to: "mcg", conversion: "1000 mcg" },
    { from: "1 L", to: "mL", conversion: "1000 mL" },
    { from: "1 tsp", to: "mL", conversion: "5 mL" },
    { from: "1 Tbsp", to: "mL", conversion: "15 mL" },
    { from: "1 oz", to: "mL", conversion: "30 mL" },
    { from: "1 cup", to: "oz", conversion: "8 oz" },
  ],
};

export const safetyChecklistData = {
  title: "Safety Checklist",
  defaultColor: "#EAB308",
  features: [
    "Verify patient identity with two identifiers",
    "Check medication label three times",
    "Calculate dose accurately using appropriate method",
    "Verify dose falls within safe range",
    "Select correct measurement device",
    "Double-check calculations",
    "Have second nurse verify high-alert medications",
    "Question unusual or excessive doses",
    "Document immediately after administration",
    "Monitor patient response",
  ],
};
