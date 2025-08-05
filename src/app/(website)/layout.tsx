import Navbar from "@/components/shared/Navbar";
import React from "react";
import Footer from "@/components/shared/Footer";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="sticky top-0 z-50 ">
        <Navbar />
      </nav>
      {children}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
