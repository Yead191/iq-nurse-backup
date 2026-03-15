"use client";
import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Trophy,
} from "lucide-react";
import { useRouter } from "next/navigation";

interface Question {
  id: number;
  type: "multiple-choice" | "select-all" | "dropdown" | "matrix" | "ordering";
  question: string;
  scenario?: string;
  stripType?: string;
  options?: string[];
  correctAnswer?: string | string[] | number[];
  dropdownOptions?: { [key: string]: string[] };
  dropdownAnswers?: { [key: string]: string };
  matrixOptions?: {
    rows: string[];
    columns: string[];
    correctAnswers: { [key: string]: string };
  };
  orderingItems?: string[];
  correctOrder?: number[];
  rationale: {
    correct: string;
    incorrect?: string;
    keyPoints: string[];
  };
}

const questions: Question[] = [
  {
    id: 1,
    type: "multiple-choice",
    scenario:
      "A 68-year-old male client is admitted to the telemetry unit. You observe the following rhythm on the cardiac monitor:",
    stripType: "NSR",
    question: "Based on the ECG strip, what rhythm is the client experiencing?",
    options: [
      "Normal Sinus Rhythm",
      "Sinus Bradycardia",
      "Sinus Tachycardia",
      "Atrial Fibrillation",
    ],
    correctAnswer: "Normal Sinus Rhythm",
    rationale: {
      correct:
        "This is correct! The ECG shows Normal Sinus Rhythm with a regular rate of 60-100 bpm, regular P waves before each QRS, and normal intervals.",
      incorrect:
        "This is incorrect. Review the characteristics: regular rhythm, rate 60-100 bpm, P waves present before each QRS, PR interval 0.12-0.20 sec.",
      keyPoints: [
        "NSR criteria: Rate 60-100 bpm, regular rhythm",
        "P waves: Present, upright, one before each QRS",
        "PR interval: 0.12-0.20 seconds (constant)",
        "QRS complex: <0.12 seconds (narrow)",
        "No intervention needed for NSR unless symptomatic",
      ],
    },
  },
  {
    id: 2,
    type: "select-all",
    scenario:
      "A 55-year-old female client with a history of COPD presents to the emergency department with irregular heart palpitations. The monitor shows atrial fibrillation with rapid ventricular response (RVR) at 145 bpm.",
    question:
      "Which interventions should the nurse anticipate? (Select all that apply)",
    options: [
      "Administer prescribed diltiazem IV",
      "Prepare for immediate defibrillation",
      "Initiate anticoagulation therapy as ordered",
      "Monitor for signs of decreased cardiac output",
      "Administer atropine 0.5mg IV push",
      "Assess CHA₂DS₂-VASc score for stroke risk",
    ],
    correctAnswer: [
      "Administer prescribed diltiazem IV",
      "Initiate anticoagulation therapy as ordered",
      "Monitor for signs of decreased cardiac output",
      "Assess CHA₂DS₂-VASc score for stroke risk",
    ],
    rationale: {
      correct:
        "Excellent! You identified all appropriate interventions for atrial fibrillation with RVR.",
      incorrect:
        "Review the correct interventions. Defibrillation is only for unstable clients or V-fib/pulseless V-tach. Atropine increases heart rate and would worsen tachycardia.",
      keyPoints: [
        "A-fib treatment goals: Rate control, rhythm control, anticoagulation",
        "Calcium channel blockers (diltiazem) or beta-blockers for rate control",
        "Anticoagulation prevents stroke (major complication of A-fib)",
        "CHA₂DS₂-VASc score determines stroke risk and need for anticoagulation",
        "Defibrillation only for unstable patients (not routine for stable A-fib)",
        "Monitor for decreased CO: Loss of atrial kick reduces output by 20-30%",
      ],
    },
  },
  {
    id: 3,
    type: "dropdown",
    scenario:
      "A 72-year-old client post-inferior wall MI is on continuous cardiac monitoring. The monitor alarm sounds.",
    question: "Complete the nursing documentation:",
    dropdownOptions: {
      rhythm: [
        "Normal Sinus Rhythm",
        "Sinus Bradycardia",
        "Sinus Tachycardia",
        "First-Degree AV Block",
      ],
      intervention: [
        "Continue monitoring",
        "Administer atropine 0.5mg IV",
        "Prepare for cardioversion",
        "Administer adenosine 6mg IV",
      ],
      priority: [
        "No immediate action needed",
        "Monitor closely for progression",
        "Immediate emergency intervention",
        "Notify provider within 1 hour",
      ],
    },
    dropdownAnswers: {
      rhythm: "First-Degree AV Block",
      intervention: "Continue monitoring",
      priority: "Monitor closely for progression",
    },
    rationale: {
      correct:
        "Correct! First-degree AV block is common after inferior MI, usually benign, but requires monitoring for progression to higher-degree blocks.",
      incorrect:
        "Review first-degree AV block management. It's characterized by PR interval >0.20 sec (constant), usually requires no treatment, but monitoring is essential post-MI.",
      keyPoints: [
        "First-degree AV block: PR interval >0.20 seconds (prolonged but constant)",
        "Common after inferior MI (right coronary artery involvement)",
        "Usually asymptomatic and benign - no treatment needed",
        "Monitor for progression to second or third-degree heart block",
        "May be caused by medications: digoxin, beta-blockers, CCBs",
        "Every P wave is followed by a QRS (1:1 conduction)",
      ],
    },
  },
  {
    id: 4,
    type: "matrix",
    question: "Match each ECG characteristic to the appropriate rhythm:",
    matrixOptions: {
      rows: [
        "Irregularly irregular rhythm with no discernible P waves",
        "Sawtooth flutter waves at 250-350 bpm",
        "PR interval progressively lengthens until QRS is dropped",
        "Complete AV dissociation with independent P and QRS",
      ],
      columns: [
        "Atrial Fibrillation",
        "Atrial Flutter",
        "Second-Degree AV Block Type I",
        "Third-Degree AV Block",
      ],
      correctAnswers: {
        "Irregularly irregular rhythm with no discernible P waves":
          "Atrial Fibrillation",
        "Sawtooth flutter waves at 250-350 bpm": "Atrial Flutter",
        "PR interval progressively lengthens until QRS is dropped":
          "Second-Degree AV Block Type I",
        "Complete AV dissociation with independent P and QRS":
          "Third-Degree AV Block",
      },
    },
    rationale: {
      correct:
        "Perfect! You correctly matched all ECG characteristics to their rhythms.",
      incorrect: "Review the distinctive features of each rhythm pattern.",
      keyPoints: [
        "A-fib: Most common arrhythmia, irregularly irregular, absent P waves",
        "A-flutter: Regular sawtooth pattern best seen in leads II, III, aVF",
        "2nd-degree Type I (Wenckebach): Progressive PR lengthening, usually benign",
        "3rd-degree: Life-threatening, requires pacemaker, no relationship between P and QRS",
        "Recognize patterns quickly for NCLEX prioritization questions",
      ],
    },
  },
  {
    id: 5,
    type: "ordering",
    scenario:
      "A client suddenly develops pulseless ventricular tachycardia in the cardiac unit.",
    question:
      "Place the following nursing interventions in the correct order of priority:",
    orderingItems: [
      "Begin chest compressions immediately",
      "Call for help and activate emergency response",
      "Attach defibrillator pads and analyze rhythm",
      "Deliver shock if indicated and resume CPR",
      "Establish IV access and administer epinephrine",
      "Check for pulse and rhythm every 2 minutes",
    ],
    correctOrder: [1, 0, 2, 3, 4, 5],
    rationale: {
      correct:
        "Excellent! You correctly prioritized interventions following ACLS guidelines for pulseless V-tach.",
      incorrect:
        "Review ACLS algorithms. Remember: Call for help first, then start CPR immediately, defibrillate ASAP.",
      keyPoints: [
        "Pulseless V-tach = shockable rhythm requiring immediate defibrillation",
        "Call for help FIRST - you need the defibrillator and team",
        "Start high-quality CPR immediately (before defibrillator arrives)",
        "Shock as soon as defibrillator available, then resume CPR immediately",
        "Minimize interruptions in chest compressions",
        "ACLS sequence: Call → CPR → Shock → CPR → Medications → Reassess",
      ],
    },
  },
  {
    id: 6,
    type: "multiple-choice",
    scenario:
      "A 45-year-old client reports sudden onset of rapid heart palpitations. BP: 118/76, HR: 180 bpm. The monitor shows a narrow-complex regular tachycardia with no visible P waves.",
    stripType: "SVT",
    question: "What is the priority nursing intervention?",
    options: [
      "Prepare for immediate synchronized cardioversion",
      "Teach vagal maneuvers and attempt Valsalva",
      "Administer diltiazem 20mg IV push",
      "Begin CPR and call a code",
    ],
    correctAnswer: "Teach vagal maneuvers and attempt Valsalva",
    rationale: {
      correct:
        "Correct! This stable SVT should be treated with vagal maneuvers first. The client is hemodynamically stable (normal BP).",
      incorrect:
        "Review SVT management. For stable patients, try vagal maneuvers first. Synchronized cardioversion is for unstable patients.",
      keyPoints: [
        "SVT: Narrow complex tachycardia, rate 150-250 bpm, regular rhythm",
        "Stable patient criteria: Normal BP, no chest pain, alert and oriented",
        "First-line for stable SVT: Vagal maneuvers (Valsalva, carotid massage)",
        "If vagal maneuvers fail: Adenosine 6mg rapid IV push",
        "Warn patient adenosine causes brief sense of 'impending doom'",
        "Unstable SVT (hypotensive, altered mental status): Synchronized cardioversion",
      ],
    },
  },
  {
    id: 7,
    type: "select-all",
    scenario:
      "A nurse is caring for a client with a permanent pacemaker inserted 2 days ago for third-degree heart block.",
    question:
      "Which assessment findings require immediate notification of the healthcare provider? (Select all that apply)",
    options: [
      "Pacing spikes present but no QRS complexes following",
      "Heart rate of 72 bpm (pacemaker set at 70 bpm)",
      "Swelling and redness at pacemaker insertion site",
      "Client reports hiccups that won't stop",
      "Pacing spike visible before each P wave and QRS complex",
      "Client's heart rate drops to 55 bpm during sleep",
    ],
    correctAnswer: [
      "Pacing spikes present but no QRS complexes following",
      "Swelling and redness at pacemaker insertion site",
      "Client reports hiccups that won't stop",
      "Client's heart rate drops to 55 bpm during sleep",
    ],
    rationale: {
      correct:
        "Excellent recognition of pacemaker complications! All these findings indicate potential problems.",
      incorrect: "Review pacemaker complications and normal function.",
      keyPoints: [
        "Failure to capture: Pacing spike without depolarization (no P or QRS)",
        "Failure to sense: Pacemaker fires when it shouldn't (competition)",
        "Infection signs: Redness, swelling, warmth, drainage at site",
        "Hiccups = possible lead displacement stimulating diaphragm",
        "Heart rate below pacemaker setting = malfunction",
        "Normal: Rate slightly above setting is okay (intrinsic rhythm)",
        "Normal: Pacing spikes with appropriate capture",
      ],
    },
  },
  {
    id: 8,
    type: "dropdown",
    scenario:
      "A client with COPD is admitted with irregular heart rhythm. Monitor shows multiple P wave morphologies with variable PR intervals and heart rate of 130 bpm.",
    question: "Complete the clinical reasoning:",
    dropdownOptions: {
      rhythm: [
        "Atrial Fibrillation",
        "Multifocal Atrial Tachycardia",
        "Wandering Atrial Pacemaker",
        "Atrial Flutter",
      ],
      cause: [
        "Chronic hypoxia",
        "Increased vagal tone",
        "Electrolyte imbalance",
        "Beta-blocker therapy",
      ],
      treatment: [
        "Treat underlying COPD/hypoxia",
        "Administer digoxin",
        "Immediate cardioversion",
        "Administer atropine",
      ],
    },
    dropdownAnswers: {
      rhythm: "Multifocal Atrial Tachycardia",
      cause: "Chronic hypoxia",
      treatment: "Treat underlying COPD/hypoxia",
    },
    rationale: {
      correct:
        "Perfect clinical reasoning! MAT is classic in COPD patients and requires treating the underlying hypoxia.",
      incorrect:
        "Review MAT characteristics and management. Key: ≥3 different P wave shapes, rate >100, strongly associated with lung disease.",
      keyPoints: [
        "MAT: ≥3 different P wave morphologies, rate >100 bpm, irregular",
        "Most common in COPD and pulmonary disease patients",
        "Caused by hypoxia - treat underlying condition first",
        "Calcium channel blockers for rate control (NOT digoxin - ineffective)",
        "MAT vs WAP: MAT rate >100, WAP rate <100",
        "Fix hypoxia: Oxygen, bronchodilators, treat respiratory infection",
      ],
    },
  },
  {
    id: 9,
    type: "matrix",
    question:
      "Classify each medication by its appropriate use in arrhythmia management:",
    matrixOptions: {
      rows: ["Adenosine", "Atropine", "Amiodarone", "Diltiazem"],
      columns: [
        "Rate Control",
        "Rhythm Conversion",
        "Bradycardia",
        "SVT Treatment",
      ],
      correctAnswers: {
        Adenosine: "SVT Treatment",
        Atropine: "Bradycardia",
        Amiodarone: "Rhythm Conversion",
        Diltiazem: "Rate Control",
      },
    },
    rationale: {
      correct:
        "Excellent! You understand the specific uses of each antiarrhythmic medication.",
      incorrect:
        "Review cardiac medication classifications and their primary uses.",
      keyPoints: [
        "Adenosine: First-line for stable SVT, 6mg rapid IV push, very short half-life",
        "Atropine: Symptomatic bradycardia, 0.5mg IV, blocks vagal effects",
        "Amiodarone: Rhythm control for A-fib, V-tach, works on multiple channels",
        "Diltiazem: Calcium channel blocker for rate control in A-fib/flutter",
        "Know onset, dose, and key side effects for NCLEX",
      ],
    },
  },
  {
    id: 10,
    type: "multiple-choice",
    scenario:
      "A 58-year-old client admitted with chest pain has the following ECG changes: ST elevation in leads II, III, and aVF.",
    question:
      "Which coronary artery is most likely affected, and what complication should the nurse monitor for?",
    options: [
      "Left anterior descending artery; monitor for heart failure",
      "Right coronary artery; monitor for bradycardia and heart blocks",
      "Circumflex artery; monitor for hypertension",
      "Left main coronary artery; monitor for tachycardia",
    ],
    correctAnswer:
      "Right coronary artery; monitor for bradycardia and heart blocks",
    rationale: {
      correct:
        "Excellent! Inferior MI (leads II, III, aVF) involves RCA and commonly causes bradycardia/blocks due to AV node involvement.",
      incorrect:
        "Review MI localization by ECG leads. Inferior leads (II, III, aVF) = RCA = risk for conduction problems.",
      keyPoints: [
        "Inferior MI: Leads II, III, aVF show ST elevation",
        "Right coronary artery (RCA) supplies: Inferior wall and AV node",
        "Common complications: Bradycardia, AV blocks (first, second, third degree)",
        "Anterior MI (V3-V4): LAD → heart failure risk",
        "Lateral MI (I, aVL, V5-V6): Circumflex",
        "Always check right-sided leads (V4R) for RV involvement in inferior MI",
      ],
    },
  },
];

