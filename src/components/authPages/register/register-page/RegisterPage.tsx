"use client";
import { Form } from "antd";

import BrainIllustration from "../../../shared/BrainIllustration";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import RegisterForm from "./RegisterForm";

export default function RegisterPage() {
  const [form] = Form.useForm();
  const router = useRouter();
  const onFinish = (values: any) => {
    console.log("Form values:", values);
    toast.success("Registration successful!");
    router.push("/auth/register/country-selection");
  };

  return (
    <div className="  flex flex-col md:flex-row gap-5 lg:gap-14 justify-start md:justify-center md:items-center min-h-[calc(100vh-80px)] ">
      {/* Left Side - Illustration */}
      <div className="relative flex-1">
        <BrainIllustration
          title="Join IQ-Nurse Today!"
          text="Create your free account and start studying smarter today."
        />
      </div>

      {/* Right Side - Form */}
      <div className="flex flex-1 ">
        <RegisterForm onFinish={onFinish} form={form} />
      </div>
    </div>
  );
}
