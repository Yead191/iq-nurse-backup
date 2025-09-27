import React from 'react';
import { DashboardCardData, DiseaseTemplatesData, RecentMapData } from '@/data/contentMap';
import Card from '../Card';
import RecentMapCard from '../RecentMapCard';
import DiseaseTemplatesCard from '../DiseaseTemplatesCard';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Dashboard = () => {
    const shouldCenterAndLoop = RecentMapData?.length > 4;

    return (
        <div className='flex flex-col gap-8 pb-10'>
            {/* Dashboard Cards */}
            <div className='bg-[#F5F7FA] rounded-lg shadow w-full p-5' style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <div className='w-full flex lg:flex-row flex-col items-center gap-4'>
                    {DashboardCardData?.map((value, index) => (
                        <Card key={index} items={value} />
                    ))}
                </div>
            </div>

            {/* Recent Maps */}
            <div className='bg-[#F5F7FA] rounded-lg shadow w-full p-5' style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <div className='flex items-center justify-between pb-5'>
                    <p className='text-[16px] font-medium text-[#000000]'>Recent Maps</p>
                    <p className='text-[#003877]'>View all</p>
                </div>

                <div>
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        centeredSlides={shouldCenterAndLoop}
                        loop={shouldCenterAndLoop}
                        autoplay={shouldCenterAndLoop ? {
                            delay: 8000,
                            disableOnInteraction: false,
                        } : false}
                        pagination={{
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 12,
                            },
                        }}
                        className="w-full flex items-center justify-center swiper-container"
                    >
                        {RecentMapData?.map((value, index) => (
                            <SwiperSlide key={index} className="mx-auto w-full  h-full pb-3">
                                <RecentMapCard key={index} value={value} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            {/* Disease Templates */}
            <div className='bg-[#F5F7FA] rounded-lg shadow w-full p-5' style={{ boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)" }}>
                <div className='flex items-center justify-between pb-5'>
                    <p className='text-[16px] font-medium text-[#000000]'>Disease Templates</p>
                    <p className='text-[#003877]'>View all</p>
                </div>

                {/* Disease Templates Slider */}
                <div>
                    <Swiper
                        modules={[Autoplay, Navigation, Pagination]}
                        spaceBetween={10}
                        slidesPerView={1}
                        centeredSlides={shouldCenterAndLoop}
                        loop={shouldCenterAndLoop}
                        autoplay={shouldCenterAndLoop ? {
                            delay: 8000,
                            disableOnInteraction: false,
                        } : false}
                        pagination={{
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet",
                            bulletActiveClass: "swiper-pagination-bullet-active",
                        }}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 5,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 10,
                            },
                        }}
                        className="w-full flex items-center justify-center swiper-container"
                    >
                        {DiseaseTemplatesData?.map((value, index) => (
                            <SwiperSlide key={index} className="mx-auto w-full h-full pb-3">
                                <DiseaseTemplatesCard key={index} items={value} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
