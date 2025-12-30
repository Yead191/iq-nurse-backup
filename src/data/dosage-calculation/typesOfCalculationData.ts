export const typesOfCalculationData = {
  title: "Types of Calculations",
  sections: [
    {
      id: "oral",
      title: "Oral Medications",
      description:
        "Oral medications come in tablets, capsules, or liquid suspensions. Calculations determine the number of tablets or volume of liquid to administer.",
      layout: "grid",
      boxes: [
        {
          title: "Tablet Calculation Example",
          type: "example",
          icon: "lightbulb",
          content: [
            "Order: Metoprolol 100 mg PO daily",
            "Available: Metoprolol 50 mg tablets",
            "Calculate: 100 mg ÷ 50 mg × 1 tablet = 2 tablets",
            "Answer: Administer 2 tablets",
          ],
        },
        {
          title: "Liquid Medication Example",
          type: "example",
          icon: "lightbulb",
          content: [
            "Order: Acetaminophen 650 mg PO",
            "Available: 160 mg per 5 mL",
            "Calculate: 650/160 × 5 mL = 20.3 mL",
            "Answer: Administer 20 mL (round to nearest measurable amount)",
          ],
        },
        {
          title: "SAFETY ALERT",
          type: "alert",
          icon: "alert",
          content: [
            "Safety Check: If your calculation results in more than 3 tablets or an unusually large volume of liquid medication, double-check your work. Verify the order with the prescriber if the dose seems excessive.",
          ],
        },
      ],
    },
    {
      id: "parenteral",
      title: "Parenteral Medications",
      description:
        "Parenteral medications are administered via injection (IM, SubQ, IV). Calculations determine the volume to draw up in a syringe.",
      layout: "grid",
      boxes: [
        {
          title: "Intramuscular (IM) Injection Example",
          type: "example",
          icon: "lightbulb",
          content: [
            "Order: Morphine 8 mg IM now",
            "Available: Morphine 10 mg/mL",
            "Calculate: 8 mg ÷ 10 mg × 1 mL = 0.8 mL",
            "Answer: Draw up 0.8 mL",
          ],
        },
        {
          title: "Subcutaneous (SubQ) Injection Example",
          type: "example",
          icon: "lightbulb",
          content: [
            "Order: Heparin 5000 units SubQ",
            "Available: Heparin 10,000 units/mL",
            "Calculate: 5000 units ÷ 10,000 units × 1 mL = 0.5 mL",
            "Answer: Draw up 0.5 mL",
          ],
        },
        {
          title: "CLINICAL PEARL",
          type: "pearl",
          icon: "gem",
          content: [
            "Maximum injection volumes: IM (deltoid) = 1 mL, IM (ventrogluteal) = 3 mL, SubQ = 1.5 mL. If your calculation exceeds these volumes, consider dividing the dose or using a different route if appropriate.",
          ],
        },
      ],
    },
    {
      id: "iv-infusions",
      title: "Intravenous (IV) Infusions",
      description:
        "IV calculations are among the most critical and complex. They include flow rate calculations, drip rate calculations, and infusion time calculations.",
      layout: "stack",
      boxes: [
        {
          title: "IV Flow Rate Formula (mL/hr)",
          type: "formula",
          content: ["Flow Rate (mL/hr) = Total Volume (mL) ÷ Time (hours)"],
        },
        {
          title: "IV Flow Rate Example",
          type: "example",
          icon: "lightbulb",
          content: [
            "Order: 1000 mL NS over 8 hours",
            "Calculate: 1000 mL ÷ 8 hours = 125 mL/hr",
            "Answer: Set pump at 125 mL/hr",
          ],
        },
        {
          title: "IV Drip Rate Formula (gtt/min)",
          type: "formula",
          content: ["Drip Rate = (Volume × Drop Factor) ÷ Time (minutes)"],
        },
        {
          title: "Common IV Tubing Drop Factors:",
          type: "list",
          content: [
            "Macrodrip: 10 gtt/mL, 15 gtt/mL, or 20 gtt/mL",
            "Microdrip: 60 gtt/mL (always)",
          ],
        },
        {
          title: "IV Drip Rate Example",
          type: "example",
          icon: "lightbulb",
          content: [
            "Order: 1000 mL D5W over 10 hours",
            "Tubing: 15 gtt/mL drop factor",
            "Calculate: (1000 mL × 15 gtt/mL) ÷ 600 min = 25 gtt/min",
            "Answer: Set drip rate at 25 gtt/min",
          ],
        },
        {
          title: "NCLEX-RN HIGHLIGHT",
          type: "highlight",
          icon: "star",
          content: [
            "NCLEX-RN Critical Point: For IV drip rate calculations, always convert hours to minutes (multiply by 60). Microdrip tubing (60 gtt/mL) has a convenient shortcut: the drip rate in gtt/min equals the flow rate in mL/hr. For example, 100 mL/hr = 100 gtt/min with microdrip tubing.",
          ],
        },
      ],
    },
    {
      id: "iv-med-calc",
      title: "IV Medication Calculations",
      description:
        "Many IV medications are ordered based on concentration and infusion rate. These calculations require determining the dose being delivered per hour or per minute.",
      layout: "stack",
      boxes: [
        {
          title: "Heparin Drip Calculation",
          type: "example",
          icon: "lightbulb",
          content: [
            "Order: Heparin 1000 units/hr IV",
            "Available: 25,000 units in 250 mL D5W",
            "Calculate concentration: 25,000 units ÷ 250 mL = 100 units/mL",
            "Calculate rate: 1000 units/hr ÷ 100 units/mL = 10 mL/hr",
            "Answer: Set pump at 10 mL/hr",
          ],
        },
        {
          title: "Dopamine Drip Calculation",
          type: "example",
          icon: "lightbulb",
          content: [
            "Order: Dopamine 5 mcg/kg/min IV",
            "Patient weight: 80 kg",
            "Available: 400 mg in 250 mL D5W",
            "Calculate dose: 5 mcg/kg/min × 80 kg = 400 mcg/min",
            "Convert to mg: 400 mcg/min = 0.4 mg/min",
            "Calculate concentration: 400 mg ÷ 250 mL = 1.6 mg/mL",
            "Calculate rate: 0.4 mg/min ÷ 1.6 mg/mL = 0.25 mL/min",
            "Convert to mL/hr: 0.25 mL/min × 60 min = 15 mL/hr",
            "Answer: Set pump at 15 mL/hr",
          ],
        },
        {
          title: "SAFETY ALERT",
          type: "alert",
          icon: "alert",
          content: [
            "High-Alert Medications: Heparin, insulin, and vasoactive drips (dopamine, dobutamine, norepinephrine) are high-alert medications. Always have a second nurse independently verify your calculations before administration. This is a standard safety practice and NCLEX-RN expectation.",
          ],
        },
      ],
    },
    {
      id: "weight-based",
      title: "Weight-Based Dosages",
      description:
        "Weight-based dosing is critical in pediatrics, critical care, and for certain high-risk medications. Doses are calculated as mg/kg or mcg/kg of body weight.",
      layout: "stack",
      boxes: [
        {
          title: "Weight-Based Dosage Formula",
          type: "formula",
          content: ["Dose = Weight (kg) × Ordered Dose (mg/kg or mcg/kg)"],
        },
        {
          title: "Pediatric Weight-Based Example",
          type: "example",
          icon: "lightbulb",
          content: [
            "Order: Acetaminophen 15 mg/kg PO",
            "Patient weight: 44 lb",
            "Available: 160 mg/5 mL",
            "Step 1 - Convert weight: 44 lb ÷ 2.2 = 20 kg",
            "Step 2 - Calculate dose: 15 mg/kg × 20 kg = 300 mg",
            "Step 3 - Calculate volume: 300 mg ÷ 160 mg × 5 mL = 9.4 mL",
            "Answer: Administer 9.4 mL (round to 9 mL)",
          ],
        },
        {
          title: "NCLEX-RN HIGHLIGHT",
          type: "highlight",
          icon: "star",
          content: [
            "NCLEX-RN Essential: Weight-based calculations are frequently tested on the NCLEX-RN, especially for pediatric patients. Always convert pounds to kilograms first, then calculate the dose, then determine the volume or number of tablets to give. Follow this three-step process to avoid errors.",
          ],
        },
        {
          title: "SAFETY ALERT",
          type: "alert",
          icon: "alert",
          content: [
            "Safe Dose Range Verification: After calculating a weight-based dose, always verify it falls within the safe dose range for that medication and patient population. If the calculated dose exceeds the maximum safe dose, contact the prescriber before administering.",
          ],
        },
      ],
    },
    {
      id: "reconstitution",
      title: "Reconstitution of Medications",
      description:
        "Some medications come in powder form and must be reconstituted (mixed with a diluent) before administration. Always follow manufacturer instructions for reconstitution.",
      layout: "stack",
      boxes: [
        {
          title: "Reconstitution Example",
          type: "example",
          icon: "lightbulb",
          content: [
            "Order: Ceftriaxone 1 g IM",
            "Available: 1 g powder vial",
            "Instructions: Add 2.1 mL sterile water to yield 2.5 mL (concentration: 400 mg/mL)",
            "Calculate: 1 g = 1000 mg",
            "Volume needed: 1000 mg ÷ 400 mg/mL = 2.5 mL",
            "Answer: Administer entire 2.5 mL",
          ],
        },
        {
          title: "CLINICAL PEARL",
          type: "pearl",
          icon: "gem",
          content: [
            "After reconstitution, always label the vial with the date, time, concentration, your initials, and expiration date. Many reconstituted medications have limited stability and must be used within specific timeframes.",
          ],
        },
      ],
    },
    {
      id: "io-calc",
      title: "Intake and Output (I&O) Calculations",
      description:
        "Accurate I&O monitoring is essential for fluid balance assessment. Conversions between household and metric measurements are frequently needed.",
      layout: "stack",
      boxes: [
        {
          title: "I&O Calculation Example",
          type: "example",
          icon: "lightbulb",
          content: [
            "Patient intake:",
            "• Breakfast: 1 cup coffee, 4 oz juice, 6 oz water",
            "• Lunch: 8 oz soup, 1 cup milk",
            "• IV: 1000 mL NS over 8 hours",
            "Calculate:",
            "Coffee: 1 cup = 240 mL",
            "Juice: 4 oz × 30 mL/oz = 120 mL",
            "Water: 6 oz × 30 mL/oz = 180 mL",
            "Soup: 8 oz × 30 mL/oz = 240 mL",
            "Milk: 1 cup = 240 mL",
            "IV: 1000 mL",
            "Total Intake: 240 + 120 + 180 + 240 + 240 + 1000 = 2020 mL",
          ],
        },
        {
          title: "I&O Documentation Tips:",
          type: "list",
          content: [
            "Count only liquids at room temperature (ice cream, gelatin, popsicles)",
            "Include IV fluids, medications, and blood products",
            "Output includes urine, emesis, drainage, and diarrhea",
            "Document every 8 hours and calculate 24-hour totals",
          ],
        },
      ],
    },
  ],
};
