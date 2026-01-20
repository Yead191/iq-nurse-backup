import { addDays } from "date-fns";
import {
  ScheduledClass,
  ScheduledExam,
} from "@/components/ui/user-dashboard-pages/calendar-new/components/ClassCalendar";

const classesData: ScheduledClass[] = [
  {
    id: "class-1",
    title: "Fundamentals of Nursing",
    subject: "Nursing Theory",
    date: new Date(),
    startTime: "09:00",
    endTime: "11:00",
    location: "Nursing Building - Room 204",
    color: "bg-[#2C5F8D]",
    studyMaterials: [
      {
        id: "m1",
        type: "notes",
        title: "Nursing Assessment Guide",
        description: "Head-to-toe assessment protocols",
      },
    ],
    reminder: "3days",
  },
  {
    id: "class-2",
    title: "Pharmacology",
    subject: "Medication Administration",
    date: addDays(new Date(), 1),
    startTime: "13:00",
    endTime: "15:00",
    location: "Science Hall - Lab 3",
    color: "bg-[#4A7DAF]",
    studyMaterials: [
      {
        id: "m2",
        type: "quiz",
        title: "Pharmacology Drug Classes Quiz",
        description: "50 essential drug classifications",
      },
    ],
    reminder: "1week",
  },
];
const examsData: ScheduledExam[] = [
  {
    id: "exam-1",
    title: "Medical-Surgical Nursing Midterm",
    subject: "Med-Surg",
    date: addDays(new Date(), 3),
    startTime: "10:00",
    endTime: "12:00",
    location: "Testing Center",
    color: "bg-red-500",
    weight: "30% of final grade",
    studyMaterials: [
      {
        id: "m3",
        type: "flashcard",
        title: "NCLEX-RN Practice Questions Set 1",
        description: "75 practice questions",
      },
      {
        id: "m4",
        type: "notes",
        title: "Medical Terminology Essentials",
        description: "Common medical prefixes and suffixes",
      },
      {
        id: "m5",
        type: "quiz",
        title: "Pharmacology Drug Classes Quiz",
        description: "50 essential drug classifications",
      },
      {
        id: "m6",
        type: "flashcard",
        title: "Body Systems Anatomy Flashcards",
        description: "Comprehensive anatomy review",
      },
    ],
    reminder: "1week",
  },
];
const assignmentsData = [
  [
    {
      id: "assign-1",
      title: "Care Plan for Diabetic Patient",
      course: "Nursing Care Planning",
      dueDate: addDays(new Date(), 2),
      dueTime: "23:59",
      priority: "high",
      studyMaterials: [
        {
          id: "m5",
          type: "notes",
          title: "Diabetes Management Protocol",
          description: "Type 1 & 2 diabetes care guidelines",
        },
      ],
      reminder: "3days",
    },
    {
      id: "assign-2",
      title: "Research Paper on Infection Control",
      course: "Evidence-Based Practice",
      dueDate: addDays(new Date(), 5),
      dueTime: "17:00",
      priority: "medium",
      studyMaterials: [],
      reminder: "1week",
    },
  ],
];
const studyTimesData = [
  {
    id: "study-1",
    title: "NCLEX Prep Session",
    subject: "NCLEX Review",
    date: new Date(),
    startTime: "15:00",
    endTime: "17:00",
    location: "Library - Study Room 5",
    studyMaterials: [
      {
        id: "m6",
        type: "flashcard",
        title: "NCLEX-RN Practice Questions Set 2",
        description: "75 practice questions",
      },
    ],
    reminder: "3days",
  },
  {
    id: "study-2",
    title: "Anatomy & Physiology Review",
    subject: "A&P",
    date: addDays(new Date(), 4),
    startTime: "18:00",
    endTime: "20:00",
    location: "Home",
    studyMaterials: [
      {
        id: "m7",
        type: "flashcard",
        title: "Body Systems Anatomy Flashcards",
        description: "Comprehensive anatomy review",
      },
    ],
    reminder: "1week",
  },
];
const clinicalsData = [
  {
    id: "clinical-1",
    title: "Medical-Surgical Clinical Rotation",
    facility: "City General Hospital",
    unit: "4th Floor Med-Surg",
    date: addDays(new Date(), 1),
    startTime: "07:00",
    endTime: "15:00",
    instructor: "Dr. Sarah Johnson, RN",
    studyMaterials: [
      {
        id: "m8",
        type: "notes",
        title: "Nursing Assessment Guide",
        description: "Head-to-toe assessment protocols",
      },
      {
        id: "m9",
        type: "notes",
        title: "Practical Skills Study Notes",
        description: "IV insertion, catheterization, wound care",
      },
    ],
    reminder: "3days",
  },
  {
    id: "clinical-2",
    title: "Pediatric Nursing Clinical",
    facility: "Children's Hospital",
    unit: "Pediatric ICU",
    date: addDays(new Date(), 6),
    startTime: "07:00",
    endTime: "15:00",
    instructor: "Prof. Michael Chen, RN",
    studyMaterials: [
      {
        id: "m10",
        type: "notes",
        title: "Pediatric Assessment Protocol",
        description: "Age-specific assessment techniques",
      },
    ],
    reminder: "1week",
  },
];
const meetingsData = [
  {
    id: "meeting-1",
    title: "Study Group - Pharmacology",
    type: "study-group",
    date: addDays(new Date(), 2),
    startTime: "16:00",
    endTime: "18:00",
    location: "Student Center - Room 301",
    reminder: "3days",
  },
  {
    id: "meeting-2",
    title: "Academic Advisor Check-in",
    type: "advisor-meeting",
    date: addDays(new Date(), 4),
    startTime: "14:00",
    endTime: "14:30",
    location: "Advising Office",
    reminder: "3days",
  },
];
const personalTimeData = [
  {
    id: "personal-1",
    title: "Yoga Class",
    category: "exercise",
    date: new Date(),
    startTime: "06:00",
    endTime: "07:00",
    reminder: "none",
  },
  {
    id: "personal-2",
    title: "Dinner with Family",
    category: "family",
    date: addDays(new Date(), 3),
    startTime: "18:00",
    endTime: "20:00",
    reminder: "3days",
  },
  {
    id: "personal-3",
    title: "Self-Care Sunday",
    category: "self-care",
    date: addDays(new Date(), 7),
    reminder: "none",
  },
];
const tasksData = [
  {
    id: "task-1",
    title: "Review Clinical Notes",
    category: "study",
    priority: "high",
    status: "pending",
    dueDate: new Date(),
    reminder: "none",
  },
  {
    id: "task-2",
    title: "Update Immunization Records",
    category: "administrative",
    priority: "medium",
    status: "pending",
    dueDate: addDays(new Date(), 2),
    reminder: "3days",
  },
  {
    id: "task-3",
    title: "Order New Stethoscope",
    category: "supplies",
    priority: "low",
    status: "completed",
    dueDate: addDays(new Date(), 5),
    reminder: "none",
  },
];
const countdownsData = [
  {
    id: "countdown-1",
    title: "NCLEX-RN Exam",
    targetDate: addDays(new Date(), 90),
    color: "bg-rose-500",
    reminder: "1week",
  },
  {
    id: "countdown-2",
    title: "Graduation Day!",
    targetDate: addDays(new Date(), 180),
    color: "bg-amber-500",
    reminder: "1week",
  },
  {
    id: "countdown-3",
    title: "Summer Break",
    targetDate: addDays(new Date(), 45),
    color: "bg-orange-400",
    reminder: "1week",
  },
];
export {
  classesData,
  examsData,
  assignmentsData,
  studyTimesData,
  clinicalsData,
  meetingsData,
  personalTimeData,
  tasksData,
  countdownsData,
};
