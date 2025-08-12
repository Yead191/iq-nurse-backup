import { Play } from "lucide-react";

export default function MediaSection() {
  return (
    <div className="space-y-8">
      {/* Video */}
      <div className="relative bg-black rounded-lg overflow-hidden">
        <video style={{ width: "100%", borderRadius: "8px" }} controls autoPlay>
          <source src="/assets/video/heart_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Image */}
      <div className="">
        <img
          src="https://i.ibb.co.com/CpRX0XB1/f612a1bef42e4c66c9ae53562b3b4ebb7db86c8d.png"
          alt="Heart anatomy diagram"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}
