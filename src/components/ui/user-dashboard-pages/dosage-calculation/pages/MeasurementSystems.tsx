import { Card, Typography } from "antd";
import React from "react";

const { Title, Paragraph, Text } = Typography;

const MeasurementSystems = () => {
  const householdData = [
    { key: "1", unit: "1 teaspoon (tsp)", metric: "5 mL" },
    { key: "2", unit: "1 tablespoon (Tbsp)", metric: "15 mL" },
    { key: "3", unit: "1 fluid ounce (oz)", metric: "30 mL" },
    { key: "4", unit: "1 cup", metric: "8 oz or 240 mL" },
    { key: "5", unit: "1 pint", metric: "16 oz or 480 mL" },
    { key: "6", unit: "1 quart", metric: "32 oz or 960 mL" },
  ];

  const householdColumns = [
    { title: "Household Unit", dataIndex: "unit", key: "unit" },
    { title: "Metric Equivalent", dataIndex: "metric", key: "metric" },
  ];

  const metricSystem = {
    headers: ["Unit", "Abbreviation", "Equivalent"],
    rows: [
      { Unit: "1 kg", Abbreviation: "lb", Equivalent: "2.2 lb" },
      { Unit: "1 g", Abbreviation: "mg", Equivalent: "1000 mg" },
      { Unit: "1 mg", Abbreviation: "mcg", Equivalent: "1000 mcg" },
      { Unit: "1 L", Abbreviation: "mL", Equivalent: "1000 mL" },
      { Unit: "1 tsp", Abbreviation: "mL", Equivalent: "5 mL" },
      { Unit: "1 Tbsp", Abbreviation: "mL", Equivalent: "15 mL" },
      { Unit: "1 oz", Abbreviation: "mL", Equivalent: "30 mL" },
      { Unit: "1 cup", Abbreviation: "oz", Equivalent: "8 oz" },
    ],
  };

  return (
    <div>
      <div className="bg-[#2C5F8D] px-4 py-6 rounded-xl">
        <h1 className="text-2xl font-semibold text-white">
          Measurement Systems
        </h1>
      </div>
      <p className="my-4">
        Healthcare professionals use multiple measurement systems, with the
        metric system being the most common. Understanding conversions between
        systems is essential for accurate medication administration.
      </p>

      {/* Critical Conversions */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#8e24aa] mb-6">Metric System</h2>
        <p className="my-4">
          The metric system is the primary measurement system used in healthcare
          worldwide. It's based on units of 10, making conversions
          straightforward. Common metric units include grams (g), milligrams
          (mg), micrograms (mcg), liters (L), and milliliters (mL).
        </p>

        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#7e57c2] text-white">
                {metricSystem.headers.map((header, index) => (
                  <th key={index} className="px-6 py-4 font-bold tracking-wide">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {metricSystem.rows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-slate-700 font-medium">
                    {row.Unit}
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {row.Abbreviation}
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-semibold">
                    {row.Equivalent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Card
          style={{
            marginBottom: 24,
            marginTop: 24,
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
              <span className="font-bold">Critical Safety Point: </span> Never
              abbreviate "microgram" as "µg" or "ug" - always write "mcg" to
              prevent confusion with "mg" which could result in a 1000-fold
              overdose. This is a Joint Commission requirement and NCLEX-RN
              standard.
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
              <Text strong>Convert 2.5 g to mg:</Text> 2.5 g × 1000 = 2500 mg
              <br />
              <Text strong>Convert 500 mcg to mg:</Text> 500 mcg ÷ 1000 = 0.5 mg
              <br />
              <Text strong>Convert 1.5 L to mL:</Text> 1.5 L × 1000 = 1500 mL
            </Paragraph>
          </Card>
        </Card>
      </section>

      <section>
        <h2 className="text-xl font-bold text-[#8e24aa] mb-6">Metric System</h2>
        <p className="my-4">
          The metric system is the primary measurement system used in healthcare
          worldwide. It's based on units of 10, making conversions
          straightforward. Common metric units include grams (g), milligrams
          (mg), micrograms (mcg), liters (L), and milliliters (mL).
        </p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#7e57c2] text-white">
                {metricSystem.headers.map((header, index) => (
                  <th key={index} className="px-6 py-4 font-bold tracking-wide">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-100">
              {metricSystem.rows.map((row, index) => (
                <tr
                  key={index}
                  className="hover:bg-slate-50 transition-colors duration-200"
                >
                  <td className="px-6 py-4 text-slate-700 font-medium">
                    {row.Unit}
                  </td>
                  <td className="px-6 py-4 text-slate-500">
                    {row.Abbreviation}
                  </td>
                  <td className="px-6 py-4 text-slate-700 font-semibold">
                    {row.Equivalent}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default MeasurementSystems;
