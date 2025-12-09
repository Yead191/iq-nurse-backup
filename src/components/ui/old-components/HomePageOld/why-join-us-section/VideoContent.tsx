import React, { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export default function VideoContent() {
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
  return (
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

          <div className="relative aspect-video group">
            <video
              ref={videoRef}
              style={{ width: "100%", borderRadius: "0px 0px 8px" }}
              muted
              loop
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/assets/video/nurse_vid.mp4" type="video/mp4" />
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
  );
}