export function EcgPracticeTest() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [showRationale, setShowRationale] = useState<{
    [key: number]: boolean;
  }>({});
  const [testComplete, setTestComplete] = useState(false);

  const question = questions[currentQuestion];
  const userAnswer = answers[currentQuestion];
  const rationaleVisible = showRationale[currentQuestion];

  const handleMultipleChoice = (option: string) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const handleSelectAll = (option: string) => {
    const current = (answers[currentQuestion] as string[]) || [];
    const updated = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];
    setAnswers({ ...answers, [currentQuestion]: updated });
  };

  const handleDropdown = (key: string, value: string) => {
    const current =
      (answers[currentQuestion] as { [key: string]: string }) || {};
    setAnswers({ ...answers, [currentQuestion]: { ...current, [key]: value } });
  };

  const handleMatrix = (row: string, column: string) => {
    const current =
      (answers[currentQuestion] as { [key: string]: string }) || {};
    setAnswers({
      ...answers,
      [currentQuestion]: { ...current, [row]: column },
    });
  };

  const handleOrdering = (fromIndex: number, toIndex: number) => {
    const current =
      (answers[currentQuestion] as number[]) ||
      question.orderingItems!.map((_, i) => i);
    const updated = [...current];
    const [moved] = updated.splice(fromIndex, 1);
    updated.splice(toIndex, 0, moved);
    setAnswers({ ...answers, [currentQuestion]: updated });
  };

  const checkAnswer = () => {
    setShowRationale({ ...showRationale, [currentQuestion]: true });
  };

  const isAnswerCorrect = () => {
    if (!userAnswer) return false;

    switch (question.type) {
      case "multiple-choice":
        return userAnswer === question.correctAnswer;
      case "select-all":
        const correctSet = new Set(question.correctAnswer as string[]);
        const userSet = new Set(userAnswer as string[]);
        return (
          correctSet.size === userSet.size &&
          [...correctSet].every((item) => userSet.has(item))
        );
      case "dropdown":
        return Object.keys(question.dropdownAnswers!).every(
          (key) => userAnswer[key] === question.dropdownAnswers![key],
        );
      case "matrix":
        return Object.keys(question.matrixOptions!.correctAnswers).every(
          (key) =>
            userAnswer[key] === question.matrixOptions!.correctAnswers[key],
        );
      case "ordering":
        return (
          JSON.stringify(userAnswer) === JSON.stringify(question.correctOrder)
        );
      default:
        return false;
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q, idx) => {
      const ans = answers[idx];
      if (!ans) return;

      let isCorrect = false;
      switch (q.type) {
        case "multiple-choice":
          isCorrect = ans === q.correctAnswer;
          break;
        case "select-all":
          const correctSet = new Set(q.correctAnswer as string[]);
          const userSet = new Set(ans as string[]);
          isCorrect =
            correctSet.size === userSet.size &&
            [...correctSet].every((item) => userSet.has(item));
          break;
        case "dropdown":
          isCorrect = Object.keys(q.dropdownAnswers!).every(
            (key) => ans[key] === q.dropdownAnswers![key],
          );
          break;
        case "matrix":
          isCorrect = Object.keys(q.matrixOptions!.correctAnswers).every(
            (key) => ans[key] === q.matrixOptions!.correctAnswers[key],
          );
          break;
        case "ordering":
          isCorrect = JSON.stringify(ans) === JSON.stringify(q.correctOrder);
          break;
      }
      if (isCorrect) correct++;
    });
    return {
      correct,
      total: questions.length,
      percentage: (correct / questions.length) * 100,
    };
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setTestComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowRationale({});
    setTestComplete(false);
  };

  if (testComplete) {
    const score = calculateScore();
    return (
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <Trophy className="size-16 text-yellow-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Test Complete!
            </h2>
            <p className="text-gray-600">
              Great job completing the practice test
            </p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">
                {score.percentage.toFixed(0)}%
              </div>
              <p className="text-gray-700 text-lg">
                {score.correct} out of {score.total} questions correct
              </p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            {score.percentage >= 90 && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                <p className="text-green-900 font-medium">
                  🎉 Excellent! You have a strong understanding of ECG
                  interpretation.
                </p>
              </div>
            )}
            {score.percentage >= 70 && score.percentage < 90 && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                <p className="text-blue-900 font-medium">
                  👍 Good job! Review the questions you missed to strengthen
                  your knowledge.
                </p>
              </div>
            )}
            {score.percentage < 70 && (
              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                <p className="text-orange-900 font-medium">
                  📚 Keep studying! Review the rationales and try the test
                  again.
                </p>
              </div>
            )}
          </div>

          <div className="flex gap-4">
            <button
              onClick={resetTest}
              className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RotateCcw className="size-5" />
              Retake Test
            </button>
            <button
              onClick={() => router.push("/profile/ecg-mastery")}
              className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors"
            >
              Exit to Topics
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              ECG Practice Test
            </h2>
            <p className="text-gray-600 text-sm mt-1">
              Question {currentQuestion + 1} of {questions.length}
            </p>
          </div>
          <button
            onClick={() => router.push("/profile/ecg-mastery")}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Exit Test
          </button>
        </div>

        {/* Progress Bar */}
        <div className="mb-6">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* Question Type Badge */}
        <div className="mb-4">
          <span className="inline-block bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
            {question.type === "multiple-choice" && "Multiple Choice"}
            {question.type === "select-all" && "Select All That Apply"}
            {question.type === "dropdown" && "Drop-Down Cloze"}
            {question.type === "matrix" && "Matrix/Grid"}
            {question.type === "ordering" && "Drag & Drop Ordering"}
          </span>
        </div>

        {/* Scenario */}
        {question.scenario && (
          <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded">
            <p className="text-gray-800">{question.scenario}</p>
          </div>
        )}

        {/* ECG Strip Simulation */}
        {question.stripType && (
          <div className="mb-6 bg-gray-900 p-4 rounded-lg">
            <ECGStrip type={question.stripType} />
          </div>
        )}

        {/* Question */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {question.question}
          </h3>

          {/* Multiple Choice */}
          {question.type === "multiple-choice" && (
            <div className="space-y-3">
              {question.options!.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleMultipleChoice(option)}
                  disabled={rationaleVisible}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                    userAnswer === option
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  } ${rationaleVisible ? "cursor-not-allowed opacity-75" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        userAnswer === option
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {userAnswer === option && (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Select All That Apply */}
          {question.type === "select-all" && (
            <div className="space-y-3">
              <p className="text-sm text-gray-600 mb-3 italic">
                Select all that apply. Multiple answers may be correct.
              </p>
              {question.options!.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectAll(option)}
                  disabled={rationaleVisible}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                    (userAnswer as string[])?.includes(option)
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  } ${rationaleVisible ? "cursor-not-allowed opacity-75" : ""}`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                        (userAnswer as string[])?.includes(option)
                          ? "border-blue-500 bg-blue-500"
                          : "border-gray-300"
                      }`}
                    >
                      {(userAnswer as string[])?.includes(option) && (
                        <CheckCircle className="size-4 text-white" />
                      )}
                    </div>
                    <span className="text-gray-800">{option}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Dropdown/Cloze */}
          {question.type === "dropdown" && (
            <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
              {Object.keys(question.dropdownOptions!).map((key) => (
                <div key={key} className="flex items-center gap-4">
                  <label className="font-medium text-gray-700 min-w-[120px] capitalize">
                    {key}:
                  </label>
                  <select
                    value={(userAnswer as any)?.[key] || ""}
                    onChange={(e) => handleDropdown(key, e.target.value)}
                    disabled={rationaleVisible}
                    className="flex-1 p-2 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none disabled:opacity-75 disabled:cursor-not-allowed"
                  >
                    <option value="">Select an option...</option>
                    {question.dropdownOptions![key].map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}

          {/* Matrix/Grid */}
          {question.type === "matrix" && (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 p-3 bg-gray-100"></th>
                    {question.matrixOptions!.columns.map((col) => (
                      <th
                        key={col}
                        className="border border-gray-300 p-3 bg-gray-100 text-sm font-semibold text-gray-700"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {question.matrixOptions!.rows.map((row) => (
                    <tr key={row}>
                      <td className="border border-gray-300 p-3 bg-gray-50 font-medium text-sm text-gray-700">
                        {row}
                      </td>
                      {question.matrixOptions!.columns.map((col) => (
                        <td
                          key={col}
                          className="border border-gray-300 p-3 text-center"
                        >
                          <input
                            type="radio"
                            name={row}
                            checked={(userAnswer as any)?.[row] === col}
                            onChange={() => handleMatrix(row, col)}
                            disabled={rationaleVisible}
                            className="w-4 h-4 text-blue-600 disabled:opacity-75 disabled:cursor-not-allowed"
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Ordering */}
          {question.type === "ordering" && (
            <div className="space-y-3">
              <p className="text-sm text-gray-600 mb-3 italic">
                Drag items to reorder them from first to last priority.
              </p>
              {(userAnswer || question.orderingItems!.map((_, i) => i)).map(
                (itemIdx: number, position: number) => {
                  const item = question.orderingItems![itemIdx];
                  return (
                    <div
                      key={position}
                      className="bg-white border-2 border-gray-200 rounded-lg p-4"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                          {position + 1}
                        </div>
                        <p className="flex-1 text-gray-800">{item}</p>
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              handleOrdering(
                                position,
                                Math.max(0, position - 1),
                              )
                            }
                            disabled={position === 0 || rationaleVisible}
                            className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            ↑
                          </button>
                          <button
                            onClick={() =>
                              handleOrdering(
                                position,
                                Math.min(
                                  question.orderingItems!.length - 1,
                                  position + 1,
                                ),
                              )
                            }
                            disabled={
                              position === question.orderingItems!.length - 1 ||
                              rationaleVisible
                            }
                            className="px-3 py-1 text-sm bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            ↓
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                },
              )}
            </div>
          )}
        </div>

        {/* Submit Answer Button */}
        {!rationaleVisible && (
          <button
            onClick={checkAnswer}
            disabled={!userAnswer}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed mb-6"
          >
            Submit Answer
          </button>
        )}

        {/* Rationale */}
        {rationaleVisible && (
          <div className="mb-6">
            <div
              className={`border-l-4 p-6 rounded-lg ${
                isAnswerCorrect()
                  ? "bg-green-50 border-green-500"
                  : "bg-red-50 border-red-500"
              }`}
            >
              <div className="flex items-start gap-3 mb-4">
                {isAnswerCorrect() ? (
                  <CheckCircle className="size-6 text-green-600 shrink-0 mt-1" />
                ) : (
                  <XCircle className="size-6 text-red-600 shrink-0 mt-1" />
                )}
                <div className="flex-1">
                  <h4 className="font-bold text-lg mb-2">
                    {isAnswerCorrect() ? "Correct!" : "Incorrect"}
                  </h4>
                  <p className="text-gray-800 mb-4">
                    {isAnswerCorrect()
                      ? question.rationale.correct
                      : question.rationale.incorrect}
                  </p>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <AlertCircle className="size-5 text-blue-600" />
                  <h5 className="font-semibold text-gray-900">
                    Key Points to Remember:
                  </h5>
                </div>
                <ul className="space-y-2">
                  {question.rationale.keyPoints.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="text-blue-600 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6 border-t border-gray-200">
          <button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ArrowLeft className="size-4" />
            Previous
          </button>

          <div className="text-sm text-gray-600">
            {Object.keys(answers).length} of {questions.length} answered
          </div>

          <button
            onClick={handleNext}
            disabled={!rationaleVisible}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            {currentQuestion === questions.length - 1 ? "Finish Test" : "Next"}
            <ArrowRight className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// ECG Strip Simulation Component
function ECGStrip({ type }: { type: string }) {
  return (
    <div className="relative">
      <svg
        width="100%"
        height="120"
        viewBox="0 0 800 120"
        className="bg-gray-900"
      >
        {/* Grid */}
        <defs>
          <pattern
            id="smallGrid"
            width="5"
            height="5"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 5 0 L 0 0 0 5"
              fill="none"
              stroke="#1a472a"
              strokeWidth="0.5"
            />
          </pattern>
          <pattern
            id="grid"
            width="25"
            height="25"
            patternUnits="userSpaceOnUse"
          >
            <rect width="25" height="25" fill="url(#smallGrid)" />
            <path
              d="M 25 0 L 0 0 0 25"
              fill="none"
              stroke="#1a472a"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* ECG Waveform */}
        <g transform="translate(0, 60)">
          {type === "NSR" && <NSRWaveform />}
          {type === "SVT" && <SVTWaveform />}
        </g>
      </svg>
      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-green-400 text-xs font-mono px-2 py-1 rounded">
        Speed: 25mm/s
      </div>
    </div>
  );
}

function NSRWaveform() {
  const complexes = [];
  for (let i = 0; i < 5; i++) {
    const x = i * 150 + 50;
    complexes.push(
      <g key={i} transform={`translate(${x}, 0)`}>
        {/* P wave */}
        <path
          d="M 0 0 Q 5 -8 10 0"
          stroke="#00ff00"
          strokeWidth="2"
          fill="none"
        />
        {/* PR segment */}
        <path d="M 10 0 L 30 0" stroke="#00ff00" strokeWidth="2" fill="none" />
        {/* QRS complex */}
        <path
          d="M 30 0 L 35 5 L 40 -35 L 45 10 L 50 0"
          stroke="#00ff00"
          strokeWidth="2"
          fill="none"
        />
        {/* ST segment */}
        <path d="M 50 0 L 65 0" stroke="#00ff00" strokeWidth="2" fill="none" />
        {/* T wave */}
        <path
          d="M 65 0 Q 75 -12 85 0"
          stroke="#00ff00"
          strokeWidth="2"
          fill="none"
        />
        {/* Baseline */}
        <path d="M 85 0 L 150 0" stroke="#00ff00" strokeWidth="2" fill="none" />
      </g>,
    );
  }
  return <>{complexes}</>;
}

function SVTWaveform() {
  const complexes = [];
  for (let i = 0; i < 10; i++) {
    const x = i * 75 + 20;
    complexes.push(
      <g key={i} transform={`translate(${x}, 0)`}>
        {/* Fast narrow QRS without visible P waves */}
        <path
          d="M 0 0 L 5 3 L 10 -30 L 15 8 L 20 0"
          stroke="#00ff00"
          strokeWidth="2"
          fill="none"
        />
        {/* T wave merged with next QRS */}
        <path
          d="M 20 0 Q 30 -8 40 0"
          stroke="#00ff00"
          strokeWidth="2"
          fill="none"
        />
      </g>,
    );
  }
  return <>{complexes}</>;
}
