import { useState } from "react";
import { Button, Card } from "antd";

export function CalculatorTool() {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);
    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue;
      let newValue = currentValue;
      switch (operation) {
        case "+":
          newValue = currentValue + inputValue;
          break;
        case "-":
          newValue = currentValue - inputValue;
          break;
        case "×":
          newValue = currentValue * inputValue;
          break;
        case "÷":
          newValue = currentValue / inputValue;
          break;
        default:
          break;
      }
      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }
    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);
    if (previousValue !== null && operation) {
      let newValue = previousValue;
      switch (operation) {
        case "+":
          newValue = previousValue + inputValue;
          break;
        case "-":
          newValue = previousValue - inputValue;
          break;
        case "×":
          newValue = previousValue * inputValue;
          break;
        case "÷":
          newValue = previousValue / inputValue;
          break;
        default:
          break;
      }
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const buttons = [
    ["7", "8", "9", "÷"],
    ["4", "5", "6", "×"],
    ["1", "2", "3", "-"],
    ["0", ".", "=", "+"],
  ];

  return (
    <div className="w-full max-w-sm mx-auto">
      {/* Display */}
      <Card className="mb-4 bg-gray-100 border border-gray-200">
        <div className="p-4 text-right">
          {operation && previousValue !== null && (
            <div className="text-sm text-gray-500">
              {previousValue} {operation}
            </div>
          )}
          <div className="text-3xl font-bold text-gray-900 truncate">
            {display}
          </div>
        </div>
      </Card>

      {/* Clear Button */}
      <Button
        onClick={clear}
        className="w-full mb-4 h-12 text-red-600 border-red-300 hover:bg-red-50 mt-6"
      >
        Clear (C)
      </Button>

      {/* Number and Operation Buttons */}
      <div className="grid grid-cols-4 gap-2">
        {buttons.flat().map((btn) => {
          const isOperation = ["÷", "×", "-", "+", "="].includes(btn);
          const isEquals = btn === "=";
          const isNumber = !isOperation && btn !== ".";
          const isZero = btn === "0";

          let buttonType: "default" | "primary" = "default";
          let extraClass = "";

          if (isOperation && !isEquals) {
            buttonType = "primary";
          } else if (isEquals) {
            buttonType = "primary";
            extraClass = "bg-green-600 hover:bg-green-700 border-green-600";
          } else if (isNumber || btn === ".") {
            buttonType = "default";
          }

          return (
            <Button
              key={btn}
              type={buttonType}
              onClick={() => {
                if (btn === "=") {
                  handleEquals();
                } else if (btn === ".") {
                  inputDecimal();
                } else if (isOperation) {
                  performOperation(btn);
                } else {
                  inputDigit(btn);
                }
              }}
              className={`h-14 text-lg font-semibold ${isZero ? "col-span-1" : ""} ${extraClass}`}
            >
              {btn}
            </Button>
          );
        })}
      </div>

      <p className="text-xs text-gray-500 text-center mt-4">
        NCLEX Calculator - Available during exam
      </p>
    </div>
  );
}
