import AvailableFlashcards from "@/components/ui/user-dashboard-pages/flash-cards/high-yield-flashcards/AvailableFlashcards";

export const flashTabsData = [
    {
        id: "Flashcards",
        label: "2500 Flashcards Available   ",
        imageSrc: "/assets/user-dashboard-images/flash-card/cards-avaiable.png",
        component: <AvailableFlashcards />
    },
    {
        id: "Performance",
        label: "Performance",
        imageSrc: "/assets/user-dashboard-images/flash-card/performance.png",
        component: <div>Performance Content</div>
    },
    {
        id: "Previous Exam",
        label: "Previous Exam",
        imageSrc: "/assets/user-dashboard-images/flash-card/previous-exam.png",
        component: <div>Previous Exam Content</div>
    }
];


export const flashcardSections = [
    {
        title: "Flashcard Categories",
        total: 800,
        categories: [
            [
                { name: "Endocrine", count: 297 },
                { name: "Endocrine", count: 297 },
                { name: "Endocrine", count: 297 },
                { name: "Endocrine", count: 297 },

            ],
            [
                { name: "Cardiovascular", count: 297 },
                { name: "Hematology", count: 297 },
                { name: "Cardiovascular", count: 297 },
                { name: "Endocrine", count: 297 },

            ],
            [
                { name: "Respiratory", count: 297 },
                { name: "Endocrine", count: 297 },
                { name: "Neurology", count: 297 },
                { name: "Neurology", count: 297 },

            ]

        ],
    },
    {
        title: "All Pharmacology",
        total: 800,
        categories: [
            [
                { name: "Endocrine", count: 297 },
                { name: "Endocrine", count: 297 },
                { name: "Endocrine", count: 297 },
                { name: "Endocrine", count: 297 },

            ],
            [
                { name: "Cardiovascular", count: 297 },
                { name: "Hematology", count: 297 },
                { name: "Cardiovascular", count: 297 },
                { name: "Endocrine", count: 297 },

            ],
            [
                { name: "Respiratory", count: 297 },
                { name: "Endocrine", count: 297 },
                { name: "Neurology", count: 297 },
                { name: "Neurology", count: 297 },

            ]

        ],
    },
];


