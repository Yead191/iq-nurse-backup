import { TubeData } from "@/components/ui/user-dashboard-pages/labs-reference/component/BloodTubes";

export const LabsReferenceData = [
    { id: "introduction", name: "Introduction" },
    { id: "specimen-collection", name: "Specimen Collection" },
    { id: "blood-tubes", name: "Blood Tubes" },
    { id: "hematology-cbc", name: "Hematology (CBC)" },
    { id: "coagulation", name: "Coagulation" },
    { id: "bmp", name: "BMP" },
    { id: "cmp", name: "CMP" },
    { id: "electrolytes", name: "Electrolytes" },
    { id: "cardiac-markers", name: "Cardiac Markers" },
    { id: "liver-function", name: "Liver Function" },
    { id: "renal-function", name: "Renal Function" },
    { id: "endocrine", name: "Endocrine" },
    { id: "abg-analysis", name: "ABG Analysis" },
    { id: "therapeutic-levels", name: "Therapeutic levels" },
    { id: "other-labs", name: "Other Labs" },
    { id: "study-tips", name: "Study Tips" },
];

const clinicalActivities = [
    "Identifying patient abnormalities early",
    "Monitoring treatment effectiveness",
    "Recognizing medication side effects",
    "Prioritizing nursing interventions"
];

const nclexSuccessFactors = [
    "High-yield content frequently tested",
    "Critical thinking application",
    "Priority setting scenarios",
    "Medication management questions"
];

const usageGuide = [
    { label: "Color Coding:", description: "Green = Normal, Yellow = Abnormal, Red = Critical (immediate action required)" },
    { label: "Search Function:", description: "Use the search bar to quickly find specific labs or conditions" },
    { label: "NCLEX Tips:", description: "Look for highlighted boxes with test-taking strategies and mnemonics" },
    { label: "Priority Actions:", description: "Red boxes indicate immediate nursing interventions" },
    { label: "Print-Friendly:", description: "This guide is optimized for printing and studying offline" }
];



const specimenCollectionPhases = [
    {
        title: "Before Collection",
        items: [
            "Verify patient identity using two identifiers (name and DOB)",
            "Explain procedure to patient and obtain consent",
            "Check for patient allergies (latex, antiseptics)",
            "Review fasting requirements and medication restrictions",
            "Gather appropriate equipment and tubes"
        ]
    },
    {
        title: "During Collection",
        items: [
            "Perform hand hygiene and don appropriate PPE",
            "Use aseptic technique throughout procedure",
            "Select appropriate venipuncture site (avoid areas with IV infusions)",
            "Fill tubes in correct order to prevent cross-contamination",
            "Mix tubes gently by inversion (do not shake)",
            "Label specimens immediately at bedside"
        ]
    },
    {
        title: "After Collection",
        items: [
            "Apply pressure to puncture site until bleeding stops",
            "Apply bandage and assess for hematoma formation",
            "Transport specimens to lab promptly (within 1 hour for most tests)",
            "Document procedure, time, and patient response",
            "Monitor patient for complications (bleeding, infection, nerve injury)"
        ]
    }
];

const specimenCollectionPriorityActions = [
    "NEVER draw blood from same arm as IV infusion (causes dilution and inaccurate results)",
    "For blood cultures, always use aseptic technique to prevent contamination",
    "Time-sensitive tests (ABG, ammonia, lactic acid) must reach lab within 15 minutes",
    "Hemolyzed specimens must be redrawn (causes falsely elevated K+, LDH, AST)"
];

const orderOfDraw = {
    mnemonic: "\"Stop Light Red, Stay Put, Green Light Go\"",
    steps: [
        { letter: "S", description: "terile (Blood cultures - yellow/sterile)" },
        { letter: "L", description: "ight blue (Coagulation - citrate)" },
        { letter: "R", description: "ed (Serum - no additive)" },
        { letter: "S", description: "T (Gold/tiger top - serum separator)" },
        { letter: "P", description: "ST (Light green - plasma separator)" },
        { letter: "G", description: "reen (Heparin)" },
        { letter: "L", description: "avender/purple (EDTA - CBC)" },
        { letter: "G", description: "ray (Glucose - fluoride)" }
    ]
};

