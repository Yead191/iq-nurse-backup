import { Star, AlertTriangle } from "lucide-react";

export const painAssessmentData = {
  title: "Pain Assessment (The Fifth Vital Sign)",
  overview:
    "Pain is a subjective experience and should be assessed regularly. The patient's self-report is the most reliable indicator of pain intensity.",
  scales: {
    title: "Pain Assessment Scales",
    items: [
      {
        title: "Numeric Rating Scale (0-10)",
        subtitle: "Most commonly used for adults",
        points: [
          "0 = No pain",
          "1-3 = Mild pain",
          "4-6 = Moderate pain",
          "7-10 = Severe pain",
        ],
      },
      {
        title: "Wong-Baker FACES Scale",
        subtitle: "Used for children and non-verbal patients",
        points: [
          "0 = No hurt (smiling face)",
          "2 = Hurts little bit",
          "4 = Hurts little more",
          "6 = Hurts even more",
          "8 = Hurts whole lot",
          "10 = Hurts worst (crying face)",
        ],
      },
      {
        title: "FLACC Scale",
        subtitle: "For infants and non-verbal patients",
        points: [
          "Face - facial expression",
          "Legs - leg position/movement",
          "Activity - body movement",
          "Cry - cry characteristics",
          "Consolability - ability to console",
          "Each scored 0-2 (total 0-10)",
        ],
      },
      {
        title: "Verbal Descriptor Scale",
        subtitle: "Alternative for adults",
        points: [
          "No pain",
          "Mild pain",
          "Moderate pain",
          "Severe pain",
          "Very severe pain",
          "Worst possible pain",
        ],
      },
    ],
  },
  pqrst: {
    title: "Comprehensive Pain Assessment (PQRST Method)",
    boxTitle: "PQRST Mnemonic for Pain Assessment",
    items: [
      {
        label: "P - Provocation/Palliation:",
        text: "What causes or relieves the pain?",
      },
      {
        label: "Q - Quality:",
        text: "What does the pain feel like? (sharp, dull, burning, aching, stabbing)",
      },
      {
        label: "R - Region/Radiation:",
        text: "Where is the pain? Does it radiate?",
      },
      {
        label: "S - Severity:",
        text: "Rate pain on 0-10 scale",
      },
      {
        label: "T - Timing:",
        text: "When did it start? Constant or intermittent? Duration?",
      },
    ],
  },
  redFlags: {
    title: "Red Flags in Pain Assessment:",
    items: [
      "Sudden severe pain (possible emergency: MI, aortic dissection, ruptured organ)",
      "Pain with fever and altered mental status (possible infection/sepsis)",
      "Chest pain radiating to jaw, arm, or back (possible cardiac event)",
      "Severe headache with neurological changes (possible stroke, increased ICP)",
      "Abdominal pain with rigid abdomen (possible peritonitis, perforation)",
    ],
  },
};

export const painNclexPoints = {
  title: "NCLEX-RN High-Yield Points",
  Icon: Star,
  defaultColor: "#E74C3C",
  features: [
    "Pain is Subjective: Patient's self-report is the gold standard; believe the patient",
    "Fifth Vital Sign: Assess pain with every vital sign check",
    "Reassessment Timing:",
    "• IV medications: 15-30 minutes after administration",
    "• Oral medications: 60 minutes after administration",
    "• Non-pharmacological interventions: 30 minutes after intervention",
    "Acute vs. Chronic Pain:",
    "• Acute: < 3-6 months, identifiable cause, resolves with healing",
    "• Chronic: > 3-6 months, may persist beyond healing, affects quality of life",
    "Non-Pharmacological Interventions: Positioning, heat/cold therapy, distraction, relaxation, guided imagery, massage",
    "Opioid Safety: Monitor respiratory rate, sedation level, and oxygen saturation; have naloxone (Narcan) available",
    "Patient-Controlled Analgesia (PCA): Only patient should push button; assess for proper use and effectiveness",
  ],
};
