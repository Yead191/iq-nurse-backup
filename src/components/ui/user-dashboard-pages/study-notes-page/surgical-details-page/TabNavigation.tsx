import { Tooltip } from "antd";

export default function TabNavigation({
  tabs,
  activeTab,
  onChange,
}: {
  tabs: { id: string; label: string; icon: any }[];
  activeTab: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex justify-end mt-4 pb-2">
      <div className="flex border border-[#003877] rounded-xl overflow-hidden ">
        {tabs?.map((tab, index) => {
          const isActive = activeTab === tab.id;

          return (
            <Tooltip key={tab.id} title={tab.label}>
              <button
                onClick={() => onChange(tab.id)}
                className={`flex items-center justify-center lg:px-6 lg:py-3 px-4 py-2 transition-all 
                ${
                  index === 0 || index === tabs.length - 1
                    ? ""
                    : "border-x border-[#003877]"
                }
             
                ${
                  isActive
                    ? "bg-[#003877] text-white"
                    : "bg-[#F6F7F8] text-gray-600 hover:bg-gray-100"
                }
                ${isActive ? "bg-[#003877]" : "bg-[#F6F7F8] "}
                ${isActive ? "text-white" : "text-gray-600 hover:bg-gray-100"}
              `}
              >
                <img
                  src={tab.icon}
                  alt={tab.label}
                  className="w-[20px] h-[20px]"
                />
              </button>
            </Tooltip>
          );
        })}
      </div>
    </div>
  );
}
