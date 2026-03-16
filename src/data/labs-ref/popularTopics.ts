import {
  ClockCircleOutlined,
  HeartOutlined,
  DotChartOutlined,
  ExperimentOutlined,
  ThunderboltOutlined,
  FilterOutlined,
} from "@ant-design/icons";

export interface TopicItem {
  id: string;
  title: string;
  icon: any; // lucide-react component or antd icon
  category: string;
}

export const popularTopics: TopicItem[] = [
  {
    id: "troponin",
    title: "Troponin",
    icon: HeartOutlined,
    category: "Cardiac Biomarkers",
  },
  {
    id: "pt-inr",
    title: "Prothrombin Time (PT) & INR",
    icon: ClockCircleOutlined,
    category: "Coagulation Studies",
  },
  {
    id: "rbc-indices",
    title: "Hemoglobin & Hematocrit",
    icon: DotChartOutlined,
    category: "Complete Blood Count",
  },
  {
    id: "abg-overview",
    title: "ABG Overview",
    icon: ExperimentOutlined,
    category: "Arterial Blood Gas",
  },
  {
    id: "potassium",
    title: "Potassium",
    icon: ThunderboltOutlined,
    category: "Metabolic Panel",
  },
  {
    id: "bun-creatinine",
    title: "BUN & Creatinine",
    icon: FilterOutlined,
    category: "Renal Function",
  },
];
