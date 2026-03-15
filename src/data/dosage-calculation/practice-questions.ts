export interface PracticeQuestion {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  rationale?: string;
}

export const practiceQuestions: PracticeQuestion[] = [
  {
    id: 1,
    category: "Basic Dosage",
    question:
      "A physician orders 0.5 g of medication. The medication is available in 250 mg tablets. How many tablets should the nurse administer?",
    options: ["1 tablet", "2 tablets", "3 tablets", "4 tablets"],
    correctAnswer: 1,
    explanation:
      "First, convert 0.5 g to mg: 0.5 g × 1000 = 500 mg. Then use the formula: Desired (500 mg) ÷ Available (250 mg) = 2 tablets.",
    rationale:
      "Always ensure units match before calculating. The metric conversion of grams to milligrams is essential for accurate dosage calculations.",
  },
  {
    id: 2,
    category: "IV Drip Rates",
    question:
      "A patient is to receive 1000 mL of normal saline over 8 hours. The IV tubing has a drop factor of 20 gtts/mL. What is the drip rate in gtts/min?",
    options: ["21 gtts/min", "32 gtts/min", "42 gtts/min", "52 gtts/min"],
    correctAnswer: 2,
    explanation:
      "Formula: (Volume × Drop factor) ÷ Time in minutes = gtts/min. (1000 mL × 20 gtts/mL) ÷ (8 hrs × 60 min) = 20,000 ÷ 480 = 41.67, rounded to 42 gtts/min.",
    rationale:
      "When calculating drip rates, always convert hours to minutes. Round to the nearest whole number since you cannot count partial drops.",
  },
  {
    id: 3,
    category: "Weight-Based",
    question:
      "A patient weighs 176 lbs. The order is for 5 mg/kg of medication. What is the correct dose? (1 kg = 2.2 lbs)",
    options: ["350 mg", "400 mg", "450 mg", "500 mg"],
    correctAnswer: 1,
    explanation:
      "First, convert weight: 176 lbs ÷ 2.2 = 80 kg. Then calculate dose: 80 kg × 5 mg/kg = 400 mg.",
    rationale:
      "Weight-based calculations require accurate conversion from pounds to kilograms. Always verify the patient's current weight before calculating.",
  },
  {
    id: 4,
    category: "Pediatric",
    question:
      "A child weighs 25 kg. The safe dose range for the medication is 10-15 mg/kg/day given in 3 divided doses. The physician orders 100 mg TID (three times daily). Is this order safe?",
    options: [
      "Yes, the order is safe",
      "No, the order is too low",
      "No, the order is too high",
      "Cannot determine from the information given",
    ],
    correctAnswer: 0,
    explanation:
      "Calculate safe range: Minimum = 25 kg × 10 mg/kg = 250 mg/day; Maximum = 25 kg × 15 mg/kg = 375 mg/day. Ordered dose: 100 mg × 3 = 300 mg/day. This falls within the safe range (250-375 mg/day).",
    rationale:
      "Always calculate the safe dose range and compare the ordered dose to ensure patient safety, especially with pediatric patients.",
  },
  {
    id: 5,
    category: "Unit Conversion",
    question:
      "A medication order reads 1.2 g. The medication is available as 400 mg/tablet. How many tablets should be given?",
    options: ["2 tablets", "3 tablets", "4 tablets", "5 tablets"],
    correctAnswer: 1,
    explanation:
      "Convert 1.2 g to mg: 1.2 g × 1000 = 1200 mg. Then: 1200 mg ÷ 400 mg/tablet = 3 tablets.",
    rationale:
      "Unit conversion is critical before performing dosage calculations. Remember: 1 g = 1000 mg.",
  },
  {
    id: 6,
    category: "Insulin",
    question:
      "A patient's blood glucose is 280 mg/dL. The sliding scale insulin protocol states: give 4 units for glucose 200-250 mg/dL, and 2 additional units for every 50 mg/dL above 250. How many units should be administered?",
    options: ["4 units", "6 units", "8 units", "10 units"],
    correctAnswer: 1,
    explanation:
      "Base dose for 200-250 range: 4 units. Amount above 250: 280 - 250 = 30 mg/dL. Since 30 is less than 50, add 2 units for the first increment. Total: 4 + 2 = 6 units.",
    rationale:
      "Sliding scale insulin protocols require careful attention to glucose levels and incremental dosing. When in doubt, clarify the protocol with the physician.",
  },
  {
    id: 7,
    category: "IV Drip Rates",
    question:
      "An IV infusion of 500 mL is running at 75 mL/hr. How long will it take for the infusion to complete?",
    options: ["5 hours 20 minutes", "6 hours", "6 hours 40 minutes", "7 hours"],
    correctAnswer: 2,
    explanation:
      "Total volume ÷ Flow rate = Time. 500 mL ÷ 75 mL/hr = 6.67 hours. Convert 0.67 hours to minutes: 0.67 × 60 = 40 minutes. Total time: 6 hours 40 minutes.",
    rationale:
      "Calculating infusion time helps with planning and monitoring IV therapy. Remember to convert decimal hours to minutes for practical application.",
  },
  {
    id: 8,
    category: "Basic Dosage",
    question:
      "The order is for amoxicillin 500 mg. The medication is supplied as 250 mg/5 mL. How many mL should be administered?",
    options: ["5 mL", "7.5 mL", "10 mL", "12.5 mL"],
    correctAnswer: 2,
    explanation:
      "Use the formula: (Desired ÷ Available) × Volume = mL to give. (500 mg ÷ 250 mg) × 5 mL = 2 × 5 mL = 10 mL.",
    rationale:
      "For liquid medications, pay attention to the concentration (mg per mL) and use the complete formula including volume.",
  },
  {
    id: 9,
    category: "Weight-Based",
    question:
      "Heparin is ordered at 18 units/kg/hr for a patient weighing 70 kg. The heparin concentration is 25,000 units in 500 mL. What is the infusion rate in mL/hr?",
    options: ["22.4 mL/hr", "25.2 mL/hr", "28.8 mL/hr", "32.4 mL/hr"],
    correctAnswer: 1,
    explanation:
      "Step 1: Calculate total units/hr needed: 70 kg × 18 units/kg/hr = 1,260 units/hr. Step 2: Calculate concentration: 25,000 units ÷ 500 mL = 50 units/mL. Step 3: Calculate mL/hr: 1,260 units/hr ÷ 50 units/mL = 25.2 mL/hr.",
    rationale:
      "Heparin is a high-alert medication requiring precise calculations. Always verify your calculation with another nurse before administration.",
  },
  {
    id: 10,
    category: "Pediatric",
    question:
      "A child has a body surface area (BSA) of 0.6 m². The medication is ordered at 30 mg/m². How many mg should the child receive?",
    options: ["12 mg", "15 mg", "18 mg", "20 mg"],
    correctAnswer: 2,
    explanation:
      "BSA (m²) × Dose per m² = Total dose. 0.6 m² × 30 mg/m² = 18 mg.",
    rationale:
      "BSA-based dosing is common for chemotherapy and certain cardiac medications in pediatrics. It provides a more accurate dose than weight alone.",
  },
  {
    id: 11,
    category: "Concentration",
    question:
      "A 20% solution is ordered. How many grams of medication are in 250 mL of this solution?",
    options: ["25 g", "50 g", "75 g", "100 g"],
    correctAnswer: 1,
    explanation:
      "A 20% solution means 20 g per 100 mL. Set up proportion: 20 g/100 mL = X g/250 mL. Cross multiply: 100X = 5,000. X = 50 g.",
    rationale:
      "Understanding percentage solutions is critical for preparing dilutions and understanding drug concentrations. Remember: % = grams per 100 mL.",
  },
  {
    id: 12,
    category: "Insulin",
    question:
      "A patient is to receive 12 units of NPH insulin and 5 units of Regular insulin. Both are U-100 concentration. What is the total volume to draw up in mL?",
    options: ["0.12 mL", "0.17 mL", "0.22 mL", "0.27 mL"],
    correctAnswer: 1,
    explanation:
      "Total units: 12 + 5 = 17 units. U-100 = 100 units/mL. 17 units ÷ 100 units/mL = 0.17 mL.",
    rationale:
      "When mixing insulins, draw Regular (clear) before NPH (cloudy). Use only insulin syringes calibrated in units, not tuberculin syringes.",
  },
  {
    id: 13,
    category: "Titration",
    question:
      "Dopamine 400 mg in 250 mL D5W is ordered at 5 mcg/kg/min for a patient weighing 80 kg. What is the infusion rate in mL/hr?",
    options: ["12 mL/hr", "15 mL/hr", "18 mL/hr", "21 mL/hr"],
    correctAnswer: 1,
    explanation:
      "Step 1: Calculate dose needed: 80 kg × 5 mcg/kg/min = 400 mcg/min. Step 2: Convert to mcg/hr: 400 mcg/min × 60 min = 24,000 mcg/hr = 24 mg/hr. Step 3: Calculate concentration: 400 mg/250 mL = 1.6 mg/mL. Step 4: Calculate mL/hr: 24 mg/hr ÷ 1.6 mg/mL = 15 mL/hr.",
    rationale:
      "Critical care medications like dopamine require precise titration calculations. Always use an IV pump and monitor vital signs continuously.",
  },
  {
    id: 14,
    category: "Unit Conversion",
    question:
      "An order reads: Give 0.4 mg of medication. The medication is available as 200 mcg/tablet. How many tablets should be given?",
    options: ["1 tablet", "2 tablets", "3 tablets", "4 tablets"],
    correctAnswer: 1,
    explanation:
      "Convert 0.4 mg to mcg: 0.4 mg × 1000 = 400 mcg. Then: 400 mcg ÷ 200 mcg/tablet = 2 tablets.",
    rationale:
      "Pay close attention to units. Confusing mg and mcg is a common error that can result in a 1000-fold dosing error.",
  },
  {
    id: 15,
    category: "Basic Dosage",
    question:
      "The order is for morphine sulfate 8 mg IM. The available concentration is 10 mg/mL. How many mL should be drawn up?",
    options: ["0.6 mL", "0.8 mL", "1.0 mL", "1.2 mL"],
    correctAnswer: 1,
    explanation:
      "Desired dose ÷ Concentration = Volume. 8 mg ÷ 10 mg/mL = 0.8 mL.",
    rationale:
      "Morphine is a controlled substance and high-alert medication. Always verify the dose, have another nurse witness waste if applicable, and monitor for respiratory depression.",
  },
  {
    id: 16,
    category: "IV Drip Rates",
    question:
      "A patient is receiving an IV infusion at 42 gtts/min using tubing with a drop factor of 15 gtts/mL. What is the flow rate in mL/hr?",
    options: ["126 mL/hr", "148 mL/hr", "168 mL/hr", "184 mL/hr"],
    correctAnswer: 2,
    explanation:
      "Formula: (gtts/min × 60 min) ÷ Drop factor = mL/hr. (42 gtts/min × 60) ÷ 15 gtts/mL = 2,520 ÷ 15 = 168 mL/hr.",
    rationale:
      "Converting from drip rate to flow rate is important when switching from gravity infusion to IV pump or when verifying infusion rates.",
  },
  {
    id: 17,
    category: "Pediatric",
    question:
      "A child weighs 18 kg. The medication ordered is 40 mg/kg/day divided into 4 doses. What is the amount per dose?",
    options: ["120 mg", "150 mg", "180 mg", "200 mg"],
    correctAnswer: 2,
    explanation:
      "Daily dose: 18 kg × 40 mg/kg = 720 mg/day. Single dose: 720 mg ÷ 4 doses = 180 mg per dose.",
    rationale:
      "When orders specify divided doses, calculate the total daily dose first, then divide by the number of doses per day.",
  },
  {
    id: 18,
    category: "Weight-Based",
    question:
      "A patient weighs 154 lbs and is to receive a medication at 0.5 mg/kg. What is the correct dose?",
    options: ["30 mg", "35 mg", "40 mg", "45 mg"],
    correctAnswer: 1,
    explanation:
      "Convert weight: 154 lbs ÷ 2.2 = 70 kg. Calculate dose: 70 kg × 0.5 mg/kg = 35 mg.",
    rationale:
      "Always verify that you're using the correct weight (actual, ideal, or adjusted) as specified in the protocol.",
  },
  {
    id: 19,
    category: "Concentration",
    question:
      "You need to prepare 100 mL of a 0.45% NaCl solution. How many grams of NaCl are needed?",
    options: ["0.25 g", "0.45 g", "0.65 g", "0.90 g"],
    correctAnswer: 1,
    explanation:
      "0.45% means 0.45 g per 100 mL. Therefore, for 100 mL, you need 0.45 g of NaCl.",
    rationale:
      "Understanding percentage solutions is essential for preparing dilutions and reconstituting medications accurately.",
  },
  {
    id: 20,
    category: "Titration",
    question:
      "Nitroglycerin 50 mg in 250 mL D5W is infusing at 30 mL/hr. How many mcg/min is the patient receiving?",
    options: ["75 mcg/min", "100 mcg/min", "125 mcg/min", "150 mcg/min"],
    correctAnswer: 1,
    explanation:
      "Step 1: Calculate concentration: 50 mg/250 mL = 0.2 mg/mL = 200 mcg/mL. Step 2: Calculate mcg/hr: 200 mcg/mL × 30 mL/hr = 6,000 mcg/hr. Step 3: Convert to mcg/min: 6,000 mcg/hr ÷ 60 min = 100 mcg/min.",
    rationale:
      "Nitroglycerin is a vasodilator used for chest pain and blood pressure control. Monitor blood pressure closely during titration.",
  },
];
