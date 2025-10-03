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
    icon: <HeartOutlined style={{ fontSize: 24, color: "#003877" }} />,
  },
  {
    id: 2,
    title: "Anticoagulant Medications",
    lastViewed: "Yesterday",
    icon: <ExperimentOutlined style={{ fontSize: 24, color: "#003877" }} />,
  },
  {
    id: 3,
    title: "Post-Op Care Plan",
    lastViewed: "2 days ago",
    icon: <FileTextOutlined style={{ fontSize: 24, color: "#003877" }} />,
  },
];

export default function RecentlyViewed() {
  return (
    <section>
      <SectionHeader title="Recently Viewed" className="mb-2 lg:mb-5 " />

      {/* Desktop Grid */}
      <div className="hidden md:block">
        <Row gutter={[16, 16]} justify="center">
          {recentlyViewed.map((item) => (
            <Col xs={24} sm={12} md={8} key={item.id}>
              <Card
                hoverable
                style={{
                  borderRadius: 12,
                  boxShadow: "4.24px 4.24px 30.77px 0px rgba(0, 0, 0, 0.1)",
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
            </Col>
          ))}
        </Row>
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
