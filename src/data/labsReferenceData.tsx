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

const coagulationData = [
    {
        id: "pt-inr",
        name: "Prothrombin Time (PT) & INR",
        tags: ["HIGH-YIELD"],
        normalRangeMulti: [
            { label: "PT", value: "11-13.5 seconds" },
            { label: "INR", value: "0.8-1.2" }
        ],
        therapeuticRange: "Therapeutic INR (Warfarin): 2.0-3.0",
        criticalRange: "Critical INR: >5.0",
        whatItMeasures: "PT measures the extrinsic and common coagulation pathways (factors I, II, V, VII, X). INR (International Normalized Ratio) standardizes PT results across different labs. Primarily used to monitor warfarin therapy.",
        clinicalSignificance: "Essential for monitoring anticoagulation therapy with warfarin. Assesses liver function (liver produces clotting factors). Evaluates bleeding disorders and vitamin K deficiency.",
        elevated: {
            title: "Prolonged PT/INR (Increased Bleeding Risk):",
            items: [
                "Warfarin therapy (therapeutic or excessive)",
                "Liver disease (decreased factor production)",
                "Vitamin K deficiency",
                "DIC (disseminated intravascular coagulation)",
                "Factor deficiencies (II, V, VII, X)",
                "Antibiotics (kill vitamin K-producing gut bacteria)"
            ]
        },
        decreased: {
            title: "Shortened PT/INR:",
            items: [
                "Vitamin K supplementation",
                "High vitamin K diet",
                "Thrombophilia",
                "Early DIC"
            ]
        },
        nursingImplications: [
            "Monitor INR regularly for patients on warfarin (weekly initially, then monthly)",
            "Assess for bleeding: bruising, hematuria, melena, hemoptysis",
            "Educate on consistent vitamin K intake (avoid sudden changes)",
            "Teach to avoid NSAIDs, aspirin, and alcohol",
            "Instruct to report any bleeding or unusual bruising",
            "Ensure patient wears medical alert bracelet"
        ],
        medications: {
            increase: "Warfarin, antibiotics, aspirin, NSAIDs, amiodarone, cimetidine, alcohol",
            decrease: "Vitamin K, oral contraceptives, barbiturates, rifampin"
        },
        priorityActions: {
            title: "PRIORITY NURSING ACTIONS - INR Management:",
            items: [
                {
                    subtitle: "INR >5.0:",
                    text: "Hold warfarin, notify provider immediately, assess for bleeding"
                },
                {
                    subtitle: "INR >9.0:",
                    text: "CRITICAL - Administer vitamin K as ordered, prepare for possible FFP"
                },
                {
                    subtitle: "Active bleeding + elevated INR:",
                    text: [
                        "Administer vitamin K IV, FFP, or PCC as ordered",
                        "For minor bleeding: Hold 1-2 doses, recheck INR",
                        "Document all bleeding episodes and interventions"
                    ]
                }
            ]
        },
        nclexHighYield: {
            title: "NCLEX HIGH-YIELD: Warfarin Management",
            items: [
                {
                    subtitle: "Therapeutic INR Ranges:",
                    text: [
                        "Standard therapy (DVT, PE, A-fib): INR 2.0-3.0",
                        "Mechanical heart valves: INR 2.5-3.5",
                        "Recurrent thrombosis: INR 2.5-3.5"
                    ]
                },
                {
                    subtitle: "Key Teaching Points:",
                    text: [
                        "Maintain consistent vitamin K intake (green leafy vegetables)",
                        "Avoid cranberry juice (increases INR)",
                        "Report any falls or head trauma immediately",
                        "Use electric razor and soft toothbrush",
                        "Avoid contact sports"
                    ]
                }
            ]
        },
        nclexTip: {
            title: "NCLEX TIP - Warfarin vs. Heparin:",
            text: [
                "Warfarin:",
                "Monitored by PT/INR, oral, takes 3-5 days to work, antidote = Vitamin K",
                "Heparin:",
                "Monitored by PTT, IV/SubQ, immediate effect, antidote = Protamine sulfate"
            ]
        }
    },
    {
        id: "ptt",
        name: "Partial Thromboplastin Time (PTT/aPTT)",
        tags: ["HIGH-YIELD"],
        normalRange: "25-35 seconds",
        therapeuticRange: "Therapeutic (Heparin): 1.5-2.5 x control (46-70 sec)",
        criticalRange: ">100 seconds",
        whatItMeasures: "PTT measures the intrinsic and common coagulation pathways (factors VIII, IX, XI, XII, and others). Primarily used to monitor heparin therapy and screen for clotting factor deficiencies.",
        clinicalSignificance: "Essential for monitoring unfractionated heparin therapy. Screens for hemophilia and other bleeding disorders. Assesses overall coagulation status.",
        elevated: {
            title: "Prolonged PTT:",
            items: [
                "Heparin therapy (therapeutic or excessive)",
                "Hemophilia A (factor VIII deficiency)",
                "Hemophilia B (factor IX deficiency)",
                "Von Willebrand disease",
                "DIC",
                "Liver disease",
                "Lupus anticoagulant"
            ]
        },
        decreased: {
            title: "Shortened PTT:",
            items: [
                "Early DIC",
                "Extensive cancer",
                "Immediately after acute hemorrhage"
            ]
        },
        nursingImplications: [
            "Monitor PTT 6 hours after heparin initiation or dose change",
            "Maintain therapeutic range to prevent clotting or bleeding",
            "Assess for signs of bleeding or thrombosis",
            "Check for hematuria, melena, hemoptysis, excessive bruising",
            "Monitor IV site for infiltration (heparin causes tissue necrosis)",
            "Use infusion pump for continuous heparin infusion"
        ],
        priorityActions: {
            title: "PRIORITY NURSING ACTIONS - PTT Management:",
            items: [
                {
                    subtitle: "PTT >100 seconds:",
                    text: "Stop heparin immediately, notify provider"
                },
                {
                    subtitle: "Active bleeding:",
                    text: "Administer protamine sulfate as ordered (1 mg neutralizes 100 units heparin)"
                },
                {
                    subtitle: "Subtherapeutic PTT:",
                    text: "Increase heparin per protocol, assess for clot formation"
                },
                {
                    subtitle: "Supratherapeutic PTT:",
                    text: [
                        "Decrease or hold heparin, assess for bleeding",
                        "Never give heparin bolus without checking baseline PTT"
                    ]
                }
            ]
        },
        nclexTip: {
            title: "NCLEX TIP - Heparin Monitoring:",
            text: [
                "Remember: \"PTT for Heparin Therapy\"",
                "Check PTT 6 hours after starting or changing heparin dose",
                "Goal: 1.5-2.5 times control (usually 46-70 seconds)",
                "Protamine sulfate is the antidote",
                "LMWH (Lovenox) does NOT require PTT monitoring"
            ]
        }
    },
    {
        id: "d-dimer",
        name: "D-Dimer",
        normalRange: "<0.5 µg/mL (or <500 ng/mL)",
        therapeuticRange: "Elevated: >0.5 µg/mL",
        whatItMeasures: "Measures fibrin degradation products in blood. Indicates active clot formation and breakdown. Highly sensitive but not specific for thrombosis.",
        clinicalSignificance: "Used to rule out DVT and PE (high negative predictive value). Elevated in DIC, recent surgery, trauma, pregnancy, and many other conditions. Normal D-dimer effectively rules out thrombosis.",
        elevated: {
            title: "Elevated D-Dimer:",
            items: [
                "Deep vein thrombosis (DVT)",
                "Pulmonary embolism (PE)",
                "DIC",
                "Recent surgery or trauma",
                "Pregnancy",
                "Malignancy",
                "Infection/sepsis",
                "Liver disease",
                "Advanced age"
            ]
        },
        nursingImplications: [
            "Normal D-dimer rules out DVT/PE in low-risk patients",
            "Elevated D-dimer requires further testing (ultrasound, CT angiography)",
            "Not useful for monitoring anticoagulation therapy",
            "Many false positives - must correlate with clinical presentation"
        ],
        nclexTip: {
            title: "NCLEX TIP:",
            text: "D-dimer is best used to RULE OUT clots, not diagnose them. A normal D-dimer means no clot. An elevated D-dimer means \"maybe\" - need more tests."
        }
    }
];

const BMPData = [
    {
        test: "Glucose",
        normalRange: "70-100 mg/dL (fasting)",
        criticalValues: "<40 or >500 mg/dL",
        primaryFunction: "Blood sugar level"
    },
    {
        test: "Calcium",
        normalRange: "8.5-10.5 mg/dL",
        criticalValues: "<6.0 or >13.0 mg/dL",
        primaryFunction: "Bone health, muscle function"
    },
    {
        test: "Sodium",
        normalRange: "135-145 mEq/L",
        criticalValues: "<120 or >160 mEq/L",
        primaryFunction: "Fluid balance"
    },
    {
        test: "Potassium",
        normalRange: "3.5-5.0 mEq/L",
        criticalValues: "<2.5 or >6.5 mEq/L",
        primaryFunction: "Cardiac function"
    },
    {
        test: "Chloride",
        normalRange: "96-106 mEq/L",
        criticalValues: "<80 or >115 mEq/L",
        primaryFunction: "Acid-base balance"
    },
    {
        test: "CO2/Bicarbonate",
        normalRange: "22-28 mEq/L",
        criticalValues: "<10 or >40 mEq/L",
        primaryFunction: "Acid-base balance"
    },
    {
        test: "BUN",
        normalRange: "7-20 mg/dL",
        criticalValues: ">100 mg/dL",
        primaryFunction: "Kidney function"
    },
    {
        test: "Creatinine",
        normalRange: "0.6-1.2 mg/dL",
        criticalValues: ">4.0 mg/dL",
        primaryFunction: "Kidney function"
    }
];

const BMP_NCLEX_TIP = {
    title: "NCLEX TIP - BMP vs CMP:",
    sections: [
        {
            subtitle: "BMP (8 tests):",
            text: "Basic kidney function and electrolytes"
        },
        {
            subtitle: "CMP (14 tests):",
            text: "BMP + liver function tests (ALT, AST, ALP, bilirubin, albumin, total protein)\nRemember: CMP = BMP + Liver tests"
        }
    ]
};

