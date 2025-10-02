import React from "react";
import { AlertTriangle, Info, Heart, ClipboardList } from "lucide-react";

function DrugDetails({ selectedCategoryId, drugId }: { selectedCategoryId: string | null, drugId: string }) {

    const drugInfo = {
        name: "Lisinopril",
        brandNames: "Prinvil ®, Zestril",
        category: "ACE Inhibitor",
    };
    return (
        <div className=" mx-auto p-6 space-y-6 md:h-[calc(100vh-105px)] overflow-y-auto h-[calc(100vh-100px)] md:shadow-[4px_4px_35px_0px_#00000021]" >

            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{drugInfo.name}</h1>
                <p className="text-gray-600 mb-4">{drugInfo.brandNames}</p>
                <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium">
                    {drugInfo.category}
                </span>
            </div>
            {/* Mechanism of Action */}
            <section>
                <h2 className="flex items-center text-lg font-semibold mb-2  p-2 bg-[#0000000A]">
                    <Info className="w-5 h-5 mr-2 text-blue-600" />
                    Mechanism of Action
                </h2>
                <p className="text-gray-700 text-sm leading-relaxed">
                    Lisinopril inhibits angiotensin-converting enzyme (ACE), preventing
                    the conversion of angiotensin I to angiotensin II. This results in
                    decreased vasoconstriction, reduced aldosterone secretion, and lower
                    blood pressure. The medication also reduces afterload and preload,
                    decreasing cardiac workload.
                </p>
            </section>

            {/* Indications */}
            <section>
                <h2 className="flex items-center text-lg font-semibold mb-2  p-2 bg-[#0000000A]">
                    <Heart className="w-5 h-5 mr-2 text-pink-600" />
                    Indications
                </h2>
                <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                    <li>Hypertension (primary indication)</li>
                    <li>Heart failure with reduced ejection fraction</li>
                    <li>Post-myocardial infarction (within 24 hours)</li>
                    <li>Diabetic nephropathy</li>
                    <li>Chronic kidney disease with proteinuria</li>
                </ul>
            </section>

            {/* Side Effects & Adverse Reactions */}
            <section>
                <h2 className="flex items-center text-lg font-semibold mb-2 p-2 bg-[#0000000A]">
                    <AlertTriangle className="w-5 h-5 mr-2 text-yellow-600" />
                    Side Effects & Adverse Reactions
                </h2>

                <h3 className="font-semibold mt-2 mb-1">Common Side Effects</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Dry, persistent cough (10–15% of patients)</li>
                    <li>Dizziness and lightheadedness</li>
                    <li>Headache</li>
                    <li>Fatigue</li>
                    <li>Nausea</li>
                </ul>

                <h2 className="font-semibold mt-4 mb-1">Serious Adverse Effects</h2>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Angioedema (potentially life-threatening)</li>
                    <li>Hyperkalemia (K⁺ &gt; 5.5 mEq/L)</li>
                    <li>Acute kidney injury</li>
                    <li>Severe hypotension</li>
                    <li>Neutropenia (rare)</li>
                </ul>
            </section>

            {/* Black Box Warning */}
            <section>
                <h2 className="flex items-center text-lg font-semibold mb-2 text-yellow-800">
                    ⚠️ Black Box Warning
                </h2>
                <p className="text-sm text-yellow-900">
                    Contraindicated in pregnancy – can cause fetal and neonatal morbidity
                    and mortality.
                </p>
            </section>

            {/* Nursing Considerations */}
            <section>
                <h2 className="flex items-center text-lg font-semibold mb-2 p-2 bg-[#0000000A]">
                    <ClipboardList className="w-5 h-5 mr-2 text-green-600" />
                    Nursing Considerations
                </h2>

                <h3 className="font-semibold mt-2 mb-1">Before Administration</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Assess baseline blood pressure and heart rate</li>
                    <li>Check recent lab values: BUN, creatinine, potassium</li>
                    <li>Review allergy history (especially ACE inhibitors)</li>
                    <li>Assess for pregnancy status in women of childbearing age</li>
                    <li>Evaluate current medications for interactions</li>
                </ul>

                <h3 className="font-semibold mt-4 mb-1">During Administration</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Administer at same time daily for consistency</li>
                    <li>Can be given with or without food</li>
                    <li>Monitor for signs of hypotension after first dose</li>
                    <li>Document administration time and patient response</li>
                </ul>

                <h3 className="font-semibold mt-4 mb-1">Ongoing Monitoring</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                    <li>Monitor BP regularly (target &lt; 130/80 mmHg)</li>
                    <li>Check renal function and electrolytes every 2–4 weeks initially</li>
                    <li>Assess for persistent dry cough</li>
                    <li>Watch for signs of angioedema (facial/throat swelling)</li>
                    <li>Monitor for orthostatic hypotension</li>
                </ul>
            </section>
        </div>
    );
}

export default DrugDetails;
