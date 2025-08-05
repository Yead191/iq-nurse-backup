import Navbar from "@/components/shared/Navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="sticky top-0 z-50 ">
        <Navbar />
      </nav>
      {children}
    </div>
  );
}
