import { clinicalSkils } from "@/data/clinical-skills-data";
export type CategoryState = {
    skillCategoryId: string | null;
    setSkillId: string | null;
};

interface IProps {
    setSkill: React.Dispatch<React.SetStateAction<CategoryState>>;
    setIsSideBarSelect: React.Dispatch<React.SetStateAction<boolean>>;
}



export default function SkillSidebar({ setSkill, setIsSideBarSelect }: IProps) {

    const { getClinicalSkillsData } = clinicalSkils


    return (
        <aside className="w-full sm:w-sm bg-white  border-gray-200 max-h-[calc(100vh-120px)]  overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-4 m-auto">

            {/* Categories */}
            <div className="flex flex-col gap-3">
                {getClinicalSkillsData?.map((cat, index) => (
                    
                        <div
                            key={index+1}
                            onClick={() => {
                                setSkill(prev => ({ ...prev, skillCategoryId: cat.id }));
                                setIsSideBarSelect(true);
                            }}
                            className={`p-4 rounded-lg shadow-md flex cursor-pointer flex-col ${index === 0
                                ? "bg-[#0372D2] text-white"
                                : "bg-white text-gray-800"
                                }`}
                        >
                            <div className="flex items-center justify-start gap-4">
                                <div
                                    className={`w-10 h-10 flex items-center justify-center rounded-full aspect-square  text-lg font-bold ${index === 0
                                        ? "bg-white text-blue-600"
                                        : "bg-gray-100 text-gray-600"
                                        }`}
                                >
                                    {cat.logo}
                                </div>

                                <div className="flex flex-col gap-1 w-full">
                                    <h3
                                        className={`text-sm font-semibold ${index === 0 ? "text-white" : "text-gray-800"
                                            }`}
                                    >
                                        {cat.title}
                                    </h3>

                                    <span className="text-lg font-semibold">{cat.token}</span>

                                    <div className="flex items-center gap-2 w-full">
                                        <div className="relative flex-1 bg-gray-200 rounded-full h-1.5">
                                            <div
                                                className={`absolute left-0 h-1.5 rounded-full ${index === 0 ? "bg-white" : "bg-[#02478D]"
                                                    }`}
                                                style={{ width: `${cat.progress}%` }}
                                            />
                                        </div>

                                        <span
                                            className={`text-xs font-medium ${index === 0 ? "text-white" : "text-gray-600"
                                                }`}
                                        >
                                            {cat.progress}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    
                ))}
            </div>

        </aside>
    );
}