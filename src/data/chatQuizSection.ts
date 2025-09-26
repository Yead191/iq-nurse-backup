 
 interface QuizOption {
   id: string;
   text: string;
 }
 
 export interface QuizQuestion {
   id: number;
   question: string;
   options: QuizOption[];
 }
 export const quizData: QuizQuestion[] = [
    {
      id: 1,
      question: "Which of the following is a selective beta-1 blocker?",
      options: [
        { id: 'A', text: 'Metoprolol' },
        { id: 'B', text: 'Propranolol' },
        { id: 'C', text: 'Atenolol' },
        { id: 'D', text: 'Carvedilol' }
      ]
    },
    {
      id: 2,
      question: "What is the primary mechanism of action of ACE inhibitors?",
      options: [
        { id: 'A', text: 'Block calcium channels' },
        { id: 'B', text: 'Inhibit angiotensin-converting enzyme' },
        { id: 'C', text: 'Block beta receptors' },
        { id: 'D', text: 'Inhibit sodium channels' }
      ]
    },
    {
      id: 3,
      question: "Which drug is commonly used for treating atrial fibrillation?",
      options: [
        { id: 'A', text: 'Digoxin' },
        { id: 'B', text: 'Amiodarone' },
        { id: 'C', text: 'Warfarin' },
        { id: 'D', text: 'All of the above' }
      ]
    },
    {
      id: 4,
      question: "What is the antidote for warfarin overdose?",
      options: [
        { id: 'A', text: 'Vitamin K' },
        { id: 'B', text: 'Protamine sulfate' },
        { id: 'C', text: 'Fresh frozen plasma' },
        { id: 'D', text: 'Both A and C' }
      ]
    }
  ];