const CMPData = [
    {
        test: "ALT (Alanine Aminotransferase)",
        normalRange: "7-56 U/L",
        criticalValues: ">1000 U/L",
        primaryFunction: "Liver enzyme (specific)"
    },
    {
        test: "AST (Aspartate Aminotransferase)",
        normalRange: "10-40 U/L",
        criticalValues: ">1000 U/L",
        primaryFunction: "Liver enzyme (also in heart, muscle)"
    },
    {
        test: "ALP (Alkaline Phosphatase)",
        normalRange: "44-147 U/L",
        criticalValues: ">1000 U/L",
        primaryFunction: "Liver, bone, bile duct enzyme"
    },
    {
        test: "Total Bilirubin",
        normalRange: "0.1-1.2 mg/dL",
        criticalValues: ">12 mg/dL",
        primaryFunction: "Liver function, RBC breakdown"
    },
    {
        test: "Albumin",
        normalRange: "3.5-5.5 g/dL",
        criticalValues: "<2.0 g/dL",
        primaryFunction: "Protein synthesis, nutrition"
    },
    {
        test: "Total Protein",
        normalRange: "6.0-8.3 g/dL",
        criticalValues: "<4.0 g/dL",
        primaryFunction: "Overall protein status"
    }
];

const CMP_NCLEX_TIP = {
    title: "When to Order CMP vs BMP:",
    sections: [
        {
            subtitle: "•  Order BMP:",
            text: "Routine screening, monitoring electrolytes, kidney function checks"
        },
        {
            subtitle: "•  Order CMP:",
            text: "Suspected liver disease, malnutrition, comprehensive metabolic assessment, pre-operative evaluation"
        }
    ]
};

