import { clinicalCalculatorData } from "@/data/clinicalCalculatorData";
import { templateData } from "@/data/templatesData";
import { FaListUl } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

export type CategoryState = {
    categoryId: string | null;
    templeteId: string | null;
};

interface IProps {
    setIsSideBarSelect: React.Dispatch<React.SetStateAction<boolean>>;
    setSetselectedId: React.Dispatch<React.SetStateAction<string>>;
}



export default function CalculatorCategoryList({  setIsSideBarSelect, setSetselectedId }: IProps) {

    const { getCaluclatorData } = clinicalCalculatorData

    return (
        <aside className="w-full sm:w-sm bg-white shadow-xl  scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-4 m-auto">
            {/* Search */}
            <div className="pb-2 flex items-center gap-2  bg-white">
                <FaListUl  className=" text-lg" />
                <h1 className="font-bold text-xl">Calculator Categories</h1>
            </div>
            <p></p>

            {/* Categories */}
            <div className="space-y-6 max-h-[calc(100vh-120px)] overflow-y-auto">
                {getCaluclatorData.categories.map((cat) => (
                    <div key={cat.title}>
                        <h3 className="text-sm font-semibold border-b-2 pb-1 border-b-gray-200 text-gray-700 mb-2">
                            {cat.title}
                        </h3>
                        <div className="space-y-2 px-1 pb-2">
                            {cat.tools.map((tpl) => (
                                <button
                                    onClick={() => {
                                        setSetselectedId(tpl?.id)
                                        setIsSideBarSelect((prev) => !prev)
                                    }}
                                    key={tpl.id}
                                    className="flex cursor-pointer items-start w-full rounded-lg p-3  text-left hover:shadow-md transition bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {/* Icon */}
                                    <div
                                        style={{ background: tpl.color }}
                                        className="w-8 h-8 rounded-md flex-shrink-0 mr-3"
                                    ></div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-gray-900 line-clamp-2">
                                                {tpl.name}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-500 line-clamp-2">{tpl.description}</p>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}