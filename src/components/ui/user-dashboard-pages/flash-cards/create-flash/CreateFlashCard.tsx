"use client";
import DirectionTitle from "@/components/shared/user-dashboard/support-legal/DirectionTitle";
import { createFlashData } from "@/data/flashCards";
import { Input } from "antd";
import React, { useState } from "react";
import { CiCreditCard1 } from "react-icons/ci";
import Card from "../Card";
import Link from "next/link";

const CreateFlashCard = () => {
  const [selectOption, setSelectOption] = useState<number>(0);

  return (
    <div>
      <DirectionTitle
        icon={<CiCreditCard1 className="text-[#28C76F]" size={22} />}
        title="Flash Cards"
      />

      <div className="w-full lg:pb-8 pb-4 pt-4">
        <h1 className="lg:text-xl text-lg font-medium pb-1.5">
          Create a Flashcards Set
        </h1>
        <p className="lg:text-xs text-[10px] font-medium text-[#7B7B7B]">
          Flashcards are the OG study tool, Create a set of flashcard to study your materials
        </p>
      </div>

      {/* Name Input */}
      <div className="flex flex-col gap-y-2">
        <h1 className="lg:text-[16px] text-sm font-medium pb-1">
          Name Your Flashcards Set
        </h1>
        <Input
          style={{ height: 45, width: 400 }}
          className="rounded-lg"
          placeholder="Enter set name"
        />
      </div>

      {/* Options */}
      <div className="lg:pt-[72px] pt-[30px]">
        <h1 className="lg:text-xl text-lg font-medium pb-9">
          Choose an option
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-1 lg:gap-6 gap-4">
          {createFlashData.map((items) => (
            <Card
              key={items.id}
              items={items}
              selectOption={selectOption}
              setSelectOption={setSelectOption}
            />
          ))}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-row gap-4 lg:pt-10 pt-5 lg:items-start items-center">
        <Link
          href={selectOption ? "/profile/flash-cards/create-flash" : "#"}
          className={`cursor-pointer h-[45px] px-6 rounded-lg text-white font-normal ${
            selectOption ? "bg-[#003877]" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Continue
        </Link>

        <Link
          href="/profile/flash-cards"
          className="cursor-pointer h-[45px] px-6 rounded-lg text-white font-normal bg-[#EF4444]"
        >
          Cancel
        </Link>
      </div>
    </div>
  );
};

export default CreateFlashCard;
