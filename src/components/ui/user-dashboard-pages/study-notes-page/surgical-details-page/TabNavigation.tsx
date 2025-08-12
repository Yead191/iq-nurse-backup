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
    <div className="flex justify-end my-4">
      <div className="flex border border-[#003877] rounded-xl overflow-hidden">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={`flex items-center justify-center px-6 py-3 transition-all
                ${isActive ? "bg-[#003877]" : "bg-white"}
                ${isActive ? "text-white" : "text-gray-600 hover:bg-gray-100"}
              `}
            >
              <Icon className="w-6 h-6" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
