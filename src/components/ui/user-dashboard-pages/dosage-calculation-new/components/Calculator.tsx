"use client";
import { useState } from "react";
import { X, Delete } from "lucide-react";
import { Modal } from "antd";

interface CalculatorProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DosageCalculator({ isOpen, onClose }: CalculatorProps) {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [newNumber, setNewNumber] = useState(true);

  if (!isOpen) return null;

  const handleNumberClick = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setNewNumber(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleDecimalClick = () => {
    if (newNumber) {
      setDisplay("0.");
      setNewNumber(false);
    } else if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperationClick = (op: string) => {
    if (previousValue !== null && operation !== null && !newNumber) {
      calculate();
    }
    setPreviousValue(display);
    setOperation(op);
    setNewNumber(true);
  };

  const calculate = () => {
    if (previousValue === null || operation === null) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(display);
    let result = 0;

    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "×":
        result = prev * current;
        break;
      case "÷":
        result = current !== 0 ? prev / current : 0;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleEquals = () => {
    calculate();
  };

  const handleClear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setNewNumber(true);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
      setNewNumber(true);
    }
  };

  const buttons = [
    ["7", "8", "9", "÷"],
    ["4", "5", "6", "×"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];

  return (
    <Modal
      open={isOpen}
      onCancel={onClose}
      footer={null}
      title={
        <h2 className="text-lg font-semibold text-gray-700">Calculator</h2>
      }
      width={400}
      centered
    >
      {/* Calculator Body */}
      <div className="pt-4">
        {/* Display */}
        <div className="mb-4 bg-gray-100 rounded-lg p-4 border border-gray-300">
          <div className="text-right">
            {previousValue && operation && (
              <div className="text-xs text-gray-500 mb-1">
                {previousValue} {operation}
              </div>
            )}
            <div className="text-2xl font-semibold text-gray-900 break-all">
              {display}
            </div>
          </div>
        </div>

        {/* Button Grid */}
        <div className="space-y-2 mb-4">
          {buttons.map((row, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-4 gap-2">
              {row.map((btn) => {
                const isOperation = ["÷", "×", "-", "+", "="].includes(btn);
                const isActive = operation === btn && newNumber;

                return (
                  <button
                    key={btn}
                    onClick={() => {
                      if (btn === "=") {
                        handleEquals();
                      } else if (btn === ".") {
                        handleDecimalClick();
                      } else if (isOperation) {
                        handleOperationClick(btn);
                      } else {
                        handleNumberClick(btn);
                      }
                    }}
                    className={`h-14 rounded-lg font-semibold text-lg transition-colors ${
                      btn === "="
                        ? "bg-[#2C5F8D] text-white hover:bg-[#234a6d]"
                        : isOperation
                          ? isActive
                            ? "bg-blue-600 text-white"
                            : "bg-blue-100 text-blue-700 hover:bg-blue-200"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    } ${btn === "0" ? "col-span-1" : ""}`}
                  >
                    {btn}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Function Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={handleClear}
            className="h-12 rounded-lg font-medium text-sm bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
          >
            Clear (C)
          </button>
          <button
            onClick={handleBackspace}
            className="h-12 rounded-lg font-medium text-sm bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
          >
            <Delete className="w-4 h-4" />
            Delete
          </button>
        </div>

        {/* Quick Reference */}
        <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs font-semibold text-blue-900 mb-1">
            Quick Tips:
          </p>
          <ul className="text-[10px] text-blue-800 space-y-0.5">
            <li>• Use for dose calculations and conversions</li>
            <li>• Remember to check units before calculating</li>
            <li>• Round appropriately based on measurement type</li>
          </ul>
        </div>
      </div>
    </Modal>
  );
}
