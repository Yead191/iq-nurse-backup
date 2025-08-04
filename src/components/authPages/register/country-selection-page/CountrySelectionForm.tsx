"use client";
import { Form, Select, Button, Typography, Card, Grid } from "antd";
import { GlobalOutlined, UserOutlined } from "@ant-design/icons";
import Image from "next/image";
import { countries, nursingRoles } from "@/data/countryData";
import { useState } from "react";

import { useRouter } from "next/navigation";

const { Title, Text } = Typography;
const { Option } = Select;
export default function CountrySelectionForm() {
  const { lg } = Grid.useBreakpoint();
  const [form] = Form.useForm();
  const [selectedCountry, setSelectedCountry] = useState<string>("bangladesh");
  const [selectedRole, setSelectedRole] = useState<string>(
    "nursing-student-lvn-lpn"
  );
  const router = useRouter();
  const onFinish = (values: any) => {
    console.log("Form values:", values);
    router.push("/auth/register/terms-condition");
  };

  return (
    <Card
      style={{
        width: "100%",
        maxWidth: "500px",
        borderRadius: "16px",
        // boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        border: "1px solid #e5e7eb",
        padding: lg ? "40px 36px" : "0",
      }}
    >
      <div style={{ marginBottom: "32px" }}>
        <Title
          level={3}
          style={{
            margin: "0 0 8px 0",
            color: "#1f2937",
            fontSize: lg ? "24px" : "20px",
          }}
        >
          Country where you currently work or study
        </Title>
      </div>

      <Form form={form} layout="vertical" onFinish={onFinish} size="large">
        {/* Country Selection */}
        <Form.Item
          name="country"
          initialValue={selectedCountry}
          label={
            <span>
              <GlobalOutlined
                style={{ color: "#06b6d4", marginRight: "8px" }}
              />
              <Text strong style={{ color: "#374151" }}>
                Country
              </Text>
            </span>
          }
          style={{ marginBottom: "24px" }}
        >
          <Select
            value={selectedCountry}
            onChange={setSelectedCountry}
            style={{ width: "100%", borderRadius: "8px" }}
            placeholder="Select your country"
            size="large"
          >
            {countries.map((country) => (
              <Option key={country.value} value={country.value}>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "12px" }}
                >
                  <Image
                    src={country.flag}
                    alt="flag"
                    height={32}
                    width={32}
                    className="h-[32px] object-contain"
                  />
                  <span>{country.label}</span>
                </div>
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Role Selection */}
        <Form.Item
          name="role"
          initialValue={selectedRole}
          label={
            <span>
              <UserOutlined style={{ color: "#06b6d4", marginRight: "8px" }} />
              <Text strong style={{ color: "#374151" }}>
                Your Role
              </Text>
            </span>
          }
          style={{ marginBottom: "32px" }}
        >
          <Select
            value={selectedRole}
            onChange={setSelectedRole}
            style={{ width: "100%", borderRadius: "8px" }}
            placeholder="Select your role"
            size="large"
          >
            {nursingRoles.map((role) => (
              <Option key={role.value} value={role.value}>
                {role.label}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Next Button */}
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              height: "48px",
              borderRadius: "8px",
              backgroundColor: "#003877",
              borderColor: "#003877",
              fontSize: "16px",
              fontWeight: "500",
            }}
          >
            Next →
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
}
