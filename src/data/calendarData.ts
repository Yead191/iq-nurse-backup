const now = new Date();

// Types
export interface CalendarEvent {
  id: string | number;
  title: string;
  start: Date;
  end: Date;
  resource?: any;
  allDay?: boolean;
  description?: string;
  color?: string;
}

export const dateData: CalendarEvent[] = [
  {
    id: 1,
    title: "Long Event",
    start: new Date(2025, 11, 7),
    end: new Date(2025, 11, 10),
    description: "A comprehensive multi-day event covering various topics and sessions.\nAttendees are expected to participate in workshops and networking activities.",
    color: "#FF5733",
  },
  {
    id: 2,
    title: "DTS STARTS",
    start: new Date(2025, 11, 13, 0, 0, 0),
    end: new Date(2025, 11, 20, 0, 0, 0),
    description: "The official commencement of the DTS program with an opening ceremony.\nIncludes introduction to mentors, schedule distribution, and initial assignments.",
    color: "#33A1FF",
  },
  {
    id: 3,
    title: "DTS ENDS",
    start: new Date(2025, 11, 6, 0, 0, 0),
    end: new Date(2025, 11, 13, 0, 0, 0),
    description: "Conclusion of the DTS program featuring final presentations and awards.\nGraduates will receive their certificates and join the alumni network.",
    color: "#28A745",
  },
  {
    id: 4,
    title: "Some Event",
    start: new Date(2025, 11, 9, 0, 0, 0),
    end: new Date(2025, 11, 9, 0, 0, 0),
    allDay: true,
    description: "A dedicated day for specific team-building exercises and workshops.\nAll team members are required to attend for the full duration.",
    color: "#FFC300",
  },
  {
    id: 92,
    title: "Some Other Event",
    start: new Date(2015, 3, 9, 8, 0, 0),
    end: new Date(2015, 3, 10, 11, 30, 0),
    description: "An ad-hoc event scheduled for random discussions and brainstorming.\nOpen to anyone interested in contributing new ideas to the project.",
    color: "#C70039",
  },
  {
    id: 5,
    title: "Conference",
    start: new Date(2025, 11, 11),
    end: new Date(2025, 11, 13),
    description: "Annual industry conference featuring keynote speakers and breakout sessions.\nA great opportunity to learn about the latest trends and network with peers.",
    color: "#900C3F",
  },
  {
    id: 6,
    title: "Meeting",
    start: new Date(2025, 11, 12, 10, 30, 0, 0),
    end: new Date(2025, 11, 12, 12, 30, 0, 0),
    description: "Strategic planning meeting to discuss Q4 goals and objectives.\nKey stakeholders will review performance metrics and set future targets.",
    color: "#581845",
  },
  {
    id: 7,
    title: "Lunch",
    start: new Date(2025, 11, 12, 12, 0, 0, 0),
    end: new Date(2025, 11, 12, 13, 0, 0, 0),
    description: "Casual team lunch at the local bistro for team bonding.\nVegetarian and vegan options will be available for everyone.",
    color: "#2ECC71",
  },
  {
    id: 14,
    title: "Today",
    start: now,
    end: now,
    description: "A placeholder event representing the current moment availability.\nUseful for checking real-time updates and notifications on the dashboard.",
    color: "#1ABC9C",
  },
  {
    id: 15,
    title: "Clinical Rotation",
    start: now,
    end: now,
    description: "Hands-on experience in the Pediatric ward under supervision.\nFocus on patient care, administering medication, and checking vitals.",
    color: "#4CAF50",
  },
  {
    id: 16,
    title: "Study Group",
    start: now,
    end: now,
    description: "Collaborative study session focusing on Pharmacology concepts.\nBring your notes and textbooks for a comprehensive review of drug interactions.",
    color: "#2196F3",
  },
  {
    id: 17,
    title: "Final Exam",
    start: now,
    end: now,
    description: "End-of-term examination covering Anatomy and Physiology.\nEnsure you have your ID and exam materials ready before entering the hall.",
    color: "#F44336",
  },
  {
    id: 18,
    title: "Patient Consultation",
    start: now,
    end: now,
    description: "Scheduled follow-up consultation with Mr. Smith regarding his recovery.\nReview of test results and discussion of next steps in treatment plan.",
    color: "#FF9800",
  },
];

export const calendarMenuItems = [
  {
    icon: "/assets/icons/day-icon.svg",
    label: "Calendar",
    color: "text-red-500",
    path: "/profile/calendar",
  },
  {
    icon: "/assets/icons/task-icon.svg",
    label: "Tasks",
    color: "text-blue-500",
    path: "/profile/calendar/tasks",
  },
  {
    icon: "/assets/icons/classes.svg",
    label: "Classes",
    color: "text-orange-500",
    path: "/profile/calendar/classes",
  },
  {
    icon: "/assets/icons/assignment-icon.svg",
    label: "Assignment",
    color: "text-purple-500",
    path: "/profile/calendar/assignment",
  },
  {
    icon: "/assets/icons/study-time-icon.svg",
    label: "Study Time",
    color: "text-blue-400",
    path: "/profile/calendar/study-time",
  },
  {
    icon: "/assets/icons/clinical-icon.svg",
    label: "Clinical Rotations",
    color: "text-green-500",
    path: "/profile/calendar/clinical-rotations",
  },
  {
    icon: "/assets/icons/exam-icon.svg",
    label: "Exams",
    color: "text-teal-500",
    path: "/profile/calendar/classes",
  },
  {
    icon: "/assets/icons/meetings-icon.svg",
    label: "Meetings/Appointments",
    color: "text-pink-500",
    path: "/profile/calendar/meetings",
  },
  {
    icon: "/assets/icons/meet-time-icon.svg",
    label: "Me Time",
    color: "text-yellow-500",
    path: "/profile/calendar/me-time",
  },
  {
    icon: "/assets/icons/count-down-icon.svg",
    label: "Count Down",
    color: "text-indigo-500",
    path: "/profile/calendar/count-down",
  },
];


