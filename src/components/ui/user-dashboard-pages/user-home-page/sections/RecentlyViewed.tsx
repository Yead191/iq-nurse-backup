"use client";

import { Card, Typography, Row, Col } from "antd";
import {
  HeartOutlined,
  ExperimentOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import { SectionHeader } from "./SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const { Text } = Typography;

const recentlyViewed = [
  {
    id: 1,
    title: "Cardiovascular system Notes",
    lastViewed: "2 hours ago",
    icon: <HeartOutlined style={{ fontSize: 24, color: "#2C5F8D" }} />,
  },
  {
    id: 2,
    title: "Anticoagulant Medications",
    lastViewed: "Yesterday",
    icon: <ExperimentOutlined style={{ fontSize: 24, color: "#2C5F8D" }} />,
  },
  {
    id: 3,
    title: "Post-Op Care Plan",
    lastViewed: "2 days ago",
    icon: <FileTextOutlined style={{ fontSize: 24, color: "#2C5F8D" }} />,
  },
];

export default function RecentlyViewed() {
  return (
    <section>
      <SectionHeader title="Recently Viewed" className="mb-2 lg:mb-5 " />

      {/* Desktop Grid */}
      <div className="hidden md:block">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
          {recentlyViewed.map((item) => (
            <div
              key={item.id}
              className="w-full h-full flex flex-col justify-center rounded-xl shadow-[4px_4px_30px_rgba(0,0,0,0.1)] hover:shadow-lg transition-all duration-300 px-4 py-6 bg-white"
            >
              <div className="flex items-center gap-3">
                <div className="bg-[#02478D45] rounded-full p-3 flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-[16px]">{item.title}</p>
                  <p className="text-gray-500 text-sm">
                    Last Viewed: {item.lastViewed}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="block md:hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.2}
          style={{ paddingBottom: 20, paddingTop: 20 }}
        >
          {recentlyViewed.map((item) => (
            <SwiperSlide key={item.id}>
              <Card
                hoverable
                style={{
                  borderRadius: 12,
                  boxShadow: "4.24px 4.24px 30.77px 0px rgba(0, 0, 0, 0.1)",
                  minHeight: 120,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      backgroundColor: "#02478D45",
                      borderRadius: "50%",
                      padding: 12,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <Text style={{ fontWeight: 500, fontSize: "16px" }}>
                      {item.title}
                    </Text>
                    <br />
                    <Text type="secondary">Last Viewed: {item.lastViewed}</Text>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
