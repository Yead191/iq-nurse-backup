'use client';
import React, { useState } from 'react';
import { Avatar, Button, Input, Dropdown, Menu } from 'antd';
import { 
  HeartOutlined, 
  HeartFilled,
  MessageOutlined, 
  ShareAltOutlined, 
  MoreOutlined,
  SendOutlined
} from '@ant-design/icons';
import { CiBookmark } from 'react-icons/ci';
import { FaRegEye } from 'react-icons/fa';
import { AiOutlineLike } from 'react-icons/ai';
import { MdOutlineComment } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';

export interface IComment {
  id: number;
  user: string;
  username: string;
  avatar: string;
  content: string;
  timeAgo: string;
  likes: number;
  isLiked: boolean;
  replies: Reply[];
}

interface Reply {
  id: number;
  user: string;
  username: string;
  avatar: string;
  content: string;
  timeAgo: string;
  likes: number;
  isLiked: boolean;
}

export interface IPost {
  id: number;
  user: string;
  username: string;
  avatar: string;
  timeAgo: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
  bookmarks: number;
  isLiked: boolean;
  isBookmarked: boolean;
  tags: string[];
  commentsData: IComment[];
}


export default function PostBox({post,setPosts}: {post: IPost,setPosts: React.Dispatch<React.SetStateAction<IPost[]>>}) {
     const [newComment, setNewComment] = useState<{[key: number]: string}>({});
      const [newReply, setNewReply] = useState<{[key: string]: string}>({});
      const [showComments, setShowComments] = useState<{[key: number]: boolean}>({});
      const [showReplyInput, setShowReplyInput] = useState<{[key: string]: boolean}>({});
    
      const handleLikePost = (postId: number) => {
        setPosts(prev=>prev.map(post=>post.id===postId?{...post,isLiked:!post.isLiked,likes:post.isLiked?post.likes-1:post.likes+1}:post));
      };
    
      const handleBookmarkPost = (postId: number) => {
        setPosts(prev=>prev.map(post=>post.id===postId?{...post,isBookmarked:!post.isBookmarked}:post));
      };
    
      const handleAddComment = (postId: number) => {
        if (!newComment[postId]?.trim()) return;
        
        const comment: IComment = {
          id: Date.now(),
          user: 'You',
          username: 'your_username',
          avatar: '/api/placeholder/32/32',
          content: newComment[postId],
          timeAgo: 'now',
          likes: 0,
          isLiked: false,
          replies: []
        };
    
        setPosts(prev=>prev.map(post=>post.id===postId?{...post,commentsData:[...post.commentsData,comment],comments:post.comments+1}:post));
        
        setNewComment({ ...newComment, [postId]: '' });
      };
    
      const handleAddReply = (postId: number, commentId: number) => {
        const replyKey = `${postId}-${commentId}`;
        if (!newReply[replyKey]?.trim()) return;
        
        const reply: Reply = {
          id: Date.now(),
          user: 'You',
          username: 'your_username',
          avatar: '/api/placeholder/32/32',
          content: newReply[replyKey],
          timeAgo: 'now',
          likes: 0,
          isLiked: false
        };
    
        setPosts(prev=>prev.map(post=>post.id===postId?{...post,commentsData:post.commentsData.map(comment=>comment.id===commentId?{...comment,replies:[...comment.replies,reply]}:comment)}:post));
        
        setNewReply({ ...newReply, [replyKey]: '' });
        setShowReplyInput({ ...showReplyInput, [replyKey]: false });
      };
    
      const toggleComments = (postId: number) => {
        setShowComments({ ...showComments, [postId]: !showComments[postId] });
      };
    
      const toggleReplyInput = (postId: number, commentId: number) => {
        const key = `${postId}-${commentId}`;
        setShowReplyInput({ ...showReplyInput, [key]: !showReplyInput[key] });
      };
    
      const moreMenu = (
        <Menu>
          <Menu.Item key="save">Save post</Menu.Item>
          <Menu.Item key="hide">Hide post</Menu.Item>
          <Menu.Item key="report">Report</Menu.Item>
        </Menu>
      );
  return (
    <div key={post.id} className="bg-white mb-4 rounded-lg shadow-sm p-5">
          {/* Post Header */}
          <div className="flex items-center justify-between p-4 pb-3">
            <div className="flex items-center gap-1 !space-x-3">
              <Avatar size={40} src={post.avatar} />
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900">{post.user}</span>
                  <span className="text-gray-500 text-xs">@{post.username}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-500 text-sm">{post.timeAgo}</span>
                </div>
              </div>
            </div>
            <Dropdown overlay={moreMenu} trigger={['click']}>
              <Button type="text" icon={<MoreOutlined />} className="text-gray-400" />
            </Dropdown>
          </div>

          {/* Post Content */}
          <div className="px-4 pb-3">
            <p className="text-gray-900 text-sm leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
            <div className='flex items-center py-2.5 gap-3'>
                <span className='flex items-center text-sm px-3.5 py-1.5 rounded-md text-gray-500 bg-gray-50'>
                    <FaRegEye />
                    <span className=" text-xs ml-1">12k Views</span>
                </span>
                <span className='flex items-center text-sm px-3.5 py-1.5 rounded-md text-gray-500 bg-gray-50'>
                    <AiOutlineLike />
                    <span className=" text-xs ml-1">{post.likes} Likes</span>
                </span>
                <span className='flex items-center text-sm px-3.5 py-1.5 rounded-md text-gray-500 bg-gray-50'>
                    <MdOutlineComment />
                    <span className=" text-xs ml-1">{post.comments} Comments</span>
                </span>
                <span className='flex items-center text-sm px-3.5 py-1.5 rounded-md text-gray-500 bg-gray-50'>
                    <IoMdSend />
                    <span className=" text-xs ml-1">{post.shares} Shares</span>
                </span>
            </div>
            <div className="flex flex-wrap gap-2 mt-3">
              {post.tags.map((tag, index) => (
                <span key={index} className="text-xs bg-blue-200 text-blue-500 rounded-md p-2 hover:underline cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Post Actions */}
          <div className="flex items-center justify-between px-4 py-3 border-t border-gray-100">
            <div className="flex items-center space-x-6">
              <button
                onClick={() => handleLikePost(post.id)}
                className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors"
              >
                {post.isLiked ? (
                  <HeartFilled className="text-red-500" />
                ) : (
                  <HeartOutlined />
                )}
              </button>

              <button
                onClick={() => toggleComments(post.id)}
                className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors"
              >
                <MessageOutlined />
              </button>

              <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                <ShareAltOutlined />
              </button>
            </div>

            <button
              onClick={() => handleBookmarkPost(post.id)}
              className={`text-gray-600 hover:text-yellow-500 transition-colors ${
                post.isBookmarked ? 'text-yellow-500' : ''
              }`}
            >
              <CiBookmark />
            </button>
          </div>

          {/* Comments Section */}
          {showComments[post.id] && (
            <div className="border-t border-gray-100">
              {/* Add Comment */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex space-x-3">
                  <Avatar size={32} src="/api/placeholder/32/32" />
                  <div className="flex-1">
                    <div className="flex space-x-2">
                      <Input.TextArea
                        value={newComment[post.id] || ''}
                        onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })}
                        placeholder="Write a comment..."
                        rows={2}
                        className="flex-1 border-gray-200 rounded-lg"
                      />
                    </div>
                    <div className="flex justify-end mt-2">
                      <Button
                        type="primary"
                        size="small"
                        onClick={() => handleAddComment(post.id)}
                        disabled={!newComment[post.id]?.trim()}
                        className="bg-blue-600"
                      >
                        Comment
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments List */}
              <div className="max-h-96 overflow-y-auto">
                {post.commentsData.map((comment) => (
                  <div key={comment.id} className="p-4 border-b border-gray-50">
                    <div className="flex space-x-3">
                      <Avatar size={32} src={comment.avatar} />
                      <div className="flex-1">
                        <div className="bg-gray-100 rounded-2xl px-3 py-2">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-gray-900 text-sm">{comment.user}</span>
                            <span className="text-gray-500 text-xs">@{comment.username}</span>
                          </div>
                          <p className="text-gray-800 text-sm">{comment.content}</p>
                        </div>
                        
                        <div className="flex items-center space-x-4 mt-2 ml-1">
                          <span className="text-gray-500 text-xs">{comment.timeAgo}</span>
                          <button className="text-gray-500 text-xs hover:text-red-500">
                            Like ({comment.likes})
                          </button>
                          <button 
                            onClick={() => toggleReplyInput(post.id, comment.id)}
                            className="text-gray-500 text-xs hover:text-blue-500"
                          >
                            Reply
                          </button>
                        </div>

                        {/* Reply Input */}
                        {showReplyInput[`${post.id}-${comment.id}`] && (
                          <div className="mt-3 flex space-x-2">
                            <Avatar size={24} src="/api/placeholder/24/24" />
                            <div className="flex-1 flex space-x-2">
                              <Input
                                value={newReply[`${post.id}-${comment.id}`] || ''}
                                onChange={(e) => setNewReply({ ...newReply, [`${post.id}-${comment.id}`]: e.target.value })}
                                placeholder="Write a reply..."
                                className="flex-1"
                                onPressEnter={() => handleAddReply(post.id, comment.id)}
                              />
                              <Button
                                type="primary"
                                size="small"
                                icon={<SendOutlined />}
                                onClick={() => handleAddReply(post.id, comment.id)}
                                disabled={!newReply[`${post.id}-${comment.id}`]?.trim()}
                                className="bg-blue-600"
                              />
                            </div>
                          </div>
                        )}

                        {/* Replies */}
                        {comment.replies.length > 0 && (
                          <div className="mt-3 space-y-3">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="flex space-x-2">
                                <Avatar size={24} src={reply.avatar} />
                                <div className="flex-1">
                                  <div className="bg-gray-50 rounded-2xl px-3 py-2">
                                    <div className="flex items-center space-x-2 mb-1">
                                      <span className="font-medium text-gray-900 text-sm">{reply.user}</span>
                                      <span className="text-gray-500 text-xs">@{reply.username}</span>
                                    </div>
                                    <p className="text-gray-800 text-sm">{reply.content}</p>
                                  </div>
                                  <div className="flex items-center space-x-4 mt-1 ml-1">
                                    <span className="text-gray-500 text-xs">{reply.timeAgo}</span>
                                    <button className="text-gray-500 text-xs hover:text-red-500">
                                      Like ({reply.likes})
                                    </button>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
  )
}