// Electrolytes Data
const electrolytesData = {
    potassium: {
        name: "Potassium (K+)",
        tags: ["HIGH YIELD", "CRITICAL"],
        normalRange: "3.5-5.0 mEq/L",
        criticalLow: "<2.5 or >6.5 mEq/L",
        whatItMeasures: "Primary intracellular cation; essential for cardiac function, muscle contraction, and nerve transmission. Even small changes can cause life-threatening cardiac arrhythmias.",
        clinicalSignificance: "CRITICAL for cardiac function. Both high and low potassium can cause fatal arrhythmias. Must be monitored closely in patients on diuretics, with renal disease, or receiving IV potassium.",
        hyperkalemia: {
            title: "Hyperkalemia (K+ >5.0):",
            causes: [
                "Renal failure (most common)",
                "Potassium-sparing diuretics (spironolactone)",
                "ACE inhibitors, ARBs",
                "Excessive potassium intake/supplementation",
                "Acidosis (K+ shifts out of cells)",
                "Tissue breakdown (burns, trauma, rhabdomyolysis)",
                "Addison's disease",
                "Hemolyzed blood sample (false high)"
            ],
            signsSymptoms: [
                "Cardiac:",
                "Peaked T waves, widened QRS, bradycardia, V-fib, asystole",
                "Muscle weakness, flaccid paralysis",
                "Paresthesias",
                "Nausea, intestinal colic",
                "Oliguria"
            ]
        },
        hypokalemia: {
            title: "Hypokalemia (K+ <3.5):",
            causes: [
                "Diuretics (furosemide, thiazides)",
                "Vomiting, diarrhea, NG suction",
                "Inadequate intake",
                "Alkalosis (K+ shifts into cells)",
                "Insulin administration",
                "Hyperaldosteronism",
                "Cushing's syndrome",
                "Excessive sweating"
            ],
            signsSymptoms: [
                "Cardiac:",
                "Flattened T waves, U waves, ST depression, PVCs, V-tach",
                "Muscle weakness, leg cramps",
                "Decreased bowel sounds, ileus",
                "Polyuria",
                "Fatigue, confusion",
                "Increased digoxin toxicity risk"
            ]
        },
        priorityActionsHyper: {
            title: "PRIORITY NURSING ACTIONS - HYPERKALEMIA:",
            subtitle: "K+ >6.5:",
            lifeThreateningTitle: "LIFE-THREATENING - Place on cardiac monitor immediately",
            emergencyTreatment: "Emergency Treatment (in order):",
            treatments: [
                {
                    step: "1. Calcium gluconate IV:",
                    description: "Stabilizes cardiac membrane (works in 1-3 min)"
                },
                {
                    step: "2. Regular insulin + D50W IV:",
                    description: "Shifts K+ into cells (works in 15-30 min)"
                },
                {
                    step: "3. Sodium bicarbonate IV:",
                    description: "Shifts K+ into cells (if acidotic)"
                },
                {
                    step: "4. Albuterol nebulizer:",
                    description: "Shifts K+ into cells"
                },
                {
                    step: "5. Kayexalate (sodium polystyrene):",
                    description: "Removes K+ via GI tract (works in hours)"
                },
                {
                    step: "6. Dialysis:",
                    description: "If renal failure or refractory hyperkalemia"
                }
            ],
            additionalActions: [
                "STOP all potassium supplements and K+-sparing diuretics",
                "Monitor ECG continuously",
                "Assess for digoxin toxicity (hypokalemia increases risk)"
            ]
        },
        priorityActionsHypo: {
            title: "PRIORITY NURSING ACTIONS - HYPOKALEMIA:",
            subtitle: "K+ <3.0:",
            critical: "CRITICAL - Notify provider immediately, assess for arrhythmias",
            ivPotassiumTitle: "IV Potassium Administration:",
            ivPotassiumItems: [
                "NEVER give IV push (causes cardiac arrest)",
                "Maximum rate: 10 mEq/hour via peripheral IV",
                "Maximum rate: 20 mEq/hour via central line",
                "Maximum concentration: 40 mEq/L peripheral, 60 mEq/L central",
                "Use infusion pump - NEVER gravity drip",
                "Dilute in 100-250 mL fluid",
                "Monitor IV site (K+ is very irritating to veins)",
                "Assess for digoxin toxicity (hypokalemia increases risk)"
            ],
            additionalActions: [
                "Encourage high-potassium foods",
                "Exchange high-potassium foods",
                "Monitor ECG for arrhythmias"
            ]
        },
        medications: {
            title: "Medications Affecting Potassium:",
            increase: [
                "Increase K+:",
                "Potassium-sparing diuretics (spironolactone, amiloride), ACE inhibitors, ARBs, NSAIDs, potassium supplements"
            ],
            decrease: [
                "Decrease K+:",
                "Loop diuretics (furosemide), thiazide diuretics, corticosteroids, insulin, beta-agonists (albuterol)"
            ]
        },
        nclexHighYield: {
            title: "NCLEX HIGH-YIELD: Potassium & ECG Changes",
            hyperkalemiaECG: {
                title: "Hyperkalemia ECG Progression:",
                items: [
                    "1. Peaked T waves (early sign)",
                    "2. Prolonged PR interval",
                    "3. Widened QRS complex",
                    "4. Loss of P wave",
                    "5. Sine wave pattern → V-fib → Asystole"
                ]
            },
            hypokalemiaECG: {
                title: "Hypokalemia ECG Changes:",
                items: [
                    "Flattened or inverted T waves",
                    "Prominent U waves (most characteristic)",
                    "ST segment depression",
                    "Prolonged QT interval",
                    "PVCs, V-tach"
                ]
            }
        },
        mnemonic: {
            title: "NCLEX TIP - Potassium Foods Mnemonic:",
            subtitle: '"BANANAS Are GREAT"',
            items: [
                { letter: "B", description: "ananas," },
                { letter: "A", description: "vocados," },
                { letter: "N", description: "uts," },
                { letter: "A", description: "pricots," },
                { letter: "N", description: "aval oranges" },
                { letter: "A", description: "rtichokes" },
                { letter: "S", description: "pinach" },
                { letter: "A", description: "cai" },
                { letter: "G", description: "rapefruits," },
                { letter: "R", description: "aisins," },
                { letter: "E", description: "ggplant," },
                { letter: "A", description: "pples" },
                { letter: "T", description: "omatoes" },
                { letter: "", description: "Also: Potatoes, beans, fish, dairy, melons" }
            ]
        }
    },
    sodium: {
        name: "Sodium (Na+)",
        tags: ["HIGH YIELD"],
        normalRange: "135-145 mEq/L",
        criticalRange: "<120 or >160 mEq/L",
        whatItMeasures: "Primary extracellular cation that regulates fluid balance, blood pressure, and nerve/muscle function. Sodium follows water, and water follows sodium.",
        clinicalSignificance: "Critical for maintaining fluid balance and osmolality. Abnormalities can cause neurological symptoms ranging from confusion to seizures and coma. Rapid correction can be dangerous.",
        hypernatremia: {
            title: "Hypernatremia (Na+ >145):",
            causes: [
                "Dehydration (most common)",
                "Inadequate water intake",
                "Excessive sodium intake (IV hypertonic saline)",
                "Diabetes insipidus",
                "Cushing's syndrome",
                "Hyperaldosteronism",
                "Watery diarrhea",
                "Diuretics"
            ],
            signsSymptoms: [
                "Thirst (early sign)",
                "Dry mucous membranes",
                "Decreased skin turgor",
                "Restlessness, agitation",
                "Confusion, lethargy",
                "Seizures (severe)",
                "Coma (severe)",
                "Muscle twitching, hyperreflexia"
            ]
        },
        hyponatremia: {
            title: "Hyponatremia (Na+ <135):",
            causes: [
                "SIADH (syndrome of inappropriate ADH)",
                "Excessive water intake",
                "Diuretics (thiazides)",
                "Heart failure",
                "Cirrhosis",
                "Renal disease",
                "Vomiting, diarrhea",
                "Addison's disease",
                "Psychogenic polydipsia"
            ],
            signsSymptoms: [
                "Headache",
                "Nausea, vomiting",
                "Confusion, disorientation",
                "Muscle cramps, weakness",
                "Seizures (severe)",
                "Coma (severe)",
                "Decreased deep tendon reflexes",
                "Cerebral edema (acute, severe)"
            ]
        },
        priorityActionsHyper: {
            title: "PRIORITY NURSING ACTIONS - HYPERNATREMIA:",
            subtitle: "Na+ >160:",
            critical: "CRITICAL - Assess neurological status immediately",
            treatment: "Restrict water deficit slowly (0.5 mEq/L per hour maximum)",
            items: [
                "Administer hypotonic fluids (0.45% NaCl or D5W) as ordered",
                "Monitor for cerebral edema if correcting too rapidly",
                "Assess fluid status: I&O, daily weights, vital signs",
                "Provide oral fluids if patient can tolerate",
                "Monitor neurological status frequently"
            ]
        },
        priorityActionsHypo: {
            title: "PRIORITY NURSING ACTIONS - HYPONATREMIA:",
            subtitle: "Na+ <120:",
            critical: "CRITICAL - Seizure precautions, assess neuro status",
            acuteSymptomaticTitle: "Acute symptomatic hyponatremia:",
            acuteItems: [
                "May require 3% hypertonic saline",
                "Correct SLOWLY (0.5 mEq/L per hour, max 8-10 mEq/L in 24 hours)"
            ],
            dangerTitle: "DANGER:",
            dangerItems: [
                "Rapid correction causes osmotic demyelination syndrome (permanent brain damage)",
                "Fluid restrict if SIADH (800-1000 mL/day)",
                "Monitor neurological status closely",
                "Seizure precautions if <125 mEq/L",
                "Monitor for signs of fluid overload"
            ]
        },
        nclexHighYield: {
            title: "NCLEX HIGH-YIELD: SIADH vs Diabetes Insipidus",
            siadh: {
                title: "SIADH (Too Much ADH):",
                items: [
                    "Hyponatremia (dilutional)",
                    "Fluid retention",
                    "Concentrated urine (high specific gravity)",
                    "Weight gain without edema",
                    "Treatment: Fluid restriction"
                ]
            },
            diabetesInsipidus: {
                title: "Diabetes Insipidus (Not Enough ADH):",
                items: [
                    "Hypernatremia (concentration)",
                    "Dehydration",
                    "Dilute urine (low specific gravity)",
                    "Polyuria, polydipsia",
                    "Treatment: Desmopressin (DDAVP), fluids"
                ]
            }
        },
        nclexTip: {
            title: "NCLEX TIP - Sodium Correction:",
            subtitle: '"Low and Slow, High and Dry"',
            items: [
                "Hyponatremia:",
                "Correct SLOWLY (risk of osmotic demyelination)",
                "Hypernatremia:",
                "Correct SLOWLY (risk of cerebral edema)",
                "Both require gradual correction - NEVER rapid!"
            ]
        }
    },
    calcium: {
        name: "Calcium (Ca++)",
        tags: ["HIGH YIELD"],
        normalRanges: [
            { label: "Total:", value: "8.5-10.5 mg/dL" },
            { label: "Ionized:", value: "4.5-5.5 mg/dL" }
        ],
        criticalRange: "<6.0 or >13.0 mg/dL",
        whatItMeasures: "Essential mineral for bone health, muscle contraction, nerve transmission, and blood clotting. Regulated by parathyroid hormone (PTH) and vitamin D. Ionized calcium is the active form.",
        clinicalSignificance: "Critical for cardiac and neuromuscular function. Abnormalities can cause life-threatening arrhythmias and tetany. Must consider albumin levels (low albumin = falsely low calcium).",
        hypercalcemia: {
            title: "Hypercalcemia (Ca++ >10.5):",
            causes: [
                "Hyperparathyroidism (most common)",
                "Malignancy (bone metastases)",
                "Excessive vitamin D",
                "Thiazide diuretics",
                "Immobility",
                "Milk-alkali syndrome",
                "Paget's disease"
            ],
            signsSymptoms: [
                '"Stones, Bones, Groans, Moans"',
                "Stones:",
                "Kidney stones",
                "Bones:",
                "Bone pain, fractures",
                "Groans:",
                "Constipation, nausea, vomiting",
                "Moans:",
                "Depression, confusion, lethargy",
                "Muscle weakness",
                "Shortened QT interval",
                "Polyuria, polydipsia"
            ]
        },
        hypocalcemia: {
            title: "Hypocalcemia (Ca++ <8.5):",
            causes: [
                "Hypoparathyroidism (post-thyroidectomy)",
                "Vitamin D deficiency",
                "Chronic kidney disease",
                "Hypomagnesemia",
                "Acute pancreatitis",
                "Massive blood transfusions (citrate binds Ca++)",
                "Loop diuretics",
                "Malabsorption"
            ],
            signsSymptoms: [
                "Tetany:",
                "Muscle spasms, cramps",
                "Chvostek's sign:",
                "Face twitching when tapping facial nerve",
                "Trousseau's sign:",
                "Carpopedal spasm with BP cuff inflation",
                "Paresthesias (tingling around mouth, fingers)",
                "Seizures",
                "Prolonged QT interval",
                "Laryngospasm (life-threatening)"
            ]
        },
        priorityActionsHyper: {
            title: "PRIORITY NURSING ACTIONS - HYPERCALCEMIA:",
            subtitle: "Ca++ >13:",
            items: [
                "CRITICAL - Assess cardiac rhythm, neurological status",
                "Administer IV normal saline to promote renal excretion",
                "Administer loop diuretics (furosemide) as ordered",
                "Administer calcitonin or bisphosphonates as ordered",
                "Encourage mobilization (immobility worsens hypercalcemia)",
                "Strain urine for kidney stones"
            ]
        },
        priorityActionsHypo: {
            title: "PRIORITY NURSING ACTIONS - HYPOCALCEMIA:",
            subtitle: "Ca++ <6.0:",
            items: [
                "CRITICAL - Seizure precautions, airway equipment at bedside",
                "Assess for Chvostek's and Trousseau's signs",
                "Administer IV calcium gluconate slowly (cardiac monitoring required)",
                "NEVER give calcium IV push",
                "(causes cardiac arrest)",
                "Keep calcium gluconate at bedside for emergency",
                "Monitor for laryngospasm - have trach tray available",
                "Check magnesium level (hypomagnesemia prevents Ca++ correction)",
                "Administer vitamin D as ordered",
                "Seizure precautions"
            ]
        },
        nclexHighYield: {
            title: "NCLEX HIGH-YIELD: Calcium Assessment",
            chvosteksSign: {
                title: "Chvostek's Sign (Hypocalcemia):",
                items: [
                    "Tap facial nerve anterior to ear",
                    "Positive = facial muscle twitching",
                    "Indicates neuromuscular irritability"
                ]
            },
            trousseausSign: {
                title: "Trousseau's Sign (Hypocalcemia):",
                items: [
                    "Inflate BP cuff above systolic pressure for 3 minutes",
                    "Positive = carpopedal spasm (hand flexion)",
                    "More specific than Chvostek's sign"
                ]
            }
        },
        nclexTip: {
            title: "NCLEX TIP - Calcium Mnemonic:",
            subtitle: '"CATS go numb" (HYPOcalcemia)',
            items: [
                "C",
                "onvulsions",
                "A",
                "rrhythmias",
                "T",
                "etany",
                "S",
                "pasms and Stridor",
                '"Bones, Stones, Groans, Moans" (HYPERcalcemia)'
            ]
        }
    },
    magnesium: {
        name: "Magnesium (Mg++)",
        normalRange: "1.5-2.5 mEq/L",
        criticalRange: "<1.0 or >5.0 mEq/L",
        whatItMeasures: "Essential mineral for enzyme function, protein synthesis, and neuromuscular transmission. Cofactor in over 300 enzymatic reactions. Important for cardiac and neuromuscular function.",
        clinicalSignificance: "Often overlooked but critical electrolyte. Hypomagnesemia can prevent correction of hypokalemia and hypocalcemia. Essential for cardiac stability.",
        hypermagnesemia: {
            title: "Hypermagnesemia (Mg++ >2.5):",
            causes: [
                "Renal failure (most common)",
                "Excessive magnesium administration",
                "Magnesium-containing antacids/laxatives",
                "Addison's disease"
            ],
            signsSymptoms: [
                "Decreased deep tendon reflexes (first sign)",
                "Muscle weakness, lethargy",
                "Nausea, vomiting",
                "Hypotension, bradycardia",
                "Respiratory depression (>10 mEq/L)",
                "Cardiac arrest (>15 mEq/L)"
            ]
        },
        hypomagnesemia: {
            title: "Hypomagnesemia (Mg++ <1.5):",
            causes: [
                "Chronic diarrhea",
                "Malabsorption",
                "Chronic alcoholism",
                "Diuretics (loop, thiazide)",
                "Diabetic ketoacidosis",
                "Prolonged NG suction",
                "Malnutrition"
            ],
            signsSymptoms: [
                "Hyperactive deep tendon reflexes",
                "Muscle tremors, twitching",
                "Seizures",
                "Cardiac arrhythmias (V-tach, torsades)",
                "Positive Chvostek's and Trousseau's signs",
                "Confusion, irritability"
            ]
        },
        priorityActionsHyper: {
            title: "PRIORITY NURSING ACTIONS - HYPERMAGNESEMIA:",
            subtitle: "Mg++ >5.0:",
            items: [
                "CRITICAL - Assess respiratory status and DTRs",
                "Stop all magnesium sources immediately",
                "Administer calcium gluconate IV (antidote)",
                "Prepare for dialysis if renal failure",
                "Monitor respiratory rate and depth",
                "Assess deep tendon reflexes frequently"
            ]
        },
        priorityActionsHypo: {
            title: "PRIORITY NURSING ACTIONS - HYPOMAGNESEMIA:",
            subtitle: "Mg++ <1.0:",
            items: [
                "CRITICAL - Seizure precautions, cardiac monitoring",
                "Administer IV magnesium sulfate slowly (too fast causes hypotension)",
                "Monitor for magnesium toxicity during replacement",
                "Check calcium and potassium (often low together)",
                "Assess for arrhythmias",
                "Seizure precautions"
            ]
        },
        nclexTip: {
            title: "NCLEX TIP:",
            text: "Remember: Hypomagnesemia often coexists with hypokalemia and hypocalcemia. You MUST correct magnesium first, or the other electrolytes won't correct!"
        }
    }
};

