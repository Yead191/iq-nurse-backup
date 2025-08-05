import React from "react";
import { Play, Check } from "lucide-react";
import Image from "next/image";

export default function WhyJoinUsSection() {
  return (
    <section
      style={{
        backgroundImage: `url('/assets/home-images/join-us-bg.png')`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
      className="container mx-auto py-20 overflow-visible my-12"
    >
      <div className="relative ">
        <div className="grid lg:grid-cols-2 gap-12 items-center  p-8 rounded-lg shadow-lg">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Why join us
              </h2>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Est et in pharetra magna adipiscing ornare aliquam.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Tellus arcu sed consequat ac velit ut eu blandit.
                  </p>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-5 h-5 text-green-500" />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Ullamcorper ornare in et egestas dolor orci.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Video Preview */}
          <div className="relative">
            <div className="relative z-10">
              {/* Video Container with rounded corners and shadow */}
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* Browser-like header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Video Content */}
                <div className="relative aspect-video">
                  {/* Background Image */}
                  <Image
                    src="/assets/home-images/join-us.jpg"
                    alt="join-us"
                    className="absolute inset-0 w-full h-full object-cover"
                    height={310}
                    width={540}
                  />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-90 rounded-full shadow-lg hover:bg-opacity-100 transition-all duration-200 cursor-pointer group">
                      <Play className="w-6 h-6 text-gray-800 ml-1 group-hover:scale-110 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration - blue diamond behind video */}
            {/* <div className="absolute -top-8 -right-8 w-24 h-24 bg-blue-600 transform rotate-45 opacity-20 z-0"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
