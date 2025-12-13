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
    completed: 102,
    total: 150,
    status: "ongoing",
  },
  {
    id: 1,
    title: "Foundation Day",
    subtitle: "Basic Nursing Concept & Safety",
    completed: 150,
    total: 150,
    status: "completed",
  },
  {
    id: 4,
    title: "Maternal-Child",
    subtitle: "OB,Pediatrics & Family Health",
    completed: 0,
    total: 140,
    status: "not_started",
  },
];

export const discussionsData = [
  {
    id: 1,
    title: "NCLEX Tips for Prioritization Questions",
    author: "Jessica Davis",
    authorInitials: "JD",
    replies: 24,
    views: 156,
  },
  {
    id: 2,
    title: "NCLEX Tips for Prioritization Questions",
    author: "Jessica Davis",
    authorInitials: "JD",
    replies: 24,
    views: 156,
  },
];

export const communityGroupsData = [
  {
    id: 1,
    name: "Cardiac Nursing Study Group",
    members: 24,
    online: 5,
    iconColor: "bg-green-500",
  },
];


export const testimonials = [
  {
    name: "Sarah Martinez",
    role: "BSN Graduate, 2024",
    quote: "IQ-Nurse completely transformed my study routine! Nurse Nia helped me understand complex pharmacology concepts that I struggled with for weeks. I passed my NCLEX on the first try with confidence!",
    initials: "SM"
  },
  {
    name: "James Thompson",
    role: "RN, Pediatric Unit",
    quote: "The practice questions and full-length exams were incredibly accurate to the actual NCLEX. The analytics showed me exactly where I needed to focus my studies. This platform is worth every penny!",
    initials: "JT"
  },
  {
    name: "Emily Patel",
    role: "Senior Nursing Student",
    quote: "The care plan and drug card generators saved me countless hours during clinical rotations. I could focus more on patient care and less on paperwork. The community feature also helped me connect with amazing study partners!",
    initials: "EP"
  },
  {
    name: "Michael Chen",
    role: "BSN Student, Year 3",
    quote: "As someone who struggled with time management, the calendar planner was a game-changer. I could finally balance my clinical rotations, study time, and personal life. Plus, Nurse Nia is like having a tutor available 24/7!",
    initials: "MC"
  },
  {
    name: "Lisa Johnson",
    role: "ADN Program",
    quote: "The interactive body systems module helped me ace my anatomy exam! The visual learning approach made everything click. I recommend IQ-Nurse to every nursing student I meet.",
    initials: "LJ"
  },
  {
    name: "Rachel Williams",
    role: "Honor Roll Student",
    quote: "The AI-generated flashcards from my lecture notes were incredibly helpful. I went from struggling in Med-Surg to getting top grades in my class. This platform understands what nursing students actually need!",
    initials: "RW"
  }
];

export const powerfulToolsData = [
  {
    badge: "SMART LEARNING",
    title: "Master Every Topic with Intelligent Flashcards",
    description: "Transform your study materials into powerful learning tools. Our AI-powered flashcard system adapts to your learning pace and helps you retain information faster than traditional methods.",
    features: [
      "Access 10,000+ pre-made NCLEX flashcards organized by topic",
      "AI generates custom flashcards from your lecture notes and textbooks",
      "Spaced repetition algorithm ensures optimal retention",
      "Track your progress and identify weak areas instantly",
      "Study offline with mobile app synchronization",
      "Share and collaborate on flashcard decks with classmates"
    ],
    primaryButton: "Try Flashcards Free",
    secondaryButton: "See Examples",
    image: "flashcards" // Placeholder
  },
  {
    badge: "STAY ORGANIZED",
    title: "Balance Your Busy Nursing Life Effortlessly",
    description: "Juggling clinical rotations, exams, study sessions, and personal time has never been easier. Our intelligent calendar planner keeps you organized and stress-free throughout your nursing journey.",
    features: [
      "Sync clinical rotation schedules automatically",
      "Set smart reminders for exams, assignments, and study sessions",
      "Color-coded categories for clinical, academic, and personal events",
      "Integration with study materials and practice questions",
      "Share schedules with study groups and classmates",
      "Track study hours and maintain work-life balance"
    ],
    primaryButton: "Create Your Schedule",
    secondaryButton: "See Templates",
    image: "calendar" // Placeholder
  },
  {
    badge: "EXAM MASTERY",
    title: "Conquer the NCLEX with Confidence",
    description: "Practice makes perfect. Our extensive question bank mirrors the actual Next Gen NCLEX format, giving you the edge you need to pass on your first attempt with detailed rationales for every answer.",
    features: [
      "10,000+ Next Gen NCLEX-style practice questions",
      "Detailed rationales explaining correct and incorrect answers",
      "Two full-length adaptive practice exams that predict your pass probability",
      "Performance analytics showing your strengths and weaknesses",
      "Questions updated regularly to match current NCLEX standards",
      "Timed practice mode to simulate real exam conditions"
    ],
    primaryButton: "Start Practice Test",
    secondaryButton: "View Sample Questions",
    image: "exam" // Placeholder
  },
  {
    badge: "VISUAL LEARNING",
    title: "Simplify Complex Concepts with Smart Mapping",
    description: "Understanding complex nursing concepts has never been this intuitive. Our revolutionary concept mapping tool transforms complicated pathophysiology and care plans into clear, visual connections that make sense.",
    features: [
      "AI generates concept maps from your study materials instantly",
      "Visualize disease processes, medications, and care plans",
      "Drag-and-drop interface tailored specifically for nursing students",
      "Pre-built templates for common nursing diagnoses",
      "Export maps for presentations and study guides",
      "Collaborate with classmates on shared concept maps"
    ],
    primaryButton: "Create Concept Map",
    secondaryButton: "Browse Templates",
    image: "mindmap" // Placeholder
  },
  {
    badge: "CONNECT & THRIVE",
    title: "Join a Thriving Community of Future Nurses",
    description: "You're not alone in this journey. Connect with thousands of nursing students who understand your challenges, celebrate your victories, and support you every step of the way to becoming an exceptional nurse.",
    features: [
      "Share experiences and learn from peers nationwide",
      "Celebrate milestones and accomplishments together",
      "Join or create study groups on specific topics",
      "Get advice from students who've been there",
      "Access exclusive community resources and study materials",
      "Network with future colleagues and build lasting friendships"
    ],
    primaryButton: "Join Community",
    secondaryButton: "Explore Groups",
    image: "community" // Placeholder
  },
  {
    badge: "MEET NURSE NIA",
    title: "Your 24/7 AI Nursing Tutor",
    description: "Nurse Nia is powered by advanced AI technology specifically trained on nursing education. She's here to answer any question, explain complex concepts, and guide you through your studies.",
    features: [
      "Instant answers to any nursing question",
      "Personalized study guidance and tutoring",
      "Help with care plans and documentation",
      "NCLEX preparation and test strategies",
      "Clinical scenario analysis and critical thinking",
      "Drug information and pharmacology help"
    ],
    primaryButton: "Chat with Nurse Nia",
    secondaryButton: null, // No secondary button in image
    image: "ai" // Placeholder
  }
];
