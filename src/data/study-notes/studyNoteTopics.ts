import { systemIcons } from "./systemIcons";

export interface SubTopic {
  id: string;
  title: string;
}

export interface Topic {
  id: string;
  title: string;
  subtopics: SubTopic[];
}

export interface Category {
  id: string;
  title: string;
  topics?: Topic[];
  subtopics?: SubTopic[];
  icon?: React.ReactNode;
}

export interface Section {
  id: string;
  title: string;
  categories: Category[];
}

export const pediatricCategories: Category[] = [
  {
    id: "fundamentals",
    title: "PEDIATRIC FUNDAMENTALS",
    topics: [
      {
        id: "growth-development",
        title: "GROWTH AND DEVELOPMENT",
        subtopics: [
          { id: "theories", title: "Growth and Development Theories" },
          { id: "infant", title: "Infant (0-12 months)" },
          { id: "toddler", title: "Toddler (1-3 years)" },
          { id: "preschool", title: "Preschool-Age (3-6 years)" },
          { id: "school-age", title: "School-Age (6-12 years)" },
          { id: "adolescent", title: "Adolescent (12-18 years)" },
        ],
      },
      {
        id: "newborn-neonatal",
        title: "NEWBORN/NEONATAL CARE",
        subtopics: [
          {
            id: "adaptation",
            title: "Newborn Adaptation to Extrauterine Life",
          },
          { id: "physical-assessment", title: "Physical Assessment - Neonate" },
          {
            id: "neuro-assessment",
            title: "Neurological Assessment - Neonate",
          },
          { id: "thermoregulation", title: "Thermoregulation - Neonate" },
          { id: "nutrition-newborn", title: "Nutrition - Newborn" },
        ],
      },
      {
        id: "neonatal-conditions",
        title: "NEONATAL CONDITIONS",
        subtopics: [
          { id: "preterm", title: "Preterm Infant" },
          { id: "postterm", title: "Postterm Infant" },
          { id: "sga", title: "Small for Gestational Age (SGA) Infant" },
          { id: "idm", title: "Infant of a Diabetic Mother (IDM)" },
          { id: "nas", title: "Neonatal Abstinence Syndrome" },
          { id: "neonatal-sepsis", title: "Neonatal Sepsis" },
        ],
      },
      {
        id: "assessment-interventions",
        title: "PEDIATRIC ASSESSMENT & INTERVENTIONS",
        subtopics: [
          {
            id: "physical-assessment-peds",
            title: "Physical Assessment - Pediatric",
          },
          { id: "interventions", title: "Pediatric Interventions - Overview" },
          { id: "vital-signs", title: "Vital Signs - Pediatric Pain" },
          { id: "fever", title: "Fever Management" },
        ],
      },
      {
        id: "psychosocial",
        title: "PEDIATRIC PSYCHOSOCIAL",
        subtopics: [
          {
            id: "psychosocial-needs",
            title:
              "Pediatric Psychosocial Needs During Illness and Hospitalization",
          },
          { id: "maltreatment", title: "Child Maltreatment" },
          { id: "lgbtq", title: "Care of a Client Identifying as LGBTQ+" },
        ],
      },
    ],
  },
  {
    id: "cardiovascular",
    title: "1. PEDIATRIC CARDIOVASCULAR SYSTEM",
    icon: systemIcons.cardiovascular,
    subtopics: [
      { id: "asd", title: "Atrial Septal Defect (ASD)" },
      { id: "vsd", title: "Ventricular Septal Defect (VSD)" },
      { id: "pda", title: "Patent Ductus Arteriosus (PDA)" },
      { id: "coarctation", title: "Coarctation of Aorta" },
      { id: "aortic-stenosis", title: "Aortic Stenosis" },
      { id: "pulmonary-stenosis", title: "Pulmonary Stenosis" },
      { id: "tof", title: "Tetralogy of Fallot (ToF)" },
      { id: "tga", title: "Transposition of Great Arteries (TGA)" },
      { id: "tricuspid-atresia", title: "Tricuspid Atresia" },
      { id: "truncus", title: "Truncus Arteriosus" },
      { id: "hlhs", title: "Hypoplastic Left Heart Syndrome" },
      { id: "kawasaki", title: "Kawasaki Disease" },
      {
        id: "pphn",
        title: "Persistent Pulmonary Hypertension of the Newborn (PPHN)",
      },
    ],
    topics: [],
  },
  {
    id: "respiratory",
    title: "2. PEDIATRIC RESPIRATORY SYSTEM",
    icon: systemIcons.respiratory,
    subtopics: [
      { id: "croup", title: "Laryngotracheobronchitis (LTB) and Croup" },
      { id: "epiglottitis", title: "Epiglottitis" },
      {
        id: "foreign-body",
        title: "Foreign Body Aspiration and Upper Airway Obstruction",
      },
      { id: "asthma", title: "Asthma" },
      {
        id: "bronchiolitis",
        title: "Bronchiolitis and Respiratory Syncytial Virus (RSV)",
      },
      { id: "bpd", title: "Bronchopulmonary Dysplasia (BPD)" },
      { id: "nrds", title: "Neonatal Respiratory Distress Syndrome (NRDS)" },
      { id: "meconium", title: "Meconium Aspiration Syndrome" },
      {
        id: "pphn-resp",
        title: "Persistent Pulmonary Hypertension of the Newborn (PPHN)",
      },
      { id: "cdh", title: "Congenital Diaphragmatic Hernia" },
      {
        id: "ea-tef",
        title: "Esophageal Atresia and Tracheoesophageal Fistula",
      },
      { id: "influenza", title: "Influenza" },
      { id: "pertussis", title: "Pertussis (Whooping Cough)" },
      { id: "smoke-inhalation", title: "Smoke Inhalation Injury" },
      { id: "cystic-fibrosis-resp", title: "Cystic Fibrosis" },
    ],
    topics: [],
  },
  {
    id: "neurological",
    title: "3. PEDIATRIC NEUROLOGICAL SYSTEM",
    icon: systemIcons.neurological,
    subtopics: [
      { id: "head-injury", title: "Head Injury" },
      { id: "brachial-plexus", title: "Brachial Plexus Injury" },
      { id: "reye", title: "Reye Syndrome" },
      { id: "cerebral-palsy", title: "Cerebral Palsy" },
      { id: "hydrocephalus", title: "Hydrocephalus" },
      { id: "seizures", title: "Seizure Disorders/Epilepsy" },
      {
        id: "ntd",
        title: "Neural Tube Defects (Spina Bifida, Anencephaly, Encephalocele)",
      },
      { id: "craniosynostosis-neuro", title: "Craniosynostosis" },
      { id: "pku-neuro", title: "Phenylketonuria (PKU)" },
      { id: "meningitis", title: "Meningitis" },
      { id: "encephalitis", title: "Encephalitis" },
      { id: "polio", title: "Poliomyelitis" },
      { id: "asd", title: "Autism Spectrum Disorder (ASD)" },
      { id: "adhd", title: "Attention-Deficit Hyperactivity Disorder (ADHD)" },
    ],
    topics: [],
  },
  {
    id: "gastrointestinal",
    title: "4. PEDIATRIC GASTROINTESTINAL SYSTEM",
    icon: systemIcons.gastrointestinal,
    subtopics: [
      { id: "cleft", title: "Cleft Lip and Palate" },
      {
        id: "ea-tef-gi",
        title: "Esophageal Atresia and Tracheoesophageal Fistula",
      },
      { id: "pyloric-stenosis", title: "Pyloric Stenosis" },
      { id: "appendicitis", title: "Appendicitis" },
      { id: "hirschsprung", title: "Hirschsprung Disease" },
      { id: "nec", title: "Necrotizing Enterocolitis (NEC)" },
      { id: "omphalocele", title: "Omphalocele and Gastroschisis" },
      { id: "biliary-atresia", title: "Biliary Atresia" },
      { id: "hyperbilirubinemia", title: "Hyperbilirubinemia" },
      {
        id: "hemolytic-disease",
        title: "Hemolytic Disease of the Fetus and Newborn",
      },
      { id: "cystic-fibrosis-gi", title: "Cystic Fibrosis" },
      { id: "ftt", title: "Failure to Thrive (FTT)" },
      { id: "nutrition-gi", title: "Nutrition - Newborn" },
      { id: "poisoning", title: "Poisoning/Accidental Ingestion" },
    ],
    topics: [],
  },
  {
    id: "genitourinary",
    title: "5. PEDIATRIC GENITOURINARY SYSTEM",
    icon: systemIcons.genitourinary,
    subtopics: [
      { id: "hypospadias", title: "Hypospadias and Epispadias" },
      { id: "bladder-exstrophy", title: "Bladder Exstrophy" },
      { id: "cryptorchidism", title: "Cryptorchidism (Undescended Testicle)" },
      { id: "enuresis", title: "Enuresis (Bedwetting)" },
      { id: "uti", title: "Urinary Tract Infection (UTI)" },
      { id: "circumcision", title: "Circumcision" },
    ],
    topics: [],
  },
  {
    id: "endocrine",
    title: "6. PEDIATRIC ENDOCRINE SYSTEM",
    icon: systemIcons.endocrine,
    subtopics: [
      { id: "t1dm", title: "Type 1 Diabetes Mellitus" },
      { id: "idm-endo", title: "Infant of a Diabetic Mother (IDM)" },
      { id: "precocious-puberty", title: "Precocious Puberty" },
      { id: "pku-endo", title: "Phenylketonuria (PKU)" },
    ],
    topics: [],
  },
  {
    id: "musculoskeletal",
    title: "7. PEDIATRIC MUSCULOSKELETAL SYSTEM",
    icon: systemIcons.musculoskeletal,
    subtopics: [
      { id: "ddh", title: "Developmental Dysplasia of the Hip (DDH)" },
      { id: "clubfoot", title: "Clubfoot (Talipes Equinovarus)" },
      { id: "craniosynostosis-msk", title: "Craniosynostosis" },
      { id: "fractures", title: "Fractures" },
      { id: "scoliosis", title: "Scoliosis" },
      { id: "jia", title: "Juvenile Idiopathic Arthritis" },
      {
        id: "muscular-dystrophy",
        title: "Muscular Dystrophies (Duchenne and Becker)",
      },
      { id: "shoulder-dystocia", title: "Shoulder Dystocia" },
      { id: "brachial-plexus-msk", title: "Brachial Plexus Injury" },
    ],
    topics: [],
  },
  {
    id: "integumentary",
    title: "8. PEDIATRIC INTEGUMENTARY SYSTEM",
    icon: systemIcons.integumentary,
    subtopics: [
      { id: "impetigo", title: "Impetigo" },
      { id: "chickenpox", title: "Chickenpox (Varicella)" },
      { id: "roseola", title: "Roseola (Exanthem subitum)" },
      { id: "rubella", title: "Rubella (German Measles)" },
      { id: "rubeola", title: "Rubeola (Measles)" },
      { id: "fifth-disease", title: "Erythema Infectiosum (Fifth Disease)" },
      { id: "smallpox", title: "Smallpox" },
      { id: "eczema", title: "Atopic Dermatitis (Eczema)" },
      { id: "lyme", title: "Lyme Disease" },
      { id: "rmsf", title: "Rocky Mountain Spotted Fever (RMSF)" },
    ],
    topics: [],
  },
  {
    id: "hematologic",
    title: "9. PEDIATRIC HEMATOLOGIC SYSTEM",
    icon: systemIcons.hematologic,
    subtopics: [
      { id: "sickle-cell", title: "Sickle Cell Disease" },
      {
        id: "hemolytic-disease-heme",
        title: "Hemolytic Disease of the Fetus and Newborn",
      },
      { id: "hus", title: "Hemolytic Uremic Syndrome" },
      { id: "hyperbilirubinemia-heme", title: "Hyperbilirubinemia" },
    ],
    topics: [],
  },
  {
    id: "immune",
    title: "10. PEDIATRIC IMMUNE SYSTEM",
    icon: systemIcons.immune,
    subtopics: [
      { id: "anaphylaxis", title: "Anaphylaxis" },
      {
        id: "hypersensitivity",
        title: "Hypersensitivity Reactions (Type I, II, III, IV)",
      },
      { id: "neonatal-sepsis-immune", title: "Neonatal Sepsis" },
      { id: "zika", title: "Zika Virus" },
    ],
    topics: [],
  },
  {
    id: "heent",
    title: "11. PEDIATRIC HEAD, EYES, EARS, NOSE, AND THROAT (HEENT)",
    icon: systemIcons.heent,
    subtopics: [
      { id: "amblyopia", title: "Amblyopia (Lazy Eye)" },
      { id: "strabismus", title: "Strabismus (Crossed Eyes)" },
      { id: "retinoblastoma", title: "Retinoblastoma" },
      { id: "conjunctivitis", title: "Conjunctivitis" },
      { id: "eye-injury", title: "Eye Injury" },
      { id: "otitis-media", title: "Otitis Media" },
      {
        id: "hearing-impairment",
        title: "Hearing Impairment and Otosclerosis",
      },
      { id: "pharyngitis", title: "Pharyngitis" },
      { id: "tonsillitis", title: "Tonsillitis" },
      { id: "epiglottitis-heent", title: "Epiglottitis" },
      { id: "diphtheria", title: "Diphtheria" },
      { id: "mumps", title: "Mumps (Parotitis)" },
      { id: "mono", title: "Infectious Mononucleosis" },
    ],
    topics: [],
  },
  {
    id: "mental-health",
    title: "12. PEDIATRIC MENTAL HEALTH",
    subtopics: [
      { id: "asd-mh", title: "Autism Spectrum Disorder (ASD)" },
      {
        id: "adhd-mh",
        title: "Attention-Deficit Hyperactivity Disorder (ADHD)",
      },
      { id: "anxiety-disorders", title: "Anxiety Disorders" },
      { id: "anorexia", title: "Anorexia Nervosa" },
      { id: "other-eating", title: "Other Eating Disorders" },
      { id: "maltreatment-mh", title: "Child Maltreatment" },
      {
        id: "psychosocial-needs-mh",
        title:
          "Pediatric Psychosocial Needs During Illness and Hospitalization",
      },
    ],
    topics: [],
  },
];

