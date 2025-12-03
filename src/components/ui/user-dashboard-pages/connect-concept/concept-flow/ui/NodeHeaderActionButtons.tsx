import { Tooltip } from "antd";
import React from "react";

interface ButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  title: string;
  color?: string;
}

interface NodeActionButtonsProps {
  buttons: ButtonProps[];
}

const NodeHeaderActionButtons: React.FC<NodeActionButtonsProps> = ({
  buttons,
}) => {
  return (
    <div
      className={`-z-[1] absolute top-0 pb-2 right-0 flex items-center gap-1 transition-all duration-300 ease-in-out transform 
    opacity-100 translate-y-0
    lg:group-hover:opacity-100 lg:group-hover:-translate-y-full 
    group-data-[state=selected]:opacity-100 
    lg:group-data-[state=selected]:-translate-y-full 
    lg:opacity-0 lg:translate-y-2`}
    >
      {buttons.map((button, index) => (
        <Tooltip title={button.title} placement="top" key={index}>
          <button
            className={`p-1 rounded-sm flex items-center justify-center transition shadow-sm cursor-pointer bg-white hover:ring-1 hover:ring-offset-0 ${
              button.color
                ? `text-${button.color} ring-${button.color}`
                : "text-grayCustom hover:bg-grayCustom/20"
            }`}
            onClick={button.onClick}
            type="button"
          >
            {button.icon}
          </button>
        </Tooltip>
      ))}
    </div>
  );
};

export default NodeHeaderActionButtons;
