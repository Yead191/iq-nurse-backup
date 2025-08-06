"use client";
import React, { useEffect, useRef, useState } from "react";
import { Play, Check, Pause } from "lucide-react";
import Image from "next/image";
import { Grid } from "antd";

export default function WhyJoinUsSection() {
  const { lg, md } = Grid.useBreakpoint();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  const handleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (!video.paused) {
      video.pause();
      setIsPlaying(false);
    } else {
      video.play();
      setIsPlaying(true);
    }
  };

  const reasons = [
    "Est et in pharetra magna adipiscing ornare aliquam.",
    "Tellus arcu sed consequat ac velit ut eu blandit.",
    "Ullamcorper ornare in et egestas dolor orci.",
  ];
  return (
    <section
      style={{
        backgroundImage: `url('/assets/home-images/join-us-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: lg ? "right" : "bottom",
        backgroundSize: lg ? "50% 100%" : md ? "80%" : "95%",
      }}
      className="container mx-auto  lg:overflow-visible p-4 lg:p-20 mt-6 mb-12 lg:px-4 lg:pr-20"
    >
      <div className="relative ">
        <div className="grid lg:grid-cols-2 gap-12 items-center p-4 md:p-8 lg:p-[60px]  rounded-4xl shadow-xl">
          {/* Left Content */}
          <div className="space-y-8 overflow-hidden py-6">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold text-[#0F172A] mb-8">
                Why join us
              </h2>

              <div className="space-y-4">
                {reasons?.map((reason, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <Check className="w-5 h-5 text-green-500" />
                    </div>
                    <p className="text-[#0F172A] text-[18px] leading-relaxed">
                      {reason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <div className="relative">
            <div className="relative z-10">
              <div
                style={{
                  boxShadow:
                    "0px 0px 10px 0px rgba(0, 0, 0, 0.07), 0px 20px 25px -5px rgba(0, 0, 0, 0.1)",
                }}
                className="relative  rounded-2xl  overflow-hidden"
              >
                {/* mac-like header */}
                <div className="bg-gray-50 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Video Content */}
                <div className="relative aspect-video group">
                  <video
                    ref={videoRef}
                    style={{ width: "100%", borderRadius: "0px 0px 8px" }}
                    muted
                    loop
                    className="absolute inset-0 w-full h-full object-cover"
                  >
                    <source
                      src="/assets/video/nurse_vid.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>

                  {/* Play/Pause button overlay */}

                  <div
                    onClick={handleVideo}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="opacity-0 group-hover:opacity-100 inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-90 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-200 cursor-pointer">
                      {isPlaying ? (
                        <Pause className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" />
                      ) : (
                        <Play className="w-6 h-6 text-gray-800 group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
