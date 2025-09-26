"use client";

import { Heart, MessageCircle } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { instagramPosts } from "@/data/instagramData";

export default function StudyInstagramSection() {
  return (
    <section
      style={{
        boxShadow: "4px 4px 29px 0px rgba(0, 0, 0, 0.14)",
        borderRadius: 12,
      }}
      className="my-8 p-4 lg:p-5 py-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <SectionHeader title="Nursing Study Instagram" />
        <a href="#" className="text-primary font-medium text-xs md:text-sm">
          Follow @iqnurse_edu
        </a>
      </div>

      {/* Instagram Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {instagramPosts?.map((post) => (
          <div key={post?.id} className="flex flex-col">
            {/* Image Container */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 cursor-pointer group">
              <img
                src={post?.image || "/placeholder.svg"}
                alt={post?.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Hover Overlay with Engagement Stats */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <div className="flex items-center space-x-6 text-white">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-6 h-6 fill-white" />
                    <span className="font-semibold text-lg">{post?.likes}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-6 h-6 fill-white" />
                    <span className="font-semibold text-lg">
                      {post?.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Caption */}
            <p className="mt-3 text-sm text-gray-700 leading-relaxed">
              {post?.caption}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
