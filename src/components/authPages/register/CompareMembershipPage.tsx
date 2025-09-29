"use client";
import { useState } from "react";
import {
  Button,
  Typography,
  Card,
  Row,
  Col,
  Select,
  Space,
  Alert,
  Avatar,
} from "antd";
import {
  CloseOutlined,
  FileTextOutlined,
  EditOutlined,
  CreditCardOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
  UserOutlined,
  BulbOutlined,
  FileProtectOutlined,
  DownloadOutlined,
  CheckOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
const { Option } = Select;

const features = [
  {
    icon: <FileTextOutlined />,
    title: "StudyNotes",
    description: "Make flashcard from your course material",
  },
  {
    icon: <EditOutlined />,
    title: "Add Your Personal Notes",
    description: "Make flashcard from your course material",
  },
  {
    icon: <CreditCardOutlined />,
    title: "Flashcards",
    description: "Make flashcard from your course material",
  },
  {
    icon: <FileTextOutlined />,
    title: "Exams & Quizzes",
    description: "Make flashcard from your course material",
  },
  {
    icon: <MedicineBoxOutlined />,
    title: "Clinical Skills",
    description: "Make flashcard from your course material",
  },
  {
    icon: <UserOutlined />,
    title: "Patient Assessment",
    description: "Make flashcard from your course material",
  },
  {
    icon: <CalendarOutlined />,
    title: "Nursing Calendar/Planner",
    description: "Make flashcard from your course material",
  },
  {
    icon: <BulbOutlined />,
    title: "Your Own AI Assistant",
    description: "Make flashcard from your course material",
  },
  {
    icon: <FileProtectOutlined />,
    title: "Care Plan Generator",
    description: "Make flashcard from your course material",
  },
  {
    icon: <EditOutlined />,
    title: "Concept Map Generator",
    description: "Make flashcard from your course material",
  },
  {
    icon: <CreditCardOutlined />,
    title: "Drug Card Generator",
    description: "Make flashcard from your course material",
  },
  {
    icon: <DownloadOutlined />,
    title: "Downloadable Templates",
    description: "Make flashcard from your course material",
  },
];

export default function CompareMembershipPage() {
  const [currency, setCurrency] = useState("$USD");
  const [selectedPlan, setSelectedPlan] = useState("yearly");
  const [showBanner, setShowBanner] = useState(true);

  const handleSubscribe = () => {
    // console.log("Subscribe to plan:", selectedPlan);
  };

  return (
    <div className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center p-4">
      {/* Success Banner */}
      {showBanner && (
        <Alert
          message={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
              }}
            >
              <CheckOutlined style={{ color: "#10b981" }} />
              <Text strong style={{ fontSize: 16 }}>
                92% of users who IQ-Nurse actively improved their grades
              </Text>
            </div>
          }
          type="success"
          closable
          onClose={() => setShowBanner(false)}
          closeIcon={<CloseOutlined />}
          style={{
            backgroundColor: "#EAF9F3",
            border: "1px solid #a7f3d0",
            borderRadius: "0",
            width: "100%",
            height: 71,
          }}
        />
      )}

      <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-8 w-full my-8">
        {/* Left Side - Features */}
        <div className="w-full md:w-3/4 h-fit-content">
          <Title level={3} style={{ margin: "0 0 24px 0", color: "#1f2937" }}>
            Everything included with Premium
          </Title>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    backgroundColor: "#eff6ff",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#1e40af",
                    fontSize: "16px",
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <Text
                    strong
                    style={{
                      color: "#1f2937",
                      fontSize: "16px",
                      display: "block",
                    }}
                  >
                    {feature.title}
                  </Text>
                  <Text style={{ color: "#6b7280", fontSize: "14px" }}>
                    {feature.description}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Pricing */}

        <div className="w-full md:w-1/4">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
            }}
          >
            <Title level={3} style={{ margin: "0", color: "#1f2937" }}>
              Choose your plan
            </Title>
            <Select
              value={currency}
              onChange={setCurrency}
              style={{ width: "80px" }}
            >
              <Option value="$USD">$USD</Option>
              <Option value="€EUR">€EUR</Option>
              <Option value="£GBP">£GBP</Option>
            </Select>
          </div>

          <Space direction="vertical" size="large" style={{ width: "100%" }}>
            <div className="flex flex-col-reverse md:flex-col">
              <div className="flex flex-col space-y-2 md:space-y-4">
                {/* Yearly Plan */}
                <div
                  style={{
                    border:
                      selectedPlan === "yearly"
                        ? "2px solid #1e40af"
                        : "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "20px",
                    cursor: "pointer",
                    backgroundColor:
                      selectedPlan === "yearly" ? "#F6F9FE" : "#ffffff",
                  }}
                  onClick={() => setSelectedPlan("yearly")}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "8px",
                          marginBottom: "4px",
                        }}
                      >
                        <Text
                          strong
                          style={{ fontSize: "18px", color: "#1f2937" }}
                        >
                          Yearly
                        </Text>
                        <div
                          style={{
                            backgroundColor: "#AB9FF2",
                            color: "white",
                            padding: "2px 8px",
                            borderRadius: "6px",
                            fontSize: "12px",
                            fontWeight: "500",
                          }}
                        >
                          Save 57%
                        </div>
                      </div>
                      <Text style={{ color: "#6b7280", fontSize: "14px" }}>
                        $96.00 billed
                      </Text>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Text
                        strong
                        style={{ fontSize: "24px", color: "#1f2937" }}
                      >
                        $8.00
                      </Text>
                      <Text style={{ color: "#6b7280", fontSize: "14px" }}>
                        /mo
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Monthly Plan */}
                <div
                  style={{
                    border:
                      selectedPlan === "monthly"
                        ? "2px solid #1e40af"
                        : "1px solid #e5e7eb",
                    borderRadius: "12px",
                    padding: "20px",
                    cursor: "pointer",
                    backgroundColor:
                      selectedPlan === "monthly" ? "#eff6ff" : "#ffffff",
                  }}
                  onClick={() => setSelectedPlan("monthly")}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Text
                        strong
                        style={{
                          fontSize: "18px",
                          color: "#1f2937",
                          display: "block",
                          marginBottom: "4px",
                        }}
                      >
                        Monthly
                      </Text>
                      <Text style={{ color: "#6b7280", fontSize: "14px" }}>
                        Billed monthly
                      </Text>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <Text
                        strong
                        style={{ fontSize: "24px", color: "#1f2937" }}
                      >
                        $19.00
                      </Text>
                      <Text style={{ color: "#6b7280", fontSize: "14px" }}>
                        /mo
                      </Text>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 0",
                }}
              >
                <Avatar.Group size="small">
                  <Avatar style={{ backgroundColor: "#f56565" }}>A</Avatar>
                  <Avatar style={{ backgroundColor: "#ed8936" }}>B</Avatar>
                  <Avatar style={{ backgroundColor: "#38b2ac" }}>C</Avatar>
                </Avatar.Group>
                <Text style={{ color: "#6b7280", fontSize: "14px" }}>
                  Trusted by students from top universities
                </Text>
              </div>
            </div>

            {/* Subscribe Button */}
            <Button
              type="primary"
              block
              onClick={handleSubscribe}
              style={{
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#003877",
                borderColor: "#003877",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              💳 Subscribe Now
            </Button>

            {/* Coupon Link */}
            <div style={{ textAlign: "center" }}>
              <Text
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Have a coupon code?
              </Text>
            </div>
          </Space>
        </div>
      </div>
    </div>
  );
}
