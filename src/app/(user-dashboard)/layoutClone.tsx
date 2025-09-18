"use client";

import BottomNavigation from "@/components/shared/user-dashboard/bottom-navigation/BottomNavigation";
import Header from "@/components/shared/user-dashboard/header/Header";
import MobileHeader from "@/components/shared/user-dashboard/MobileHeader";
import Sidebar from "@/components/shared/user-dashboard/Sidebar";
import OldMobileHeader from "@/components/ui/old-components/OldMobileHeader";
import { ConfigProvider } from "antd";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LayoutClone = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [showLabels, setShowLabels] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const hiddenPaths = [
    "/profile/study-notes",
    "/profile/my-notepad",
    "/profile/my-library",
    "/profile/clinicals/skill-notes/",
    "/profile/patient-assessment/assessment-notes/",
    "/profile/templates",
    "/profile/clinicals"
  ];

  const shouldHide = hiddenPaths.some((prefix) => pathname.startsWith(prefix));
  // console.log(shouldHide, pathname);

  return (
    <div className="bg-[#FFFFFF] ">
      {/* mobile header */}
      <div
        className={`   sticky top-0 z-10 ${
          shouldHide || pathname.startsWith("/profile/calendar")
            ? "hidden"
            : "block md:hidden"
        } `}
      >
        {pathname === "/profile/home" ? <MobileHeader /> : <OldMobileHeader />}
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
        <div
          className={`flex-1 lg:w-[calc(100%-300px)] min-h-[calc(100vh-159px)] lg:min-h-[calc(100vh-80px)] `}
        >
          <div className={`  pb-0  `}>
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: "#003877",
                },
              }}
            >
              <div>
                <div
                  className={`  hidden sticky top-0 z-50 ${
                    shouldHide ? "hidden" : "lg:block"
                  } `}
                >
                  <Header />
                </div>

                <div
                  // className={`h-full  rounded-md px-4  lg:px-5 ${
                  //   shouldHide ? "py-0 " : "lg:pt-8 lg:pb-0  p-4 md:p-6"
                  // } `}
                  className={`h-full  rounded-md  ${
                    shouldHide ? "py-0 " : "lg:pt-8 lg:pb-0 px-4  lg:px-5"
                  } `}
                >
                  {children}
                </div>
              </div>
            </ConfigProvider>
          </div>
        </div>
        <div className=" sticky bottom-0 z-50 md:hidden">
          <BottomNavigation setIsMobileSidebarOpen={setIsMobileSidebarOpen} />
        </div>
      </div>
    </div>
  );
};

export default LayoutClone;