// Cardiac Markers Data
const cardiacMarkersData = {
    troponin: {
        name: "Troponin (I and T)",
        tags: ["HIGH YIELD", "CRITICAL"],
        normalRange: "<0.04 ng/mL",
        elevatedRange: ">0.04 ng/mL (indicates myocardial injury)",
        whatItMeasures: "Cardiac-specific proteins (Troponin I and Troponin T) released when myocardial cells are damaged. MOST SPECIFIC and SENSITIVE marker for myocardial infarction (MI). Gold standard for MI diagnosis.",
        clinicalSignificance: "Elevated troponin confirms myocardial injury. Even small elevations are significant. Used to diagnose MI, assess MI size, and guide treatment decisions. Remains elevated for 7-14 days.",
        timingAfterMI: {
            title: "⏱️ Timing After MI:",
            rises: {
                label: "Rises:",
                value: "3-4 hours after MI onset"
            },
            peaks: {
                label: "Peaks:",
                value: "12-24 hours"
            },
            returnsToNormal: {
                label: "Returns to normal:",
                value: "7-14 days"
            },
            serialTroponins: {
                label: "Serial troponins:",
                value: "Drawn at 0, 3, and 6 hours to detect rising pattern"
            }
        },
        causesOfElevated: {
            title: "📋 Causes of Elevated Troponin:",
            items: [
                "Myocardial infarction (most common and important)",
                "Myocarditis, pericarditis",
                "Heart failure (acute or chronic)",
                "Pulmonary embolism",
                "Sepsis, severe infection",
                "Renal failure (chronic elevation)",
                "Cardiac contusion (trauma)",
                "Cardioversion",
                "Strenuous exercise (marathon)"
            ]
        },
        nursingImplications: {
            title: "👩‍⚕️ Nursing Implications:",
            items: [
                "Elevated troponin = myocardial injury until proven otherwise",
                "Serial troponin more valuable than single value",
                "Rising troponin pattern confirms acute MI",
                "Correlate with ECG changes and patient symptoms",
                "Troponin can be elevated without MI (see causes above)",
                "Higher troponin = worse prognosis"
            ]
        },
        priorityActions: {
            title: "PRIORITY NURSING ACTIONS - Elevated Troponin:",
            subtitle: "ANY elevation:",
            items: [
                "Notify provider immediately",
                "Assess patient: pain, dyspnea, diaphoresis",
                "Obtain 12-lead ECG immediately",
                "Place on continuous cardiac monitoring",
                "Establish IV access",
                "Prepare for possible cardiac catheterization",
                "Administer aspirin, nitroglycerin, morphine as ordered",
                "Monitor vital signs every 15 minutes",
                "Keep patient on bedrest",
                "Monitor for arrhythmias"
            ]
        }
    },
    comparisonTable: {
        title: "NCLEX HIGH-YIELD: Troponin vs Other Cardiac Markers",
        headers: ["Marker", "Rises", "Peaks", "Returns to Normal", "Specificity"],
        data: [
            {
                marker: "Troponin",
                rises: "3-4 hours",
                peaks: "12-24 hours",
                returns: "7-14 Days",
                specificity: "HIGHEST (gold standard)"
            },
            {
                marker: "CK-MB",
                rises: "4-6 hours",
                peaks: "12-24 hours",
                returns: "2-3 days",
                specificity: "High (cardiac-specific)"
            },
            {
                marker: "Myoglobin",
                rises: "1-2 hours",
                peaks: "6-12 hours",
                returns: "24 hours",
                specificity: "Low (not cardiac-specific)"
            }
        ]
    },
    nclexTipTroponin: {
        title: "💡 NCLEX TIP - Troponin Timing:",
        subtitle: "3-12-7 Rule:",
        items: [
            "3 hours:",
            "Troponin starts to rise",
            "12 hours:",
            "Troponin peaks",
            "7 days:",
            "Troponin returns to normal (up to 14 days)"
        ],
        keyPoints: {
            title: "Key Points:",
            items: [
                "Serial troponins at 0, 3, and 6 hours. Rising pattern = acute MI",
                "Higher troponin = worse prognosis",
                "CK-MB returns to normal faster than troponin (useful for detecting reinfarction within a week of first MI)"
            ]
        }
    },
    ckMB: {
        name: "Creatine Kinase-MB (CK-MB)",
        normalRange: "<5% of total CK or <25 IU/L",
        elevatedRange: ">5% of total CK",
        whatItMeasures: "Cardiac-specific isoenzyme of creatine kinase. Found primarily in cardiac muscle. Less specific than troponin but useful for detecting reinfarction.",
        clinicalSignificance: "Used to confirm MI and detect reinfarction. Returns to normal faster than troponin. CK-MB >5% of total CK suggests cardiac origin.",
        timingAfterMI: {
            title: "⏱️ Timing After MI:",
            rises: {
                label: "Rises:",
                value: "4-6 hours after MI"
            },
            peaks: {
                label: "Peaks:",
                value: "12-24 hours"
            },
            returnsToNormal: {
                label: "Returns to normal:",
                value: "2-3 days"
            }
        },
        causesOfElevated: {
            title: "📋 Causes of Elevated CK-MB:",
            items: [
                "Myocardial infarction",
                "Cardiac surgery",
                "Myocarditis",
                "Cardioversion",
                "Cardiac contusion",
                "Skeletal muscle injury (if total CK also elevated)"
            ]
        },
        nclexTip: {
            title: "NCLEX TIP:",
            text: "CK-MB returns to normal in 2-3 days, while troponin stays elevated for 7-14 days. This makes CK-MB useful for detecting reinfarction within a week of the first MI."
        }
    },
    bnp: {
        name: "B-Type Natriuretic Peptide (BNP)",
        tags: ["NCLEX"],
        normalRange: "<100 pg/mL",
        heartFailureLikely: ">400 pg/mL",
        severeHF: ">900 pg/mL",
        whatItMeasures: "Hormone released by ventricles in response to stretching (volume overload). Helps differentiate cardiac vs pulmonary causes of dyspnea. Marker of heart failure severity.",
        clinicalSignificance: "Elevated BNP indicates heart failure. Higher levels = worse heart failure. Used to diagnose HF, assess severity, and guide treatment. Also used to monitor treatment response.",
        bnpInterpretation: {
            title: "📊 BNP Interpretation:",
            items: [
                {
                    level: "<100 pg/mL:",
                    text: "Heart failure unlikely"
                },
                {
                    level: "100-400 pg/mL:",
                    text: "Gray zone, consider other factors"
                },
                {
                    level: ">400 pg/mL:",
                    text: "Heart failure likely"
                },
                {
                    level: ">900 pg/mL:",
                    text: "Severe heart failure"
                }
            ]
        },
        causesOfElevated: {
            title: "📋 Causes of Elevated BNP:",
            items: [
                "Heart failure (systolic or diastolic)",
                "Acute coronary syndrome",
                "Pulmonary embolism",
                "Pulmonary hypertension",
                "Renal failure",
                "Sepsis",
                "Advanced age"
            ]
        },
        nursingImplications: {
            title: "👩‍⚕️ Nursing Implications:",
            items: [
                "Use BNP to differentiate cardiac vs pulmonary dyspnea",
                "Monitor BNP trends to assess treatment effectiveness",
                "Decreasing BNP = improving heart failure",
                "Assess for signs of heart failure: dyspnea, edema, JVD, crackles",
                "Monitor daily weights and I&O"
            ]
        },
        nclexTip: {
            title: "💡 NCLEX TIP:",
            subtitle: 'BNP helps answer: "Is this dyspnea from heart failure or lung disease?"',
            items: [
                "High BNP + dyspnea = Heart failure (give diuretics)",
                "Low BNP + dyspnea = Lung disease (don't give diuretics)"
            ]
        }
    }
};

