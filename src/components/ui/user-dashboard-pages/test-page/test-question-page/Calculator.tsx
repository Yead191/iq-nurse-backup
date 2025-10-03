import React, { useState } from "react";
import { Button, Card, Typography } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const { Text } = Typography;

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
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
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (
    firstValue: number,
    secondValue: number,
    operation: string
  ): number => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const formatDisplay = (value: string) => {
    const num = parseFloat(value);
    if (isNaN(num)) return value;

    if (Math.abs(num) >= 1e10 || (Math.abs(num) < 0.000001 && num !== 0)) {
      return num.toExponential(6);
    }

    return num.toString();
  };

  // Custom button styles using your primary color
  const operationButtonStyle = {
    backgroundColor: "#003877",
    borderColor: "#003877",
    color: "white",
  };

  const operationButtonHoverStyle = {
    backgroundColor: "#002a5c",
    borderColor: "#002a5c",
    color: "white",
  };

  return (
    <div className="w-full max-w-md  mx-auto mb-4">
      <Card
        styles={{
          body: {
            padding: "24px",
          },
        }}
        style={{
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          borderRadius: "16px",
        }}
      >
        {/* Display */}
        <Card
          className="mb-4"
          styles={{
            body: {
              padding: "16px",
              backgroundColor: "#001529",
              borderRadius: "12px",
            },
          }}
        >
          <div className="text-right">
            <Text
              className="!text-white !font-mono !text-2xl sm:text-3xl lg:text-4xl block"
              style={{ fontSize: "clamp(24px, 5vw, 36px)" }}
            >
              {formatDisplay(display)}
            </Text>
            {operation && previousValue !== null && (
              <Text className="!text-gray-400 text-sm">
                {previousValue} {operation}
              </Text>
            )}
          </div>
        </Card>

        {/* Button Grid */}
        <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-2">
          {/* Row 1 */}
          <Button
            danger
            type="primary"
            size="large"
            onClick={clear}
            className="col-span-2 h-12 sm:h-14 font-semibold"
          >
            Clear
          </Button>
          <Button
            type="default"
            size="large"
            onClick={() => {
              const newDisplay = display.slice(0, -1) || "0";
              setDisplay(newDisplay);
            }}
            className="h-12 sm:h-14 font-semibold"
            icon={<DeleteOutlined />}
          />
          <Button
            size="large"
            onClick={() => performOperation("÷")}
            className="h-12 sm:h-14 font-semibold"
            style={operationButtonStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, operationButtonHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, operationButtonStyle)
            }
          >
            ÷
          </Button>

          {/* Row 2 */}
          <Button
            type="default"
            size="large"
            onClick={() => inputNumber("7")}
            className="h-12 sm:h-14 font-semibold"
          >
            7
          </Button>
          <Button
            type="default"
            size="large"
            onClick={() => inputNumber("8")}
            className="h-12 sm:h-14 font-semibold"
          >
            8
          </Button>
          <Button
            type="default"
            size="large"
            onClick={() => inputNumber("9")}
            className="h-12 sm:h-14 font-semibold"
          >
            9
          </Button>
          <Button
            size="large"
            onClick={() => performOperation("×")}
            className="h-12 sm:h-14 font-semibold"
            style={operationButtonStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, operationButtonHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, operationButtonStyle)
            }
          >
            ×
          </Button>

          {/* Row 3 */}
          <Button
            type="default"
            size="large"
            onClick={() => inputNumber("4")}
            className="h-12 sm:h-14 font-semibold"
          >
            4
          </Button>
          <Button
            type="default"
            size="large"
            onClick={() => inputNumber("5")}
            className="h-12 sm:h-14 font-semibold"
          >
            5
          </Button>
          <Button
            type="default"
            size="large"
            onClick={() => inputNumber("6")}
            className="h-12 sm:h-14 font-semibold"
          >
            6
          </Button>
          <Button
            size="large"
            onClick={() => performOperation("-")}
            className="h-12 sm:h-14 font-semibold"
            style={operationButtonStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, operationButtonHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, operationButtonStyle)
            }
          >
            -
          </Button>

          {/* Row 4 */}
          <Button
            type="default"
            size="large"
            onClick={() => inputNumber("1")}
            className="h-12 sm:h-14 font-semibold"
          >
            1
          </Button>
          <Button
            type="default"
            size="large"
            onClick={() => inputNumber("2")}
            className="h-12 sm:h-14 font-semibold"
          >
            2
          </Button>
          <Button
            type="default"
            size="large"
            onClick={() => inputNumber("3")}
            className="h-12 sm:h-14 font-semibold"
          >
            3
          </Button>
          <Button
            size="large"
            onClick={() => performOperation("+")}
            className="h-12 sm:h-14 font-semibold"
            style={operationButtonStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, operationButtonHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, operationButtonStyle)
            }
          >
            +
          </Button>

          {/* Row 5 */}
          <Button
            type="default"
            size="large"
            onClick={() => inputNumber("0")}
            className="col-span-2 h-12 sm:h-14 font-semibold"
          >
            0
          </Button>
          <Button
            type="default"
            size="large"
            onClick={inputDecimal}
            className="h-12 sm:h-14 font-semibold"
          >
            .
          </Button>
          <Button
            size="large"
            onClick={handleEquals}
            className="h-12 sm:h-14 font-semibold"
            style={operationButtonStyle}
            onMouseEnter={(e) =>
              Object.assign(e.currentTarget.style, operationButtonHoverStyle)
            }
            onMouseLeave={(e) =>
              Object.assign(e.currentTarget.style, operationButtonStyle)
            }
          >
            =
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default Calculator;
