"use client";
import { Form, Input, Button, Checkbox, Typography, Grid } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import SocialLogin from "../../../shared/SocialLogin";
import Link from "next/link";

const { Title, Text } = Typography;

interface LoginFormProps {
  onFinish: (values: any) => void;
  form: any;
}

export default function LoginForm({ onFinish, form }: LoginFormProps) {
  const { lg } = Grid.useBreakpoint();
  return (
    <div
      className="justify-center items-center p-4 lg:p-14 border border-[#C5D0D0] rounded-xl w-full max-w-[500px]"
      style={{ width: "100%" }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title
          level={2}
          style={{
            margin: "0 0 8px 0",
            color: "#1f2937",
            fontSize: lg ? "32px" : "24px",
          }}
        >
          Log In
        </Title>
        <Text style={{ color: "#6b7280", fontSize: lg ? "16px" : "14px" }}>
          Log in to access your personalized study plans and pick up right where
          you left off.
        </Text>
      </div>

      <Form form={form} layout="vertical" onFinish={onFinish} size="large">
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input
            prefix={<MailOutlined style={{ color: "#9ca3af" }} />}
            placeholder="Enter Your Email"
            style={{
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
            }}
          />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: "#9ca3af" }} />}
            placeholder="Enter Your Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            style={{
              borderRadius: "8px",
              backgroundColor: "#f9fafb",
              border: "1px solid #e5e7eb",
            }}
          />
        </Form.Item>

        <div className="flex items-center justify-between -mt-6">
          <Form.Item
            style={{ marginTop: "12px" }}
            name="remember"
            valuePropName="checked"
          >
            <Checkbox style={{ color: "#003877" }}>Remember me</Checkbox>
          </Form.Item>
          <Link href="/auth/reset-password">
            <p className="text-[14px] text-[#003877] font-medium hover:underline">
              Forgot Password?
            </p>
          </Link>
        </div>

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
              marginTop: "-12px",
            }}
          >
            Log In →
          </Button>
        </Form.Item>

        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <Text style={{ color: "#6b7280" }}>
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              style={{ color: "#003877", fontWeight: "500" }}
            >
              Create one now
            </Link>
          </Text>
        </div>
        {/* social Login */}
        <SocialLogin />
      </Form>
    </div>
  );
}
