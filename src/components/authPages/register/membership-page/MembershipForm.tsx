"use client";
import { Button, Typography, Card, Space, Grid } from "antd";
import {
  BookOutlined,
  QuestionCircleOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Title, Text } = Typography;

export default function MembershipBenefits() {
  const {lg} = Grid.useBreakpoint()
  const router = useRouter();
  const handleCompareMemberships = () => {
    // Navigate to pricing page
    router.push("/auth/register/compare-membership");
  };

  const handleContinueWithout = () => {
    // Continue to dashboard without membership
    // console.log("Continue without membership");
    router.push("/auth/login");
  };

  return (
    <Card
      style={{
        width: "100%",
        maxWidth: "500px",
        borderRadius: "16px",
        // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e5e7eb",
        padding: lg? "20px":"0px",
      }}
    >
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        {/* Feature 1 */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              marginBottom: "12px",
            }}
          >
            <BookOutlined
              style={{
                color: "#1e40af",
                fontSize: "24px",
                marginTop: "4px",
              }}
            />
            <div>
              <Title
                level={4}
                style={{
                  margin: "0 0 8px 0",
                  color: "#1f2937",
                  fontSize: "20px",
                }}
              >
                Unlimited access to the medical library
              </Title>
              <Text
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                Deepen your knowledge with hundreds of articles covering all
                clinical and basic science subjects
              </Text>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              marginBottom: "12px",
            }}
          >
            <QuestionCircleOutlined
              style={{
                color: "#1e40af",
                fontSize: "24px",
                marginTop: "4px",
              }}
            />
            <div>
              <Title
                level={4}
                style={{
                  margin: "0 0 8px 0",
                  color: "#1f2937",
                  fontSize: "20px",
                }}
              >
                Thousand of high-yield qustions
              </Title>
              <Text
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                Practice with questions tailored for university and licensing
                exams
              </Text>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "12px",
              marginBottom: "32px",
            }}
          >
            <BulbOutlined
              style={{
                color: "#1e40af",
                fontSize: "24px",
                marginTop: "4px",
              }}
            />
            <div>
              <Title
                level={4}
                style={{
                  margin: "0 0 8px 0",
                  color: "#1f2937",
                  fontSize: "20px",
                }}
              >
                Personalized study recommendations
              </Title>
              <Text
                style={{
                  color: "#6b7280",
                  fontSize: "14px",
                  lineHeight: "1.5",
                }}
              >
                Study more efficiently, Get AI-powered inatning recommendations
                based on your profile
              </Text>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <Space direction="vertical" size="middle" style={{ width: "100%" }}>
          <Button
            type="primary"
            block
            onClick={handleCompareMemberships}
            style={{
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#003877",
              borderColor: "#003877",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Compare Memberships →
          </Button>

          <Button
            block
            onClick={handleContinueWithout}
            style={{
              height: "48px",
              borderRadius: "8px",
              borderColor: "#003877",
              color: "#003877",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Continue Without Memberships →
          </Button>

          <div style={{ textAlign: "center", marginTop: "16px" }}>
            <Text style={{ color: "#9ca3af", fontSize: "14px" }}>
              (No Credit card Required)
            </Text>
          </div>
        </Space>
      </Space>
    </Card>
  );
}
