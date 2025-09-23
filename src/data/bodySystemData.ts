export interface BodySystem {
  id: string;
  label: string;
  icon: string;
  title: string;
  description: string[];
  images: string[];
}

export const bodySystems: BodySystem[] = [
  {
    id: "cardiovascular",
    label: "Cardiovascular",
    icon: "/assets/body-icons/quick-icon.svg",
    title: "Cardiovascular",
    description: [
      "Angina is chest pain or discomfort due to reduced blood flow to the heart. Patients with angina often describe feeling squeezing, pressure, tightness, or heaviness in their chest.",
      "There are two common types of angina: stable and unstable. Though the severity and duration of angina can vary, characteristic symptoms can indicate which type of angina you have.",
      "Stable angina can be predicted and occurs when you are under cardiovascular stress from exercise. Stable angina lasts a short time (generally under 5 minutes) and disappears after rest.",
      "Unstable angina is a medical emergency that can occur during exercise or at rest. Unstable angina is unexpected, can last a long time (over 30 minutes), and may not disappear after angina medication. Unstable angina may be the first sign of a heart attack.",
      "Both stable and unstable angina are the primary symptoms of coronary artery disease. Coronary artery disease is a cardiovascular condition in which atherosclerosis (the buildup of plaque in artery walls) occurs in the arteries that supply the heart (coronary arteries).",
      "Atherosclerosis in coronary arteries can block blood flow to the heart muscle and increase a patient's risk for heart attack or heart failure.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },
  {
    id: "nervous",
    label: "Nervous",
    icon: "/assets/body-icons/nervouse-icon.svg",
    title: "Nervous System",
    description: [
      "The nervous system controls and coordinates body activities by transmitting signals between different parts of the body.",
      "It consists of the central nervous system (brain and spinal cord) and the peripheral nervous system (nerves throughout the body).",
      "The brain processes information, makes decisions, and controls voluntary and involuntary actions.",
      "The spinal cord serves as the main pathway for information traveling between the brain and the rest of the body.",
      "Neurons are specialized cells that transmit electrical and chemical signals throughout the nervous system.",
      "Common neurological conditions include stroke, epilepsy, multiple sclerosis, and Alzheimer's disease.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },

  {
    id: "digestive",
    label: "Digestive",
    icon: "/assets/body-icons/digestive-icon.svg",
    title: "Digestive System",
    description: [
      "The digestive system breaks down food into nutrients that your body can absorb and use for energy, growth, and cell repair.",
      "The digestive process begins in the mouth where food is mechanically broken down by chewing and chemically broken down by saliva.",
      "Food travels through the esophagus to the stomach, where it is mixed with gastric juices and further broken down.",
      "The small intestine is where most nutrient absorption occurs, aided by enzymes from the pancreas and bile from the liver.",
      "The large intestine processes waste and absorbs water, forming stool that is eliminated from the body.",
      "Common digestive issues include acid reflux, ulcers, irritable bowel syndrome, and inflammatory bowel disease.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },
  {
    id: "respiratory",
    label: "Respiratory",
    icon: "/assets/body-icons/respiratory-icon.svg",
    title: "Respiratory System",
    description: [
      "The respiratory system is responsible for taking in oxygen and removing carbon dioxide from the body.",
      "Air enters through the nose or mouth, travels down the trachea, and branches into the bronchi and bronchioles.",
      "Gas exchange occurs in the alveoli, tiny air sacs in the lungs where oxygen enters the bloodstream and carbon dioxide is removed.",
      "The diaphragm and intercostal muscles work together to create the pressure changes needed for breathing.",
      "Common respiratory conditions include asthma, chronic obstructive pulmonary disease (COPD), and pneumonia.",
      "Maintaining healthy lungs involves avoiding smoking, exercising regularly, and protecting against air pollution.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },

  {
    id: "mascular",
    label: "Muscular",
    icon: "/assets/body-icons/mascular-icon.svg",
    title: "Muscular System",
    description: [
      "The musculoskeletal system provides structure, support, and movement to the body through bones, muscles, and joints.",
      "Bones provide the framework for the body, protect internal organs, and store minerals like calcium and phosphorus.",
      "Muscles contract and relax to produce movement, maintain posture, and generate heat.",
      "Joints are where bones meet and allow for various types of movement depending on their structure.",
      "Tendons connect muscles to bones, while ligaments connect bones to other bones.",
      "Common musculoskeletal conditions include arthritis, osteoporosis, muscle strains, and fractures.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },
  {
    id: "skeletal ",
    label: "Skeletal",
    icon: "/assets/body-icons/skeletal-icon.svg",
    title: "Skeletal System",
    description: [
      "The endocrine system regulates body functions through hormones produced by various glands.",
      "Major endocrine glands include the pituitary, thyroid, adrenal glands, pancreas, and reproductive organs.",
      "Hormones act as chemical messengers that travel through the bloodstream to target organs and tissues.",
      "The pituitary gland is often called the 'master gland' because it controls other endocrine glands.",
      "The endocrine system regulates metabolism, growth, reproduction, mood, and many other vital functions.",
      "Common endocrine disorders include diabetes, thyroid diseases, and hormonal imbalances.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },
  {
    id: "endocrine",
    label: "Endocrine",
    icon: "/assets/body-icons/cat7.svg",

    title: "Endocrine System",
    description: [
      "The endocrine system regulates body functions through hormones produced by glands.",
      "Major endocrine glands include the pituitary, thyroid, adrenal glands, pancreas, and reproductive organs.",
      "Hormones act as chemical messengers that control metabolism, growth, reproduction, and mood.",
      "The pituitary gland is often called the 'master gland' because it controls other endocrine glands.",
      "The endocrine system helps maintain homeostasis and adapt to changes in the environment.",
      "Common endocrine disorders include diabetes, thyroid disease, and hormone imbalances.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },
  {
    id: "urinary",
    label: "Urinary",
    icon: "/assets/body-icons/cat-8.svg",

    title: "Urinary System",
    description: [
      "The urinary system removes waste products and excess fluid from the body.",
      "It includes the kidneys, ureters, bladder, and urethra.",
      "The kidneys filter blood to remove toxins and balance electrolytes and water.",
      "Urine produced by the kidneys travels through the ureters to the bladder for storage.",
      "The urinary system also helps regulate blood pressure and red blood cell production.",
      "Common conditions include kidney stones, urinary tract infections, and chronic kidney disease.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },
  {
    id: "reproductive",
    label: "Reproductive",
    icon: "/assets/body-icons/cat-9.svg",

    title: "Reproductive System",
    description: [
      "The reproductive system enables humans to produce offspring.",
      "In males, it includes the testes, penis, and associated ducts and glands.",
      "In females, it includes the ovaries, fallopian tubes, uterus, and vagina.",
      "Female reproductive cycles involve ovulation, fertilization, and pregnancy.",
      "Hormones like estrogen and testosterone regulate sexual development and function.",
      "Common conditions include infertility, endometriosis, and prostate disorders.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },
  {
    id: "immune",
    label: "Immune",
    icon: "/assets/body-icons/cat-10.svg",

    title: "Immune System",
    description: [
      "The immune system defends the body against infections and harmful substances.",
      "It includes white blood cells, lymph nodes, the spleen, tonsils, and bone marrow.",
      "The immune system identifies and destroys bacteria, viruses, and other pathogens.",
      "It can distinguish between the body’s own cells and foreign invaders.",
      "Immunity can be innate (present at birth) or adaptive (developed after exposure).",
      "Disorders include allergies, autoimmune diseases, and immunodeficiency conditions.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },
  {
    id: "integumentary",
    label: "Integumentary",
    icon: "/assets/body-icons/cat-11.svg",

    title: "Integumentary System",
    description: [
      "The integumentary system includes the skin, hair, nails, and associated glands.",
      "It acts as the body’s first line of defense against injury, infection, and dehydration.",
      "The skin regulates body temperature through sweating and blood vessel dilation.",
      "It also helps sense touch, pressure, pain, and temperature.",
      "Melanin in the skin provides some protection against UV radiation.",
      "Common conditions include acne, eczema, psoriasis, and skin cancer.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },
  {
    id: "lymphatic",
    label: "Lymphatic",
    icon: "/assets/body-icons/cat-11.svg",
    title: "Lymphatic System",
    description: [
      "The lymphatic system helps maintain fluid balance and supports the immune system.",
      "It includes lymph, lymph nodes, lymph vessels, the spleen, and the thymus.",
      "Lymph nodes filter harmful substances and contain immune cells that fight infection.",
      "The lymphatic system returns excess fluid from tissues back to the bloodstream.",
      "It also plays a role in absorbing fats and fat-soluble vitamins from the digestive system.",
      "Disorders include lymphedema, infections, and cancers like lymphoma.",
    ],
    images: [
      "/assets/body-icons/quick-ref-img.svg",
      "/assets/body-icons/body1.svg",
      "/assets/body-icons/body2.svg",
      "/assets/body-icons/body3.svg",
    ],
  },
];
