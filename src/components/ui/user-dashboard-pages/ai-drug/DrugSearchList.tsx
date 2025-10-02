import { templateData } from "@/data/templatesData";
import { FaListUl } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Input, Button, Popover, List, Typography } from "antd";
import { useState } from "react";

export type CategoryState = {
    categoryId: string | null;
    templeteId: string | null;
};

interface IProps {
    setIsSideBarSelect: React.Dispatch<React.SetStateAction<boolean>>;
    setSetselectedId: React.Dispatch<React.SetStateAction<string>>;
}

const staticHistory = [
    { name: "Acetaminophen", brand: "Tylenol" },
    { name: "Morphine", brand: "MS Contin, Roxanol" },
    { name: "Furosemide", brand: "Lasix" },
    { name: "Metoprolol", brand: "Lopressor, Toprol-XL" },
    { name: "Insulin", brand: "Humulin, Novolin, Lantus, Humalog" },
    { name: "Heparin", brand: "no common brand name" },
    { name: "Lisinopril", brand: "Prinivil, Zestril" },
    { name: "Warfarin", brand: "Coumadin, Jantoven" },
    { name: "Albuterol", brand: "ProAir, Ventolin, Proventil" },
    { name: "Potassium Chloride", brand: "K-Dur, Klor-Con" },
    { name: "Aspirin", brand: "Bayer, Ecotrin" },
    { name: "Amoxicillin", brand: "Amoxil, Trimox" },
    { name: "Atorvastatin", brand: "Lipitor" },
    { name: "Omeprazole", brand: "Prilosec" },
    { name: "Simvastatin", brand: "Zocor" },
    { name: "Gabapentin", brand: "Neurontin" },
    { name: "Hydrochlorothiazide", brand: "Microzide" },
    { name: "Amlodipine", brand: "Norvasc" },
    { name: "Levothyroxine", brand: "Synthroid, Levoxyl" },
    { name: "Azithromycin", brand: "Zithromax" },
];

export default function DrugSearchList({
    setIsSideBarSelect,
    setSetselectedId,
}: IProps) {
    const [search, setSearch] = useState("");
    const [popoverOpen, setPopoverOpen] = useState(false);

    // Filtered suggestions for popover
    const filteredSuggestions = staticHistory.filter(
        (drug) =>
            drug.name.toLowerCase().includes(search.toLowerCase()) ||
            drug.brand.toLowerCase().includes(search.toLowerCase())
    );

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setPopoverOpen(!!e.target.value);
    };

    const handleSelectSuggestion = (drug: { name: string; brand: string }) => {
        setSearch(drug.name);
        setPopoverOpen(false);
        // Optionally, trigger selection logic here
        setSetselectedId(drug.name);
        setIsSideBarSelect(true);
    };

    const handleSearch = () => {
        if (search.trim()) {
            setSetselectedId(search.trim());
            setIsSideBarSelect(true);
            setPopoverOpen(false);
        }
    };

    return (
        <aside className="w-full sm:w-sm scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 px-4 m-auto">
            <div className="bg-white mb-2 p-3" style={{ boxShadow: "4px 4px 35px 0px #00000021" }}>
                {/* Search */}
                <div className="pb-2 bg-white">
                    <h1 className="font-bold text-xl mb-2">Drug Search</h1>
                    <div className="flex gap-2">
                        <Popover
                            open={popoverOpen && filteredSuggestions.length > 0}
                            onOpenChange={setPopoverOpen}
                            placement="bottomLeft"
                            content={
                                <List
                                    size="small"
                                    bordered={false}
                                    dataSource={filteredSuggestions}
                                    renderItem={(drug) => (
                                        <List.Item
                                            style={{ cursor: "pointer" }}
                                            onClick={() => handleSelectSuggestion(drug)}
                                        >
                                            <span className="text-[#F59E42] mr-2">💊</span>
                                            <span className="font-medium">{drug.name}</span>
                                            <span className="text-gray-500 ml-1 text-xs">
                                                {drug.brand ? `(${drug.brand})` : ""}
                                            </span>
                                        </List.Item>
                                    )}
                                    style={{ minWidth: 220, maxHeight: 240, overflowY: "auto" }}
                                />
                            }
                            trigger={["focus"]}
                        >
                            <Input
                                value={search}
                                onChange={handleSearchChange}
                                onPressEnter={handleSearch}
                                placeholder="Search for medications"
                                className="rounded-md"
                                allowClear
                                style={{ flex: 1 }}
                                aria-label="Search for medications"
                            />
                        </Popover>
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


            <div className="bg-white p-3 max-h-[calc(100vh-220px)] overflow-y-auto " style={{ boxShadow: "4px 4px 35px 0px #00000021" }}>
                {/* Drug Card Search History */}
                <div className="space-y-2 ">
                    <h2 className="flex items-center gap-2 text-base font-semibold mb-2 mt-2">
                        <span className="text-[#F97316] text-lg">📂</span>
                        Drug Card Search History
                    </h2>
                    {staticHistory.map((drug, idx) => (
                        <div
                            key={drug.name + idx}
                            className="flex items-start gap-2 px-1 py-1 cursor-pointer hover:bg-gray-50 rounded"
                            onClick={() => handleSelectSuggestion(drug)}
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
                    ))}
                </div>
            </div>
        </aside>
    );
}
