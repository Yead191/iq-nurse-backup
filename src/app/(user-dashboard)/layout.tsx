import React from "react";
import LayoutClone from "./layoutClone";
import CookieConsent from "@/components/shared/CookieConsent";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <LayoutClone>{children}</LayoutClone>
      <CookieConsent />
    </>
  );
};

export default layout;