// Liver Function Tests Data
const liverFunctionData = {
    alt: {
        name: "Alanine Aminotransferase (ALT)",
        normalRange: "7-56 U/L",
        criticalRange: ">1000 U/L",
        whatItMeasures: "Liver enzyme found primarily in hepatocytes. Most specific indicator of liver cell damage. More liver-specific than AST.",
        clinicalSignificance: "Elevated ALT indicates hepatocellular injury. Higher elevations suggest more severe liver damage. Used to diagnose and monitor liver disease.",
        causesOfElevated: {
            title: "📋 Causes of Elevated ALT:",
            items: [
                "Viral hepatitis (very high elevations)",
                "Drug-induced liver injury (many medications/hepatin statins)",
                "Alcoholic liver disease",
                "Non-alcoholic fatty liver disease (NAFLD)",
                "Cirrhosis",
                "Liver ischemia",
                "Hemochromatosis"
            ]
        },
        medications: {
            title: "💊 Medications Affecting Results:",
            subtitle: "Hepatotoxic drugs:",
            items: [
                "Acetaminophen, statins, isoniazid, phenytoin, valproic acid, amiodarone"
            ]
        },
        priorityActions: {
            title: "🚨 PRIORITY NURSING ACTIONS:",
            subtitle: "ALT >1000:",
            items: [
                "Assess for acute liver failure; notify provider immediately",
                "Review medication list for hepatotoxic drugs",
                "Assess for signs of liver failure: jaundice, confusion, bleeding",
                "Monitor for acetaminophen overdose (give N-acetylcysteine if indicated)"
            ]
        }
    },
    ast: {
        name: "Aspartate Aminotransferase (AST)",
        normalRange: "10-40 U/L",
        criticalRange: ">1000 U/L",
        whatItMeasures: "Enzyme found in liver, heart, muscle, and kidneys. Less specific for liver than ALT. Elevated in both liver and cardiac disease. AST/ALT ratio helps differentiate causes of liver disease.",
        clinicalSignificance: "Used with ALT to assess liver function. AST/ALT ratio \u003e2:1 suggests alcoholic liver disease. AST \u003e ALT suggests viral hepatitis or drug toxicity.",
        causesOfElevated: {
            title: "📋 Causes of Elevated AST:",
            items: [
                "Liver disease (all types)",
                "Myocardial infarction",
                "Muscle injury or disease",
                "Multiple injury or disease",
                "Hemolysis",
                "Pancreatitis"
            ]
        },
        nclexTip: {
            title: "💡 NCLEX TIP - AST/ALT Ratio:",
            sections: [
                {
                    subtitle: "AST = ALT (ratio ~1):",
                    text: "Suggests viral hepatitis or drug toxicity"
                },
                {
                    subtitle: "ALT \u003e AST:",
                    text: "Suggests viral hepatitis or NAFLD"
                },
                {
                    subtitle: "AST \u003e ALT (ratio \u003e2):",
                    text: "Suggests alcoholic liver disease\nBoth very high (\u003e1000):"
                },
                {
                    subtitle: "Suggests acute hepatitis or drug toxicity",
                    text: ""
                }
            ]
        }
    },
    bilirubin: {
        name: "Bilirubin (Total, Direct, Indirect)",
        ranges: [
            { label: "Total:", value: "0.1-1.2 mg/dL" },
            { label: "Direct:", value: "0.0-0.3 mg/dL" },
            { label: "Indirect:", value: "0.1-1.0 mg/dL" }
        ],
        criticalRange: ">12 mg/dL",
        whatItMeasures: "Breakdown product of hemoglobin. Direct (conjugated) bilirubin is processed by liver. Indirect (unconjugated) bilirubin is before liver processing. Total = Direct + Indirect.",
        clinicalSignificance: "Elevated bilirubin causes jaundice (yellowing of skin/eyes). Pattern of elevation helps identify cause: hemolysis, liver disease, or bile duct obstruction.",
        causesOfElevatedBilirubin: {
            title: "📋 Causes of Elevated Bilirubin:",
            elevatedIndirect: {
                title: "Elevated Indirect (Unconjugated):",
                items: [
                    "Hemolysis (RBC breakdown)",
                    "Gilbert's syndrome",
                    "Crigler-Najjar syndrome"
                ]
            },
            elevatedDirect: {
                title: "Elevated Direct (Conjugated):",
                items: [
                    "Bile duct obstruction (gallstones, tumor)",
                    "Hepatitis",
                    "Cirrhosis",
                    "Dubin-Johnson syndrome"
                ]
            }
        },
        nursingImplications: {
            title: "👩‍⚕️ Nursing Implications:",
            items: [
                "Assess for jaundice (best in sclera and under tongue)",
                "Monitor for pruritus (itching from bile salt deposition)",
                "Assess stool color (clay-colored = bile duct obstruction)",
                "Monitor urine color (dark/tea-colored = elevated direct bilirubin)",
                "Assess urine color (dark/tea-colored = elevated direct bilirubin)"
            ]
        },
        nclexTip: {
            title: "💡 NCLEX TIP - Bilirubin Patterns:",
            sections: [
                {
                    subtitle: "High Indirect:",
                    text: "Problem BEFORE liver (hemolysis)"
                },
                {
                    subtitle: "High Direct:",
                    text: "Problem IN or AFTER liver (obstruction, hepatitis)"
                },
                {
                    subtitle: "Both High:",
                    text: "Problem IN liver (hepatitis)"
                }
            ]
        }
    },
    albumin: {
        name: "Albumin",
        normalRange: "3.5-5.5 g/dL",
        criticalRange: "<2.0 g/dL",
        whatItMeasures: "Major protein synthesized by liver. Maintains oncotic pressure and transports substances in blood. Indicator of liver synthetic function and nutritional status.",
        clinicalSignificance: "Low albumin indicates chronic liver disease, malnutrition, or protein loss. Affects drug binding and fluid distribution. Takes weeks to change reflects chronic status.",
        causesOfLowAlbumin: {
            title: "📋 Causes of Low Albumin:",
            items: [
                "Chronic liver disease (cirrhosis)",
                "Malnutrition",
                "Nephrotic syndrome (protein loss in urine)",
                "Protein-losing enteropathy",
                "Burns (protein loss)",
                "Chronic inflammation"
            ]
        },
        nursingImplications: {
            title: "👩‍⚕️ Nursing Implications:",
            items: [
                "Low albumin increases risk of edema and ascites",
                "Affects drug dosing (more free drug available)",
                "Assess nutritional status",
                "Monitor for edema, especially in dependent areas"
            ]
        }
    }
};

// Renal Function Tests Data
const renalFunctionData = {
    bun: {
        name: "Blood Urea Nitrogen (BUN)",
        tags: ["HIGH YIELD"],
        normalRange: "7-20 mg/dL",
        criticalRange: ">100 mg/dL",
        whatItMeasures: "Waste product of protein metabolism filtered by kidneys. Reflects kidney function and hydration status. Less specific than creatinine for kidney function.",
        clinicalSignificance: "Elevated BUN indicates decreased kidney function or dehydration. Used with creatinine to assess kidney function. BUN/Creatinine ratio helps differentiate causes of elevated BUN.",
        elevatedBUN: {
            title: "📈 Elevated BUN:",
            items: [
                "Acute or chronic kidney disease",
                "Dehydration (most common)",
                "GI bleeding (protein from blood)",
                "High protein diet",
                "Shock",
                "Heart failure",
                "Urinary obstruction",
                "Corticosteroid use"
            ]
        },
        decreasedBUN: {
            title: "📉 Decreased BUN:",
            items: [
                "Overhydration",
                "Malnutrition",
                "Severe liver disease",
                "Pregnancy"
            ]
        },
        nursingImplications: {
            title: "👩‍⚕️ Nursing Implications:",
            items: [
                "Always interpret BUN with creatinine",
                "Assess hydration status: I&O, daily weights",
                "Monitor I&O and daily weights",
                "Review medications for nephrotoxic drugs"
            ]
        },
        priorityActions: {
            title: "🚨 PRIORITY NURSING ACTIONS:",
            subtitle: "Creatinine >4.0:",
            items: [
                "Assess for acute kidney injury; notify provider",
                "Hold nephrotoxic medications as ordered",
                "Assess for fluid overload: edema, crackles, JVD",
                "Monitor for hyperkalemia (life-threatening)",
                "Prepare for possible dialysis if severe"
            ]
        }
    },
    creatinine: {
        name: "Creatinine",
        normalRanges: [
            { label: "Male:", value: "0.7-1.3 mg/dL" },
            { label: "Female:", value: "0.6-1.1 mg/dL" }
        ],
        criticalRange: ">4.0 mg/dL",
        whatItMeasures: "Waste product of muscle metabolism filtered by kidneys. More specific indicator of kidney function than BUN. Relatively constant production rate.",
        clinicalSignificance: "Most reliable single indicator of kidney function. Elevated creatinine indicates decreased GFR (glomerular filtration rate). Used to calculate GFR and stage chronic kidney disease.",
        causesOfElevated: {
            title: "📋 Causes of Elevated Creatinine:",
            items: [
                "Acute kidney injury (AKI)",
                "Chronic kidney disease (CKD)",
                "Dehydration (less than BUN elevation)",
                "Rhabdomyolysis (muscle breakdown)",
                "Nephrotoxic medications",
                "High muscle mass (bodybuilders)",
                "Meat-heavy diet"
            ]
        },
        nephrotoxicMedications: {
            title: "💊 Nephrotoxic Medications:",
            items: [
                "NSAIDs (ibuprofen, naproxen), aminoglycosides (gentamicin, tobramycin)",
                "ACE inhibitors (can worsen renal function in renal artery stenosis)",
                "Contrast dye",
                "Lithium"
            ]
        },
        priorityActions: {
            title: "🚨 PRIORITY NURSING ACTIONS:",
            subtitle: "Creatinine >4.0:",
            items: [
                "Assess for acute kidney injury; notify provider immediately",
                "Hold nephrotoxic medications as ordered",
                "Assess for fluid overload: edema, crackles, JVD",
                "Monitor for hyperkalemia (life-threatening)",
                "Prepare for possible dialysis if severe"
            ]
        }
    },
    bunCreatinineRatio: {
        name: "BUN/Creatinine Ratio",
        tags: ["HIGH YIELD"],
        normalRatio: "Normal Ratio: 10:1 to 20:1",
        nclexHighYield: {
            title: "NCLEX HIGH-YIELD: BUN/Creatinine Ratio Interpretation",
            highRatio: {
                title: "High Ratio (>20:1) - BUN ↑ more than Creatinine ↑",
                subtitle: "PRERENAL causes:",
                items: [
                    "Dehydration (most common)",
                    "Heart failure",
                    "Shock",
                    "GI bleeding (protein from blood)",
                    "High protein diet"
                ],
                think: "Think: Problem BEFORE the kidney - kidney itself is working but not getting enough flow"
            },
            normalRatio: {
                title: "Normal Ratio (10:1 - Both ↑ proportionally)",
                subtitle: "INTRARENAL causes:",
                items: [
                    "Acute tubular necrosis",
                    "Glomerulonephritis",
                    "Acute interstitial nephritis",
                    "Chronic kidney disease"
                ],
                think: "Think: Problem IN kidney - kidney itself is damaged"
            },
            lowRatio: {
                title: "Low Ratio (<10:1) - Creatinine ↑ more than BUN ↑",
                items: [
                    "Rare: Rhabdomyolysis (massive muscle breakdown)",
                    "Low protein diet",
                    "Severe liver disease"
                ]
            }
        },
        nclexTipMnemonic: {
            title: "💡 NCLEX TIP - BUN/Creatinine Mnemonic:",
            subtitle: '"Before, In, After"',
            items: [
                "High ratio:",
                "Problem BEFORE kidney (prerenal - dehydration, kidney itself is working but not getting enough flow",
                "Normal ratio:",
                "Problem IN kidney (intrarenal - kidney itself is damaged",
                "Low ratio:",
                "Rare: Rhabdomyolysis (massive muscle breakdown)"
            ]
        }
    },
    gfr: {
        name: "Glomerular Filtration Rate (GFR/eGFR)",
        normalRange: ">90 mL/min/1.73m²",
        kidneyFailure: "<15 mL/min/1.73m²",
        whatItMeasures: "Estimated glomerular filtration rate - best overall indicator of kidney function. Calculated from creatinine, age, sex, and race. Represents percentage of normal kidney function.",
        clinicalSignificance: "Used to stage chronic kidney disease (CKD). Guides medication dosing and treatment decisions. Determines need for dialysis. More accurate than creatinine alone for assessing kidney function.",
        ckdStaging: {
            title: "CKD Stage | GFR (mL/min) | Description | Clinical Implications",
            headers: ["CKD Stage", "GFR (mL/min)", "Description", "Clinical Implications"],
            data: [
                {
                    stage: "Stage 1",
                    gfr: ">90",
                    description: "Normal or high",
                    implications: "Kidney damage with normal GFR"
                },
                {
                    stage: "Stage 2",
                    gfr: "60-89",
                    description: "Mild decrease",
                    implications: "Mild kidney damage"
                },
                {
                    stage: "Stage 3a",
                    gfr: "45-59",
                    description: "Mild to moderate",
                    implications: "Adjust medication doses (many drugs require renal dosing)"
                },
                {
                    stage: "Stage 3b",
                    gfr: "30-44",
                    description: "Moderate to severe",
                    implications: "Refer to nephrologist"
                },
                {
                    stage: "Stage 4",
                    gfr: "15-29",
                    description: "Severe decrease",
                    implications: "Prepare for dialysis/transplant"
                },
                {
                    stage: "Stage 5",
                    gfr: "<15",
                    description: "Kidney failure",
                    implications: "Dialysis or transplant required"
                }
            ]
        },
        nursingImplications: {
            title: "👩‍⚕️ Nursing Implications:",
            items: [
                "GFR <60 = Adjust medication doses (many drugs require renal dosing)",
                "GFR <30 = Avoid nephrotoxic drugs, prepare for dialysis education",
                "GFR <15 = Dialysis usually indicated",
                "Monitor for complications: anemia, bone disease, electrolyte imbalances"
            ]
        },
        nclexTip: {
            title: "💡 NCLEX TIP:",
            text: "Remember: GFR <60 for >3 months = Chronic Kidney Disease (CKD). GFR <15 = Kidney failure (dialysis or transplant needed). Many medications need dose adjustment when GFR <60!"
        }
    }
};

