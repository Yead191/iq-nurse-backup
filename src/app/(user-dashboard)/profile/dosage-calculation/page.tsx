import OverviewBanner from "@/components/shared/OverviewBanner";
import { DosageHome } from "@/components/ui/user-dashboard-pages/dosage-calculation-new/components/DosageHome";
import Image from "next/image";

export default function page() {
  return (
    <div className="container pt-3 lg:pt-8 ">
      <OverviewBanner
        title="Master Medication Math"
        description="Master medication math and prepare for nursing success with comprehensive study notes and practice questions."
        image={
          <Image
            src={"/assets/images/dosage/dosage.png"}
            alt="Study Notes Robot"
            width={400}
            height={400}
            className="w-full h-auto object-contain scale-120 lg:scale-115 z-0 lg:translate-y-2 lg:-translate-x-12 "
            priority
            draggable={false}
          />
        }
      />
      <DosageHome />
    </div>
  );
}