// Export as categories for backward compatibility
export const categories = pediatricCategories;

export const pediatricSections: Section[] = [
  {
    id: "fundamentals",
    title: "PEDIATRIC FUNDAMENTALS",
    categories: pediatricCategories,
  },
  {
    id: "cardiovascular",
    title: "1. PEDIATRIC CARDIOVASCULAR SYSTEM",
    categories: pediatricCategories,
  },
  {
    id: "respiratory",
    title: "2. PEDIATRIC RESPIRATORY SYSTEM",
    categories: pediatricCategories,
  },
  {
    id: "neurological",
    title: "3. PEDIATRIC NEUROLOGICAL SYSTEM",
    categories: pediatricCategories,
  },
  {
    id: "gastrointestinal",
    title: "4. PEDIATRIC GASTROINTESTINAL SYSTEM",
    categories: pediatricCategories,
  },
  {
    id: "genitourinary",
    title: "5. PEDIATRIC GENITOURINARY SYSTEM",
    categories: pediatricCategories,
  },
  {
    id: "endocrine",
    title: "6. PEDIATRIC ENDOCRINE SYSTEM",
    categories: pediatricCategories,
  },
  {
    id: "musculoskeletal",
    title: "7. PEDIATRIC MUSCULOSKELETAL SYSTEM",
    categories: pediatricCategories,
  },
  {
    id: "integumentary",
    title: "8. PEDIATRIC INTEGUMENTARY SYSTEM",
    categories: pediatricCategories,
  },
  {
    id: "hematologic",
    title: "9. PEDIATRIC HEMATOLOGIC SYSTEM",
    categories: pediatricCategories,
  },
  {
    id: "immune",
    title: "10. PEDIATRIC IMMUNE SYSTEM",
    categories: pediatricCategories,
  },
  {
    id: "heent",
    title: "11. PEDIATRIC HEAD, EYES, EARS, NOSE, AND THROAT (HEENT)",
    categories: pediatricCategories,
  },
  {
    id: "mental-health",
    title: "12. PEDIATRIC MENTAL HEALTH",
    categories: pediatricCategories,
  },
];
