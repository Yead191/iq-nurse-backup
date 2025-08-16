"use client";
import { useState } from "react";
import { Typography, Button, Image as AntImage, Grid } from "antd";
import {
  DownloadOutlined,
  EyeOutlined,
  LeftOutlined,
  RightOutlined,
} from "@ant-design/icons";
import DetailsHeader from "@/components/shared/DetailsHeader";

const { Title, Paragraph, Text } = Typography;

interface TemplatePreviewProps {
  id: string;
}

export function TemplatePreview({ id }: TemplatePreviewProps) {
  const template = {
    id: id,
    title: "Head To Toe Assessment",
    images: [
      "https://i.ibb.co/SwK1dJNm/ce11c7ee4e6b9dcc455e761bdde3d531b500b7b3.png",
      "https://i.ibb.co.com/67XYtyGs/oq.jpg",
    ],
    description:
      "Listening to a patient verbalize multiple symptoms may seem overwhelming — particularly when you don’t know the exact diagnosis. The first step in the ",
    detailedDescription:
      "This type of assessment helps the nurse gain a more complete understanding of the patient’s current state and the potential reason behind the signs and symptoms they’re experiencing.",
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % template.images.length);
  const prevImage = () =>
    setCurrentIndex(
      (prev) => (prev - 1 + template.images.length) % template.images.length
    );

  return (
    <div>
      <DetailsHeader title={"Template Details"} back={"/profile/templates"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8 lg:my-12">
        {/* LEFT: Full image viewer */}
        <div className="flex items-start  w-full gap-2 p-4 md:p-0">
          {/* Action Buttons */}
          <div className="hidden md:flex flex-col gap-2 text-xs items-center">
            <Button
              type="default"
              icon={<DownloadOutlined />}
              style={actionBtnStyle}
            />
            Download
          </div>
          <div className="flex gap-2 relative ">
            {/* Image */}
            <AntImage
              src={template.images[currentIndex]}
              alt={template.title}
              style={{
                width: "auto",
                maxWidth: "100%",
                height: "100%",
                display: "block",
              }}
              preview={{
                src: template.images[currentIndex],
              }}
            />

            {/* Arrows */}
            {template.images.length > 1 && (
              <>
                <Button
                  type="text"
                  icon={<LeftOutlined />}
                  onClick={prevImage}
                  style={arrowStyleInside("left")}
                />
                <Button
                  type="text"
                  icon={<RightOutlined />}
                  onClick={nextImage}
                  style={arrowStyleInside("right")}
                />
              </>
            )}
          </div>
        </div>

        {/* RIGHT: Description */}
        <div
          style={{
            border: "1px solid #003877",
            borderRadius: 8,
            padding: 16,
            background: "#fff",
            width: "100%",
          }}
        >
          <Title level={4} style={{ marginBottom: 16, fontWeight: 600 }}>
            Description
          </Title>

          <Paragraph style={descStyle}>
            {template.description}
            <Text underline>nursing process</Text> assessment.
          </Paragraph>

          <Paragraph style={descStyle}>
            {template.detailedDescription}
          </Paragraph>

          <Paragraph style={descStyle}>
            In addition, the results of this assessment will be relayed to the
            health care provider (HCP) and will allow the nurse to create a{" "}
            <Text underline>nursing care plan</Text> that will guide the
            patient’s care. Therefore,{" "}
            <Text underline>accuracy is crucial</Text> to the well-being of your
            patient.
          </Paragraph>
        </div>
      </div>
    </div>
  );
}

/* Styles */
const arrowStyleInside = (side: "left" | "right") => ({
  position: "absolute" as const,
  [side]: -15,
  top: "50%",
  transform: "translateY(-50%)",
  color: "white",
  backgroundColor: "rgba(0,0,0,0.3)",
  border: "none",
  zIndex: 2,
});
const actionBtnStyle = {
  backgroundColor: "#F6F7F8",
  border: "1px solid #003877",
};

const descStyle = {
  fontSize: 14,
  lineHeight: 1.6,
  color: "#000000",
  marginBottom: 12,
};
