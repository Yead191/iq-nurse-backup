import React, { useState } from 'react';
import { Avatar, Button, Input } from 'antd';
import { PaperClipOutlined, SmileOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { IoIosSend } from 'react-icons/io';
import { FaPlay, FaCheck } from "react-icons/fa";
import { AiFillAudio } from 'react-icons/ai';
import { MdOutlineKeyboardVoice } from 'react-icons/md';

// Animated waveform SVG for audio message
const Waveform = () => {
  const bars = [12, 20, 8, 24, 16, 4, 12, 20, 8, 24, 16, 4, 12, 20, 8, 24, 16, 4, 12, 20];
  return (
    <svg width="200" height="32" viewBox="0 0 200 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-2">
      {bars.map((height, i) => (
        <rect
          key={i}
          x={i * 10}
          y={(32 - height) / 2}
          width="3"
          height={height}
          rx="1.5"
          fill="currentColor"
          opacity={0.4 + (i % 3) * 0.2}
        />
      ))}
    </svg>
  );
};

// Image Gallery Component
const ImageGallery = ({ images }: { images: string[] }) => {
  const displayImages = images.slice(0, 4);
  const remaining = images.length - 4;

  return (
    <div className="grid grid-cols-2 gap-2 w-full max-w-sm">
      {displayImages.map((img, idx) => (
        <div
          key={idx}
          className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200"
        >
          <img
            src={img}
            alt={`Gallery ${idx + 1}`}
            className="w-full h-full object-cover"
          />
          {idx === 3 && remaining > 0 && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white text-2xl font-semibold">+{remaining}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const AudioMessage = ({ isOwn, avatar }: { isOwn: boolean; avatar?: string }) => (

  // For demonstration, let's use realistic duration and time values.
  // We'll use 0:37 as the audio duration and 10:42 AM as the message time.
  <div
    className={`flex items-center rounded-2xl px-4 py-3 ${isOwn ? 'bg-[#2d6a8e] text-white' : 'bg-[#457c9e] text-white'
      } max-w-md shadow-lg`}
  >
    <div className="relative mr-3 flex-shrink-0">
      <Avatar
        src={avatar ? avatar : "https://randomuser.me/api/portraits/men/32.jpg"}
        size={44}
        className="border border-gray-200"
      />

      <AiFillAudio className="text-[#a5a3a3] text-lg  absolute -right-2 bottom-0" />
    </div>
    <button className="w-10 h-10 rounded-full flex items-center justify-center transition mr-3 flex-shrink-0">
      <FaPlay className="text-white text-lg cursor-pointer" />
    </button>
    <div className="flex-1 min-w-0">
      <Waveform />
      <div className="flex justify-between items-center gap-2 ml-3 flex-shrink-0">
        <span className="text-sm font-medium">0:37</span>
        <div className='flex items-center gap-2'>
          <span className="text-xs opacity-70">10:42 AM</span>
          ✔️
        </div>
      </div>
    </div>
  </div>
);

const ChatInterface = () => {
  const [newMessage, setNewMessage] = useState('');

  const messages = [
    {
      id: 1,
      user: 'Sarah Chen',
      initials: 'SC',
      content: 'Hey everyone! I just uploaded some new flashcards on respiratory assessment. Check them out when you get a chance!',
      time: '10:35 AM',
      isOwn: false,
      type: 'text'
    },
    {
      id: 2,
      user: 'Michael Johnson',
      initials: 'MJ',
      content: 'Thanks! I\'ve been struggling with the breath sounds identification. This will be really helpful.',
      time: '10:42 AM',
      isOwn: false,
      type: 'text'
    },
    {
      id: 3,
      user: 'You',
      initials: 'YU',
      images: [
        'https://images.unsplash.com/photo-1540553016722-983e48a2cd10?w=400',
        'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=400',
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400',
      ],
      content: 'Here are some photos, you were asking about. 😊',
      time: '3 days ago',
      isOwn: true,
      type: 'image'
    },
    {
      id: 4,
      user: 'Emily Davis',
      initials: 'ED',
      content: 'Could you help me with our upcoming exam. It\'s in the Voice Notes section.',
      time: '10:35 AM',
      isOwn: false,
      type: 'text'
    },
    {
      id: 5,
      user: 'You',
      initials: 'YU',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      content: '',
      time: '12:23',
      isOwn: true,
      type: 'audio'
    }
  ];

  const handleSend = () => {
    if (newMessage.trim()) {
      // Handle sending message
      console.log('Sending:', newMessage);
      setNewMessage('');
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="max-h-[calc(100vh-250px)] relative pb-2">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100vh-200px)]">
        {messages.map((message, index) => (
          <div key={message.id}>
            <div
              className={`flex gap-3 ${message.isOwn ? 'justify-end' : 'justify-start'}`}
            >
              {/* Avatar for non-own messages */}
              {!message.isOwn && message.type !== 'audio' && (
                <Avatar
                  className="bg-blue-600 text-white font-medium flex-shrink-0"
                  size={40}
                >
                  {message.initials}
                </Avatar>
              )}

              <div className={`max-w-md ${message.isOwn ? 'order-first' : ''}`}>
                {/* Username for non-own text messages */}
                {!message.isOwn && message.type === 'text' && (
                  <div className="text-sm font-medium text-gray-700 mb-1">
                    {message.user}
                  </div>
                )}

                {/* Message content based on type */}
                {message.type === 'text' ? (
                  <div
                    className={`p-3 rounded-lg ${message.isOwn
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-gray-200'
                      }`}
                  >
                    <div className="text-sm leading-relaxed">
                      {message.content}
                    </div>
                  </div>
                ) : message.type === 'audio' ? (
                  <AudioMessage isOwn={message.isOwn} avatar={message.avatar} />
                ) : message.type === 'image' ? (
                  <div className="space-y-2">
                    <ImageGallery images={message.images || []} />
                    {message.content && (
                      <div
                        className={`p-3 rounded-lg ${message.isOwn
                          ? 'bg-blue-600 text-white'
                          : 'bg-white border border-gray-200'
                          }`}
                      >
                        <div className="text-sm leading-relaxed">
                          {message.content}
                        </div>
                      </div>
                    )}
                  </div>
                ) : null}

                {/* Time for text messages */}
                {message.type === 'text' && (
                  <div className="text-xs text-gray-500 mt-1 text-right">
                    {message.time}
                  </div>
                )}
              </div>

              {/* Avatar for own messages */}
              {message.isOwn && message.type !== 'audio' && (
                <Avatar
                  className="bg-blue-600 text-white font-medium flex-shrink-0"
                  size={40}
                >
                  {message.initials}
                </Avatar>
              )}
            </div>

            {/* Time separator after image message */}
            {message.type === 'image' && (
              <div className="text-center my-4">
                <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                  {message.time}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div
        className="bg-white p-4 sticky bottom-0"
        style={{
          bottom:
            typeof window !== "undefined" && window.innerWidth < 650
              ? "83px"
              : "0px",
        }}
      >
        <div className="flex items-end gap-3">
          <div className="flex-1 relative">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your messages..."
              size="large"
              className="!rounded-full pr-12"
              style={{ paddingRight: '140px' }}
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <Button type="text" icon={<PaperClipOutlined className='text-lg' />} size="middle" />
              <Button type="text" icon={<SmileOutlined className='text-lg' />} size="middle" />
              <Button type="text" icon={<MdOutlineKeyboardVoice className='text-lg' />} size="middle" />
            </div>
          </div>

          <Button
            icon={<IoIosSend />}
            onClick={handleSend}
            className="rounded-full w-12 h-12 flex items-center !text-white !bg-primary justify-center"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;