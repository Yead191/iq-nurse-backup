import React, { useState } from 'react';
import { Avatar, Button, Input, Tabs, Image } from 'antd';
import { SendOutlined, PaperClipOutlined, SmileOutlined, MinusCircleOutlined } from '@ant-design/icons';
import { IoIosSend } from 'react-icons/io';

const ChatInterface = () => {
  const [newMessage, setNewMessage] = useState('');

  const messages = [
    {
      id: 1,
      user: 'Sarah Chen',
      initials: 'SC',
      content: 'Hey everyone! I just uploaded some new flashcards on respiratory assessment. Check them out when you get a chance!',
      time: '10:35 AM',
      isOwn: false
    },
    {
      id: 2,
      user: 'Michael Johnson',
      initials: 'SC',
      content: 'Thanks Taylor! I\'ve been struggling with the breath sounds identification. This will be really helpful.',
      time: '10:35 AM',
      isOwn: false
    },
    {
      id: 3,
      user: 'You',
      initials: 'SC',
      content: 'I created a poll about our next study session. Please vote when you can so we can find a time everyone!',
      time: '10:35 AM',
      isOwn: true
    },
    {
      id: 4,
      user: 'Emily Davis',
      initials: 'ED',
      content: 'I found some great resources on cardiac assessment techniques. Would anyone like me to share them?',
      time: '11:15 AM',
      isOwn: false
    },
    {
      id: 5,
      user: 'James Wilson',
      initials: 'JW',
      content: 'Just finished my clinical rotation in the ICU. Let me know if anyone wants to discuss case studies!',
      time: '11:45 AM',
      isOwn: false
    },
    {
      id: 6,
      user: 'Emily Davis',
      initials: 'ED',
      content: 'I found some great resources on cardiac assessment techniques. Would anyone like me to share them?',
      time: '11:15 AM',
      isOwn: false
    },
    {
      id: 7,
      user: 'James Wilson',
      initials: 'JW',
      content: 'Just finished my clinical rotation in the ICU. Let me know if anyone wants to discuss case studies!',
      time: '11:45 AM',
      isOwn: false
    },
    {
      id: 8,
      user: 'Emily Davis',
      initials: 'ED',
      content: 'I found some great resources on cardiac assessment techniques. Would anyone like me to share them?',
      time: '11:15 AM',
      isOwn: true
    },
    {
      id: 9,
      user: 'James Wilson',
      initials: 'JW',
      content: 'Just finished my clinical rotation in the ICU. Let me know if anyone wants to discuss case studies!',
      time: '11:45 AM',
      isOwn: true
    },
    {
      id: 10,
      user: 'James Wilson',
      initials: 'JW',
      content: 'Just finished my clinical rotation in the ICU. Let me know if anyone wants to discuss case studies!',
      time: '11:45 AM',
      isOwn: false
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
    <div className="max-h-[calc(100vh-250px)]  relative pb-2 ">
      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[calc(100vh-200px)] ">
        {messages.map((message) => (
          <div key={message.id} className={`flex gap-3 ${message.isOwn ? 'justify-end' : 'justify-start'}`}>
            {!message.isOwn && (
              <Avatar
                className="bg-blue-600 text-white font-medium"
                size={40}
              >
                {message.initials}
              </Avatar>
            )}

            <div className={`max-w-md ${message.isOwn ? 'order-first' : ''}`}>
              {!message.isOwn && (
                <div className="text-sm font-medium text-gray-700 mb-1">
                  {message.user}
                </div>
              )}

              <div className={`p-3 rounded-lg ${message.isOwn
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-200'
                }`}>
                <div className="text-sm leading-relaxed">
                  {message.content}
                </div>
              </div>

              <div className="text-xs text-gray-500 mt-1 text-right">
                {message.time}
              </div>
            </div>

            {message.isOwn && (
              <Avatar
                className="bg-blue-600 text-white font-medium"
                size={40}
              >
                {message.initials}
              </Avatar>
            )}
          </div>
        ))}

        {/* Time separator */}
        <div className="text-center">
          <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
            3 days ago
          </span>
        </div>
      </div>

      {/* Input Area */}
      <div className="bg-white p-4 -bottom-2 sticky  ">
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
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <Button type="text" icon={<PaperClipOutlined />} size="small" />
              <Button type="text" icon={<SmileOutlined />} size="small" />
              <Button type="text" icon={<MinusCircleOutlined />} size="small" />
            </div>
          </div>

          <Button
            icon={<IoIosSend  />}
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