const bloodTubesData: TubeData[] = [
    {
        color: "bg-[#FFC107]", // Yellow
        name: "Yellow (Sterile)",
        additive: "Sodium polyanethol sulfonate (SPS)",
        tests: "Blood cultures, sterility testing",
        note: "ALWAYS draw first to prevent contamination",
    },
    {
        color: "bg-[#4FC3F7]", // Light Blue
        name: "Light Blue",
        additive: "Sodium citrate (anticoagulant)",
        tests: "PT/INR, PTT, coagulation studies, D-dimer",
        note: "Must be filled to exact line for accurate results",
    },
    {
        color: "bg-[#D32F2F]", // Red
        name: "Red (Plain)",
        additive: "None (clot activator only)",
        tests: "Serum chemistry, immunology, serology",
        note: "Allow to clot 30-60 minutes before centrifuging",
    },
    {
        color: "bg-white", // Gold/White
        name: "Gold/Tiger Top (SST)",
        additive: "Clot activator + serum separator gel",
        tests: "Most chemistry tests (CMP, BMP, lipids, liver enzymes)",
        note: "Most commonly used tube in clinical practice",
        borderColor: "border-gray-400",
    },
    {
        color: "bg-[#4CAF50]", // Green
        name: "Green",
        additive: "Heparin (sodium or lithium)",
        tests: "Ammonia, lactate, plasma chemistry",
        note: "Invert 8-10 times immediately after collection",
    },
    {
        color: "bg-[#9C27B0]", // Lavender
        name: "Lavender/Purple",
        additive: "EDTA (anticoagulant)",
        tests: "CBC, hemoglobin A1C, blood type & crossmatch",
        note: "Most common tube for hematology tests",
    },
    {
        color: "bg-[#9E9E9E]", // Gray
        name: "Gray",
        additive: "Potassium oxalate + sodium fluoride",
        tests: "Glucose, lactate, alcohol levels",
        note: "Fluoride preserves glucose by inhibiting glycolysis",
    },
];

const tubeErrors = [
    {
        title: "Wrong tube - Wrong results:",
        text: "Using lavender top for glucose gives falsely LOW values",
    },
    {
        title: "Underfilled light blue tube:",
        text: "Causes falsely PROLONGED PT/PTT",
    },
    {
        title: "Hemolysis:",
        text: "Shaking tubes or using small gauge needle causes cell rupture",
    },
    {
        title: "Contamination:",
        text: "Drawing coagulation studies after heparin tube affects results",
    },
]

