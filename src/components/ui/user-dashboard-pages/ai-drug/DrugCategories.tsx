import { Empty } from "antd";
import { Settings, Target, AlertTriangle, Clipboard, BookOpen, Pill } from "lucide-react";

export default function DrugCategories({
    selected,
    selectedCategoryId,
    setSelectedCategoryId,
}: {
    selected: string | null;
    selectedCategoryId: string | null;
    setSelectedCategoryId: (categoryId: string | null) => void;
}) {
    if (!selected)
        return (
            <div className="flex justify-center items-center h-[calc(100vh-100px)]">
                <Empty description="Please select a drug to view information" />
            </div>
        );

    // Sample drug data - replace with actual data
    const drugInfo = {
        name: "Lisinopril",
        brandNames: "Prinvil ®, Zestril",
        category: "ACE Inhibitor",
    };

    const sections = [
        { icon: Settings, label: "Mechanism of Action", key: "mechanism" },
        { icon: Target, label: "Indications", key: "indications" },
        { icon: AlertTriangle, label: "Side Effects & Adverse Reactions", key: "sideEffects" },
        { icon: Clipboard, label: "Nursing Considerations", key: "nursing" },
        { icon: BookOpen, label: "Patient Education", key: "education" },
        { icon: Pill, label: "Dosing & Administration", key: "dosing" },
    ];

    return (
        <div className="max-w-6xl mx-auto relative p-6 md:h-[calc(100vh-105px)] h-[calc(100vh-100px)] overflow-y-auto md:shadow-[4px_4px_43px_0px_#00000026]">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{drugInfo.name}</h1>
                <p className="text-gray-600 mb-4">{drugInfo.brandNames}</p>
                <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                    {drugInfo.category}
                </span>
            </div>

            {/* Sections */}
            <div >
                {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                        <button
                            key={section.key}
                            className="w-full flex items-center gap-4 p-2 border-b py-3 border-gray-200 cursor-pointer hover:bg-gray-100 transition-all duration-200 text-left"
                            onClick={() => setSelectedCategoryId(section.key)}
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-gray-900 font-medium">{section.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Footer */}

            <div className=" bg-white pt-10 pb-3 py-3">
                <p className="text-sm text-gray-700 text-center px-4">
                    ⚠️ Always cross reference with current drug references and facility protocols.
                    <br />
                    This AI-generated content is for educational purposes only
                </p>
            </div>
        </div>
    );
}