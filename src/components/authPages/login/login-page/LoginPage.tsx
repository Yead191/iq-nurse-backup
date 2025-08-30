"use client";
import { Form } from "antd";
import BrainIllustration from "../../../shared/BrainIllustration";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import LoginForm from "./LoginForm";

export default function LoginPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values: any) => {
    console.log("Form values:", values);
    toast.success("Login successful!");
    router.push("/profile/home");
  };

  return (
    <div className="  flex flex-col md:flex-row gap-5 lg:gap-14 justify-start md:justify-center md:items-center min-h-[calc(100vh-80px)] ">
      {/* Left Side - Illustration */}
      <div className="relative flex-1">
        <BrainIllustration
          title="Welcome back!👋"
          text="Great to see you again. Let’s continue where you left off."
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1  ">
        <LoginForm onFinish={onFinish} form={form} />
      </div>
    </div>
  );
}
