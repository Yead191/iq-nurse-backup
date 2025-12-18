"use client";
import { LuUserRoundCheck } from "react-icons/lu";
import { useState } from "react";
import { Empty } from "antd";
import { TemplateData } from "@/data/templatesData";

interface IProps {
  categories: {
    categoryId: string | null;
    templeteId: string | null;
  };
}

export default function TempleteDetails({ categories }: IProps) {
  const templete = TemplateData.categories
    .find(({ id }) => id === categories?.categoryId)
    ?.templates.find(
      (template) => template.id === categories.templeteId
    ) as any;

  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = templete?.pdf;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides?.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides?.length - 1 : prev - 1));
  };

  console.log("category", templete);

  if (!templete) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-100px)] ">
        <Empty />
      </div>
    );
  }

  return (
    <div className=" px-4 lg:px-5 relative  lg:max-h-[calc(100vh-120px)] overflow-y-auto py-4 lg:py-0">
      <div className="bg-[#0068DD] flex items-center gap-2 text-xl text-white py-5 sm:py-7 px-4 sm:px-8 mb-4 rounded-t-xl ">
        <LuUserRoundCheck className="flex-shrink-0" />
        <h1 className="text-white sm:text-xl line-clamp-2">{templete?.name}</h1>
      </div>
      <div className="flex flex-col justify-between lg:flex-row gap-6">
        <div className="w-full lg:w-2/5">
          <div className="bg-white rounded-md shadow-sm">
            <div className="border border-gray-100 p-4 rounded-md">
              <h2 className="text-lg font-semibold text-gray-500 mb-4 pb-1">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed ">
                {templete?.description}
              </p>
            </div>
          </div>
        </div>

        {slides?.length && (
          <div className="w-full lg:w-3/5 relative ">
            <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] rounded-lg">
              {slides.map((slide: any, index: number) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 block"
                      : "opacity-0 hidden"
                  }`}
                >
                  <iframe
                    src={slide}
                    className="w-full h-full rounded-lg"
                    title={`Slide ${index + 1}`}
                    style={{ minHeight: "full" }}
                  />
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none shadow-md"
            >
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 z-30 p-2 rounded-full bg-white/30 hover:bg-white/50 focus:outline-none shadow-md"
            >
              <svg
                className="w-4 h-4 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
