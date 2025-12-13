interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  popular: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic",
    price: "19",
    description: "Perfect for getting started with essential tools",
    features: [
      "Access to Nurse Nia AI Chatbot",
      "1,000 NCLEX practice questions",
      "Basic flashcard library",
      "Community access",
      "Clinical calculators",
      "Free templates download",
      "Smart notepad",
    ],
    buttonText: "Get Started",
    popular: false,
  },
  {
    title: "Pro",
    price: "39",
    description: "Complete access for serious nursing students",
    features: [
      "Everything in Basic, plus:",
      "Unlimited AI tutoring sessions",
      "10,000+ NCLEX practice questions",
      "2 Full-length practice exams",
      "AI-generated flashcards",
      "Care plan generator",
      "Drug card generator",
      "All study notes & topics",
      "Interactive body systems",
      "Priority support",
    ],
    buttonText: "Start Free Trial",
    popular: true,
  },
  {
    title: "Premium",
    price: "59",
    description: "Ultimate package with exclusive features",
    features: [
      "Everything in Pro, plus:",
      "Personalized study plans",
      "1-on-1 mentorship sessions",
      "Advanced analytics & insights",
      "Custom group creation",
      "Unlimited document uploads",
      "Early access to new features",
      "Dedicated success coach",
      "Lifetime resource library",
    ],
    buttonText: "Get Premium",
    popular: false,
  },
];

export default pricingPlans;
