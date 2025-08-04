"use client";
import { Button, Card, Grid } from "antd";
import React from "react";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
export default function EmailConfirmationCard() {
  const { lg } = Grid.useBreakpoint();
  const router = useRouter()

  const handleResendEmail = () => {
    toast.success("Email sent successfully");
    router.push('/auth/update-password')
  };

  return (
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
      <div className="text-center w-full max-w-[438px]">
        <h1 className="text-2xl font-semibold mb-5 ">Check your inbox</h1>
        <p className="text-[#7B7B7B]">
          An email was sent to <br />
          <span className="my-2 text-[#110D0D] font-medium text-[16px]">
            {Cookies.get("resetEmail")}
          </span>
        </p>
        <p className="text-[#7B7B7B] my-4">
          Open the email you receive and follow the link to set a new password
        </p>
        <p className="text-[#7B7B7B] my-4">
          Didn't receive the emall? Checked your spam folder too?
        </p>
        <p className="text-[#7B7B7B]">
          <span className="text-[#003877] text-[16px] underline font-[400]">
            Send us a message
          </span>{" "}
          or{" "}
          <span className="text-[#003877] text-[16px] underline font-[400]">
            visit the Ace-Nuresing Help Center.
          </span>
        </p>
        <p className="text-[#110D0D] text-[16px] my-4 font-medium">
          Didn’t get the Email?
        </p>
        <Button
          onClick={handleResendEmail}
          style={{
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
            borderBottom: "2px solid #110D0D",
            borderRadius: 0,
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          Resend
        </Button>
      </div>
    </Card>
  );
}
