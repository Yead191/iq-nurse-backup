import { EventItem } from "./types";

export const weeklyStats = [
  {
    key: "tasks",
    title: "Tasks",
    count: 8,
    colorClass: "bg-[#FFD1A6]",
  },
  {
    key: "exams",
    title: "Exams",
    count: 2,
    colorClass: "bg-[#FFBED9]",
  },
  {
    key: "classes",
    title: "Classes",
    count: 12,
    colorClass: "bg-[#BDC6FF]",
  },
  {
    key: "assignments",
    title: "Assignments",
    count: 4,
    colorClass: "bg-[#A4FFAA]",
  },
  {
    key: "clinical-rotation",
    title: "Clinical Rotation",
    count: 3,
    colorClass: "bg-[#BCE2FF]",
  },
  {
    key: "me-time",
    title: "Me Time",
    count: 12,
    colorClass: "bg-[#B9FDFF]",
  },
  {
    key: "meeting-appointment",
    title: "Meeting/Appt.",
    count: 2,
    colorClass: "bg-[#FCFF9A]",
  },
  {
    key: "study-time",
    title: "Study Time",
    count: 9,
    colorClass: "bg-[#E19FF7]",
  },
  {
    key: "countdown",
    title: "Countdown",
    count: 1,
    colorClass: "bg-[#BAF0D0]",
  },
];

export const studyCategories = [
  { key: "critical-care", title: "Critical Care", lessons: 12 },
  { key: "anatomy-physiology", title: "Anatomy & Physiology", lessons: 17 },
  { key: "pharmacology", title: "Pharmacology", lessons: 16 },
  {
    key: "medication-calculation",
    title: "Medication Calculation",
    lessons: 8,
  },
  { key: "pathophysiology", title: "Pathophysiology", lessons: 13 },
  { key: "mental-health", title: "Mental Health", lessons: 9 },
  { key: "fundamentals", title: "Fundamentals", lessons: 11 },
  { key: "ob-maternity", title: "OB - Maternity", lessons: 6 },
  { key: "pediatrics", title: "Pediatrics", lessons: 10 },
];

export const continueReading = [
  {
    id: "cr-1",
    title: "Airway and lungs",
    description:
      "An overview of the anatomy of the lungs and airways that carry oxygen to the body and remove CO2.",
  },
  {
    id: "cr-2",
    title: "Cardiac cycles",
    description:
      "Understanding systole and diastole, including the valves and electrical conduction system.",
  },
  {
    id: "cr-3",
    title: "Fluid and electrolyte balance",
    description:
      "Homeostasis, osmosis, and common imbalances affecting patient outcomes.",
  },
  {
    id: "cr-4",
    title: "Pain pathways",
    description:
      "Nociceptors, neurotransmitters, and the physiology of acute vs chronic pain.",
  },
];

export const myLibrary = [
  {
    id: "lib-1",
    title: "Endocrine system",
    description: "Hormones, glands, and feedback loops.",
  },
  {
    id: "lib-2",
    title: "Renal function",
    description: "Filtration, reabsorption, secretion.",
  },
  {
    id: "lib-3",
    title: "Acid-base balance",
    description: "Buffers, respiratory, and renal compensation.",
  },
  {
    id: "lib-4",
    title: "Antibiotics overview",
    description: "Classes, mechanisms, and indications.",
  },
];

export const recentlyViewed = [
  {
    id: "rv-1",
    title: "ABG Interpretation",
    description: "Step-by-step approach with examples.",
  },
  {
    id: "rv-2",
    title: "Wound care basics",
    description: "Assessment, staging, and dressing types.",
  },
  {
    id: "rv-3",
    title: "Sepsis bundle",
    description: "Early recognition and management.",
  },
  {
    id: "rv-4",
    title: "EKG rhythms",
    description: "Identifying common arrhythmias.",
  },
];

// Right-side "Today's Events" demo data
export const todaysEvents: EventItem[] = [
  {
    id: "ev-1",
    title: "Pediatrics",
    course: "Conditions associated with the international classification",
    description: "Lecture and discussion.",
    start: isoToday(15, 0),
    end: isoToday(16, 30),
    location: "Room 201",
    mode: "Online",
    color: "bg-rose-100",
  },
  {
    id: "ev-2",
    title: "Anatomy & Physiology",
    course: "A discussion on the brain",
    description: "Quiz at the end.",
    start: isoToday(9, 30),
    end: isoToday(10, 30),
    location: "Lab B",
    mode: "Online",
    color: "bg-sky-100",
  },
  {
    id: "ev-3",
    title: "Pediatrics Clinical",
    course: "Ward orientation with the clinical instructor",
    start: isoToday(13, 0),
    end: isoToday(14, 30),
    location: "Children's Hospital",
    mode: "Online",
    color: "bg-amber-100",
  },
  {
    id: "ev-4",
    title: "Psych Clinical",
    course: "Case presentation with a psychiatric client",
    start: isoToday(17, 0),
    end: isoToday(18, 0),
    location: "Online",
    mode: "Online",
    color: "bg-violet-100",
  },
  {
    id: "ev-5",
    title: "OB/Maternity Clinical",
    course: "Discussion on embryo development",
    start: isoToday(8, 0),
    end: isoToday(9, 0),
    location: "Room 105",
    mode: "Online",
    color: "bg-emerald-100",
  },
];

function isoToday(h: number, m: number) {
  const d = new Date();
  d.setHours(h, m, 0, 0);
  return d.toISOString();
}

export const practiceData = [
  {
    id: 3,
    title: "Medical-Surgical",
    subtitle: "Adult Health & Critical Care",
    bgColor: "#F5F7FF",
    borderColor: "#667EEA",
    circleColor: "#667EEA",
    progressColor: "#667EEA",
    completed: 102,
    total: 150,
    primaryBtn: { label: "Continue", bg: "#667EEA", text: "#fff" },
    secondaryBtn: {
      label: "Take Break",
      bg: "#fff",
      text: "#666",
      border: "#ccc",
    },
  },
  {
    id: 1,
    title: "Foundation Day",
    subtitle: "Basic Nursing Concept & Safety",
    bgColor: "#F6FFF8",
    borderColor: "#28A745",
    circleColor: "#28A745",
    progressColor: "#28A745",
    completed: 150,
    total: 150,
    primaryBtn: { label: "✓ Completed", bg: "#28A745", text: "#fff" },
    secondaryBtn: { label: "Review", bg: "#fff", text: "#666", border: "#ccc" },
  },
  {
    id: 4,
    title: "Maternal-Child",
    subtitle: "OB,Pediatrics & Family Health",
    bgColor: "#fff",
    borderColor: "#ccc",
    circleColor: "#667EEA",
    progressColor: "#667EEA",
    completed: 0,
    total: 140,
    primaryBtn: {
      label: "Start Marathon",
      bg: "#fff",
      text: "#666",
      border: "#ccc",
    },
  },
];
