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
}

export const maternalNewbornCategories: Category[] = [
  {
    id: "antepartum",
    title: "ANTEPARTUM CARE",
    subtopics: [
      // Pregnancy Physiology
      {
        id: "fertilization-implantation",
        title: "Fertilization and Implantation",
      },
      {
        id: "fetal-development-trimester",
        title: "Fetal Development by Trimester",
      },
      {
        id: "maternal-physiological-changes",
        title: "Maternal Physiological Changes",
      },
      {
        id: "placental-development-function",
        title: "Placental Development and Function",
      },

      // Prenatal Assessment
      { id: "confirmation-pregnancy", title: "Confirmation of Pregnancy" },
      {
        id: "estimated-due-date",
        title: "Estimated Due Date (Naegele's Rule)",
      },
      { id: "prenatal-visits-schedule", title: "Prenatal Visits Schedule" },
      {
        id: "fetal-assessment",
        title: "Fetal Assessment (Fetal Heart Rate, Movement, Kick Counts)",
      },
      {
        id: "maternal-assessment",
        title: "Maternal Assessment (Vital Signs, Weight Gain, Fundal Height)",
      },
      {
        id: "laboratory-tests",
        title:
          "Laboratory Tests (Blood Type, Rh Factor, CBC, Glucose Screening, GBS, HIV)",
      },
      { id: "ultrasound-examinations", title: "Ultrasound Examinations" },
      {
        id: "genetic-screening-testing",
        title: "Genetic Screening and Testing",
      },

      // Pregnancy Complications
      { id: "hyperemesis-gravidarum", title: "Hyperemesis Gravidarum" },
      { id: "miscarriage", title: "Miscarriage (Spontaneous Abortion)" },
      { id: "ectopic-pregnancy", title: "Ectopic Pregnancy" },
      { id: "molar-pregnancy", title: "Molar Pregnancy" },
      { id: "gestational-diabetes", title: "Gestational Diabetes" },
      {
        id: "pregnancy-induced-hypertension",
        title: "Pregnancy-Induced Hypertension",
      },
      { id: "preeclampsia-eclampsia", title: "Preeclampsia and Eclampsia" },
      { id: "hellp-syndrome", title: "HELLP Syndrome" },
      { id: "placenta-previa", title: "Placenta Previa" },
      { id: "placental-abruption", title: "Placental Abruption" },
      { id: "preterm-labor", title: "Preterm Labor" },
      { id: "incompetent-cervix", title: "Incompetent Cervix" },
      { id: "multiple-gestation", title: "Multiple Gestation" },
      {
        id: "rh-incompatibility",
        title: "Rh Incompatibility and Isoimmunization",
      },
      { id: "iugr", title: "Intrauterine Growth Restriction (IUGR)" },
      { id: "post-term-pregnancy", title: "Post-Term Pregnancy" },

      // Prenatal Education
      { id: "nutrition-pregnancy", title: "Nutrition During Pregnancy" },
      { id: "exercise-activity", title: "Exercise and Activity" },
      { id: "substance-use", title: "Substance Use (Alcohol, Tobacco, Drugs)" },
      {
        id: "common-discomforts",
        title: "Common Discomforts and Relief Measures",
      },
      { id: "warning-signs", title: "Warning Signs" },
      {
        id: "preparation-labor-birth",
        title: "Preparation for Labor and Birth",
      },
      { id: "breastfeeding-preparation", title: "Breastfeeding Preparation" },
    ],
    topics: [],
  },
  {
    id: "intrapartum",
    title: "INTRAPARTUM CARE",
    subtopics: [
      // Labor and Birth
      {
        id: "stages-of-labor",
        title: "Stages of Labor (First, Second, Third, Fourth)",
      },
      { id: "signs-stages-labor", title: "Signs and Stages of Labor" },
      {
        id: "fetal-monitoring",
        title: "Fetal Monitoring (External and Internal)",
      },
      {
        id: "maternal-monitoring-labor",
        title: "Maternal Monitoring During Labor",
      },
      {
        id: "pain-management",
        title: "Pain Management (Non-Pharmacologic and Pharmacologic)",
      },
      { id: "labor-support-coaching", title: "Labor Support and Coaching" },
      {
        id: "positioning-labor-birth",
        title: "Positioning for Labor and Birth",
      },
      {
        id: "assisted-delivery",
        title: "Assisted Delivery (Forceps, Vacuum Extraction)",
      },
      { id: "cesarean-birth", title: "Cesarean Birth (Planned and Emergency)" },

      // Labor Complications
      { id: "prolapsed-cord", title: "Prolapsed Cord" },
      { id: "uterine-rupture", title: "Uterine Rupture" },
      { id: "amniotic-fluid-embolism", title: "Amniotic Fluid Embolism" },
      { id: "shoulder-dystocia", title: "Shoulder Dystocia" },
      { id: "fetal-distress", title: "Fetal Distress" },
      {
        id: "abnormal-labor-patterns",
        title: "Abnormal Labor Patterns (Prolonged Labor, Precipitous Labor)",
      },
      { id: "chorioamnionitis", title: "Infection (Chorioamnionitis)" },
    ],
    topics: [],
  },
  {
    id: "postpartum",
    title: "POSTPARTUM CARE",
    subtopics: [
      // Postpartum Physiology
      { id: "involution-uterus", title: "Involution of Uterus" },
      { id: "lochia-stages", title: "Lochia Stages" },
      { id: "breast-changes-lactation", title: "Breast Changes and Lactation" },
      { id: "hormonal-changes", title: "Hormonal Changes" },
      {
        id: "cardiovascular-respiratory-changes",
        title: "Cardiovascular and Respiratory Changes",
      },

      // Postpartum Assessment
      {
        id: "physical-assessment-postpartum",
        title: "Physical Assessment (Fundus, Lochia, Episiotomy, Incision)",
      },
      { id: "vital-signs-monitoring", title: "Vital Signs Monitoring" },
      { id: "pain-assessment", title: "Pain Assessment" },
      { id: "bladder-bowel-function", title: "Bladder and Bowel Function" },
      {
        id: "emotional-assessment",
        title: "Emotional Assessment (Postpartum Blues, Depression, Psychosis)",
      },
      { id: "bonding-attachment", title: "Bonding and Attachment Assessment" },

      // Postpartum Complications
      { id: "postpartum-hemorrhage", title: "Postpartum Hemorrhage" },
      {
        id: "postpartum-infections",
        title: "Infection (Endometritis, Wound Infection, Mastitis, UTI)",
      },
      { id: "subinvolution", title: "Subinvolution" },
      {
        id: "thromboembolic-disorders",
        title: "Thromboembolic Disorders (DVT, PE)",
      },
      {
        id: "urinary-retention-incontinence",
        title: "Urinary Retention and Incontinence",
      },
      {
        id: "breast-complications",
        title: "Breast Complications (Engorgement, Mastitis, Cracked Nipples)",
      },
      {
        id: "postpartum-depression-psychosis",
        title: "Postpartum Depression and Psychosis",
      },
      { id: "postpartum-preeclampsia", title: "Postpartum Preeclampsia" },

      // Postpartum Education
      { id: "self-care-recovery", title: "Self-Care and Recovery" },
      { id: "nutrition-hydration", title: "Nutrition and Hydration" },
      { id: "activity-exercise", title: "Activity and Exercise" },
      {
        id: "breastfeeding-techniques",
        title: "Breastfeeding Techniques and Support",
      },
      { id: "infant-care-basics", title: "Infant Care Basics" },
      {
        id: "contraception-family-planning",
        title: "Contraception and Family Planning",
      },
      { id: "warning-signs-postpartum", title: "Warning Signs" },
      {
        id: "support-systems-resources",
        title: "Support Systems and Resources",
      },
    ],
    topics: [],
  },
  {
    id: "newborn",
    title: "NEWBORN CARE",
    subtopics: [
      // Newborn Assessment
      { id: "apgar-score", title: "Apgar Score" },
      {
        id: "physical-assessment-newborn",
        title:
          "Physical Assessment (Gestational Age Assessment, Ballard Score)",
      },
      { id: "vital-signs-newborn", title: "Vital Signs" },
      {
        id: "weight-length-head-circumference",
        title: "Weight, Length, Head Circumference",
      },
      { id: "newborn-reflexes", title: "Newborn Reflexes" },
      { id: "behavioral-assessment", title: "Behavioral Assessment" },
      {
        id: "screening-tests",
        title:
          "Screening Tests (Hearing, Metabolic, Critical Congenital Heart Disease)",
      },

      // Newborn Procedures
      { id: "vitamin-k-administration", title: "Vitamin K Administration" },
      { id: "eye-prophylaxis", title: "Eye Prophylaxis" },
      { id: "hepatitis-b-vaccine", title: "Hepatitis B Vaccine" },
      { id: "newborn-screening", title: "Newborn Screening" },
      { id: "circumcision-care", title: "Circumcision Care" },
      { id: "cord-care", title: "Cord Care" },

      // Newborn Complications
      { id: "preterm-infant-care", title: "Preterm Infant Care" },
      { id: "low-birth-weight", title: "Low Birth Weight" },
      {
        id: "respiratory-distress-syndrome",
        title: "Respiratory Distress Syndrome",
      },
      {
        id: "hyperbilirubinemia-jaundice",
        title: "Hyperbilirubinemia and Jaundice",
      },
      { id: "neonatal-sepsis", title: "Neonatal Sepsis" },
      { id: "hypoglycemia-newborn", title: "Hypoglycemia" },
      { id: "birth-trauma", title: "Birth Trauma" },
      { id: "congenital-anomalies", title: "Congenital Anomalies" },
      {
        id: "neonatal-abstinence-syndrome",
        title: "Neonatal Abstinence Syndrome",
      },

      // Newborn Feeding
      {
        id: "breastfeeding-benefits-techniques",
        title: "Breastfeeding Benefits and Techniques",
      },
      { id: "latch-assessment", title: "Latch Assessment" },
      { id: "formula-feeding", title: "Formula Feeding" },
      {
        id: "feeding-schedules-amounts",
        title: "Feeding Schedules and Amounts",
      },
      { id: "common-feeding-problems", title: "Common Feeding Problems" },

      // Newborn Safety
      {
        id: "safe-sleep-practices",
        title: "Safe Sleep Practices (SIDS Prevention)",
      },
      { id: "car-seat-safety", title: "Car Seat Safety" },
      { id: "temperature-regulation", title: "Temperature Regulation" },
      { id: "infection-prevention", title: "Infection Prevention" },
      { id: "home-safety", title: "Home Safety" },
    ],
    topics: [],
  },
];
