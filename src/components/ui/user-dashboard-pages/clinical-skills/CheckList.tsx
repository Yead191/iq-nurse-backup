"use client";
import MediaTab from "@/components/shared/MediaTab"
import { Card, Checkbox } from "antd"
import { FaCheckCircle } from "react-icons/fa"

export const Checklist = () => {
    const checklist = [
        'Sphygmomanometer (BP cuff)',
        'Stethoscope',
        'Alcohol wipes',
        'Patient chart or electronic health record',
        'Pen and paper for recording'
    ]


    const procedureSteps = [
        {
            "id": 1,
            "title": "Prepare the patient",
            "description": "Explain the procedure to the patient. Ensure patient has been resting for at least 5 minutes and is in a seated position with arm supported at heart level. Explain the procedure to the patient. Ensure patient has been resting for at least 5 minutes and is in a seated position with arm supported at heart levelExplain the procedure to the patient. Ensure patient has been resting for at least 5 minutes and is in a seated position with arm supported at heart levelExplain the procedure to the patient. Ensure patient has been resting for at least 5 minutes and is in a seated position with arm supported at heart levelExplain the procedure to the patient. Ensure patient has been resting for at least 5 minutes and is in a seated position with arm supported at heart level",
            completed: true
        },
        {
            "id": 2,
            "title": "Select appropriate cuff size",
            "description": "Choose a cuff with bladder width that is 40% of arm circumference and length that encircles 80–100% of the arm.",
            completed: true

        },
        {
            "id": 3,
            "title": "Position the cuff",
            "description": "Palpate brachial artery in antecubital fossa. Place cuff 2–3 cm above antecubital fossa with center of bladder over arterial pulsation.",
            "note": "Critical step: Incorrect cuff placement can lead to inaccurate readings.",
            completed: false

        },
        {
            "id": 4,
            "title": "Determine maximum inflation level",
            "description": "Palpate radial pulse while inflating cuff. Note pressure at which pulse disappears and add 30 mmHg to estimate maximum inflation level.",
            completed: false

        }
    ]


    const onChange = (data: any) => {
        // console.log(data)
    }

    return (
        <>
            <div className="p-6 bg-[#F5F5F5] rounded-sm" >
                {checklist.map((item, index) => (
                    <div key={index} className='flex items-start gap-3  p-2'>
                        <FaCheckCircle className='w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0' />
                        <span className='text-gray-600'>{item}</span>
                    </div>
                ))}
            </div>

            <p className="py-4 text-md font-bold">Procedure Steps</p>

            {procedureSteps.map(({ title, description, completed }, i) =>
                <Card className="!mb-3 shadow-md !border-none" key={i}>
                    <div className="flex items-center justify-between gap-2">
                        <div className="w-full">
                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center gap-2">
                                    <span className="bg-[#003877] text-white rounded-[50%] px-4">{i + 1}</span>
                                    <h1 className="font-bold">{title}</h1>
                                </div>
                                <div className="mt-1">
                                    <Checkbox onChange={onChange} className="!accent-green-500" />
                                </div>
                            </div>
                            <p className="pl-12  sm:w-3/4 text-justify">{description}</p>
                        </div>
                    </div>
                </Card>
            )
            }

            <div className="sm:w-3/4 pb-2">
                <MediaTab />
            </div>
        </>

    )
}