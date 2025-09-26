import React from "react";
import "./styles.css";

export interface FlashCardContent {
  text: string;
  image?: string;
}

export interface FlashCardType {
  id: number;
  title: string;
  frontContent: FlashCardContent;
  backContent: FlashCardContent;
}

interface Props {
  isFlipped: boolean;
  onFlip: () => void;
  card: FlashCardType;
  isStudyNote?: boolean;
}

const FlashTestCard: React.FC<Props> = ({
  isFlipped,
  onFlip,
  card,
  isStudyNote = "false",
}) => (
  <div
    className={`relative w-full ${
      isStudyNote ? "2xl:h-[50vh] lg:h-[55vh] h-[40vh]" : "lg:h-[54vh] h-[45vh]"
    }  md:h-[52vh]   cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
      isFlipped ? "rotate-y-180" : ""
    }`}
    onClick={onFlip}
  >
    {/* Front */}
    <div className="absolute inset-0 backface-hidden rounded-lg shadow">
      <div className="w-full h-full bg-white rounded-lg flex items-center justify-center p-8">
        <p className="text-gray-800 text-lg md:text-xl leading-relaxed font-medium text-center">
          {card.frontContent.text}
        </p>
      </div>
    </div>

    {/* Back */}
    <div className="absolute inset-0 backface-hidden rounded-lg shadow rotate-y-180">
      <div className="w-full h-full bg-white rounded-lg p-6 md:p-8 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center gap-y-4">
          <div className="lg:w-[45%] w-full text-center text-sm">
            {card.backContent.text}
          </div>
          <div
            className={`w-auto ${
              isStudyNote ? "2xl:h-[248px] lg:h-[192px]" : "lg:h-[248px] h-[192px]"
            }  `}
          >
            <img
              src={card.backContent.image}
              alt={`${card.title} back`}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FlashTestCard;
