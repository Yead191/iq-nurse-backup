'use client';
import React, { useState } from 'react';
import { Avatar, Button, Input, Dropdown, Menu } from 'antd';
import { 
  HeartOutlined, 
  HeartFilled,
  MessageOutlined, 
  ShareAltOutlined, 
  MoreOutlined,
  SmileOutlined,
  SendOutlined
} from '@ant-design/icons';
import { CiBookmark } from 'react-icons/ci';
import PostBox, { IPost } from './PostBox';
import { demoPosts } from '@/data/community-data';


const StudentDiscussion: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>(demoPosts);

 
   
  return (
    <div className="max-w-4xl ">
      {posts.map((post) => (
        <PostBox key={post.id} post={post} setPosts={setPosts} />
      ))}
    </div>
  );
};

export default StudentDiscussion;