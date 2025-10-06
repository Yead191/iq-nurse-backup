"use client";
import { resultCard } from "@/data/flashCards";
import { usePathname, useRouter } from "next/navigation";
export default function QuestionBankForTest() {
  const router = useRouter();
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);
  const mode = segments[segments.length - 2];
  const getCardStyle = (status: string) => {
    if (status === "know") {
      return "border border-[#4FC895] text-[#28C76F] bg-[#4FC89515] font-medium";
    }
    return "border border-gray-300 text-gray-500 bg-gray-100 font-medium";
  };

  const knowCount = resultCard.filter((card) => card.status === "know").length;
  const stillLearningCount = resultCard.filter(
    (card) => card.status === "stillLearning"
  ).length;

  return (
    <div className="lg:px-6">
      <h2 className="text-lg font-medium lg:mb-6 mb-4">Question Bank</h2>
      <div className="flex flex-wrap gap-4 mb-4 lg:mb-10">
        {resultCard.map((card) => (
          <div
            key={card.number}
            className={`w-12 h-12 flex items-center justify-center rounded ${getCardStyle(
              card.status
            )}`}
          >
            {card.number}
          </div>
        ))}
      </div>

      <div className="pb-3 mb-4 lg:mb-6 text-lg border-b border-gray-200 ">
        <span className=" font-medium">Attempted: </span>{" "}
        <span className="text-[#003877] font-normal">
          {" "}
          {knowCount + stillLearningCount}/25{" "}
        </span>
      </div>
      <div className="mb-4 grid grid-cols-2 items-center justify-between  gap-4">
        <div className=" flex items-center gap-2">
          {" "}
          <span
            className={`w-8 h-8 flex items-center justify-center rounded ${getCardStyle(
              "know"
            )}`}
          >
            {knowCount}
          </span>{" "}
          <span>Know</span>{" "}
        </div>

        <div className=" flex items-center gap-2  justify-center">
          {" "}
          <span
            className={`w-8 h-8 flex items-center justify-center rounded ${getCardStyle(
              ""
            )}`}
          >
            {stillLearningCount}
          </span>{" "}
          <span>Still Learning</span>{" "}
        </div>

        <div className=" flex items-center gap-2">
          {" "}
          <span
            className={`w-8 h-8 flex items-center justify-center rounded ${getCardStyle(
              "know"
            )}`}
          >
            {knowCount}
          </span>{" "}
          <span>Review</span>{" "}
        </div>

        <div className=" flex items-center gap-2 justify-center">
          {" "}
          <span
            className={`w-8 h-8 flex items-center justify-center rounded ${getCardStyle(
              ""
            )}`}
          >
            {stillLearningCount}
          </span>{" "}
          <span>Not attempted</span>{" "}
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between mt-5 gap-4">
        <button
          className="lg:w-[250px] w-full h-12 font-medium  rounded border border-[#484848] cursor-pointer"
        //   onClick={() =>
        //     router?.push(
        //       `/profile/tests/high-yield-questions/${mode}/analyzing-results/review-exam`
        //     )
        //   }
        >
          Review exam
        </button>
        <button
          className="lg:w-[250px] w-full h-12 bg-[#003877] rounded border border-[#484848] text-white cursor-pointer"
          onClick={() => router?.push("/profile/tests/")}
        >
          Exit Exam
        </button>
      </div>
      <p className="text-sm text-[#333333] mt-4">
        By clicking on exit your ans will be saved automatically
      </p>
    </div>
  );
}
