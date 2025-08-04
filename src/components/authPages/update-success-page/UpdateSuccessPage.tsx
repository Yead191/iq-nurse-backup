"use client";
import BrainIllustration from "@/components/shared/BrainIllustration";
import { Button, Card, Grid, Typography } from "antd";
import Link from "next/link";
const { Title, Text } = Typography;

export default function UpdateSuccessPage() {
  const { lg } = Grid.useBreakpoint();

  return (
    <div className="  flex flex-col md:flex-row gap-5 lg:gap-14 justify-start md:justify-center md:items-center min-h-[calc(100vh-80px)] ">
      {/* Left Side - Illustration */}
      <div className="relative md:flex-1">
        <BrainIllustration
          title="Nice Work!"
          text="Security matters — and you’ve just taken a smart step in protecting your account."
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1  ">
        <Card
          style={{
            width: "100%",
            maxWidth: "500px",
            borderRadius: "16px",
            // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
            border: "1px solid #e5e7eb",
            padding: lg ? "20px" : "0px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <Title
              level={2}
              style={{
                margin: "0 0 8px 0",
                color: "#1f2937",
                fontSize: lg ? "28px" : "24px",
              }}
            >
              You’re All Set!
            </Title>
            <Text style={{ color: "#6b7280", fontSize: lg ? "16px" : "14px" }}>
              Your password has been successfully updated.
            </Text>
          </div>
          <Link
            href={"/"}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              type="primary"
              style={{
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#003877",
                borderColor: "#003877",
                fontSize: "16px",
                fontWeight: "500",
                width: "100%",
              }}
            >
              Homepage →
            </Button>
          </Link>
        </Card>
      </div>
    </div>
  );
}
