import { Heart, Rocket, Users, Sparkles, Globe, Lock } from 'lucide-react';

const coreValuesData = [
    {
        title: "Student-Centered",
        description: "Every decision we make starts with one question: How does this help nursing students succeed? Your success is our success.",
        icon: Heart,
        iconColor: "#3b82f6", // Blue
        bgColor: "bg-blue-500/10"
    },
    {
        title: "Innovation",
        description: "We constantly push boundaries, leveraging the latest AI technology to create tools that make learning more effective and engaging.",
        icon: Rocket,
        iconColor: "#f43f5e", // Pink/Red
        bgColor: "bg-pink-500/10"
    },
    {
        title: "Community",
        description: "We believe in the power of connection. Together, nursing students can achieve more, learn faster, and support each other.",
        icon: Users,
        iconColor: "#eab308", // Yellow
        bgColor: "bg-yellow-500/10"
    },
    {
        title: "Excellence",
        description: "We're committed to delivering the highest quality educational content and tools that meet the rigorous standards of nursing education.",
        icon: Sparkles,
        iconColor: "#3b82f6", // Blue
        bgColor: "bg-blue-500/10"
    },
    {
        title: "Accessibility",
        description: "Quality nursing education should be available to everyone. We work to make our platform accessible and affordable for all students.",
        icon: Globe,
        iconColor: "#06b6d4", // Cyan
        bgColor: "bg-cyan-500/10"
    },
    {
        title: "Integrity",
        description: "We maintain the highest ethical standards, ensuring accuracy, privacy, and transparency in everything we do.",
        icon: Lock,
        iconColor: "#f59e0b", // Amber/Orange
        bgColor: "bg-amber-500/10"
    }
];

const statsData = [
    {
        value: "50K+",
        label1: "Active Students",
        label2: "Worldwide",
        highlight: false
    },
    {
        value: "98%",
        label1: "NCLEX First-Time Pass",
        label2: "Rate",
        highlight: true
    },
    {
        value: "10M+",
        label1: "Questions Answered",
        label2: "by Nurse Nia",
        highlight: false
    },
    {
        value: "500K+",
        label1: "Study Materials",
        label2: "Created",
        highlight: false
    }
];

export { coreValuesData, statsData };