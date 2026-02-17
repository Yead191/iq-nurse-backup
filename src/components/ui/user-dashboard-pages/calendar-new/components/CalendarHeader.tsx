import React, { useState } from "react";
import { Grid } from "antd";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import Image from "next/image";
import CalendarMobileHeader from "./CalendarMobileHeader";
export default function CalendarHeader() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { lg } = Grid.useBreakpoint();
  const handleMenuClick = () => {
    setIsDrawerOpen(true);
  };

  return (
    <>
      {lg ? (
        <PageNavbar
          title="Calendar"
          icon={
            <Image
              src="/assets/sidebar-icons/calendar-icon.svg"
              alt="NCLEX"
              width={50}
              height={50}
              draggable={false}
              className="w-fit h-10 object-contain "
            />
          }
        />
      ) : (
        <CalendarMobileHeader onMenuClick={handleMenuClick} />
      )}
    </>
  );
}
