import React, { useState } from 'react';
import { Avatar, Button, Input, Tabs, Image } from 'antd';
import { SendOutlined, PaperClipOutlined, SmileOutlined, MinusCircleOutlined } from '@ant-design/icons';

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
      user: 'Sarah Chen',
      initials: 'SC',
      content: 'Just voted! Also, I recorded a voice note explaining the cardiac cycle that might help with our upcoming exam. Its in the Voice Notes section.',
      time: '10:35 AM',
      isOwn: false,
      hasVoiceNote: true,
      hasImages: true
    },
    {
      id: 4,
      user: 'Sarah Chen',
      initials: 'SC',
      content: 'Just voted! Also, I recorded a voice note explaining the cardiac cycle that might help with our upcoming exam. Its in the Voice Notes section.',
      time: '10:35 AM',
      isOwn: false,
      hasVoiceNote: true,
      hasImages: true
    },
    {
      id: 4,
      user: 'Sarah Chen',
      initials: 'SC',
      content: 'Just voted! Also, I recorded a voice note explaining the cardiac cycle that might help with our upcoming exam. Its in the Voice Notes section.',
      time: '10:35 AM',
      isOwn: false,
      hasVoiceNote: true,
      hasImages: true
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
    <div className="w-[calc(100%-170px)]   relative pb-2">
      {/* Tabs Header */}


      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[calc(100vh-250px)]">
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

                {/* Voice Note */}
                {message.hasVoiceNote && (
                  <div className="mt-3 bg-blue-700 rounded-lg p-3 flex items-center gap-3">
                    <Avatar size={32} src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face" />
                    <div className="flex-1 flex items-center gap-2">
                      <Button type="text" className="text-white p-0">
                        <div className="w-4 h-4 border-l-2 border-white"></div>
                      </Button>
                      <div className="flex-1 h-8 bg-white bg-opacity-20 rounded flex items-center px-2">
                        <div className="w-full h-1 bg-white bg-opacity-40 rounded">
                          <div className="w-1/4 h-full bg-white rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-white opacity-80">
                      1:04 / 12:23
                    </div>
                  </div>
                )}

                {/* Images */}
                {message.hasImages && (
                  <div className="mt-3 grid grid-cols-2 gap-1 rounded-lg overflow-hidden">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=150&h=120&fit=crop"
                        alt="Shared image"
                        className="w-full h-20 object-cover"
                      />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=150&h=120&fit=crop"
                        alt="Shared image"
                        className="w-full h-20 object-cover"
                      />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1551076805-e1869033e561?w=150&h=120&fit=crop"
                        alt="Shared image"
                        className="w-full h-20 object-cover"
                      />
                    </div>
                    <div className="relative bg-gray-800 bg-opacity-50 flex items-center justify-center">
                      <span className="text-white font-medium">+15</span>
                    </div>
                  </div>
                )}
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
              className="rounded-full pr-12"
              style={{ paddingRight: '140px' }}
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
              <Button type="text" icon={<PaperClipOutlined />} size="small" />
              <Button type="text" icon={<SmileOutlined />} size="small" />
              <Button type="text" icon={<MinusCircleOutlined />} size="small" />
            </div>
          </div>

          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            className="rounded-full w-12 h-12 flex items-center justify-center"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;