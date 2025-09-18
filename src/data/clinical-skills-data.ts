


const getClinicalSkillsData = [
    {
        id: '1',
        title: "Basic Skills",
        token: 20,
        logo: "❤️",
        progress: 87,
    },
    {
        id: '2',
        title: "Gastrointestinal",
        token: 15,
        logo: "🫃",
        progress: 65,
    },
    {
        id: '3',
        title: "Genitourinary",
        token: 12,
        logo: "⚡",
        progress: 50,
    },
    {
        id: '4',
        title: "Infectious Diseases",
        token: 25,
        logo: "🦠",
        progress: 72,
    },
    {
        id: '5',
        title: "Emergency Care",
        token: 18,
        logo: "🚑",
        progress: 90,
    },
    {
        id: '6',
        title: "Neurological",
        token: 22,
        logo: "🧠",
        progress: 60,
    },
    {
        id: '2',
        title: "Gastrointestinal",
        token: 15,
        logo: "🫃",
        progress: 65,
    },
    {
        id: '3',
        title: "Genitourinary",
        token: 12,
        logo: "⚡",
        progress: 50,
    },
    {
        id: '4',
        title: "Infectious Diseases",
        token: 25,
        logo: "🦠",
        progress: 72,
    },
    {
        id: '5',
        title: "Emergency Care",
        token: 18,
        logo: "🚑",
        progress: 90,
    },
    {
        id: '6',
        title: "Neurological",
        token: 22,
        logo: "🧠",
        progress: 60,
    },
];

const Skills = [
    {
        id: 'skill-1',
        categoryId: '1',
        name: 'Blood Pressure Measurement',
        description: 'Accurately measure systolic and diastolic blood pressure using both manual and automated methods.Accurately measure systolic and diastolic blood pressure using both manual and automated methods.Accurately measure systolic and diastolic blood pressure using both manual and automated methods.Accurately measure systolic and diastolic blood pressure using both manual and automated methods.Accurately measure systolic and diastolic blood pressure using both manual and automated methods.',
        duration: { min: 5, max: 10 },
        progress: { step: 8, completed: 4 },
        status: 'not_started',
        likes: 3
    },
    {
        id: 'skill-2',
        categoryId: '1',
        name: 'Temperature Measurement',
        description: 'Measure body temperature using various methods including oral, tympanic, and axillary.',
        duration: { min: 3, max: 5 },
        progress: { step: 6, completed: 3 },
        status: 'in_progress',
        likes: 5
    },
    {
        id: 'skill-3',
        categoryId: '1',
        name: 'Pulse Oximetry',
        description: 'Monitor oxygen saturation levels using pulse oximeter devices.',
        duration: { min: 2, max: 4 },
        progress: { step: 4, completed: 4 },
        status: 'completed',
        likes: 7
    },
    {
        id: 'skill-4',
        categoryId: '1',
        name: 'Pulse Oximetry',
        description: 'Monitor oxygen saturation levels using pulse oximeter devices.',
        duration: { min: 2, max: 4 },
        progress: { step: 4, completed: 4 },
        status: 'in_progress',
        likes: 7
    },
    {
        id: 'skill-5',
        categoryId: '1',
        name: 'Pulse Oximetry',
        description: 'Monitor oxygen saturation levels using pulse oximeter devices.',
        duration: { min: 2, max: 4 },
        progress: { step: 4, completed: 4 },
        status: 'in_progress',
        likes: 7
    },
    {
        id: 'skill-4',
        categoryId: '1',
        name: 'Pulse Oximetry',
        description: 'Monitor oxygen saturation levels using pulse oximeter devices.',
        duration: { min: 2, max: 4 },
        progress: { step: 4, completed: 4 },
        status: 'in_progress',
        likes: 7
    },
    {
        id: 'skill-5',
        categoryId: '1',
        name: 'Pulse Oximetry',
        description: 'Monitor oxygen saturation levels using pulse oximeter devices.',
        duration: { min: 2, max: 4 },
        progress: { step: 4, completed: 4 },
        status: 'in_progress',
        likes: 7
    },
    {
        id: 'skill-3',
        categoryId: '1',
        name: 'Pulse Oximetry',
        description: 'Monitor oxygen saturation levels using pulse oximeter devices.',
        duration: { min: 2, max: 4 },
        progress: { step: 4, completed: 4 },
        status: 'completed',
        likes: 7
    },
    {
        id: 'skill-4',
        categoryId: '1',
        name: 'Pulse Oximetry',
        description: 'Monitor oxygen saturation levels using pulse oximeter devices.',
        duration: { min: 2, max: 4 },
        progress: { step: 4, completed: 4 },
        status: 'in_progress',
        likes: 7
    },
    {
        id: 'skill-5',
        categoryId: '1',
        name: 'Pulse Oximetry',
        description: 'Monitor oxygen saturation levels using pulse oximeter devices.',
        duration: { min: 2, max: 4 },
        progress: { step: 4, completed: 4 },
        status: 'in_progress',
        likes: 7
    }
];

export const getGroupedSkillsByCategory = (categoryId: string) => {
    const allSkillsByCategory = Skills.filter((skill) => skill.categoryId === categoryId);

    return allSkillsByCategory.reduce((acc, skill) => {
        if (!acc[skill.status]) acc[skill.status] = [];
        acc[skill.status].push(skill);
        return acc;
    }, {} as Record<string, typeof Skills[number][]>);
};




export const clinicalSkils = {
    getClinicalSkillsData,
    getGroupedSkillsByCategory

}