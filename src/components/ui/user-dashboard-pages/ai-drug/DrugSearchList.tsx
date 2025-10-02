import { templateData } from "@/data/templatesData";
import { IoFolderSharp, IoSearchOutline } from "react-icons/io5";
import { Empty, Input, List, Tooltip } from "antd";
import { useState } from "react";
import { LuHistory } from "react-icons/lu";
import { useRouter } from "next/navigation";

export type CategoryState = {
    categoryId: string | null;
    templeteId: string | null;
};

interface IProps {
    setIsSideBarSelect: React.Dispatch<React.SetStateAction<boolean>>;
    setSetselectedId: React.Dispatch<React.SetStateAction<string | null>>;
}

// Human search history (recently searched medications)
const staticHistory = [
    { id: 1, name: "acetaminophen", brand: "Tylenol" },
    { id: 2, name: "morphine", brand: "MS Contin, Roxanol" },
    { id: 3, name: "furosemide", brand: "Lasix" },
    { id: 4, name: "metoprolol", brand: "Lopressor, Toprol-XL" },
    { id: 5, name: "insulin", brand: "Humulin, Novolin, Lantus, Humalog" },
];

const medicationList = [
    { id: 1, name: "Acetaminophen", brand: "Tylenol" },
    { id: 2, name: "Morphine", brand: "MS Contin, Roxanol" },
    { id: 3, name: "Furosemide", brand: "Lasix" },
    { id: 4, name: "Metoprolol", brand: "Lopressor, Toprol-XL" },
    { id: 5, name: "Insulin", brand: "Humulin, Novolin, Lantus, Humalog" },
    { id: 6, name: "Ibuprofen", brand: "Advil, Motrin" },
    { id: 7, name: "Naproxen", brand: "Aleve, Naprosyn" },
    { id: 8, name: "Acetaminophen", brand: "Tylenol" },
    { id: 9, name: "Morphine", brand: "MS Contin, Roxanol" },
    { id: 10, name: "Furosemide", brand: "Lasix" },
    { id: 11, name: "Metoprolol", brand: "Lopressor, Toprol-XL" },
    { id: 12, name: "Insulin", brand: "Humulin, Novolin, Lantus, Humalog" },
    { id: 13, name: "Ibuprofen", brand: "Advil, Motrin" },
    { id: 13, name: "Naproxen", brand: "Aleve, Naprosyn" },
    { id: 15, name: "Acetaminophen", brand: "Tylenol" }
];

export default function DrugSearchList({
    setIsSideBarSelect,
    setSetselectedId,
}: IProps) {
    const [search, setSearch] = useState("");
    const [showHistory, setShowHistory] = useState(false);

    // Filtered suggestions for popover (from staticHistory)
    const filteredSuggestions = staticHistory.filter(
        (drug) =>
            drug.id.toString().includes(search.toLowerCase()) ||
            drug.name.toLowerCase().includes(search.toLowerCase()) ||
            drug.brand.toLowerCase().includes(search.toLowerCase())
    );

    // Filtered medication list for main list (from medicationList)
    const filteredMedicationList = search.trim()
        ? medicationList.filter(
            (drug) =>
                drug.id.toString().includes(search.toLowerCase()) ||
                drug.name.toLowerCase().includes(search.toLowerCase()) ||
                drug.brand.toLowerCase().includes(search.toLowerCase())
        )
        : medicationList;

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    const handleSearch = () => {
        if (search.trim()) {
            setSetselectedId(search.trim().toString());
            setIsSideBarSelect(true);
        }
    };

    const handleToggleHistory = () => {
        setShowHistory((prev) => !prev);
    };

    const router = useRouter();

    return (
        <aside className="w-full sm:w-sm scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100  m-auto">
            <div className="md:bg-white mb-2 bg-transparent p-3 md:shadow-[4px_4px_35px_0px_#00000021]">
                {/* Search */}
                <div className="pb-2 md:bg-white bg-transparent">
                    <h1 className="font-bold text-xl mb-2">Drug Search</h1>
                    <div className="flex gap-2 relative">
                        <Input
                            value={search}
                            onChange={handleSearchChange}
                            onPressEnter={handleSearch}
                            placeholder="Search for medications"
                            className="rounded-md"
                            allowClear
                            style={{ flex: 1 }}
                            aria-label="Search for medications"
                            autoComplete="off"
                        />
                        <button
                            type="button"
                            onClick={handleSearch}
                            aria-label="Search"
                            className="rounded-md h-10 cursor-pointer flex items-center justify-center bg-primary hover:bg-primary text-white px-4 transition-colors duration-150"
                        >
                            <IoSearchOutline className="text-xl" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white p-3 h-[calc(100vh-220px)] overflow-y-auto " style={{ boxShadow: "4px 4px 35px 0px #00000021" }}>
                {/* Drug Card Search History */}
                <div className="space-y-2 ">
                    <Tooltip title={showHistory ? "Hide Search History" : "Show Search History"}>
                        <div className="flex items-center gap-2 mb-2 mt-2 group">
                            <button
                                type="button"
                                className="focus:outline-none flex items-center justify-center rounded-md p-1 transition-colors duration-150 group-hover:text-[#F97316]/90"
                                aria-label={showHistory ? "Hide Medication Search History" : "Show Medication Search History"}
                                onClick={handleToggleHistory}
                            >
                                <IoFolderSharp
                                    size={30}
                                    className="text-[#FE653B] group-hover:text-[#F97316]/90 transition-colors duration-150 cursor-pointer"
                                />
                            </button>
                            <span
                                className="text-base font-semibold cursor-pointer transition-colors duration-150 group-hover:text-[#F97316]/90"
                                onClick={handleToggleHistory}
                                tabIndex={0}
                                role="button"
                                aria-pressed={showHistory}
                            >
                                Medication Search History
                            </span>
                        </div>
                    </Tooltip>

                    {showHistory && staticHistory.length > 0 && staticHistory.map((drug, idx) => (
                        <div
                            key={drug.id + idx}
                            className="flex items-start gap-2 ml-2 px-1 py-1 cursor-pointer hover:bg-gray-50 rounded"
                            onClick={() => {
                                setSearch(drug.name);
                                setIsSideBarSelect(true);
                            }}
                        >
                            <LuHistory size={20} />
                            {/* <span className="text-[#F59E42] text-lg mt-0.5">💊</span> */}
                            <div>
                                <span className="font-medium text-gray-900 text-sm">
                                    {drug.name}
                                </span>
                                <span className="text-gray-700 text-sm">
                                    {drug.brand ? ` (${drug.brand})` : ""}
                                </span>
                            </div>
                        </div>
                    ))}
                    {filteredMedicationList.length > 0 ? (filteredMedicationList.map((drug, idx) => (
                        <div
                            key={drug.id + idx}
                            className="flex items-start gap-2 py-1 cursor-pointer hover:shadow-md rounded  focus:ring-2 transition"
                            
                            onClick={() => {
                                setSetselectedId(drug.id.toString())
                                // setIsSideBarSelect(true)
                                router.push(`/profile/ai-drug/${drug.id}`);
                            }}
                        >
                            <span className="text-[#F59E42] text-lg mt-0.5">💊</span>
                            <div>
                                <span className="font-medium text-gray-900 text-sm">
                                    {drug.name}
                                </span>
                                <span className="text-gray-700 text-sm">
                                    {drug.brand ? ` (${drug.brand})` : ""}
                                </span>
                            </div>
                        </div>
                    ))) :
                        <div className="text-gray-500 text-sm">
                            <Empty description="No medications found" />
                        </div>
                    }


                </div>
            </div>
        </aside>
    );
}
