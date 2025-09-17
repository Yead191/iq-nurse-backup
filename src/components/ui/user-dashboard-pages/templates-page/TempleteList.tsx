import { templateData } from "@/data/templatesData";
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



export default function TempleteList({ setCategories, setIsSideBarSelect,searchText,setSearchText }: IProps) {

    const { getTemplateData } = templateData

    return (
        <aside className="w-full sm:w-sm bg-white sm:border-r border-gray-200 h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-4 m-auto">
            {/* Search */}
            <div className="mb-4 flex items-center gap-2 border border-gray-300 rounded-md px-3 py-3 sticky top-0 bg-white">
                <IoSearchOutline className="text-gray-400 text-lg" />
                <input
                    type="text"
                    placeholder="Search templates..."
                    className="w-full text-sm focus:outline-none"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>

            {/* Categories */}
            <div className="space-y-6">
                {getTemplateData.categories.map((cat) => (
                    <div key={cat.title}>
                        <h3 className="text-sm font-semibold border-b-2 pb-1 border-b-gray-200 text-gray-500 mb-2">
                            {cat.title}
                        </h3>
                        <div className="space-y-2">
                            {cat.templates.map((tpl) => (
                                <button
                                    onClick={() => {
                                        setCategories({ categoryId: cat.id, templeteId: tpl.id })
                                        setIsSideBarSelect((prev) => !prev)
                                    }}
                                    key={tpl.id}
                                    className="flex cursor-pointer items-start w-full rounded-lg p-3 text-left hover:shadow-md transition bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    {/* Icon */}
                                    <div
                                        style={{ background: tpl.color }}
                                        className="w-8 h-8 rounded-md flex-shrink-0 mr-3"
                                    ></div>

                                    {/* Content */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <span className="text-sm font-medium text-gray-900">
                                                {tpl.name}
                                            </span>
                                            {tpl.label && (
                                                <span className="text-xs font-medium bg-gray-100 text-gray-700 rounded px-2 py-0.5">
                                                    {tpl.label}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-gray-500">{tpl.description}</p>
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