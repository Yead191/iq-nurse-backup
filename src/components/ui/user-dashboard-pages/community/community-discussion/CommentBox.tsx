import { Avatar, Button, Input } from 'antd'
import React, { useState } from 'react'
import { IPost } from './PostBox'

import {  SendOutlined} from '@ant-design/icons';
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
export default function CommentBox({post,setPosts,showComments,setShowComments}:{post:IPost,setPosts:React.Dispatch<React.SetStateAction<IPost[]>>,showComments:any,setShowComments:React.Dispatch<React.SetStateAction<any>>,}) {
      const [newComment, setNewComment] = useState<{[key: number]: string}>({});
      const [newReply, setNewReply] = useState<{[key: string]: string}>({});
      const [showReplyInput, setShowReplyInput] = useState<{[key: string]: boolean}>({});
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
      
  return (
    <div>
           {showComments[post.id] && (
        <div className="border-t border-gray-100">
          {/* Add Comment */}
          <div className="p-2.5 xs:p-3 sm:p-4 border-b border-gray-100">
            <div className="flex space-x-2 xs:space-x-3">
              <Avatar size={28} className="xs:!w-8 xs:!h-8 flex-shrink-0" src="/api/placeholder/32/32" />
              <div className="flex-1 min-w-0">
                <Input.TextArea
                  value={newComment[post.id] || ''}
                  onChange={(e) => setNewComment({ ...newComment, [post.id]: e.target.value })}
                  placeholder="Write a comment..."
                  rows={2}
                  className="flex-1 border-gray-200 rounded-lg text-xs xs:text-sm"
                />
                <div className="flex justify-end mt-2">
                  <Button
                    type="primary"
                    size="small"
                    onClick={() => handleAddComment(post.id)}
                    disabled={!newComment[post.id]?.trim()}
                    className="bg-blue-600 text-xs xs:text-sm"
                  >
                    Comment
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Comments List */}
          <div className="max-h-80 xs:max-h-96 overflow-y-auto">
            {post.commentsData.map((comment) => (
              <div key={comment.id} className="p-2.5 xs:p-3 sm:p-4 border-b border-gray-50">
                <div className="flex space-x-2 xs:space-x-3">
                  <Avatar size={28} className="xs:!w-8 xs:!h-8 flex-shrink-0" src={comment.avatar} />
                  <div className="flex-1 min-w-0">
                    <div className="bg-gray-100 rounded-2xl px-2.5 xs:px-3 py-1.5 xs:py-2">
                      <div className="flex items-center space-x-1.5 xs:space-x-2 mb-1">
                        <span className="font-medium text-gray-900 text-xs xs:text-sm truncate">{comment.user}</span>
                        <span className="text-gray-500 text-[10px] xs:text-xs truncate">@{comment.username}</span>
                      </div>
                      <p className="text-gray-800 text-xs xs:text-sm break-words">{comment.content}</p>
                    </div>
                    
                    <div className="flex items-center space-x-3 xs:space-x-4 mt-1.5 xs:mt-2 ml-1">
                      <span className="text-gray-500 text-[10px] xs:text-xs">{comment.timeAgo}</span>
                      <button className="text-gray-500 text-[10px] xs:text-xs hover:text-red-500">
                        Like ({comment.likes})
                      </button>
                      <button 
                        onClick={() => toggleReplyInput(post.id, comment.id)}
                        className="text-gray-500 text-[10px] xs:text-xs hover:text-blue-500"
                      >
                        Reply
                      </button>
                    </div>

                    {/* Reply Input */}
                    {showReplyInput[`${post.id}-${comment.id}`] && (
                      <div className="mt-2 xs:mt-3 flex space-x-1.5 xs:space-x-2">
                        <Avatar size={20} className="xs:!w-6 xs:!h-6 flex-shrink-0" src="/api/placeholder/24/24" />
                        <div className="flex-1 flex space-x-1.5 xs:space-x-2 min-w-0">
                          <Input
                            value={newReply[`${post.id}-${comment.id}`] || ''}
                            onChange={(e) => setNewReply({ ...newReply, [`${post.id}-${comment.id}`]: e.target.value })}
                            placeholder="Write a reply..."
                            className="flex-1 text-xs xs:text-sm"
                            size="small"
                            onPressEnter={() => handleAddReply(post.id, comment.id)}
                          />
                          <Button
                            type="primary"
                            size="small"
                            icon={<SendOutlined className="text-xs" />}
                            onClick={() => handleAddReply(post.id, comment.id)}
                            disabled={!newReply[`${post.id}-${comment.id}`]?.trim()}
                            className="bg-blue-600 !px-2 xs:!px-3"
                          />
                        </div>
                      </div>
                    )}

                    {/* Replies */}
                    {comment.replies.length > 0 && (
                      <div className="mt-2 xs:mt-3 space-y-2 xs:space-y-3">
                        {comment.replies.map((reply) => (
                          <div key={reply.id} className="flex space-x-1.5 xs:space-x-2">
                            <Avatar size={20} className="xs:!w-6 xs:!h-6 flex-shrink-0" src={reply.avatar} />
                            <div className="flex-1 min-w-0">
                              <div className="bg-gray-50 rounded-2xl px-2.5 xs:px-3 py-1.5 xs:py-2">
                                <div className="flex items-center space-x-1.5 xs:space-x-2 mb-1">
                                  <span className="font-medium text-gray-900 text-xs xs:text-sm truncate">{reply.user}</span>
                                  <span className="text-gray-500 text-[10px] xs:text-xs truncate">@{reply.username}</span>
                                </div>
                                <p className="text-gray-800 text-xs xs:text-sm break-words">{reply.content}</p>
                              </div>
                              <div className="flex items-center space-x-3 xs:space-x-4 mt-1 ml-1">
                                <span className="text-gray-500 text-[10px] xs:text-xs">{reply.timeAgo}</span>
                                <button className="text-gray-500 text-[10px] xs:text-xs hover:text-red-500">
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
