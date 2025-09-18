import { clinicalSkils } from "@/data/clinical-skills-data";
import { IoSearchOutline } from "react-icons/io5";

export type CategoryState = {
    categoryId: string | null;
    templeteId: string | null;
};

interface IProps {
    setCategories: React.Dispatch<React.SetStateAction<CategoryState>>;
    setIsSideBarSelect: React.Dispatch<React.SetStateAction<boolean>>;
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
}



export default function SkillSidebar({ setCategories, setIsSideBarSelect, searchText, setSearchText }: IProps) {

    const { getClinicalSkillsData } = clinicalSkils


    return (
        <aside className="w-full sm:w-sm bg-white  border-gray-200 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-4 m-auto">

            {/* Categories */}
            <div className="flex flex-col gap-3">
                {getClinicalSkillsData.map((cat, index) => (
                    <div
                        key={index}
                        className={`p-4 rounded-lg shadow-md border flex flex-col ${
                            index === 0 ? "bg-blue-600 text-white" : "bg-white text-gray-800"
                        }`}
                    >
                        <div className="flex items-center justify-start gap-4">
                            {/* Logo Circle */}
                            <div
                                className={`w-10 h-10 flex items-center justify-center rounded-full text-white text-lg font-bold ${
                                    index === 0
                                        ? "bg-white text-blue-600"
                                        : "bg-gray-100 text-gray-600"
                                }`}
                            >
                                {cat.logo}
                            </div>
                            <div className="flex flex-col">
                                <h3
                                    className={`text-sm font-semibold ${
                                        index === 0 ? "text-white" : "text-gray-800"
                                    }`}
                                >
                                    {cat.title}
                                </h3>
                                <span className="text-lg font-semibold">{cat.token}</span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="flex items-center justify-between text-xs mb-1 mt-2">
                            <span>{cat.progress}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div
                                className={`h-1.5 rounded-full ${
                                    index === 0 ? "bg-white" : "bg-blue-600"
                                }`}
                                style={{ width: `${cat.progress}%` }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>

        </aside>
    );
}