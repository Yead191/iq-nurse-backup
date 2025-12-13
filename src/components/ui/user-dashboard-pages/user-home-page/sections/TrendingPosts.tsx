import React from "react";
import { Heart, MessageCircle } from "lucide-react";
import Image from "next/image";
import { SectionHeader } from "./SectionHeader";
import Link from "next/link";

const TrendingPosts = () => {
  const posts = [
    {
      id: 1,
      author: "Sarah Johnson",
      timeAgo: "2 hours ago",
      avatar:
        "https://i.ibb.co.com/XfVg4mVh/5bf4f2cd6ef0d8e21fc5e967af2260b9eb8a84f5.png",
      content:
        "Just finished my first week of clinicals in the ICU! Anyone have tips of managing time between charting and patient care?",
      likes: 24,
      comments: 8,
    },
    {
      id: 2,
      author: "Sarah Johnson",
      timeAgo: "2 hours ago",
      avatar:
        "https://i.ibb.co.com/Rkf8Zp5X/55d972a330f6a5d8c452399c871cbfd0ea6695ff.png",
      content:
        "Just finished my first week of clinicals in the ICU! Anyone have tips of managing time between charting and patient care?",
      likes: 24,
      comments: 8,
    },
  ];

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
        <SectionHeader title="Trending Community Posts" />
        <Link href="/profile/community" className="text-primary font-medium text-sm">View All</Link>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="flex gap-3">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-10 h-10 rounded-full  flex items-center justify-center">
                <Image
                  src={post.avatar}
                  width={40}
                  height={40}
                  alt="Avatar"
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            {/* Post Content */}
            <div className="flex-1 min-w-0">
              {/* Author and Time */}
              <div className="flex items-center gap-2 mb-2">
                <h3 className="font-medium text-gray-900 text-sm">
                  {post.author}
                </h3>
                <span className="text-gray-500 text-sm">{post.timeAgo}</span>
              </div>

              {/* Post Text */}
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {post.content}
              </p>

              {/* Engagement */}
              <div className="flex items-center gap-4">
                <button className="flex items-center gap-1 text-gray-500 hover:text-red-500 transition-colors">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-1 text-gray-500 hover:text-blue-500 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingPosts;
