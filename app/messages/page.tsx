'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import DashboardLayout from '../components/layout/DashboardLayout';

interface Message {
  id: string;
  sender: {
    name: string;
    company: string;
    avatar?: string;
  };
  content: string;
  timestamp: string;
  isRead: boolean;
  attachments?: {
    name: string;
    type: string;
    size: string;
  }[];
  thread?: {
    id: string;
    subject: string;
    messageCount: number;
  };
}

export default function MessagesPage() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [activeTab, setActiveTab] = useState<string>('inbox');
  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  useEffect(() => {
    // Simulate API call to get messages
    const fetchMessages = async () => {
      setIsLoading(true);
      try {
        // In a real app, this would be an API call
        await new Promise(resolve => setTimeout(resolve, 800));
        
        // Mock data
        const mockMessages: Message[] = [
          {
            id: '1',
            sender: {
              name: 'Sarah Johnson',
              company: 'EcoShop',
              avatar: '/profile-pics/sarah.jpg'
            },
            content: 'Hi there! I wanted to follow up on our meeting last week. We're very interested in your inventory management solution and would like to schedule a demo for our team. When would be a good time for you?',
            timestamp: '2025-06-04T10:30:00',
            isRead: false,
            thread: {
              id: 'thread-1',
              subject: 'Follow-up on our meeting',
              messageCount: 3
            }
          },
          {
            id: '2',
            sender: {
              name: 'Michael Chen',
              company: 'TechMart',
              avatar: '/profile-pics/michael.jpg'
            },
            content: 'Thank you for sending over the proposal. I've reviewed it with my team and we have a few questions about the implementation timeline. Could you clarify how long the initial setup would take? Also, we're wondering about the training process for our staff.',
            timestamp: '2025-06-03T15:45:00',
            isRead: true,
            thread: {
              id: 'thread-2',
              subject: 'Questions about your proposal',
              messageCount: 5
            }
          },
          {
            id: '3',
            sender: {
              name: 'Emma Wilson',
              company: 'GreenRetail',
              avatar: '/profile-pics/emma.jpg'
            },
            content: 'I'm attaching the sustainability requirements document we discussed during our meeting. Please review and let me know if your products meet these criteria. We're particularly interested in the energy efficiency ratings.',
            timestamp: '2025-06-02T09:15:00',
            isRead: true,
            attachments: [
              {
                name: 'Sustainability_Requirements.pdf',
                type: 'PDF',
                size: '2.4 MB'
              }
            ],
            thread: {
              id: 'thread-3',
              subject: 'Sustainability requirements',
              messageCount: 2
            }
          },
          {
            id: '4',
            sender: {
              name: 'David Park',
              company: 'Urban Gadgets',
              avatar: '/profile-pics/david.jpg'
            },
            content: 'Just wanted to confirm our meeting tomorrow at 3 PM. I'll be bringing our CTO along as he's interested in the technical aspects of your solution. Looking forward to it!',
            timestamp: '2025-06-01T16:20:00',
            isRead: true,
            thread: {
              id: 'thread-4',
              subject: 'Meeting confirmation',
              messageCount: 1
            }
          },
          {
            id: '5',
            sender: {
              name: 'Lisa Rodriguez',
              company: 'NatureTech',
              avatar: '/profile-pics/lisa.jpg'
            },
            content: 'I've reviewed the partnership agreement and everything looks good from our end. I've attached the signed document. When can we expect to receive your countersigned copy?',
            timestamp: '2025-05-30T11:05:00',
            isRead: false,
            attachments: [
              {
                name: 'Signed_Agreement.pdf',
                type: 'PDF',
                size: '1.8 MB'
              }
            ],
            thread: {
              id: 'thread-5',
              subject: 'Partnership agreement',
              messageCount: 4
            }
          },
          {
            id: '6',
            sender: {
              name: 'Robert Taylor',
              company: 'FutureMart',
              avatar: '/profile-pics/robert.jpg'
            },
            content: 'We've decided to go with another vendor for this project. Thank you for your time and detailed proposal. We'll keep your information on file for future opportunities.',
            timestamp: '2025-05-28T14:30:00',
            isRead: true,
            thread: {
              id: 'thread-6',
              subject: 'Re: Your proposal',
              messageCount: 7
            }
          },
          {
            id: '7',
            sender: {
              name: 'Jennifer Adams',
              company: 'TechHome',
              avatar: '/profile-pics/jennifer.jpg'
            },
            content: 'I'm interested in learning more about your smart home integration capabilities. Do you have any case studies or examples of similar implementations you could share?',
            timestamp: '2025-05-25T10:15:00',
            isRead: true,
            thread: {
              id: 'thread-7',
              subject: 'Smart home integration inquiry',
              messageCount: 2
            }
          }
        ];
        
        setMessages(mockMessages);
      } catch (error) {
        console.error('Error fetching messages:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchMessages();
  }, []);

  const filteredMessages = messages.filter(message => {
    // Filter by search query
    if (searchQuery && !message.sender.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !message.sender.company.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !message.content.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !(message.thread && message.thread.subject.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false;
    }
    
    // Filter by tab
    if (activeTab === 'unread' && message.isRead) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    // Sort by timestamp (newest first)
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) {
      // Today - show time
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInDays === 1) {
      // Yesterday
      return 'Yesterday';
    } else if (diffInDays < 7) {
      // Within a week - show day name
      return date.toLocaleDateString([], { weekday: 'long' });
    } else {
      // Older - show date
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    }
  };

  const handleMessageClick = (message: Message) => {
    setSelectedMessage(message);
    
    // Mark as read if it wasn't already
    if (!message.isRead) {
      setMessages(prevMessages => 
        prevMessages.map(m => 
          m.id === message.id ? { ...m, isRead: true } : m
        )
      );
    }
  };

  const handleComposeMessage = () => {
    // In a real app, this would open a compose message form
    alert('This would open a compose message form in a real app');
  };

  return (
    <DashboardLayout>
      <div className="p-4 sm:p-6 md:p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A4C]">Messages</h1>
            <p className="text-gray-600 mt-1">
              Communicate with your business connections
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <button 
              onClick={handleComposeMessage}
              className="px-4 py-2 bg-[#1A4A4C] text-white rounded-md hover:bg-[#143638] transition-colors"
            >
              Compose Message
            </button>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#1A4A4C]"></div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Sidebar */}
              <div className="md:col-span-1 border-r border-gray-200">
                <div className="p-4 border-b border-gray-200">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search messages..."
                      className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-[#1A4A4C] focus:border-[#1A4A4C]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <div className="absolute left-3 top-2.5">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="border-b border-gray-200">
                  <nav className="flex" aria-label="Tabs">
                    <button
                      onClick={() => setActiveTab('inbox')}
                      className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                        activeTab === 'inbox'
                          ? 'border-[#1A4A4C] text-[#1A4A4C]'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Inbox
                      <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                        {messages.length}
                      </span>
                    </button>
                    <button
                      onClick={() => setActiveTab('unread')}
                      className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm ${
                        activeTab === 'unread'
                          ? 'border-[#1A4A4C] text-[#1A4A4C]'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                      }`}
                    >
                      Unread
                      <span className="ml-2 bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs">
                        {messages.filter(m => !m.isRead).length}
                      </span>
                    </button>
                  </nav>
                </div>
                
                <div className="overflow-y-auto h-[calc(100vh-20rem)]">
                  {filteredMessages.length === 0 ? (
                    <div className="p-4 text-center">
                      <p className="text-gray-500">No messages found</p>
                    </div>
                  ) : (
                    <ul className="divide-y divide-gray-200">
                      {filteredMessages.map((message) => (
                        <li 
                          key={message.id}
                          className={`cursor-pointer hover:bg-gray-50 ${selectedMessage?.id === message.id ? 'bg-gray-50' : ''} ${!message.isRead ? 'bg-blue-50' : ''}`}
                          onClick={() => handleMessageClick(message)}
                        >
                          <div className="px-4 py-4">
                            <div className="flex justify-between">
                              <div className="flex items-center">
                                <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                                  {message.sender.avatar ? (
                                    <img src={message.sender.avatar} alt={message.sender.name} className="h-full w-full object-cover" />
                                  ) : (
                                    <div className="h-full w-full flex items-center justify-center bg-[#1A4A4C]/10 text-[#1A4A4C] font-bold">
                                      {message.sender.name.charAt(0)}
                                    </div>
                                  )}
                                </div>
                                <div className="ml-3">
                                  <p className={`text-sm font-medium ${!message.isRead ? 'text-[#1A4A4C]' : 'text-gray-900'}`}>
                                    {message.sender.name}
                                  </p>
                                  <p className="text-xs text-gray-500">{message.sender.company}</p>
                                </div>
                              </div>
                              <div className="text-xs text-gray-500">
                                {formatTimestamp(message.timestamp)}
                              </div>
                            </div>
                            <div className="mt-2">
                              {message.thread && (
                                <p className={`text-sm ${!message.isRead ? 'font-medium text-[#1A4A4C]' : 'font-medium text-gray-900'}`}>
                                  {message.thread.subject}
                                </p>
                              )}
                              <p className="text-sm text-gray-600 truncate">
                                {message.content}
                              </p>
                            </div>
                            <div className="mt-2 flex items-center">
                              {message.attachments && message.attachments.length > 0 && (
                                <span className="flex items-center text-xs text-gray-500 mr-3">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                  </svg>
                                  {message.attachments.length}
                                </span>
                              )}
                              {message.thread && message.thread.messageCount > 1 && (
                                <span className="flex items-center text-xs text-gray-500">
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                  </svg>
                                  {message.thread.messageCount}
                                </span>
                              )}
                              {!message.isRead && (
                                <span className="ml-auto h-2 w-2 bg-blue-600 rounded-full"></span>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              
              {/* Message Content */}
              <div className="md:col-span-2">
                {selectedMessage ? (
                  <div className="h-full flex flex-col">
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex justify-between items-start">
                        <div>
                          {selectedMessage.thread && (
                            <h2 className="text-xl font-semibold text-gray-900">
                              {selectedMessage.thread.subject}
                            </h2>
                          )}
                          <div className="mt-1 flex items-center">
                            <span className="text-sm text-gray-500">
                              {selectedMessage.thread && selectedMessage.thread.messageCount > 1 
                                ? `${selectedMessage.thread.messageCount} messages` 
                                : '1 message'}
                            </span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-sm text-gray-500">
                              Started on {new Date(selectedMessage.timestamp).toLocaleDateString()}
                            </span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="p-2 text-gray-400 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76" />
                            </svg>
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                            </svg>
                          </button>
                          <button className="p-2 text-gray-400 hover:text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-6">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                          {selectedMessage.sender.avatar ? (
                            <img src={selectedMessage.sender.avatar} alt={selectedMessage.sender.name} className="h-full w-full object-cover" />
                          ) : (
                            <div className="h-full w-full flex items-center justify-center bg-[#1A4A4C]/10 text-[#1A4A4C] font-bold">
                              {selectedMessage.sender.name.charAt(0)}
                            </div>
                          )}
                        </div>
                        <div className="ml-4 flex-1">
                          <div className="flex justify-between">
                            <div>
                              <h3 className="text-sm font-medium text-gray-900">{selectedMessage.sender.name}</h3>
                              <p className="text-xs text-gray-500">{selectedMessage.sender.company}</p>
                            </div>
                            <span className="text-sm text-gray-500">
                              {new Date(selectedMessage.timestamp).toLocaleString([], {
                                month: 'short',
                                day: 'numeric',
                                hour: '2-digit',
                                minute: '2-digit'
                              })}
                            </span>
                          </div>
                          <div className="mt-2 text-sm text-gray-700 space-y-4">
                            <p>{selectedMessage.content}</p>
                          </div>
                          
                          {selectedMessage.attachments && selectedMessage.attachments.length > 0 && (
                            <div className="mt-4">
                              <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">Attachments</h4>
                              <ul className="mt-2 space-y-2">
                                {selectedMessage.attachments.map((attachment, index) => (
                                  <li key={index} className="flex items-center p-2 border border-gray-200 rounded-md">
                                    <div className="h-8 w-8 flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-md">
                                      {attachment.type === 'PDF' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                      ) : attachment.type === 'DOCX' ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                      ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                        </svg>
                                      )}
                                    </div>
                                    <div className="ml-3 flex-1">
                                      <p className="text-sm font-medium text-gray-900">{attachment.name}</p>
                                      <p className="text-xs text-gray-500">{attachment.size}</p>
                                    </div>
                                    <button className="ml-2 p-1 text-gray-400 hover:text-gray-500">
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                      </svg>
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-200">
                      <div className="flex items-start">
                        <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-200 flex-shrink-0">
                          <div className="h-full w-full flex items-center justify-center bg-[#1A4A4C]/10 text-[#1A4A4C] font-bold">
                            Y
                          </div>
                        </div>
                        <div className="ml-4 flex-1">
                          <textarea
                            rows={3}
                            className="w-full border border-gray-300 rounded-md focus:ring-[#1A4A4C] focus:border-[#1A4A4C] p-2"
                            placeholder="Type your reply..."
                          ></textarea>
                          <div className="mt-2 flex justify-between">
                            <div className="flex space-x-2">
                              <button className="p-2 text-gray-400 hover:text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                              </button>
                              <button className="p-2 text-gray-400 hover:text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                              </button>
                            </div>
                            <button className="px-4 py-2 bg-[#1A4A4C] text-white rounded-md hover:bg-[#143638] transition-colors">
                              Send
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      <h3 className="mt-2 text-lg font-medium text-gray-900">No message selected</h3>
                      <p className="mt-1 text-gray-500">Select a message from the list to view its contents</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}
