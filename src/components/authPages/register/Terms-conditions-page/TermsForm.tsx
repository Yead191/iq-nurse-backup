"use client";
import { useState } from "react";
import {
  Form,
  Select,
  Button,
  Checkbox,
  Typography,
  Card,
  Space,
  Grid,
} from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { FaAppStoreIos, FaYoutube } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoShareSocialOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";

const { Title, Text, Link } = Typography;
const { Option } = Select;

const hearAboutOptions = [
  { value: "google-search", label: "Google Search", icon: <FcGoogle /> },
  {
    value: "social-media",
    label: "Social Media",
    icon: <IoShareSocialOutline />,
  },
  { value: "youtube", label: "Youtube", icon: <FaYoutube /> },
  { value: "friends-family", label: "Friends/Family", icon: "👥" },
  { value: "app-store", label: "App Store", icon: <FaAppStoreIos /> },
  { value: "other", label: "Other", icon: "💬" },
];

export default function TermsForm() {
  const { lg } = Grid.useBreakpoint();
  const [form] = Form.useForm();
  const [selectedSource, setSelectedSource] = useState<string>("google-search");
  const router = useRouter();
  const onFinish = (values: any) => {
    // console.log("Form values:", values);
    router.push("/auth/register/membership");
  };

  return (
    <div className="w-full">
      <Card
        style={{
          width: "100%",
          padding: lg ? "40px" : "0",
          maxWidth: 500,
          backgroundImage:
            "linear-gradient(rgba(229, 242, 255, 0.7), rgba(229, 242, 255, 0.7)), url('/assets/images/dashboard/home/banner.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Form form={form} layout="vertical" onFinish={onFinish} size="large">
          {/* Terms of Use Section */}
          <div style={{ marginBottom: "32px" }}>
            <Title
              level={4}
              style={{
                margin: "0 0 8px 0",
                color: "#1f2937",
                fontSize: "20px",
              }}
            >
              Terms of Use
            </Title>
            <Text
              style={{
                color: "#6b7280",
                fontSize: "14px",
                display: "block",
                marginBottom: "16px",
              }}
            >
              Disclaimer: This guide is intended for educational purposes and
              should be used in conjunction with formal nursing education,
              clinical training, and institutional protocols. Always follow your
              facility's guidelines and seek guidance from experienced nursing
              professionals and healthcare providers.{" "}
            </Text>

            <div style={{ marginBottom: "16px" }}>
              <Text strong style={{ color: "#374151", fontSize: "16px" }}>
                Terms Conditions
              </Text>
              <br />
              <Text style={{ color: "#9ca3af", fontSize: "12px" }}>
                updated on Jan 2023
              </Text>
              <br />
              <Link
                href="/terms"
                style={{ color: "#1e40af", fontSize: "14px" }}
              >
                Terms Conditions
              </Link>
            </div>

            <Form.Item
              name="acceptTerms"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "Please accept the Terms & Conditions",
                },
              ]}
            >
              <Checkbox style={{ color: "#374151" }}>
                Yes, I agree to the Terms & Conditions
              </Checkbox>
            </Form.Item>
          </div>

          {/* Privacy Policy Section */}
          <div style={{ marginBottom: "32px" }}>
            <Title
              level={4}
              style={{
                margin: "0 0 16px 0",
                color: "#1f2937",
                fontSize: "20px",
              }}
            >
              Privacy Policy
            </Title>
            <Text
              style={{
                color: "#9ca3af",
                fontSize: "12px",
                display: "block",
                marginBottom: "8px",
              }}
            >
              updated on Jan 2023
            </Text>

            <Space
              direction="vertical"
              size="small"
              style={{ marginBottom: "16px" }}
            >
              <Link
                href="/privacy"
                style={{ color: "#1e40af", fontSize: "14px" }}
              >
                Privacy Policy
              </Link>
              <Link
                href="/california-notice"
                style={{ color: "#1e40af", fontSize: "14px" }}
              >
                Notice for California Residents
              </Link>
            </Space>

            <Form.Item
              name="acceptPrivacy"
              valuePropName="checked"
              rules={[
                {
                  required: true,
                  message: "Please accept the Privacy Policy",
                },
              ]}
            >
              <Checkbox style={{ color: "#374151" }}>
                Yes, I agree to the Privacy Policy
              </Checkbox>
            </Form.Item>
          </div>

          {/* How Did You Hear About Us Section */}
          <div style={{ marginBottom: "32px" }}>
            <Title
              level={4}
              style={{
                margin: "0 0 16px 0",
                color: "#1f2937",
                fontSize: "20px",
              }}
            >
              How Did You Hear about us
            </Title>

            <Form.Item name="hearAbout" initialValue={selectedSource}>
              <Select
                value={selectedSource}
                onChange={setSelectedSource}
                style={{
                  width: "100%",
                  borderRadius: "8px",
                }}
                placeholder="Select how you heard about us"
                size="large"
                suffixIcon={<SearchOutlined style={{ color: "#9ca3af" }} />}
              >
                {hearAboutOptions.map((option) => (
                  <Option key={option.value} value={option.value}>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <span>{option.icon}</span>
                      <span>{option.label}</span>
                    </div>
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          {/* Finish Button */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              block
              style={{
                height: "48px",
                borderRadius: "8px",
                backgroundColor: "#2C5F8D",
                borderColor: "#2C5F8D",
                fontSize: "16px",
                fontWeight: "500",
              }}
            >
              Finish Set-Up →
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
