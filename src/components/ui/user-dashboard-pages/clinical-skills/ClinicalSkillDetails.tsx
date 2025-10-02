"use client";
import PageNavbar from "@/components/shared/user-dashboard/PageNavbar";
import {
  Alert,
  Card,
  Checkbox,
  ConfigProvider,
  Grid,
  Progress,
  Tabs,
} from "antd";
import TabPane from "antd/es/tabs/TabPane";
import { File } from "lucide-react";
import type { TabsProps } from "antd";
import MediaTab from "@/components/shared/MediaTab";
import NoteTab from "../study-notes-page/surgical-details-page/NoteTab";
import { Checklist } from "./CheckList";
import DetailsHeader from "@/components/shared/DetailsHeader";

export default function ClinicalsPageDetails() {
  const { lg } = Grid.useBreakpoint();
  const onChange = (key: string) => {
    // console.log(key);
  };

  const isMobile = globalThis.screen.width <= 768;

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Checklist",
      children: <Checklist />,
    },
    {
      key: "2",
      label: "Notes",
      children: <NoteTab />,
    },
    {
      key: "3",
      label: "Video",
      children: (
        <div className="sm:w-3/4 pb-2 ">
          <MediaTab />
        </div>
      ),
    },
  ];
  return (
    <section className="mb-8">
      {lg ? (
        <PageNavbar
          icon={<File />}
          title="Document Templates"
          subtitle="Professional nursing documentation  templates for clinical practice"
          isAiEnhanced={true}
        />
      ) : (
        <DetailsHeader
          back="/profile/clinicals"
          title="Blood Pressure Measurement"
          primaryBg={false}
        />
      )}

      <div className=" px-4 md:px-5">
        {/* Category Banner */}
        <Card
          className="mb-6"
          styles={{
            body: {
              padding: "16px",
              background: "linear-gradient(90deg, #003877 0%, #0068DD 100%)",
              borderRadius: "12px",
            },
          }}
        >
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="text-2xl">❤️</span>
              <div>
                <h3 className="text-lg font-semibold">Basic Skills</h3>
                <p className="text-sm opacity-80">20 Skills</p>
              </div>
            </div>
            <ConfigProvider
              theme={{
                components: {
                  Progress: {
                    circleTextColor: "#fff",
                  },
                },
              }}
            >
              <Progress
                type="circle"
                percent={87}
                size={60}
                strokeColor="#fff"
              />
            </ConfigProvider>
          </div>
        </Card>

        {/* Title */}
        <h3 className="text-lg font-semibold mt-5">
          Blood Pressure Measurement
        </h3>

        {/* Tabs */}

        <Tabs
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className={isMobile ? "mb-6 !font-semibold text-2xl" : ""}
          tabBarGutter={lg ? 300 : undefined}
        />
      </div>
    </section>
  );
}