// Endocrine Tests Data
const endocrineData = {
    glucose: {
        name: "Glucose (Fasting)",
        tags: ["HIGH YIELD"],
        normalRange: "70-100 mg/dL",
        prediabetesRange: "100-125 mg/dL",
        diabetesRange: "≥126 mg/dL (2+ occasions)",
        criticalRange: "≤40 or ≥500 mg/dL",
        whatItMeasures: "Blood sugar level. Reflects body's ability to regulate glucose through insulin and other hormones. Fasting glucose requires NO food for 8 hours.",
        hypoglycemia: {
            title: "📉 Hypoglycemia (Low Blood Sugar):",
            causes: [
                "Diabetes mellitus (Type 1 or 2)",
                "Stress response",
                "Cushing's syndrome",
                "Thyroid disorders",
                "Pancreatitis",
                "Corticosteroid use"
            ],
            signsSymptoms: [
                "Polyuria, polydipsia, polyphagia",
                "Blurred vision",
                "Fatigue, weakness",
                "Slow wound healing",
                "Frequent infections"
            ]
        },
        hyperglycemia: {
            title: "🔺 Hyperglycemia (High Blood Sugar):",
            causes: [
                "Diabetes insulin",
                "Can hypoglycemic overdose",
                "Inadequate food intake",
                "Alcohol consumption",
                "Insulinoma",
                "Addison's disease",
                "Alcohol consumption",
                "Malnutrition"
            ],
            signsSymptoms: [
                "Shakiness, tremors",
                "Sweating, palpitations",
                "Hunger",
                "Confusion, irritability",
                "Seizures, loss of consciousness"
            ]
        },
        priorityActionsHypo: {
            title: "🚨 PRIORITY NURSING ACTIONS - HYPOGLYCEMIA:",
            subtitle: "Glucose <50:",
            items: [
                "Assess for CNS or HHNS, check ketones",
                "Administer insulin as ordered",
                "Assess for DKA or HHNS, check ketones",
                "Monitor for signs of DKA: fruity breath, Kussmaul respirations, confusion"
            ]
        },
        priorityActionsHyper: {
            title: "🚨 PRIORITY NURSING ACTIONS - HYPERGLYCEMIA:",
            subtitle: "Glucose <70:",
            items: [
                "Treat immediately with \"Rule of 15\"",
                "Give 15g fast-acting carbs, recheck in 15 minutes, repeat if needed",
                "If unconscious:",
                "Give glucagon IM or dextrose IV",
                "Never give insulin when plasma glucose is low",
                "Assess for cause and prevent recurrence"
            ]
        },
        nclexTip: {
            title: "💡 NCLEX TIP - Hypoglycemia Treatment:",
            subtitle: "\"Rule of 15\"",
            items: [
                "Give 15 grams of fast-acting carbohydrate",
                "Wait 15 minutes",
                "Recheck glucose",
                "Repeat if still <70 mg/dL",
                "Examples of 15g carbs: 4 oz juice, 3-4 glucose tablets, 1 tablespoon honey"
            ]
        }
    },
    hba1c: {
        name: "Hemoglobin A1C (HbA1c)",
        tags: ["HIGH YIELD"],
        normalRange: "<5.7%",
        prediabetesRange: "5.7-6.4%",
        diabetesRange: "≥6.5%",
        exceptForDiabetes: "Except for diabetes: <7.0%",
        whatItMeasures: "Average blood glucose over past 2-3 months. Reflects percentage of hemoglobin with glucose attached. Gold standard for monitoring diabetic control.",
        clinicalSignificance: "Best indicator of long-term glucose control. Each 1% decrease in A1C reduces risk of diabetic complications by 20-30%. Does not require fasting. Not affected by daily glucose fluctuations.",
        a1cConversion: {
            title: "📊 A1C to Average Glucose Conversion:",
            headers: ["A1C", "Average Glucose"],
            data: [
                { a1c: "5%:", glucose: "Average glucose 97 mg/dL" },
                { a1c: "6%:", glucose: "Average glucose 126 mg/dL" },
                { a1c: "7%:", glucose: "Average glucose 154 mg/dL" },
                { a1c: "8%:", glucose: "Average glucose 183 mg/dL" },
                { a1c: "9%:", glucose: "Average glucose 212 mg/dL" },
                { a1c: "10%:", glucose: "Average glucose 240 mg/dL" },
                { a1c: "11%:", glucose: "Average glucose 269 mg/dL" },
                { a1c: "12%:", glucose: "Average glucose 298 mg/dL" }
            ]
        },
        nursingImplications: {
            title: "👩‍⚕️ Nursing Implications:",
            items: [
                "Check A1C every 3 months for poorly controlled diabetes",
                "Goal A1C <7% for most diabetics (individualize based on patient)",
                "Less stringent goals (<8%) for elderly or those with complications",
                "Does not replace daily glucose monitoring"
            ]
        },
        nclexTip: {
            title: "💡 NCLEX TIP:",
            text: "A1C reflects the PAST 2-3 months of glucose control. Each 1% increase in A1C = ~30 mg/dL increase in average glucose. Commonly, one-high glucose reading doesn't change A1C will be high."
        }
    },
    tsh: {
        name: "Thyroid Stimulating Hormone (TSH)",
        normalRange: "0.4-4.0 mU/L",
        whatItMeasures: "Hormone from pituitary that stimulates thyroid gland. Best screening test for thyroid function. Inverse relationship with thyroid hormones (T3, T4).",
        clinicalSignificance: "High TSH = thyroid not making enough hormone, so pituitary increases TSH. Low TSH = thyroid making too much hormone, so pituitary decreases TSH. Most sensitive test for thyroid dysfunction (hypothyroidism).",
        elevatedTSH: {
            title: "🔺 Elevated TSH (Hypothyroidism):",
            causes: [
                "Primary hypothyroidism (Hashimoto's)",
                "Iodine use accompanying cause",
                "Thyroidectomy",
                "Iodine deficiency",
                "Certain medications"
            ],
            signsSymptoms: [
                "Fatigue, lethargy",
                "Weight gain",
                "Cold intolerance",
                "Constipation",
                "Dry skin, hair loss",
                "Bradycardia",
                "Depression"
            ]
        },
        decreasedTSH: {
            title: "🔻 Decreased TSH (Hyperthyroidism):",
            causes: [
                "Graves' disease",
                "Toxic nodular goiter",
                "Excessive exogenous thyroid hormone (T3, T4)",
                "Thyroiditis"
            ],
            signsSymptoms: [
                "Weight loss despite increased appetite",
                "Heat intolerance, sweating",
                "Tachycardia, palpitations",
                "Tremors",
                "Nervousness, irritability",
                "Anxiety, irritability",
                "Diarrhea",
                "Exophthalmos (Graves)"
            ]
        },
        nclexTip: {
            title: "💡 NCLEX TIP - TSH Mnemonic:",
            subtitle: "\"TSH and Thyroid are OPPOSITE\"",
            items: [
                "HIGH TSH = LOW thyroid function (Hypothyroidism)",
                "LOW TSH = HIGH thyroid function (Hyperthyroidism)",
                "HIGH thyroid function (Hyperthyroidism)",
                "Think: TSH is the pituitary's way of asking the thyroid to work harder"
            ]
        }
    }
};

