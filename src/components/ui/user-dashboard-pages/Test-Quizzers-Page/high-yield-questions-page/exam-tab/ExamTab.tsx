import { questionSections } from "@/data/quizFolder";
import React from "react";
import FlashCategory from "../../../flash-cards/high-yield-flashcards/FlashCategory";
import Link from "next/link";
import { MdOutlineArrowForward } from "react-icons/md";

export default function ExamTab() {
  return (
    <div>
      <div className=" flex flex-col gap-y-5">
        {questionSections?.map((values, index) => (
          <div key={index} className=" border border-gray-200 rounded-xl  p-3">
            <div className=" flex items-center gap-4">
              <h2 className="text-2xl font-bold ">{values?.title}</h2>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name={"all-medical"}
                  className="mr-2 h-3 w-3"
                  // onChange={(e) => handleChange(e, category.name)}
                />
                <label
                  htmlFor="all-medical"
                  className="text-gray-700 flex  items-center gap-1"
                >
                  <span>All Medical Surgical </span>{" "}
                  <span className=" border px-4 py-1 border-gray-200 ps-2">
                    {" "}
                    {values?.total}{" "}
                  </span>
                </label>
              </div>
            </div>

            <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10 py-5   ">
              {values?.categories.map((column, colIdx) => (
                <div key={colIdx} className="space-y-2">
                  <FlashCategory categories={column} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-end mt-4">
        <Link
          href={"/profile/flash-cards/create-flash/start-scratch/flash-folder"}
          className=" h-[45px] lg:w-[200px] w-full rounded-lg bg-[#003877] text-white flex items-center justify-center gap-1 cursor-pointer"
        >
          <span> Continue </span>{" "}
          <span>
            {" "}
            <MdOutlineArrowForward size={20} />{" "}
          </span>
        </Link>
      </div>
    </div>
  );
}