const hematologyData = [
    {
        id: "wbc",
        name: "White Blood Cells (WBC)",
        shortName: "WBC",
        tags: ["NCLEX"],
        normalRange: "4,500-11,000 cells/µL",
        criticalRange: "<3,000 or >30,000 cells/µL",
        whatItMeasures: "Total number of white blood cells in circulation. WBCs are the body's primary defense against infection and include neutrophils, lymphocytes, monocytes, eosinophils, and basophils.",
        clinicalSignificance: "Indicates immune system function, presence of infection, inflammation, or hematologic disorders. Essential for monitoring immunocompromised patients and those receiving chemotherapy.",
        elevated: {
            title: "Elevated WBC (Leukocytosis):",
            items: [
                "Bacterial infections",
                "Inflammation or tissue necrosis",
                "Leukemia or lymphoma",
                "Stress response (physical or emotional)",
                "Corticosteroid use",
                "Smoking",
                "Pregnancy (third trimester)"
            ]
        },
        decreased: {
            title: "Decreased WBC (Leukopenia):",
            items: [
                "Viral infections (HIV, hepatitis)",
                "Bone marrow suppression",
                "Chemotherapy or radiation",
                "Autoimmune disorders (lupus)",
                "Severe infections (sepsis)",
                "Medications (antibiotics, anticonvulsants)",
                "Nutritional deficiencies"
            ]
        },
        nursingImplications: [
            "Monitor for signs of infection (fever, chills, increased HR/RR)",
            "Implement neutropenic precautions if WBC <1,000",
            "Avoid invasive procedures when possible",
            "Educate patient on infection prevention measures",
            "Monitor temperature every 4 hours",
            "Assess all body systems for infection sources"
        ],
        medications: {
            increase: "Corticosteroids, epinephrine, lithium, G-CSF (Neupogen)",
            decrease: "Chemotherapy agents, antibiotics (sulfonamides), anticonvulsants (phenytoin), antithyroid drugs"
        },
        priorityActions: {
            title: "PRIORITY NURSING ACTIONS:",
            items: [
                {
                    subtitle: "WBC <1,000:",
                    text: "Implement strict neutropenic precautions immediately"
                },
                {
                    subtitle: "WBC >30,000:",
                    text: [
                        "Assess for leukostasis symptoms (confusion, dyspnea, visual changes)",
                        "Report critical values to provider within 30 minutes",
                        "Hold live vaccines if WBC <3,000"
                    ]
                }
            ]
        }
    },
    {
        id: "hgb",
        name: "Hemoglobin (Hgb)",
        shortName: "Hgb",
        tags: ["NCLEX"],
        normalRangeMulti: [
            { label: "Male", value: "13.5-17.5 g/dL" },
            { label: "Female", value: "12.0-16.0 g/dL" }
        ],
        criticalRange: "<7.0 or >20 g/dL",
        whatItMeasures: "Amount of oxygen-carrying protein in red blood cells. Each hemoglobin molecule can carry four oxygen molecules. Essential for tissue oxygenation throughout the body.",
        clinicalSignificance: "Indicates oxygen-carrying capacity of blood. Low levels cause tissue hypoxia and fatigue. Used to diagnose anemia and guide transfusion decisions.",
        elevated: {
            title: "Elevated Hemoglobin:",
            items: [
                "Polycythemia vera",
                "Chronic hypoxia (COPD, high altitude)",
                "Dehydration (hemoconcentration)",
                "Smoking",
                "Erythropoietin abuse",
                "Congenital heart disease"
            ]
        },
        decreased: {
            title: "Decreased Hemoglobin (Anemia):",
            items: [
                "Blood loss (acute or chronic)",
                "Iron deficiency",
                "Vitamin B12 or folate deficiency",
                "Chronic kidney disease",
                "Bone marrow disorders",
                "Hemolysis",
                "Chronic disease/inflammation"
            ]
        },
        nursingImplications: [
            "Assess for signs of anemia: pallor, fatigue, dyspnea, tachycardia, dizziness",
            "Monitor vital signs, especially heart rate and respiratory rate",
            "Assess activity tolerance and implement fall precautions",
            "Administer oxygen as ordered for symptomatic anemia",
            "Prepare for blood transfusion if Hgb <7.0 g/dL or symptomatic",
            "Educate on iron-rich foods and supplements"
        ],
        priorityActions: {
            title: "PRIORITY NURSING ACTIONS:",
            items: [
                {
                    subtitle: "Hgb <7.0 g/dL:",
                    text: [
                        "Notify provider immediately, prepare for possible transfusion",
                        "Assess for active bleeding if acute drop in hemoglobin",
                        "Place on continuous pulse oximetry if symptomatic",
                        "Implement activity restrictions and fall precautions"
                    ]
                }
            ]
        },
        nclexTip: {
            title: "NCLEX TIP:",
            text: "Remember the \"Rule of 3\" - Hemoglobin is approximately 1/3 of hematocrit. If Hgb = 12, Hct should be around 36%. This helps you quickly identify lab errors or inconsistencies."
        }
    },
    {
        id: "hct",
        name: "Hematocrit (Hct)",
        shortName: "Hct",
        normalRangeMulti: [
            { label: "Male", value: "39-50%" },
            { label: "Female", value: "36-46%" }
        ],
        criticalRange: "<20% or >60%",
        whatItMeasures: "Percentage of blood volume occupied by red blood cells. Represents the ratio of RBC volume to total blood volume.",
        clinicalSignificance: "Reflects blood's oxygen-carrying capacity and blood viscosity. Used alongside hemoglobin to assess anemia severity and guide fluid resuscitation.",
        elevated: {
            title: "Elevated Hematocrit:",
            items: [
                "Dehydration (most common)",
                "Polycythemia",
                "Chronic hypoxia",
                "Burns (fluid loss)",
                "Shock states"
            ]
        },
        decreased: {
            title: "Decreased Hematocrit:",
            items: [
                "Anemia (all types)",
                "Blood loss",
                "Overhydration",
                "Pregnancy (hemodilution)",
                "Hemolysis"
            ]
        },
        nursingImplications: [
            "Interpret in context with hemoglobin and clinical presentation",
            "High Hct increases blood viscosity and clot risk",
            "Monitor fluid status and I&O closely",
            "Assess for signs of dehydration or fluid overload"
        ]
    },
    {
        id: "plt",
        name: "Platelets (PLT)",
        shortName: "PLT",
        tags: ["HIGH YIELD"],
        normalRange: "150,000-400,000/µL",
        criticalRange: "<50,000 or >1,000,000/µL",
        whatItMeasures: "Number of thrombocytes (platelets) in blood. Platelets are essential for blood clotting and hemostasis. They aggregate at injury sites to form clots and release clotting factors.",
        clinicalSignificance: "Critical for assessing bleeding risk and clotting disorders. Guides decisions about invasive procedures, surgery, and anticoagulation therapy.",
        elevated: {
            title: "Elevated Platelets (Thrombocytosis):",
            items: [
                "Essential thrombocythemia",
                "Post-splenectomy",
                "Iron deficiency anemia",
                "Inflammatory conditions",
                "Malignancy",
                "Post-hemorrhage (reactive)"
            ]
        },
        decreased: {
            title: "Decreased Platelets (Thrombocytopenia):",
            items: [
                "ITP (Immune thrombocytopenic purpura)",
                "DIC (disseminated intravascular coagulation)",
                "Bone marrow suppression",
                "Chemotherapy",
                "Heparin-induced thrombocytopenia (HIT)",
                "Sepsis",
                "Liver disease (decreased production)",
                "Medications (many antibiotics, anticonvulsants)"
            ]
        },
        nursingImplications: [
            "Assess for bleeding: petechiae, purpura, ecchymosis, gingival bleeding",
            "Implement bleeding precautions if <50,000",
            "Use soft toothbrush, electric razor",
            "Avoid IM injections, rectal temperatures, suppositories",
            "Monitor all body fluids for occult blood",
            "Teach patient to avoid NSAIDs and aspirin"
        ],
        priorityActions: {
            title: "PRIORITY NURSING ACTIONS - Platelet Thresholds:",
            items: [
                {
                    subtitle: "PLT <10,000:",
                    text: "CRITICAL - High risk spontaneous bleeding, notify MD immediately"
                },
                {
                    subtitle: "PLT <20,000:",
                    text: "Strict bleeding precautions, consider platelet transfusion"
                },
                {
                    subtitle: "PLT <50,000:",
                    text: "Avoid invasive procedures, no IM injections"
                },
                {
                    subtitle: "PLT <100,000:",
                    text: [
                        "Use caution with procedures, monitor closely",
                        "Monitor for signs of intracranial bleeding: headache, confusion, neuro changes"
                    ]
                }
            ]
        },
        nclexTip: {
            title: "NCLEX TIP - Platelet Mnemonics:",
            text: [
                "\"Ten, Twenty, Fifty, Hundred\"",
                "10,000: Spontaneous bleeding risk",
                "20,000: Transfusion threshold",
                "50,000: No invasive procedures",
                "100,000: Caution with surgery"
            ]
        }
    }
];

export { clinicalActivities, nclexSuccessFactors, usageGuide, specimenCollectionPhases, specimenCollectionPriorityActions, orderOfDraw, bloodTubesData, tubeErrors, hematologyData };