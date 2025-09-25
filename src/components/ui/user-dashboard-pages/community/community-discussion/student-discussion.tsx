'use client';
import React, { useState } from 'react';

import PostBox, { IPost } from './PostBox';
import { demoPosts } from '@/data/community-data';


const StudentDiscussion: React.FC = () => {
  const [posts, setPosts] = useState<IPost[]>(demoPosts);

 
   
  return (
    <div className="h-screen overflow-y-scroll scroll-smooth">
      {posts.map((post) => (
        <PostBox key={post.id} post={post} setPosts={setPosts} />
      ))}
    </div>
  );
};

export default StudentDiscussion;