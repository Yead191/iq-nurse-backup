"use client";

import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import DetailsHeader from "@/components/shared/DetailsHeader";
import { usePathname } from "next/navigation";
import { Grid } from "antd";
import Image from "next/image";
import { Download, Printer, Share } from "lucide-react";

export default function ClinicalCalculatorHeader() {
  const pathname = usePathname();
  const { lg } = Grid.useBreakpoint();

  const isMainPage = pathname === "/profile/clinical-calculator";

  return (
    <>
      {isMainPage || lg ? (
        <PageNavbar
          icon={
            <Image
              src="/assets/icons/header/math.svg"
              alt="Clinical Calculator"
              width={50}
              height={50}
              draggable={false}
              className="w-fit h-[60px] object-contain"
            />
          }
          title="Clinical Calculators"
          subtitle="Essential calculation tools for safe and accurate nursing practice"
          isAiEnhanced
          //   actions={[
          //     {
          //       label: "Share",
          //       icon: <Share size={18} className="mt-1" />,
          //       onClick: () => console.log("Share"),
          //       isPrimary: true,
          //     },
          //     {
          //       label: "Print",
          //       icon: <Printer size={18} className="mt-1.5" />,
          //       onClick: () => console.log("Print"),
          //       isPrimary: true,
          //     },
          //     {
          //       label: "Download PDF",
          //       icon: <Download size={18} className="mt-1" />,
          //       onClick: () => console.log("Download"),
          //       isPrimary: true,
          //     },
          //   ]}
        />
      ) : (
        <DetailsHeader
          title="Clinical Calculators"
          back="/profile/clinical-calculator"
        />
      )}
    </>
  );
}
