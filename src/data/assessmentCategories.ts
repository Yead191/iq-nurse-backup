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

export const assessmentCategories = [
  {
    id: "core",
    name: "Core body system assessments",
    color: "#F87171", // red-400
    topicCount: 11,
    subcategories: [
      {
        id: "neuro",
        name: "Neurological",
        isBookmarked: false,
        comprehensiveDescription: [
          "This quick reference combines neurological and cardiovascular monitoring for a holistic view of patient status.",
          "Includes EEG brain impulse tracking, cardiac rhythm evaluation, and genetic/DNA system indicators.",
          "Vital percentages provide real-time indicators of cardiovascular function and potential abnormalities.",
        ],
        clinicalNote:
          "EEG and EKG assessments are critical for detecting early neurological or cardiac abnormalities. Monitor percentage indicators (17.5% and 45.8%) closely as they may represent perfusion or output changes. Always compare with baseline readings.",
        findings: [
          {
            key: "1",
            assessment: "Neurological (EEG)",
            normal: "EEG brain impulses within expected range",
            abnormal: "Abnormal spikes or suppressed brain activity",
          },
          {
            key: "2",
            assessment: "Cardiac Rhythm (EKG)",
            normal: "Regular sinus rhythm",
            abnormal: "Arrhythmia, irregular rhythm, ischemic changes",
          },
          {
            key: "3",
            assessment: "Perfusion/Output",
            normal: "17.5% - adequate output range",
            abnormal: "45.8% - elevated risk or reduced efficiency",
          },
        ],
      },
      {
        id: "cardio",
        name: "Cardiovascular",
        isBookmarked: false,
        comprehensiveDescription: [],
        clinicalNote: "",
        findings: [],
      },
      {
        id: "resp",
        name: "Respiratory",
        isBookmarked: false,
        comprehensiveDescription: [],
        clinicalNote: "",
        findings: [],
      },
      {
        id: "gi",
        name: "Gastrointestinal/Abdominal",
        isBookmarked: false,
        comprehensiveDescription: [],
        clinicalNote: "",
        findings: [],
      },
    ],
  },

  {
    id: "essential",
    name: "Essential clinical assessments",
    color: "#3B82F6", // blue-500
    topicCount: 10,
    subcategories: [
      {
        id: "ess1",
        name: "Basic Exam",
        isBookmarked: false,
        comprehensiveDescription: [],
        clinicalNote: "",
        findings: [],
      },
    ],
  },
  {
    id: "specialized",
    name: "Specialized Assessments",
    color: "#EC4899", // pink-500
    topicCount: 13,
    subcategories: [
      {
        id: "spec1",
        name: "Advanced Exam",
        isBookmarked: false,
        comprehensiveDescription: [],
        clinicalNote: "",
        findings: [],
      },
    ],
  },
  {
    id: "situational",
    name: "Situational Assessments",
    color: "#22C55E", // green-500
    topicCount: 10,
    subcategories: [
      {
        id: "sit1",
        name: "Emergency",
        isBookmarked: false,
        comprehensiveDescription: [],
        clinicalNote: "",
        findings: [],
      },
    ],
  },
];
