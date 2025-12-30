import { HighlightedCard } from "@/components/shared/user-dashboard/HighlightedCard";
import { Alert, Card, Space, Typography } from "antd";
import React from "react";

const { Title, Paragraph, Text } = Typography;

export default function BasicMathPage() {
  return (
    <div>
      <div className="bg-[#2C5F8D] px-4 py-6 rounded-xl">
        <h1 className="text-2xl font-semibold text-white">
          Basic Math Skills Review
        </h1>
      </div>
      <p className="my-4">
        Before diving into complex dosage calculations, it's essential to have a
        solid foundation in basic mathematics. These fundamental skills form the
        building blocks for all medication calculations you'll encounter in
        nursing practice.
      </p>

      <div style={{ margin: "0 auto" }}>
        {/* Fractions Section */}
        <Card
          style={{
            marginBottom: 24,
            border: "none",
            backgroundColor: "#F8F9FA",
          }}
        >
          <Title level={4} style={{ color: "#764BA2" }}>
            Fractions
          </Title>
          <Paragraph>
            Fractions represent parts of a whole and are commonly used in
            medication dosages. Understanding how to add, subtract, multiply,
            and divide fractions is crucial for accurate calculations.
          </Paragraph>

          {/* Example Box */}
          <Card
            style={{
              backgroundColor: "#E8F5E9",
              marginBottom: 16,
            }}
          >
            <Text
              strong
              style={{
                display: "block",
                marginBottom: 8,
                color: "#2E7D32",
                fontWeight: "bold",
              }}
            >
              💡 Example: Fraction Operations
            </Text>
            <Paragraph>
              <Text strong>Addition:</Text> 1/4 + 1/2 = 1/4 + 2/4 = 3/4
              <br />
              <Text strong>Multiplication:</Text> 1/2 × 3/4 = 3/8
              <br />
              <Text strong>Division:</Text> 1/2 ÷ 1/4 = 1/2 × 4/1 = 2
            </Paragraph>
          </Card>

          {/* Clinical Pearl Box */}
          <Card
            style={{ backgroundColor: "#f3e6ff", border: "1px solid #d1b3ff" }}
          >
            <Text
              strong
              style={{ display: "block", marginBottom: 8, color: "#6A1B9A" }}
            >
              💎 CLINICAL PEARL
            </Text>
            <Paragraph>
              When dividing fractions, remember to "flip and multiply" - invert
              the second fraction and multiply. This technique is especially
              useful when calculating partial tablet doses.
            </Paragraph>
          </Card>
        </Card>

        {/* Decimals Section */}
        <Card
          style={{
            marginBottom: 24,
            border: "none",
            backgroundColor: "#F8F9FA",
          }}
        >
          <Title level={4} style={{ color: "#764BA2" }}>
            Decimals
          </Title>
          <Paragraph>
            Decimals are extensively used in the metric system and medication
            calculations. Proper placement of decimal points is critical - a
            misplaced decimal can result in a tenfold or hundredfold error.
          </Paragraph>

          {/* Safety Alert */}
          <Card
            style={{
              backgroundColor: "#FFCDD2",
              border: "1px solid #F44336",
              marginBottom: 16,
            }}
          >
            <Text
              strong
              style={{ display: "block", marginBottom: 8, color: "#C62828" }}
            >
              ⚠️ SAFETY ALERT
            </Text>
            <Paragraph>
              <span className="font-bold">Critical Safety Point:</span> Always
              use a leading zero before a decimal point (0.5 mg, not .5 mg) and
              never use a trailing zero after a decimal point (5 mg, not 5.0
              mg). This prevents misreading and potential fatal errors.
            </Paragraph>
          </Card>

          {/* Example Box */}
          <Card
            style={{
              backgroundColor: "#E8F5E9",
              marginBottom: 16,
            }}
          >
            <Text
              strong
              style={{
                display: "block",
                marginBottom: 8,
                color: "#2E7D32",
                fontWeight: "bold",
              }}
            >
              💡 Example: Fraction Operations
            </Text>
            <Paragraph>
              <Text strong>Addition:</Text> 2.5 + 1.75 = 4.25
              <br />
              <Text strong>Multiplication:</Text> 0.5 × 2.5 = 1.25
              <br />
              <Text strong>Division:</Text> 7.5 ÷ 2.5 = 3
            </Paragraph>
          </Card>
        </Card>

        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* Percentages Section */}
          <div
            style={{
              marginBottom: 24,
              border: "none",
              backgroundColor: "#F8F9FA",
              padding: 24,
              borderRadius: 12,
            }}
          >
            <Title level={4} style={{ color: "#6B46C1" }}>
              Percentages
            </Title>
            <Paragraph>
              Percentages represent parts per hundred and are commonly seen in
              IV solutions (e.g., 0.9% Normal Saline, 5% Dextrose).
              Understanding percentage calculations helps you determine the
              amount of solute in a solution.
            </Paragraph>

            <Card
              style={{
                backgroundColor: "#BBDEFB",
                border: "1px solid #2196F3",
                textAlign: "center",
              }}
            >
              <Title level={5} style={{ color: "#1565C0", fontSize: 20 }}>
                Percentage Formula
              </Title>
              <Text
                style={{
                  color: "#0D47A1",
                  fontSize: 24,
                }}
                strong
              >
                Percentage = (Part ÷ Whole) × 100
              </Text>
            </Card>

            <Card
              style={{
                backgroundColor: "#E8F5E9",
                marginBottom: 16,
                marginTop: 12,
              }}
            >
              <Text
                strong
                style={{
                  display: "block",
                  marginBottom: 8,
                  color: "#2E7D32",
                  fontWeight: "bold",
                }}
              >
                💡 Example: IV Solution Percentage
              </Text>
              <Paragraph>
                A 5% Dextrose solution means 5 grams of dextrose per 100 mL of
                solution.
                <br />
                In 1000 mL (1 L) of D5W: 5 g/100 mL × 10 = 50 grams of dextrose
              </Paragraph>
            </Card>
          </div>

          {/* Ratios and Proportions Section */}
          <div
            style={{
              marginBottom: 24,
              border: "none",
              backgroundColor: "#F8F9FA",
              padding: 24,
              borderRadius: 12,
            }}
          >
            <Title level={4} style={{ color: "#6B46C1" }}>
              Ratios and Proportions
            </Title>
            <Paragraph>
              Ratios express the relationship between two quantities, while
              proportions show that two ratios are equal. This is one of the
              most versatile methods for solving dosage calculations.
            </Paragraph>

            <Card
              style={{
                backgroundColor: "#BBDEFB",
                border: "1px solid #2196F3",
                textAlign: "center",
              }}
            >
              <Title level={5} style={{ color: "#1565C0", fontSize: 20 }}>
                Proportion Setup
              </Title>
              <Text
                strong
                style={{
                  color: "#0D47A1",
                  fontSize: 24,
                }}
              >
                Known Ratio = Unknown Ratio
                <br />
                a/b = c/d or a:b = c:d
              </Text>
            </Card>

            <HighlightedCard
              title="⭐ NCLEX-RN HIGHLIGHT"
              focusLabel="NCLEX-RN Tip: "
              className="bg-linear-to-r from-[#FFEAA7] to-[#FDCB6E]"
              content=" Ratio and proportion is the most commonly tested calculation method on the NCLEX-RN. Practice setting up proportions
correctly with known values on one side and unknown values on the other. Always ensure your units match before solving."
            />
          </div>
        </Space>
      </div>
    </div>
  );
}
