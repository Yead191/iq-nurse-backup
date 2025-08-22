import ExamTab from "@/components/ui/user-dashboard-pages/Test-Quizzers-Page/high-yield-questions-page/exam-tab/ExamTab";
import { PerformanceTabMain } from "@/components/ui/user-dashboard-pages/Test-Quizzers-Page/high-yield-questions-page/performace-tab/PerformanceTabMain";


export interface QuizFolder {
  id: string;
  name: string;
  color: string;
  quizCount: number;
  createdAt: string;
  quizzes: any[];
}

export const initialFolders: QuizFolder[] = [
  {
    id: "1",
    name: "Pharmacology",
    color: "#ec4899",
    quizCount: 5,
    createdAt: "Apr 2, 2023",
    quizzes: [],
  },
  {
    id: "2",
    name: "OB/Maternity",
    color: "#f59e0b",
    quizCount: 3,
    createdAt: "Apr 2, 2023",
    quizzes: [],
  },
  {
    id: "3",
    name: "Pediatrics",
    color: "#3b82f6",
    quizCount: 4,
    createdAt: "Apr 2, 2023",
    quizzes: [],
  },
];

export const quizTabsData = [
  {
    id: "Exams",
    label: "Exams",
    imageSrc: "/assets/user-dashboard-images/flash-card/cards-avaiable.png",
    component: <ExamTab />,
  },
  {
    id: "Performance",
    label: "Performance",
    imageSrc: "/assets/user-dashboard-images/flash-card/performance.png",
    component: <PerformanceTabMain />
  },
  {
    id: "Previous Exam",
    label: "Previous Exam",
    imageSrc: "/assets/user-dashboard-images/flash-card/previous-exam.png",
    component: <div>Previous Exam Content</div>,
  },
];

export const questionSections = [
  {
    title: "Question Category",
    total: 800,
    categories: [
      [
        { name: "Cardiovascular", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Musculoskeletal", count: 297 },
      ],
      [
        { name: "Respiratory", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Neurology", count: 297 },
        { name: "Neurology", count: 297 },
        { name: "Immune", count: 297 },
        { name: "Hematology", count: 297 },
      ],
      [
        { name: "Respiratory", count: 297 },
        { name: "Neurology", count: 297 },
        { name: "Immune", count: 297 },
        { name: "Hematology", count: 297 },
      ],
    ],
  },
  {
    title: "All Pharmacology",
    total: 800,
    categories: [
      [
        { name: "Cardiovascular", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Musculoskeletal", count: 297 },
      ],
      [
        { name: "Respiratory", count: 297 },
        { name: "Endocrine", count: 297 },
        { name: "Neurology", count: 297 },
        { name: "Neurology", count: 297 },
        { name: "Immune", count: 297 },
        { name: "Hematology", count: 297 },
      ],
      [
        { name: "Respiratory", count: 297 },
        { name: "Neurology", count: 297 },
        { name: "Immune", count: 297 },
        { name: "Hematology", count: 297 },
      ],
    ],
  },
];
