"use client"
import { resultCard } from "@/data/flashCards";
import { useRouter } from "next/navigation";
    export default function QuestionBank() {
     const router = useRouter()
    const getCardStyle = (status: string) => {
        if (status === "know") {
            return "border border-[#4FC895] text-[#28C76F] bg-[#4FC89515] font-medium";
        }
        return "border border-gray-300 text-gray-500 bg-gray-100 font-medium";
    };

    const knowCount = resultCard.filter((card) => card.status === "know").length;
    const stillLearningCount = resultCard.filter((card) => card.status === "stillLearning").length;

    return (
        <div className="lg:px-6">
            <h2 className="text-lg font-medium lg:mb-6 mb-4">Question Bank</h2>
            <div className="flex flex-wrap gap-4 mb-4 lg:mb-10">
                {resultCard.map((card) => (
                    <div
                        key={card.number}
                        className={`w-12 h-12 flex items-center justify-center rounded ${getCardStyle(card.status)}`}
                    >
                        {card.number}
                    </div>
                ))}
            </div> 

            <div className="pb-3 mb-4 lg:mb-6 text-lg border-b border-gray-200 ">
                <span className=" font-medium">Attempted: </span>   <span className="text-[#003877] font-normal"> {knowCount + stillLearningCount}/25 </span>
            </div>
            <div className="mb-4 flex justify-between">
                <div className=" flex items-center gap-2"> <span
                    className={`w-8 h-8 flex items-center justify-center rounded ${getCardStyle("know")}`}
                >
                    {knowCount}
                </span> <span>Know</span> </div>

                <div className=" flex items-center gap-2"> <span
                    className={`w-8 h-8 flex items-center justify-center rounded ${getCardStyle("")}`}
                >
                    {stillLearningCount}
                </span> <span>Still Learning</span> </div>
            </div> 


            <div className="flex lg:flex-row flex-col justify-between mt-5 gap-4">
                <button className="lg:w-[250px] w-full h-12  rounded border border-[#484848] cursor-pointer" onClick={()=>router?.push("/profile/flash-cards/high-yield-flashcards/create-test")}>Reset Cards</button>
                <button className="lg:w-[250px] w-full h-12 bg-[#003877] rounded border border-[#484848] text-white cursor-pointer"onClick={()=>router?.push("/profile/flash-cards/high-yield-flashcards")}>Exit</button>
            </div>
            <p className="text-sm text-[#333333] mt-4">Saving on exit your ans will be saved automatically</p>
        </div>
    );
}