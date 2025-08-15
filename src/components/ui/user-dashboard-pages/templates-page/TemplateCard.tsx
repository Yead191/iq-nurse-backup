"use client";
import { Card, Button, Space, Grid } from "antd";
import { DownloadOutlined, EyeOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Printer } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

interface TemplateCardProps {
  template: {
    id: string;
    title: string;
    image: string;
    downloadCount?: number;
    viewCount?: number;
  };
}

export function TemplateCard({ template }: TemplateCardProps) {
  const { lg } = Grid.useBreakpoint();
  const handleDownload = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    // Implement download logic here
    console.log(`Downloading template ${template.id}`);
    toast.info(`Download feature coming soon!`);
  };
  const handlePrint = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    toast.info(`Print feature coming soon!`);
  };
  return (
    <Link href={`/profile/templates/template-details/${template.id}`}>
      <div
        style={{
          border: "1px solid #8D8D8D",
          borderRadius: "14px",
          overflow: "hidden",
          cursor: "pointer",
          transition: "all 0.3s ease",
          backgroundColor: "#EAF5FD",
          padding: lg ? "14px" : "10px",
        }}
      >
        <div style={{ position: "relative", marginBottom: "12px" }}>
          <div className="h-[150px] lg:h-[180px] xl:h-[200px] w-full bg-[#f0f0f0] rounded-md overflow-hidden relative flex items-center justify-center">
            <Image
              src={template.image || "/placeholder.svg"}
              alt={template.title}
              fill
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div className="flex items-center justify-center gap-2 md:gap-4 mb-2">
            <Button
              onClick={handlePrint}
              type="text"
              size="small"
              icon={
                <Printer size={lg ? 16 : 14} style={{ color: "#7B7B7B" }} />
              }
              style={{
                border: "1px solid #003877",
                backgroundColor: "#F6F7F8",
                padding: "auto",
                height: lg ? "37px" : "30px",
                width: lg ? "40px" : "34px",
              }}
            />
            <Button
              onClick={handleDownload}
              type="text"
              size="small"
              icon={
                <DownloadOutlined
                  size={lg ? 16 : 14}
                  style={{ color: "#7B7B7B" }}
                />
              }
              style={{
                padding: "auto",
                border: "1px solid #003877",
                backgroundColor: "#F6F7F8",
                height: lg ? "37px" : "30px",
                width: lg ? "40px" : "34px",
              }}
            />
          </div>
          <div className="text-[9px]  md:text-xs font-medium text-[#151515]  leading-[16px] ">
            {template.title}
          </div>
        </div>
      </div>
    </Link>
  );
}