// ABG Analysis Data
const abgAnalysisData = {
    nclexAlert: "ABG interpretation is HEAVILY TESTED on NCLEX. Master the ROME method, practice, practice, practice!",
    normalValues: [
        { component: "pH", normalRange: "7.35-7.45", whatItMeasures: "Acid-base status (H+ concentration)" },
        { component: "PaCO2", normalRange: "35-45 mmHg", whatItMeasures: "Respiratory component (carbon dioxide)" },
        { component: "HCO3", normalRange: "22-26 mEq/L", whatItMeasures: "Metabolic component (bicarbonate)" },
        { component: "PaO2", normalRange: "80-100 mmHg", whatItMeasures: "Oxygenation (oxygen in arterial blood)" },
        { component: "SaO2", normalRange: "95-100%", whatItMeasures: "Oxygen saturation" }
    ],
    keyConcepts: [
        { title: "pH:", items: ["Determines if patient is acidotic (\u003c7.35) or alkalotic (\u003e7.45)", "pH and PaCO2 move in opposite directions", "pH and HCO3- move in same direction"] },
        { title: "PaCO2:", items: ["Respiratory component - controlled by lungs (breathing)", "Metabolic component - controlled by kidneys", "HCO3- high = alkalosis; HCO3- low = acidosis"] },
        { title: "HCO3-:", items: ["Metabolic component - controlled by kidneys", "HCO3- high = alkalosis; HCO3- low = acidosis"] },
        { title: "Inverse relationship:", items: ["pH and PaCO2 move in opposite directions", "pH ↑ and HCO3- ↑ = same direction"] },
        { title: "Direct relationship:", items: ["pH ↑ and HCO3- ↑ = same direction", "pH ↓ and HCO3- ↓ = same direction"] }
    ],
    romeSteps: [
        {
            step: "Step 1: Assess the pH",
            title: "Determine acid-base status:",
            type: "list",
            items: [
                { label: "pH < 7.35:", value: "ACIDOSIS" },
                { label: "pH 7.35-7.45:", value: "NORMAL" },
                { label: "pH > 7.45:", value: "ALKALOSIS" }
            ]
        },
        {
            step: "Step 2: Determine if Respiratory or Metabolic",
            title: "Use ROME Method:",
            type: "mnemonic",
            groups: [
                {
                    lines: [
                        { letter: "R", text: "espiratory =" },
                        { letter: "O", text: "pposite" }
                    ],
                    description: "pH and PaCO2 move in OPPOSITE directions"
                },
                {
                    lines: [
                        { letter: "M", text: "etabolic =" },
                        { letter: "E", text: "qual" }
                    ],
                    description: "pH and HCO3- move in EQUAL (same) direction"
                }
            ]
        },
        {
            step: "Step 3: Check for Compensation",
            title: "Is the body trying to fix the problem?",
            type: "list",
            items: [
                { label: "Uncompensated:", value: "Only one value (PaCO2 or HCO3-) is abnormal" },
                { label: "Partially Compensated:", value: "Both PaCO2 and HCO3- are abnormal, pH still abnormal" },
                { label: "Fully Compensated:", value: "Both PaCO2 and HCO3- are abnormal, pH is normal" }
            ]
        },
        {
            step: "Step 4: Assess Oxygenation",
            title: "Check PaO2 and SaO2:",
            type: "list",
            items: [
                { label: "PaO2 < 80 mmHg:", value: "Hypoxemia" },
                { label: "PaO2 < 60 mmHg:", value: "Severe hypoxemia" },
                { label: "SaO2 < 95%:", value: "Inadequate oxygenation" }
            ]
        }
    ],
    disorders: [
        {
            title: "Respiratory Acidosis",
            badge: "HIGH YIELD",
            ranges: [
                { label: "pH \u003c 7.35", color: "red" },
                { label: "PaCO2 \u003e 45", color: "red" }
            ],
            whatsHappening: "Hypoventilation → CO2 retention → Acidosis",
            causes: [
                "COPD exacerbation",
                "Pneumonia",
                "Respiratory depression (opioids, sedatives)",
                "Airway obstruction",
                "Neuromuscular disorders",
                "Chest trauma"
            ],
            signsSymptoms: [
                "Dyspnea, shallow breathing",
                "Confusion, lethargy",
                "Headache",
                "Restlessness",
                "Tachycardia"
            ],
            priorityActions: [
                "Improve ventilation (main goal)",
                "Position upright",
                "Encourage deep breathing",
                "Encourage deep breathing",
                "Administer bronchodilators",
                "May need mechanical ventilation"
            ]
        },
        {
            title: "Respiratory Alkalosis",
            badge: "",
            ranges: [
                { label: "pH \u003e 7.45", color: "blue" },
                { label: "PaCO2 \u003c 35", color: "blue" }
            ],
            whatsHappening: "Hyperventilation → CO2 loss → Alkalosis",
            causes: [
                "Anxiety, panic attack",
                "Pain",
                "Hypoxia (early response)",
                "Fever",
                "Mechanical ventilation (over-ventilation)",
                "Pulmonary embolism",
                "Salicylate overdose"
            ],
            signsSymptoms: [
                "Rapid, deep breathing",
                "Light-headedness, confusion",
                "Numbness, tingling (paresthesias)",
                "Muscle twitching",
                "Nausea, vomiting",
                "Confusion"
            ],
            priorityActions: [
                "Treat underlying cause",
                "Calm patient if anxious",
                "Breathe into paper bag (debated)",
                "Adjust ventilator settings if applicable",
                "Numbness, tingling (paresthesias)",
                "Muscle twitching"
            ]
        },
        {
            title: "Metabolic Acidosis",
            badge: "HIGH YIELD",
            ranges: [
                { label: "pH \u003c 7.35", color: "red" },
                { label: "HCO3- \u003c 22", color: "red" }
            ],
            whatsHappening: "Loss of bicarbonate OR gain of acid → Acidosis",
            causes: [
                "M",
                "ethanol poisoning",
                "U",
                "remia (kidney failure)",
                "D",
                "iabetic ketoacidosis (DKA)",
                "P",
                "araldehyde, Propylene glycol",
                "I",
                "nfection, Isoniazid",
                "L",
                "actic acidosis (shock, sepsis)",
                "E",
                "thylene glycol",
                "S",
                "alicylates (aspirin overdose)",
                "Also: Diarrhea (HCO3- loss), renal tubular acidosis"
            ],
            signsSymptoms: [
                "Kussmaul respirations (deep, rapid)",
                "Confusion, lethargy",
                "Headache",
                "Nausea, vomiting",
                "Cardiac arrhythmias"
            ],
            priorityActions: [
                "Treat underlying cause (most important)",
                "DKA: Insulin + fluids",
                "Kidney failure: Dialysis",
                "Sodium bicarbonate (only if pH \u003c7.1)"
            ]
        },
        {
            title: "Metabolic Alkalosis",
            badge: "",
            ranges: [
                { label: "pH \u003e 7.45", color: "blue" },
                { label: "HCO3- \u003e 26", color: "blue" }
            ],
            whatsHappening: "Loss of acid OR gain of bicarbonate → Alkalosis",
            causes: [
                "Vomiting (No suction (H+ loss)",
                "Diuretics (loop, thiazide)",
                "Excessive antacid use",
                "Hypokalemia",
                "Cushing's syndrome",
                "Excessive bicarbonate administration"
            ],
            signsSymptoms: [
                "Slow, shallow respirations",
                "Confusion, irritability",
                "Muscle twitching, tremors",
                "Numbness, tingling",
                "Nausea, vomiting",
                "Adjust diuretic therapy"
            ],
            priorityActions: [
                "Treat underlying cause",
                "Replace potassium and chloride",
                "Stop NG suction if possible",
                "Adjust diuretic therapy"
            ]
        }
    ],
    practiceExamples: [
        {
            title: "Example 1:",
            values: "pH 7.24, PaCO2 55, HCO3- 24",
            answer: "Respiratory Acidosis, Uncompensated",
            explanation: [
                "pH low (acidosis)",
                "PaCO2 high (respiratory cause - opposite of pH)",
                "HCO3- normal (no compensation)"
            ]
        },
        {
            title: "Example 2:",
            values: "pH 7.51, PaCO2 34, HCO3- 33",
            answer: "Metabolic Alkalosis, Uncompensated",
            explanation: [
                "pH is high (alkalosis)",
                "HCO3- high (metabolic cause - same direction as pH)",
                "HCO3- normal (no compensation)"
            ]
        },
        {
            title: "Example 3:",
            values: "pH 7.35, PaCO2 54, HCO3- 28",
            answer: "Respiratory Acidosis (Fully Compensated)",
            explanation: [
                "pH normal BUT on acidic side (\u003c7.40)",
                "PaCO2 high (respiratory problem)",
                "HCO3- high (kidneys compensating)",
                "Both systems care/working to fix acidosis"
            ]
        },
        {
            title: "Example 4:",
            values: "pH 7.32, PaCO2 48, HCO3- 25",
            answer: "Mixed Acidosis (Both Respiratory and Metabolic)",
            explanation: [
                "pH low (acidosis)",
                "PaCO2 high (respiratory acidosis)",
                "HCO3- low (metabolic acidosis)",
                "Both systems care/working to fix acidosis"
            ]
        }
    ],
    romeSummary: {
        title: "NCLEX TIP - ROME Method Summary:",
        respiratory: {
            title: "Respiratory = Opposite:",
            items: [
                "pH ↓ and PaCO2 ↑ = Respiratory Acidosis",
                "pH ↑ and PaCO2 ↓ = Respiratory Alkalosis"
            ]
        },
        metabolic: {
            title: "Metabolic = Equal:",
            items: [
                "pH ↓ and HCO3- ↓ = Metabolic Acidosis",
                "pH ↑ and HCO3- ↑ = Metabolic Alkalosis"
            ]
        }
    }
};

