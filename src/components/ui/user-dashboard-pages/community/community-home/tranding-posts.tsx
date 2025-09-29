"use client";
import React from 'react';
import { Avatar, Button, Card } from 'antd';
import { HeartOutlined, MessageOutlined, HeartFilled } from '@ant-design/icons';

interface Post {
  id: number;
  author: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  isLiked?: boolean;
  avatar: string;
}

const TrendingCommunityPosts: React.FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      author: 'Sarah Johnson',
      timeAgo: '2 hours ago',
      content: 'Just finished my first week of clinicals in the ICU! Anyone have tips of managing time between charting and patient care?',
      likes: 24,
      comments: 8,
      isLiked: true,
      avatar: 'https://i.pinimg.com/originals/1d/f9/d4/1df9d49191b554fd08b35bc0164dae98.jpg'
    },
    {
      id: 2,
      author: 'Sarah Johnson',
      timeAgo: '2 hours ago',
      content: 'Just finished my first week of clinicals in the ICU! Anyone have tips of managing time between charting and patient care?',
      likes: 24,
      comments: 6,
      isLiked: true,
      avatar: 'https://image.shutterstock.com/shutterstock/photos/2180178057/display_1500/stock-photo-studio-portrait-photo-of-young-beautiful-asian-woman-in-formal-suit-dressing-with-confident-and-2180178057.jpg'
    }
  ];

  const handleLike = (postId: number) => {
    console.log(`Liked post ${postId}`);
  };

  const handleComment = (postId: number) => {
    console.log(`Comment on post ${postId}`);
  };

  return (
    <div className="max-w-5xl md:p-4 p-2 shadow-md border border-gray-200 rounded-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Trending Community Posts</h2>
        <Button type="link" href='/profile/community' className="text-blue-500 font-medium p-0">
          View All
        </Button>
      </div>

      {/* Posts */}
      <div className="!space-y-4">
        {posts.map((post) => (
          <Card
            key={post.id}
            className="bg-white rounded-xl !border-none hover:shadow-md  duration-200 md:!p-2 p-0"
          >
            {/* Post Header */}
            <div className="flex items-center mb-3 !gap-2.5">
              <Avatar
                size={40}
                src={post.avatar}
                className="mr-3"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 text-sm">
                  {post.author}
                </h4>
                <p className="text-xs text-gray-500">
                  {post.timeAgo}
                </p>
              </div>
            </div>

            {/* Post Content */}
            <div className="mb-4">
              <p className="text-gray-700 md:text-sm text-xs leading-relaxed">
                {post.content}
              </p>
            </div>

            {/* Post Actions */}
            <div className="flex items-center space-x-6">
              <button
                onClick={() => handleLike(post.id)}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors duration-200"
              >
                {post.isLiked ? (
                  <HeartFilled className="text-red-500" />
                ) : (
                  <HeartOutlined />
                )}
                <span className="text-sm font-medium">{post.likes}</span>
              </button>

              <button
                onClick={() => handleComment(post.id)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors duration-200"
              >
                <MessageOutlined />
                <span className="text-sm font-medium">{post.comments}</span>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingCommunityPosts;