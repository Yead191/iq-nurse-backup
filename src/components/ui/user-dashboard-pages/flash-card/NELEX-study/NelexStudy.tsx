"use client";
import { useState } from 'react';
import { Button } from 'antd';
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import { IoMdCard } from "react-icons/io";
import Link from 'next/link';

const studySubjects = [
    {
        id: 1,
        title: 'Management of Care',
        description: 'Client plan of care, advocacy, collaboration, ethics, supervision, and prioritization.',
        cards: 120,
        percentage: '17-23%',
    },
    {
        id: 2,
        title: 'Safety & Infection Control',
        description: 'Standard precautions, emergency response, client safety, and handling of hazardous materials.',
        cards: 85,
        percentage: '9-15%'
    },
    {
        id: 3,
        title: 'Health Promotion & Maintenance',
        description: 'Human Growth & development, aging, risk factors, lifestyle choices, and preventative practices.',
        cards: 120,
        percentage: '17-23%'
    },
    {
        id: 4,
        title: 'Psychosocial Integrity',
        description: 'Crisis intervention, abuse/neglect, behavioral management, cultural awareness, and mental health.',
        cards: 90,
        percentage: '6-12%'
    },
    {
        id: 5,
        title: 'Fundamentals',
        description: 'Client plan of care, advocacy, collaboration, ethics, supervision, and prioritization.',
        cards: 120,
        percentage: '17-23%'
    },
    {
        id: 6,
        title: 'Bed Care & Comfort',
        description: 'Assistive devices, elimination, mobility, nutrition, hydration, and hygiene.',
        cards: 70,
        percentage: '6-12%'
    },
    {
        id: 7,
        title: 'Pharmacological Therapies',
        description: 'Medication administration, side effects, contraindications, and parenteral therapies.',
        cards: 110,
        percentage: '12-18%'
    },
    {
        id: 8,
        title: 'Reeducation of Risk Potential',
        description: 'Vital signs, diagnostic testing, lab values, and complication prevention.',
        cards: 80,
        percentage: '9-15%'
    },
    {
        id: 9,
        title: 'Physiological Adaption',
        description: 'Body system alterations, fluid/ electrolyte imbalances, pathophysiology, and emergency care.',
        cards: 100,
        percentage: '17-23%'
    },
    {
        id: 10,
        title: 'Mental Health',
        description: 'Assistive devices, elimination, mobility, nutrition, hydration, and hygiene.',
        cards: 70,
        percentage: '6-12%'
    },
    {
        id: 11,
        title: 'Health Assessment',
        description: 'Standard precautions, emergency response, client safety, and handling of hazardous materials.',
        cards: 85,
        percentage: '9-15%'
    },
    {
        id: 12,
        title: 'Maternity/OB',
        description: 'Human Growth & development, aging, risk factors, lifestyle choices, and preventative practices.',
        cards: 100,
        percentage: '9-15%'
    },
    {
        id: 13,
        title: 'Pediatrics',
        description: 'Crisis intervention, abuse/neglect, behavioral management, cultural awareness, and mental health.',
        cards: 90,
        percentage: '6-12%'
    },
    {
        id: 14,
        title: 'Medical Surgical',
        description: 'Medication administration, side effects, contraindications, and parenteral therapies.',
        cards: 110,
        percentage: '12-18%'
    },
    {
        id: 15,
        title: 'Critical Care',
        description: 'Vital signs, diagnostic testing, lab values, and complication prevention.',
        cards: 80,
        percentage: '9-15%'
    },
    {
        id: 16,
        title: 'Pharmacology',
        description: 'Body system alterations, fluid/ electrolyte imbalances, pathophysiology, and emergency care.',
        cards: 100,
        percentage: '17-23%'
    }
];

const NclexStudy = () => {
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const toggleSubject = (subjectId: any) => {
        setSelectedSubjects((prev: any) => {
            if (prev.includes(subjectId)) {
                return prev.filter((id: number) => id !== subjectId);
            } else {
                return [...prev, subjectId];
            }
        });
    };

    const handleStartFlashcards = () => {
        if (selectedSubjects.length > 0) {
            console.log('Starting flashcards for subjects:', selectedSubjects);
            // Add your navigation logic here
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <PageNavbar
                icon={<IoMdCard className=" text-black" />}
                title="Flashcards"
                subtitle="Master nursing concepts with intelligent falscards and spaced repetition"
                isAiEnhanced={false}
            />

            <div className="max-w-7xl mx-auto p-6 relative">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-blue-800 mb-2">NCLEX Study Subjects</h1>
                    <p className="text-gray-600">Choose a subject to start studying with our pre-made flashcards</p>
                </div>

                {/* Subjects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-8">
                    {studySubjects.map((subject: any) => (
                        <div
                            key={subject.id}
                            className={`
                                relative p-4 rounded-lg border border-gray-100 cursor-pointer transition-all duration-200 hover:shadow-md
                                ${(selectedSubjects as number[]).includes(subject.id)
                                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200'
                                    : `${subject.color} hover:border-gray-300`
                                }
                            `}
                            onClick={() => toggleSubject(subject.id)}
                        >


                            {/* Content */}
                            <div className="pr-8">
                                <h3 className="font-semibold text-gray-900 mb-2 text-sm leading-tight">
                                    {subject.title}
                                </h3>
                                <p className="text-xs text-gray-600 mb-3 leading-relaxed">
                                    {subject.description}
                                </p>
                                <div className="flex items-center text-xs text-gray-500">
                                    <IoMdCard className="mr-1" />
                                    <span>{subject.cards} cards • {subject.percentage} of NCLEX</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Start Button */}
                <div className="text-center flex justify-center items-center pr-8 md:pr-0 w-full fixed md:static bottom-28">
                    <Link href='/profile/flash-cards/high-yield-flashcards/create-test'>
                        <Button

                            size="large"
                            disabled={selectedSubjects.length === 0}
                            onClick={handleStartFlashcards}
                            className="px-8 py-2 h-auto !bg-primary !text-white disabled:bg-gray-400"
                        >
                            Start Flashcard({selectedSubjects.length} Selected)
                        </Button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default NclexStudy;