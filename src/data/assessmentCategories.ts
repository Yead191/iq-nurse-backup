export interface FindingData {
  key: string;
  assessment: string;
  normal: string;
  abnormal: string;
}

export interface TabContent {
  comprehensiveDescription: string[];
  clinicalNote: string;
  findings: FindingData[];
  mnemonics: {
    title: string;
    items: { letter: string; description: string }[];
    color: string;
  }[];
}

export interface AssessmentCategory {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string[];
  image: string;
  tabContent: TabContent;
}

export const assessmentCategories: AssessmentCategory[] = [
  {
    id: "head-to-toe",
    label: "Head to Toe",
    icon: "/assets/patient-icons/head-to-toe-icon.svg",
    title: "Head to Toe Assessment",
    description: [
      "Comprehensive assessment of cardiovascular function including heart sounds, peripheral circulation, and cardiac output indicators.",
      "✔ Heart sound identification",
      "✔ Peripheral pulse assessment",
      "✔ Cardiac rhythm interpretation basics",
      "✔ Edema evaluation techniques",
      "✔ Perfusion assessment methods",
    ],
    image: "/assets/assessment-images/head-to-toe-img.svg",
    tabContent: {
      comprehensiveDescription: [
        "A systematic head-to-toe assessment provides a comprehensive evaluation of all body systems.",
        "Begin with general appearance and vital signs, then proceed systematically from head to feet.",
        "This approach ensures no body system is overlooked and establishes baseline data for ongoing care.",
      ],
      clinicalNote:
        "Complete head-to-toe assessments are typically performed on admission, at the beginning of each shift, and when patient condition changes. Document findings systematically and compare to previous assessments.",
      findings: [
        {
          key: "1",
          assessment: "General Appearance",
          normal: "Alert, oriented, no distress",
          abnormal: "Lethargic, confused, distressed",
        },
        {
          key: "2",
          assessment: "Vital Signs",
          normal: "Within normal limits",
          abnormal: "Hypertensive, tachycardic, febrile",
        },
        {
          key: "3",
          assessment: "Skin",
          normal: "Warm, dry, intact",
          abnormal: "Cool, clammy, lesions present",
        },
      ],
      mnemonics: [
        {
          title: "ASSESSMENT Mnemonic",
          color: "blue",
          items: [
            { letter: "A", description: "Appearance and mental status" },
            { letter: "S", description: "Skin integrity and color" },
            {
              letter: "S",
              description: "Systems review (cardiac, respiratory)",
            },
            { letter: "E", description: "Extremities and mobility" },
            { letter: "S", description: "Safety concerns" },
            { letter: "S", description: "Symptoms reported" },
            { letter: "M", description: "Medications and allergies" },
            { letter: "E", description: "Environment and equipment" },
            { letter: "N", description: "Nutrition and elimination" },
            { letter: "T", description: "Teaching needs" },
          ],
        },
      ],
    },
  },
  {
    id: "head",
    label: "Head",
    icon: "/assets/patient-icons/head-icon.svg",
    title: "Head Assessment",
    description: [
      "Inspection of scalp, skull, and facial symmetry.",
      "✔ Palpation for tenderness or swelling",
      "✔ Skin integrity check",
      "✔ Hair distribution & texture assessment",
    ],
    image: "/assets/patient-body/head.png",
    tabContent: {
      comprehensiveDescription: [
        "Head assessment includes inspection and palpation of the skull, scalp, and facial structures.",
        "Examine for symmetry, deformities, lesions, and signs of trauma.",
        "Assess hair distribution, texture, and scalp condition for signs of nutritional deficits or disease.",
      ],
      clinicalNote:
        "Pay attention to facial symmetry which may indicate neurological issues. Document any masses, tenderness, or abnormal findings. Consider cultural variations in hair texture and styling.",
      findings: [
        {
          key: "1",
          assessment: "Skull Shape",
          normal: "Symmetrical, no deformities",
          abnormal: "Asymmetrical, visible deformities",
        },
        {
          key: "2",
          assessment: "Scalp",
          normal: "Clean, intact, no lesions",
          abnormal: "Lesions, scaling, tenderness",
        },
        {
          key: "3",
          assessment: "Hair",
          normal: "Even distribution, normal texture",
          abnormal: "Patchy loss, brittle, oily",
        },
      ],
      mnemonics: [
        {
          title: "HEAD Assessment",
          color: "green",
          items: [
            { letter: "H", description: "Hair distribution and texture" },
            { letter: "E", description: "Examine skull shape and size" },
            { letter: "A", description: "Assess facial symmetry" },
            { letter: "D", description: "Detect masses or tenderness" },
          ],
        },
      ],
    },
  },
  {
    id: "neck",
    label: "Neck",
    icon: "/assets/patient-icons/neck-icon.svg",
    title: "Neck Assessment",
    description: [
      "Evaluation of lymph nodes, thyroid, and trachea alignment.",
      "✔ Jugular vein distention observation",
      "✔ Carotid pulse assessment",
    ],
    image: "/assets/patient-body/neck.png",
    tabContent: {
      comprehensiveDescription: [
        "Neck assessment involves inspection and palpation of lymph nodes, thyroid gland, and trachea.",
        "Observe for jugular vein distention and assess carotid pulses bilaterally.",
        "Check range of motion and note any masses, swelling, or asymmetry.",
      ],
      clinicalNote:
        "Always palpate lymph nodes gently and systematically. Avoid bilateral carotid palpation simultaneously. JVD assessment requires proper positioning at 45-degree angle.",
      findings: [
        {
          key: "1",
          assessment: "Lymph Nodes",
          normal: "Non-palpable or small, mobile",
          abnormal: "Enlarged, fixed, tender",
        },
        {
          key: "2",
          assessment: "Thyroid",
          normal: "Non-palpable, no masses",
          abnormal: "Enlarged, nodular, tender",
        },
        {
          key: "3",
          assessment: "JVD",
          normal: "Not visible at 45 degrees",
          abnormal: "Visible distention",
        },
      ],
      mnemonics: [
        {
          title: "NECK Assessment",
          color: "purple",
          items: [
            { letter: "N", description: "Nodes (lymph) palpation" },
            { letter: "E", description: "Examine thyroid gland" },
            { letter: "C", description: "Carotid pulse assessment" },
            { letter: "K", description: "Keep trachea midline" },
          ],
        },
      ],
    },
  },
  {
    id: "eyes",
    label: "Eyes",
    icon: "/assets/patient-icons/eyes-icon.svg",
    title: "Eye Assessment",
    description: [
      "Assessment of visual acuity and ocular health.",
      "✔ Pupillary light reflex",
      "✔ Extraocular muscle movement",
      "✔ Conjunctiva and sclera inspection",
    ],
    image: "/assets/patient-body/eyes.png",
    tabContent: {
      comprehensiveDescription: [
        "Eye assessment includes visual acuity testing, pupillary responses, and extraocular movements.",
        "Inspect external structures, conjunctiva, and sclera for abnormalities.",
        "Test pupillary light reflex and accommodation responses for neurological function.",
      ],
      clinicalNote:
        "Use appropriate lighting for pupil assessment. Document pupil size in millimeters. Consider medications that may affect pupil response (opioids, anticholinergics).",
      findings: [
        {
          key: "1",
          assessment: "Pupils",
          normal: "Equal, round, reactive to light",
          abnormal: "Unequal, fixed, non-reactive",
        },
        {
          key: "2",
          assessment: "Conjunctiva",
          normal: "Pink, moist, no discharge",
          abnormal: "Red, dry, purulent discharge",
        },
        {
          key: "3",
          assessment: "Sclera",
          normal: "White, clear",
          abnormal: "Yellow (jaundice), red",
        },
      ],
      mnemonics: [
        {
          title: "PERRLA",
          color: "blue",
          items: [
            { letter: "P", description: "Pupils" },
            { letter: "E", description: "Equal" },
            { letter: "R", description: "Round" },
            { letter: "R", description: "Reactive to" },
            { letter: "L", description: "Light and" },
            { letter: "A", description: "Accommodation" },
          ],
        },
      ],
    },
  },
  {
    id: "nose-sinus",
    label: "Nose & Sinus",
    icon: "/assets/patient-icons/nose-icon.svg",
    title: "Nose & Sinus Assessment",
    description: [
      "Inspection and palpation for patency and tenderness.",
      "✔ Septum alignment",
      "✔ Sinus percussion",
      "✔ Nasal mucosa health",
    ],
    image: "/assets/patient-body/nose.png",
    tabContent: {
      comprehensiveDescription: [
        "Nose and sinus assessment involves inspection of external nose and nasal cavity.",
        "Palpate sinuses for tenderness and assess nasal patency.",
        "Examine nasal mucosa for color, moisture, and presence of discharge.",
      ],
      clinicalNote:
        "Use penlight for internal inspection. Avoid forceful manipulation. Consider seasonal allergies and environmental factors affecting nasal symptoms.",
      findings: [
        {
          key: "1",
          assessment: "Nasal Patency",
          normal: "Both nares patent",
          abnormal: "Obstruction, deviated septum",
        },
        {
          key: "2",
          assessment: "Mucosa",
          normal: "Pink, moist, no discharge",
          abnormal: "Red, swollen, purulent discharge",
        },
        {
          key: "3",
          assessment: "Sinuses",
          normal: "Non-tender to palpation",
          abnormal: "Tender, pressure sensation",
        },
      ],
      mnemonics: [
        {
          title: "NOSE Assessment",
          color: "green",
          items: [
            { letter: "N", description: "Nares patency check" },
            { letter: "O", description: "Observe mucosa color" },
            { letter: "S", description: "Sinus tenderness" },
            { letter: "E", description: "Examine for discharge" },
          ],
        },
      ],
    },
  },
  {
    id: "ears",
    label: "Ears",
    icon: "/assets/patient-icons/ears-icon.svg",
    title: "Ear Assessment",
    description: [
      "Inspection of external ear and auditory canal.",
      "✔ Hearing acuity test",
      "✔ Tympanic membrane visualization",
    ],
    image: "/assets/patient-body/ears.png",
    tabContent: {
      comprehensiveDescription: [
        "Ear assessment includes inspection of external ear structures and auditory canal.",
        "Test hearing acuity using whisper test or audiometry.",
        "Examine tympanic membrane for color, position, and mobility if trained.",
      ],
      clinicalNote:
        "Use otoscope with appropriate speculum size. Pull pinna up and back for adults, down and back for children. Document cerumen amount and consistency.",
      findings: [
        {
          key: "1",
          assessment: "External Ear",
          normal: "No deformities, lesions",
          abnormal: "Swelling, discharge, lesions",
        },
        {
          key: "2",
          assessment: "Hearing",
          normal: "Responds to whisper test",
          abnormal: "Decreased hearing acuity",
        },
        {
          key: "3",
          assessment: "Tympanic Membrane",
          normal: "Gray, translucent, mobile",
          abnormal: "Red, bulging, perforated",
        },
      ],
      mnemonics: [
        {
          title: "EAR Assessment",
          color: "orange",
          items: [
            { letter: "E", description: "External ear inspection" },
            { letter: "A", description: "Auditory acuity testing" },
            { letter: "R", description: "Review tympanic membrane" },
          ],
        },
      ],
    },
  },
  {
    id: "mouth-throat",
    label: "Mouth & Throat",
    icon: "/assets/patient-icons/mouth-icon.svg",
    title: "Mouth & Throat Assessment",
    description: [
      "Inspection of oral cavity and pharynx.",
      "✔ Mucosa moisture and color",
      "✔ Tonsil size and symmetry",
      "✔ Tongue movement",
    ],
    image: "/assets/patient-body/mouth.png",
    tabContent: {
      comprehensiveDescription: [
        "Mouth and throat assessment involves systematic inspection of oral structures.",
        "Examine lips, gums, teeth, tongue, and throat for abnormalities.",
        "Assess swallowing ability and voice quality for functional evaluation.",
      ],
      clinicalNote:
        "Use penlight and tongue depressor for adequate visualization. Note dental hygiene and any prosthetics. Consider cultural dietary practices affecting oral health.",
      findings: [
        {
          key: "1",
          assessment: "Oral Mucosa",
          normal: "Pink, moist, intact",
          abnormal: "Dry, pale, lesions present",
        },
        {
          key: "2",
          assessment: "Teeth/Gums",
          normal: "Clean, no bleeding",
          abnormal: "Decay, bleeding, swelling",
        },
        {
          key: "3",
          assessment: "Tongue",
          normal: "Pink, mobile, no lesions",
          abnormal: "Coated, limited mobility",
        },
      ],
      mnemonics: [
        {
          title: "MOUTH Assessment",
          color: "red",
          items: [
            { letter: "M", description: "Mucosa inspection" },
            { letter: "O", description: "Oral hygiene evaluation" },
            { letter: "U", description: "Uvula and throat" },
            { letter: "T", description: "Tongue mobility" },
            { letter: "H", description: "Hydration status" },
          ],
        },
      ],
    },
  },
  {
    id: "chest",
    label: "Chest",
    icon: "/assets/patient-icons/chest-icon.svg",
    title: "Chest Assessment",
    description: [
      "Evaluation of thoracic symmetry, breath sounds, and cardiac auscultation.",
      "✔ Expansion & symmetry",
      "✔ Lung sound auscultation",
      "✔ Heart sounds (S1, S2, murmurs)",
    ],
    image: "/assets/patient-body/chest.png",
    tabContent: {
      comprehensiveDescription: [
        "Chest assessment includes respiratory and cardiac evaluation through inspection, palpation, and auscultation.",
        "Observe chest wall movement, symmetry, and breathing patterns.",
        "Auscultate lung sounds systematically and assess heart sounds at appropriate landmarks.",
      ],
      clinicalNote:
        "Use systematic approach for auscultation. Listen to full respiratory cycle at each site. Document adventitious sounds with location and timing in respiratory cycle.",
      findings: [
        {
          key: "1",
          assessment: "Chest Wall",
          normal: "Symmetrical expansion",
          abnormal: "Asymmetrical, retractions",
        },
        {
          key: "2",
          assessment: "Breath Sounds",
          normal: "Clear, equal bilaterally",
          abnormal: "Diminished, crackles, wheezes",
        },
        {
          key: "3",
          assessment: "Heart Sounds",
          normal: "Regular S1, S2",
          abnormal: "Irregular, murmurs, gallops",
        },
      ],
      mnemonics: [
        {
          title: "CHEST Assessment",
          color: "blue",
          items: [
            { letter: "C", description: "Chest wall symmetry" },
            { letter: "H", description: "Heart sounds auscultation" },
            { letter: "E", description: "Expansion assessment" },
            { letter: "S", description: "Sounds (breath) evaluation" },
            { letter: "T", description: "Tactile fremitus" },
          ],
        },
      ],
    },
  },
  {
    id: "abdomen",
    label: "Abdomen",
    icon: "/assets/patient-icons/abdomen-icon.svg",
    title: "Abdominal Assessment",
    description: [
      "Inspection, auscultation, percussion, and palpation of abdomen.",
      "✔ Bowel sounds",
      "✔ Organomegaly detection",
      "✔ Tenderness or guarding",
    ],
    image: "/assets/patient-body/abdomen.png",
    tabContent: {
      comprehensiveDescription: [
        "Abdominal assessment follows the sequence: inspection, auscultation, percussion, then palpation.",
        "Auscultate before palpation to avoid altering bowel sounds.",
        "Assess all four quadrants systematically for masses, tenderness, and organ enlargement.",
      ],
      clinicalNote:
        "Always auscultate before palpating. Use light palpation first, then deep palpation. Watch patient's face for signs of discomfort during examination.",
      findings: [
        {
          key: "1",
          assessment: "Bowel Sounds",
          normal: "Present in all quadrants",
          abnormal: "Absent, hyperactive, hypoactive",
        },
        {
          key: "2",
          assessment: "Abdomen Shape",
          normal: "Flat, symmetrical",
          abnormal: "Distended, asymmetrical",
        },
        {
          key: "3",
          assessment: "Palpation",
          normal: "Soft, non-tender",
          abnormal: "Rigid, tender, masses",
        },
      ],
      mnemonics: [
        {
          title: "Abdominal Assessment Order",
          color: "green",
          items: [
            { letter: "I", description: "Inspection first" },
            { letter: "A", description: "Auscultation second" },
            { letter: "P", description: "Percussion third" },
            { letter: "P", description: "Palpation last" },
          ],
        },
      ],
    },
  },
  {
    id: "pulse-vascular",
    label: "Pulse & Vascular",
    icon: "/assets/patient-icons/pulse-icon.svg",
    title: "Pulse & Vascular Assessment",
    description: [
      "Evaluation of peripheral circulation and vascular health.",
      "✔ Peripheral pulses (radial, dorsalis pedis, posterior tibial)",
      "✔ Capillary refill time",
      "✔ Signs of edema or ischemia",
    ],
    image: "/assets/patient-body/vascular.png",
    tabContent: {
      comprehensiveDescription: [
        "Vascular assessment includes evaluation of peripheral pulses, capillary refill, and circulation.",
        "Palpate pulses bilaterally and compare strength, rhythm, and quality.",
        "Assess for signs of venous insufficiency, arterial disease, and edema.",
      ],
      clinicalNote:
        "Use consistent pressure when palpating pulses. Document pulse strength using 0-4+ scale. Assess capillary refill in good lighting and warm environment.",
      findings: [
        {
          key: "1",
          assessment: "Peripheral Pulses",
          normal: "2+ bilaterally, regular",
          abnormal: "Weak, absent, irregular",
        },
        {
          key: "2",
          assessment: "Capillary Refill",
          normal: "< 3 seconds",
          abnormal: "> 3 seconds",
        },
        {
          key: "3",
          assessment: "Extremities",
          normal: "Warm, no edema",
          abnormal: "Cool, edematous, cyanotic",
        },
      ],
      mnemonics: [
        {
          title: "5 P's of Vascular Assessment",
          color: "red",
          items: [
            { letter: "P", description: "Pain" },
            { letter: "P", description: "Pallor" },
            { letter: "P", description: "Pulselessness" },
            { letter: "P", description: "Paresthesia" },
            { letter: "P", description: "Paralysis" },
          ],
        },
      ],
    },
  },
  {
    id: "extremities",
    label: "Extremities & Musculoskeletal",
    icon: "/assets/patient-icons/extremities-icon.svg",
    title: "Extremities & Musculoskeletal Assessment",
    description: [
      "Inspection of extremities for deformities, swelling, or asymmetry.",
      "✔ Muscle strength testing",
      "✔ Range of motion",
      "✔ Joint tenderness or swelling",
    ],
    image: "/assets/patient-body/extremities.png",
    tabContent: {
      comprehensiveDescription: [
        "Musculoskeletal assessment includes evaluation of bones, joints, and muscles.",
        "Test range of motion, muscle strength, and joint stability.",
        "Inspect for deformities, swelling, and assess functional mobility.",
      ],
      clinicalNote:
        "Use 0-5 scale for muscle strength testing. Assess both active and passive range of motion. Consider age-related changes and previous injuries.",
      findings: [
        {
          key: "1",
          assessment: "Range of Motion",
          normal: "Full, pain-free",
          abnormal: "Limited, painful",
        },
        {
          key: "2",
          assessment: "Muscle Strength",
          normal: "5/5 all groups",
          abnormal: "Weakness, asymmetry",
        },
        {
          key: "3",
          assessment: "Joints",
          normal: "No swelling, stable",
          abnormal: "Swollen, unstable, deformed",
        },
      ],
      mnemonics: [
        {
          title: "MOVE Assessment",
          color: "purple",
          items: [
            { letter: "M", description: "Muscle strength testing" },
            { letter: "O", description: "Observe for deformities" },
            { letter: "V", description: "Verify range of motion" },
            { letter: "E", description: "Examine joint stability" },
          ],
        },
      ],
    },
  },
  {
    id: "neurological",
    label: "Neurological",
    icon: "/assets/patient-icons/neurological-icon.svg",
    title: "Neurological Assessment",
    description: [
      "Evaluation of cranial nerves, reflexes, and mental status.",
      "✔ Motor & sensory testing",
      "✔ Balance & coordination",
      "✔ Level of consciousness",
    ],
    image: "/assets/patient-body/neurological.png",
    tabContent: {
      comprehensiveDescription: [
        "Neurological assessment evaluates mental status, cranial nerves, motor and sensory function.",
        "Test reflexes, coordination, and balance systematically.",
        "Assess level of consciousness using standardized scales when appropriate.",
      ],
      clinicalNote:
        "Use Glasgow Coma Scale for altered consciousness. Test reflexes with consistent technique. Document any focal neurological deficits immediately.",
      findings: [
        {
          key: "1",
          assessment: "Mental Status",
          normal: "Alert, oriented x3",
          abnormal: "Confused, disoriented",
        },
        {
          key: "2",
          assessment: "Motor Function",
          normal: "Moves all extremities",
          abnormal: "Weakness, paralysis",
        },
        {
          key: "3",
          assessment: "Reflexes",
          normal: "2+ symmetric",
          abnormal: "Absent, hyperactive",
        },
      ],
      mnemonics: [
        {
          title: "NEURO Assessment",
          color: "blue",
          items: [
            { letter: "N", description: "Neurological status" },
            { letter: "E", description: "Eyes (pupils, vision)" },
            { letter: "U", description: "Understanding (cognition)" },
            { letter: "R", description: "Reflexes and motor" },
            { letter: "O", description: "Orientation assessment" },
          ],
        },
      ],
    },
  },
];
