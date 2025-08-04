"use client";
import { Form, Input, Button, Checkbox, Typography } from "antd";
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

interface RegisterFormProps {
  onFinish: (values: any) => void;
  form: any;
}

export default function RegisterForm({ onFinish, form }: RegisterFormProps) {
  return (
    <div
      className="justify-center items-center p-4 lg:p-14 border border-[#C5D0D0] rounded-xl max-w-[500px]"
      style={{ width: "100%" }}
    >
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <Title
          level={2}
          style={{
            margin: "0 0 8px 0",
            color: "#1f2937",
            fontSize: "32px",
          }}
        >
          Create Your Account
        </Title>
        <Text style={{ color: "#6b7280", fontSize: "16px" }}>
          Enter your details to create your account and start exploring.
        </Text>
      </div>

      <Form form={form} layout="vertical" onFinish={onFinish} size="large">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Form.Item
              label="Name"
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                prefix={<UserOutlined style={{ color: "#9ca3af" }} />}
                placeholder="Enter Your Name"
                style={{
                  borderRadius: "8px",
                  backgroundColor: "#f9fafb",
                  border: "1px solid #e5e7eb",
                }}
              />
            </Form.Item>
          </div>
          <div>
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
          </div>
        </div>

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

        <Form.Item
          label="Re-enter Password"
          name="confirmPassword"
          dependencies={["password"]}
          rules={[
            { required: true, message: "Please confirm your password" },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error("Passwords do not match"));
              },
            }),
          ]}
        >
          <Input.Password
            prefix={<LockOutlined style={{ color: "#9ca3af" }} />}
            placeholder="Re-enter Your Password"
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

        <Form.Item
          style={{ marginTop: "-12px" }}
          name="remember"
          valuePropName="checked"
        >
          <Checkbox style={{ color: "#003877" }}>Remember me</Checkbox>
        </Form.Item>

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
            Create Account →
          </Button>
        </Form.Item>

        <div style={{ textAlign: "center", marginBottom: "24px" }}>
          <Text style={{ color: "#6b7280" }}>
            Already have an account?{" "}
            <Link
              href="/auth/login"
              style={{ color: "#003877", fontWeight: "500" }}
            >
              Sign In
            </Link>
          </Text>
        </div>
        {/* social Login */}
        <SocialLogin />
      </Form>
    </div>
  );
}
