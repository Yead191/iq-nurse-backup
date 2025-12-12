import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import React from "react";
export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="bg-[#0A0E27] min-h-screen flex flex-col">
      <nav className="sticky top-0 z-50 ">
        <Navbar />
      </nav>
      {children}
      <footer>
        <Footer />
      </footer>
    </section>
  );
}
