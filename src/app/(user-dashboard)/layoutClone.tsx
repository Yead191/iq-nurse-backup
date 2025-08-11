"use client";

import BottomNavigation from "@/components/shared/user-dashboard/bottom-navigation/BottomNavigation";
import Header from "@/components/shared/user-dashboard/header/Header";
import Sidebar from "@/components/shared/user-dashboard/Sidebar";
import { ConfigProvider } from "antd";
import { PanelsTopLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LayoutClone = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [showLabels, setShowLabels] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const profile = {
    image: "https://i.ibb.co.com/CKGDQYkt/Frame-2147227147.png",
    name: "John Doe",
  };
  return (
    <div className="bg-[#FFFFFF]">
      <div className="h-[75px] flex items-center justify-between pr-5 px-4  lg:hidden">
        {/* Mobile menu button */}
        <button
          className="lg:hidden block text-gray-600"
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          <PanelsTopLeft size={20} />
        </button>

        <div className="block lg:hidden">
          <img
            src="/logo.png"
            alt="Logo"
            className="lg:h-[32px] h-[24px] w-auto"
          />
        </div>
        <div className="block lg:hidden">
          <img
            src={profile.image}
            alt="profile"
            className="w-9 h-9 lg:w-10 lg:h-10 rounded-full cursor-pointer"
          />
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row">
        {/* Sidebar for large devices */}
        <div
          className={`bg-white hidden lg:block w-[100px]} sticky top-0 z-10 overflow-scroll h-screen`}
        >
          <Sidebar showLabels={showLabels} setShowLabels={setShowLabels} />
        </div>

        {/* Sidebar for small devices */}
        {isMobileSidebarOpen && (
          <>
            <div
              className={`fixed inset-0 bg-black/40 z-30 lg:hidden transition-opacity duration-300 ease-in-out ${
                isMobileSidebarOpen
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              onClick={() => setIsMobileSidebarOpen(false)}
            ></div>
            <div
              className={`fixed top-0 bottom-0 w-[250px] bg-[#FBFBFB] z-40 shadow-lg lg:hidden transform transition-transform duration-300 ease-in-out ${
                isMobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <Sidebar
                showLabels={false}
                setShowLabels={() => {}}
                setMobileVisible={setIsMobileSidebarOpen}
                setIsMobileSidebarOpen={setIsMobileSidebarOpen}
              />
            </div>
          </>
        )}

        {/* Main content */}
        <div className={`flex-1 lg:w-[calc(100%-100px)]`}>
          <div className={`  pb-0  `}>
            <ConfigProvider
              theme={{
                token: {
                  // colorPrimary: "#0ea5e9",
                },
              }}
            >
              <div>
                <div className=" lg:block hidden sticky top-0 z-10">
                  <Header />
                </div>

                <div className="h-full overflow-y-auto rounded-md p-4 lg:p-5">
                  {children}
                </div>
              </div>
            </ConfigProvider>
          </div>
        </div>
        <div className=" sticky bottom-0 z-10 md:hidden">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default LayoutClone;