const therapeuticLevelsData = [
    {
        name: "Digoxin",
        tag: "HIGH-YIELD",
        ranges: {
            therapeutic: "0.5-2.0 ng/mL",
            toxic: ">2.0 ng/mL"
        },
        usage: "Cardiac glycoside used for heart failure and atrial fibrillation. Increases cardiac contractility and slows heart rate. Narrow therapeutic window.",
        toxicity: {
            title: "Signs of Digoxin Toxicity:",
            sections: [
                { title: "Cardiac:", text: "Bradycardia, heart block, PVCs, bigeminy (most serious)" },
                { title: "GI:", text: "Nausea, vomiting, anorexia (early signs)" },
                { title: "Visual:", text: "Yellow-green halos, blurred vision" },
                { title: "Neurological:", text: "Confusion, fatigue, weakness" }
            ]
        },
        riskFactors: {
            title: "Risk Factors for Toxicity:",
            items: [
                { title: "Hypokalemia (MOST IMPORTANT):", text: "Increases digoxin binding to cardiac cells" },
                { text: "Hypomagnesemia" },
                { text: "Hypercalcemia" },
                { text: "Renal impairment" },
                { text: "Elderly patients" },
                { text: "Drug interactions (amiodarone, verapamil, quinidine)" }
            ]
        },
        priorityActions: {
            title: "PRIORITY NURSING ACTIONS:",
            items: [
                "ALWAYS check apical pulse for 1 full minute before giving digoxin",
                "Hold digoxin if HR <60 (adult) or <90-110 (infant)",
                "Check potassium level before giving digoxin (hypokalemia increases toxicity)",
                "If toxic: Hold digoxin, notify provider, check digoxin level and K+",
                "Antidote: Digoxin Immune fab (Digibind) for severe toxicity",
                "Monitor ECG for arrhythmias",
                "Teach patient to check pulse before taking at home"
            ]
        },
        nclexTip: {
            title: "NCLEX TIP - Digoxin Mnemonic:",
            description: "\"BRAVADO\" for Digoxin Toxicity",
            items: [
                { letter: "B", text: "radycardia" },
                { letter: "R", text: "hythm disturbances (PVCs, heart block)" },
                { letter: "A", text: "norexia, nausea" },
                { letter: "V", text: "ision changes (yellow-green halos)" },
                { letter: "A", text: "rrhythmias" },
                { letter: "D", text: "izziness" },
                { letter: "O", text: "ther: confusion, fatigue" }
            ]
        }
    },
    {
        name: "Lithium",
        tag: "HIGH-YIELD",
        ranges: {
            therapeutic: "0.6-1.2 mEq/L",
            caution: "1.2-1.5 mEq/L",
            toxic: ">1.5 mEq/L"
        },
        usage: "Mood stabilizer for bipolar disorder. Very narrow therapeutic window. Excreted by kidneys - affected by sodium and fluid balance.",
        toxicity: {
            title: "Signs of Lithium Toxicity:",
            sections: [
                { title: "Early (1.5-2.0):", text: "Nausea, vomiting, diarrhea, tremor, polyuria, polydipsia" },
                { title: "Moderate (2.0-2.5):", text: "Confusion, slurred speech, ataxia, muscle twitching" },
                { title: "Severe (>2.5):", text: "Seizures, coma, cardiac arrhythmias, death" }
            ]
        },
        riskFactors: {
            title: "Risk Factors for Toxicity:",
            items: [
                { title: "Dehydration (MOST IMPORTANT)", text: "" },
                { text: "Low sodium diet or sodium loss" },
                { text: "Diuretics (especially thiazides)" },
                { text: "NSAIDs" },
                { text: "ACE inhibitors" },
                { text: "Renal impairment" },
                { text: "Elderly patients" }
            ]
        },
        priorityActions: {
            title: "PRIORITY NURSING ACTIONS:",
            items: [
                "Check lithium level regularly (every 2-3 days initially, then monthly)",
                "Draw level 12 hours after last dose",
                "If toxic:",
                "Hold lithium, notify provider immediately",
                "Treatment:",
                "IV fluids, possible hemodialysis for severe toxicity",
                "Patient Teaching:",
                "Maintain adequate fluid intake (2-3 L/day)",
                "Maintain consistent sodium intake",
                "Avoid NSAIDs",
                "Report signs of toxicity immediately",
                "Do not stop medication abruptly"
            ]
        },
        nclexTip: {
            title: "NCLEX TIP:",
            description: "Lithium and sodium compete for reabsorption in kidneys. Low sodium → body retains lithium → toxicity. Teach patients to maintain consistent sodium and fluid intake!"
        }
    },
    {
        name: "Phenytoin (Dilantin)",
        ranges: {
            therapeutic: "10-20 mcg/mL",
            toxic: ">20 mcg/mL"
        },
        usage: "Anticonvulsant for seizure disorders. Also used for certain arrhythmias. Narrow therapeutic window with many drug interactions.",
        toxicity: {
            title: "Signs of Phenytoin Toxicity:",
            sections: [
                { text: "Nystagmus (earliest sign)" },
                { text: "Ataxia, slurred speech" },
                { text: "Confusion, drowsiness" },
                { text: "Diplopia (double vision)" },
                { text: "Seizures (paradoxically)" }
            ]
        },
        nursingImplications: {
            title: "Nursing Implications:",
            items: [
                "Monitor phenytoin levels regularly",
                "Give with food to decrease GI upset",
                "Do NOT give with tube feedings (decreases absorption)",
                "IV phenytoin: Give slowly (max 50 mg/min), use filter, flush with NS only",
                "Monitor for gingival hyperplasia (gum overgrowth)",
                "Teach good oral hygiene"
            ]
        },
        nclexTip: {
            title: "NCLEX TIP:",
            description: "Phenytoin is highly protein-bound. Low albumin = more free drug = increased risk of toxicity even with \"normal\" levels. Always consider albumin when interpreting phenytoin levels!"
        }
    },
    {
        name: "Theophylline",
        ranges: {
            therapeutic: "10-20 mcg/mL",
            toxic: ">20 mcg/mL"
        },
        usage: "Bronchodilator for asthma and COPD. Less commonly used now due to narrow therapeutic window and many side effects.",
        toxicity: {
            title: "Signs of Theophylline Toxicity:",
            sections: [
                { text: "Nausea, vomiting" },
                { text: "Tachycardia, palpitations" },
                { text: "Tremors, restlessness" },
                { text: "Insomnia" },
                { text: "Seizures (severe toxicity)" },
                { text: "Cardiac arrhythmias" }
            ]
        },
        factorsAffecting: {
            title: "Factors Affecting Levels:",
            sections: [
                { title: "Increase levels:", text: "Cimetidine, ciprofloxacin, erythromycin, heart failure, liver disease" },
                { title: "Decrease levels:", text: "Smoking, phenytoin, rifampin, high-protein diet" }
            ]
        },
        priorityActions: {
            title: "PRIORITY NURSING ACTIONS:",
            items: [
                "Monitor theophylline levels regularly",
                "Assess heart rate and rhythm",
                "If toxic: Hold medication, notify provider",
                "Teach patient to avoid caffeine (additive effects)",
                "Report signs of toxicity immediately"
            ]
        }
    }
];

// Other Labs Data
const otherLabsData = [
    {
        name: "Lactic Acid (Lactate)",
        normalRange: "0.5-2.0 mEq/L",
        criticalRange: ">4.0 mEq/L",
        whatItMeasures: "Byproduct of anaerobic metabolism. Elevated when tissues don't get enough oxygen. Marker of tissue hypoperfusion and sepsis severity.",
        causes: {
            title: "Causes of Elevated Lactic Acid:",
            items: [
                "Sepsis, septic shock (most common)",
                "Hypovolemic shock",
                "Cardiogenic shock",
                "Tissue ischemia",
                "Seizures",
                "Liver failure",
                "Metformin use (lactic acidosis)"
            ]
        },
        priorityActions: {
            title: "PRIORITY NURSING ACTIONS:",
            subtitle: "Lactate >4.0:",
            text: [
                "Indicates severe tissue hypoperfusion",
                "Assess for signs of shock: hypotension, tachycardia, altered mental status",
                "Administer IV fluids aggressively",
                "Administer oxygen",
                "Prepare for possible ICU transfer",
                "Monitor serial lactate levels (should decrease with treatment)"
            ]
        }
    },
    {
        name: "Ammonia",
        normalRange: "15-45 mcg/dL",
        criticalRange: ">200 mcg/dL",
        whatItMeasures: "Toxic byproduct of protein metabolism normally converted to urea by liver. Elevated in liver failure. Causes hepatic encephalopathy.",
        causes: {
            title: "Causes of Elevated Ammonia:",
            items: [
                "Liver failure, cirrhosis",
                "Hepatic encephalopathy",
                "GI bleeding (protein from blood)",
                "High protein diet",
                "Reye's syndrome",
                "Urea cycle disorders"
            ]
        },
        signs: {
            title: "Signs of Hepatic Encephalopathy:",
            items: [
                "Confusion, altered mental status",
                "Asterixis (flapping tremor)",
                "Personality changes",
                "Slurred speech",
                "Coma (severe)"
            ]
        },
        priorityActions: {
            title: "PRIORITY NURSING ACTIONS:",
            text: [
                "Administer lactulose (reduces ammonia absorption)",
                "Restrict dietary protein",
                "Assess neurological status frequently",
                "Implement safety measures (confusion risk)",
                "Monitor for GI bleeding"
            ]
        }
    },
    {
        name: "C-Reactive Protein (CRP)",
        normalRange: "<1.0 mg/dL",
        elevatedRange: ">1.0 mg/dL",
        whatItMeasures: "Marker of inflammation and infection. Nonspecific but sensitive indicator of inflammatory processes. Used to monitor disease activity and treatment response.",
        causes: {
            title: "Causes of Elevated CRP:",
            items: [
                "Bacterial infections",
                "Inflammatory conditions (rheumatoid arthritis, IBD)",
                "Tissue injury or necrosis",
                "Cardiovascular disease",
                "Malignancy",
                "Post-operative state"
            ]
        },
        nursingImplications: {
            title: "Nursing Implications:",
            items: [
                "Nonspecific marker - must correlate with clinical presentation",
                "Useful for monitoring treatment response",
                "Decreasing CRP = improving inflammation",
                "High-sensitivity CRP (hs-CRP) used for cardiac risk assessment"
            ]
        }
    },
    {
        name: "Erythrocyte Sedimentation Rate (ESR)",
        normalRanges: [
            { label: "Male", value: "0-15 mm/hr" },
            { label: "Female", value: "0-20 mm/hr" }
        ],
        whatItMeasures: "Rate at which red blood cells settle in test tube. Nonspecific marker of inflammation. Slower to change than CRP.",
        causes: {
            title: "Causes of Elevated ESR:",
            items: [
                "Infections",
                "Autoimmune diseases",
                "Malignancy",
                "Temporal arteritis",
                "Polymyalgia rheumatica",
                "Pregnancy",
                "Anemia"
            ]
        }
    }
];

const studyTipsData = {
    title: "Study Tips for NCLEX Success",
    strategies: {
        title: "Study Strategy:",
        items: [
            "Focus on HIGH-YIELD topics (marked throughout this guide)",
            "Master critical values and priority actions",
            "Practice ABG interpretation daily",
            "Know electrolyte imbalances inside and out",
            "Understand therapeutic drug levels and toxicity signs"
        ]
    },
    testTaking: {
        title: "Test-Taking Tips:",
        items: [
            "Always consider patient safety first",
            "Look for trends in serial lab values",
            "Consider the whole clinical picture, not just one lab",
            "Know when to notify the provider immediately",
            "Remember: Treat the patient, not just the number"
        ]
    },
    footer: {
        text: "Good luck on your NCLEX journey! You've got this! 💪🩺",
        subtext: "Last Updated: 2024 | For Educational Purposes Only"
    }
};

export { clinicalActivities, nclexSuccessFactors, usageGuide, specimenCollectionPhases, specimenCollectionPriorityActions, orderOfDraw, bloodTubesData, tubeErrors, hematologyData, coagulationData, BMPData, BMP_NCLEX_TIP, CMPData, CMP_NCLEX_TIP, electrolytesData, cardiacMarkersData, liverFunctionData, renalFunctionData, endocrineData, abgAnalysisData, therapeuticLevelsData, otherLabsData, studyTipsData };