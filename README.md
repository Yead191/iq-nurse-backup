# IQ-Nurse

<p align="center">
  <img src="https://res.cloudinary.com/dknmebeee/image/upload/v1786772565/Screenshot_2026-08-15_114115_iw7tdf.png" alt="IQ-Nurse dashboard" />
</p>

**IQ-Nurse** is an AI-powered nursing education platform for nursing students. It combines NCLEX / Next Gen NCLEX practice, clinical study tools, and an in-app AI study assistant in a single Next.js application.

This repository is the **frontend** (Next.js App Router). Product content and student workflows currently run against local/static data.

---

## Overview

IQ-Nurse is built for nursing students who need exam prep and clinical study support in one place. The product includes:

- A marketing site with features, pricing, and testimonials
- An authenticated student dashboard with sidebar and mobile navigation
- An in-app **IQ-Nurse AI assistant** for nursing study questions
- NCLEX practice by category and full-length practice exams
- Clinical learning modules, study tools, community, and a student planner

---

## Core Functionalities

### Student dashboard

The dashboard (`/profile/home`) is the main study hub:

- Welcome banner and search
- Weekly stats and NCLEX question shortcuts
- Study material shortcuts (Med-Surg, Pharmacology, Pediatrics, Mental Health, and more)
- Weekly NCLEX mastery challenge with rationale
- Success tools (Notepad, Concept Map, Calendar, Library)
- Right-hand planner: today’s events, tasks, class schedule, and quick-add
- Floating **IQ-Nurse** chat widget

### Authentication and account

- Login, registration, country selection, and membership comparison
- Password reset and update flows
- Account & security, subscriptions, language preference, FAQs, contact, terms, and privacy

---

## AI-Powered Nursing Assistance

The **IQ-Nurse** assistant is a floating chat widget on the student dashboard. It is positioned as a 24/7 nursing study assistant for NCLEX prep, care plans, dosage calculations, pharmacology, and related topics.

**What students can do:**

- Ask nursing study questions in a chat interface
- Use quick actions: NCLEX study tips, exam practice, dosage calculations, flashcards, care plans, concept maps, study schedules, drug information, and clinical skills
- Attach images to a message
- Keep chat history in the browser (`localStorage`)
- Clear or minimize the conversation

The assistant UI is labeled **IQ-Nurse AI Assistant**. Responses are currently handled on the client (no external AI provider is configured in this repo).

Students can also generate flashcards from a topic or notes through the **Generate Flashcards with AI** form.

---

## NCLEX / Next Gen NCLEX Preparation

The NCLEX module (`/profile/nclex-exams`) supports exam-style practice and review:

- **Practice by category** — Fundamentals, Medical-Surgical, Pharmacology, Maternal & Newborn, Pediatrics, Mental Health, Community & Public Health, Leadership & Management
- **Practice or test mode**, with configurable question count
- **Full NCLEX practice** — five timed practice exams (75 questions, 150 minutes each)
- **Progress** — completion, scores, and category performance
- Exam tools: timer, on-screen calculator, flag/review, strikethrough, rationales, and save-as-flashcard

Question types in the exam engine include multiple choice, select-all-that-apply, drag-and-drop, matrix, and cloze.

A separate **Tests** area (`/profile/tests`) provides NCLEX prep configuration and performance analytics (topic performance, recommendations, peer comparison).

---

## Practice Questions and Full-Length Practice Tests

- Dashboard category cards (Med-Surg, Pharmacology, Labs, ECG, Mental Health, Pediatrics)
- Weekly NCLEX mastery challenge with submit, next, explanation, and score
- Category practice sessions and full-length replica exams
- Result review with question-level rationale

---

## Clinical Nursing Tools and Calculators

**Clinical Calculator** (`/profile/clinical-calculator`) groups tools by use case:

- Dosage & medication (dosage calculation, unit conversion, pediatric dosage)
- IV & fluid management (IV flow rate, fluid balance)
- Vital signs & assessment (BMI, body surface area)
- Laboratory values (creatinine clearance, anion gap)
- Respiratory care, nutrition & feeding, and critical care (including Glasgow Coma Scale and shock index)

**Dosage Calculation** is also a full study module covering basic math, measurement systems, calculation methods, clinical safety, and NCLEX-RN strategies.

Related clinical modules:

- **ECG Mastery** — rhythm foundations and interpretation practice
- **Diagnostic Tests & Labs** — lab reference topics and practice
- **Practical Skills** — clinical skill documentation and practice
- **Nursing Assessment** — system-based assessment content
- **Vital Signs** — temperature, pulse, respiration, blood pressure, and documentation
- **Cheat Sheets** — quick-reference clinical sheets

---

## Care Plan Generator

The Care Plans module (`/profile/care-plans`) is a structured library of nursing care plans organized by clinical system and condition, including:

- Cardiovascular, respiratory, neurological, GI, renal, endocrine, musculoskeletal, integumentary
- Hematologic/oncologic, immune, infectious disease, mental health
- OB/Maternity, neonatal/pediatric, perioperative, critical care/emergency
- Geriatric care, pain management, and palliative / end-of-life

Students can browse popular and recently viewed topics, open a full care plan, and use save/share actions. The IQ-Nurse assistant also includes a **Create Care Plan** quick action.

---

## Drug Card Generator

The Drug Card module (`/profile/ai-drug`) produces structured medication reference cards for clinical and pharmacology study. Each card covers:

- Mechanism of action
- Indications
- Side effects and adverse reactions
- Nursing considerations
- Patient education
- Dosing and administration

Content is presented as educational, AI-generated drug information and is intended to be cross-checked with current drug references.

---

## Study Notes and Learning Resources

Study Notes (`/profile/study-notes`) are organized by major nursing topics with searchable sidebar navigation. Implemented topic trees include:

- Medical-Surgical Nursing
- Fundamentals of Nursing
- Maternal-Newborn Nursing

Dashboard shortcuts also surface Pharmacology, Pediatrics, Mental Health, Critical Care, Behavioral Health, and Nursing Leadership.

Additional resources: **Cheat Sheets**, **My Library** (folders and saved pages), and **Study Plans** (coming soon).

---

## Interactive Body Systems

The Body Systems module (`/profile/body-system`) is a visual anatomy and physiology review with 12 systems:

Cardiovascular, nervous, digestive, respiratory, muscular, skeletal, endocrine, urinary, reproductive, immune, integumentary, and lymphatic.

Each system includes Overview, Physiology, and Clinical tabs, image/media review, notes, bookmark, and share.

---

## Smart Flashcards

Flashcards (`/profile/flash-card`) support both library study and custom decks:

- **Study** — review cards by nursing category (Fundamentals, Med-Surg, Pharmacology, Pediatrics, and more)
- **My Folders** — organize personal decks
- **Progress** — reviewed cards and accuracy by category
- **Create from scratch** — name a set and add cards
- **Generate with AI** — topic, optional notes, card count, and difficulty
- **High-yield flashcards** — category library, performance, previous sessions, and timed tests

---

## Smart Notepad

My Notepad (`/profile/my-notepad`) is a folder-based notes workspace:

- Create folders and notes
- Rich-text editing (Jodit)
- Mobile folder → notes → editor flow
- Bookmark, download, and delete actions

---

## Student Calendar Planner

The Calendar/Planner (`/profile/calendar`) uses day, week, and month views (react-big-calendar). Students can add and manage:

- Tasks
- Classes
- Exams
- Assignments
- Study time
- Clinical rotations
- Meetings
- Personal time

The dashboard sidebar mirrors today’s events, a task checklist, class schedule, and quick-add.

---

## Student Community and Group Discussions

Community features include:

- **Community home** — trending posts and study groups
- **Student discussion** — posts, comments, and trending filters
- **Create group** — multi-step flow (basic info, study focus, privacy, invites, review)
- **Group chat** — messages, members, and shared files

---

## Free Nursing Templates / Resources

Template categories available in the product include:

- Planners (head-to-toe assessment, daily/weekly study planners)
- Care plans and discharge plans
- Documentation (SOAP notes, shift report)
- Medical-surgical, pharmacology, mother & baby, pediatrics
- Behavioral health, fundamentals, and body-system templates

Templates are previewed as PDFs for clinical and study use.

---

## Technology Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js 15 (App Router, Turbopack in development) |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 4, PostCSS |
| Component library | Ant Design 5, `@ant-design/nextjs-registry` |
| Icons | Lucide React, React Icons |
| Rich text | Jodit, TipTap, Quill |
| Concept maps | `@xyflow/react` |
| Calendar | `react-big-calendar`, dayjs, date-fns |
| Charts | Recharts |
| Feedback | Sonner, SweetAlert2 |
| Other | Swiper, `html-to-image`, `js-cookie`, `uuid` |

No backend, database, or third-party AI SDK is configured in this repository.

---

## Project Structure

```text
src/
├── app/
│   ├── (website)/              # Marketing site (home, about)
│   ├── (user-dashboard)/       # Student dashboard routes
│   │   └── profile/            # Home, NCLEX, notes, tools, community
│   ├── auth/                   # Login, register, password flows
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── authPages/              # Auth UI
│   ├── shared/                 # Header, sidebar, bottom nav, editors
│   └── ui/
│       ├── websitePages/       # Public landing sections
│       └── user-dashboard-pages/
├── data/                       # Static content and mock datasets
├── helpers/                    # Exam utilities and shared helpers
└── styles/

public/assets/                  # Icons, images, template PDFs
```

Route groups keep the public site, auth, and dashboard layouts separate. Feature UI lives under `src/components/ui/user-dashboard-pages/`; content and mock exam data live under `src/data/`.

---

## Installation and Setup

**Requirements:** Node.js 18+ and npm, yarn, or pnpm.

```bash
# Clone the repository
git clone <repository-url>
cd iq-nurse-backup

# Install dependencies
npm install
# or
yarn install

# Start the development server (Turbopack)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Command |
| --- | --- |
| Development | `npm run dev` |
| Production build | `npm run build` |
| Start production server | `npm run start` |
| Lint | `npm run lint` |

---

## Environment Variables

This frontend does not require environment variables to run locally. No `.env` file or `NEXT_PUBLIC_*` keys are used in the current codebase.

When a backend or live AI service is added, API base URLs and keys should be introduced through environment variables.

---

## Screenshots

<p align="center">
  <img src="https://res.cloudinary.com/dknmebeee/image/upload/v1786772565/Screenshot_2026-08-15_114115_iw7tdf.png" alt="IQ-Nurse student dashboard" />
</p>

*Student dashboard — study hub, NCLEX practice, planner, and IQ-Nurse assistant.*

---

## Future Improvements

- Connect the IQ-Nurse assistant and AI flashcard / drug-card flows to a production AI backend
- Persist notes, calendar events, library items, community posts, and exam progress through an API
- Finish remaining clinical calculator implementations
- Ship **Clinical Cases** and **Study Plans** (currently marked Coming Soon)
- Complete the dedicated assistant page
- Implement dark mode and language switching beyond the existing header controls
- Add environment-based configuration once a backend is introduced
