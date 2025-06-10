'use client';

import React, { useState, useEffect, useRef } from 'react';

interface LiveChatProps {
  position?: 'bottom-right' | 'bottom-left';
}

export default function LiveChat({ position = 'bottom-right' }: LiveChatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'bot' | 'agent'; timestamp: Date }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [chatStage, setChatStage] = useState<'pre-chat' | 'bot' | 'agent'>('pre-chat');
  const [preChatForm, setPreChatForm] = useState({
    name: '',
    email: '',
    company: '',
    inquiry: ''
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    inquiry: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);
  
  // Initial bot message when chat starts
  useEffect(() => {
    if (chatStage === 'bot') {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setMessages([
          ...messages,
          {
            text: `Hi ${preChatForm.name}! I'm Connect1to1's virtual assistant. How can I help you today?`,
            sender: 'bot',
            timestamp: new Date()
          }
        ]);
        setIsTyping(false);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
  }, [chatStage]);
  
  const handleSubmitPreChatForm = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    const errors = {
      name: preChatForm.name ? '' : 'Name is required',
      email: preChatForm.email ? '' : 'Email is required',
      inquiry: preChatForm.inquiry ? '' : 'Please describe your inquiry'
    };
    
    if (preChatForm.email && !/\S+@\S+\.\S+/.test(preChatForm.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    setFormErrors(errors);
    
    if (errors.name || errors.email || errors.inquiry) {
      return;
    }
    
    // Start chat with bot
    setChatStage('bot');
  };
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const newMessages: { text: string; sender: 'user' | 'bot' | 'agent'; timestamp: Date }[] = [
      ...messages,
      {
        text: inputValue,
        sender: 'user',
        timestamp: new Date()
      }
    ];
    
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);
    
    // Simulate bot/agent response
    setTimeout(() => {
      let responseText = '';
      
      if (chatStage === 'bot') {
        // Simple keyword detection
        const lowercaseInput = inputValue.toLowerCase();
        
        if (lowercaseInput.includes('speak') && lowercaseInput.includes('human') || 
            lowercaseInput.includes('talk') && lowercaseInput.includes('person') ||
            lowercaseInput.includes('agent') ||
            lowercaseInput.includes('representative')) {
          responseText = "I'll connect you with a human agent right away. Please hold on for a moment.";
          
          // Transfer to human agent after bot response
          setTimeout(() => {
            setMessages(prev => [
              ...prev,
              {
                text: "Hi there! I'm Alex, a customer support specialist. I can see you've been chatting with our bot. How can I assist you today?",
                sender: 'agent',
                timestamp: new Date()
              }
            ]);
            setChatStage('agent');
            setIsTyping(false);
          }, 3000);
        } else if (lowercaseInput.includes('pricing') || lowercaseInput.includes('cost') || lowercaseInput.includes('plan')) {
          responseText = "We offer several pricing plans for vendors. Our Standard plan is $99/month and includes access to retailer profiles and up to 10 meetings per month. Our Premium plan at $249/month includes unlimited meetings and advanced features. Would you like me to connect you with a sales representative for more details?";
        } else if (lowercaseInput.includes('match') || lowercaseInput.includes('algorithm')) {
          responseText = "Our matching algorithm considers multiple factors including product categories, business size, geographic regions, and specific requirements to create high-quality connections between vendors and retailers. The more complete your profile is, the better matches we can provide!";
        } else if (lowercaseInput.includes('register') || lowercaseInput.includes('sign up') || lowercaseInput.includes('account')) {
          responseText = "Registration is free for both vendors and retailers! You can create your account, complete your profile, and start receiving match alerts at no cost. Vendors will need a paid subscription to access full retailer profiles and schedule meetings.";
        } else {
          responseText = "Thank you for your message. To better assist you, would you like me to connect you with a human agent who can provide more specific information?";
        }
      } else {
        // Human agent responses would be more personalized in a real implementation
        responseText = "Thank you for providing that information. I'm looking into this for you and will have an answer shortly. Is there anything else you'd like to know about Connect1to1 while I research this?";
      }
      
      setMessages(prev => [
        ...prev,
        {
          text: responseText,
          sender: chatStage === 'bot' ? 'bot' : 'agent',
          timestamp: new Date()
        }
      ]);
      
      setIsTyping(false);
    }, 1500);
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  const positionClass = position === 'bottom-right' ? 'right-4' : 'left-4';
  
  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed ${positionClass} bottom-4 bg-[#1A4A4C] text-white rounded-full p-4 shadow-lg hover:bg-[#143638] transition-all z-50 flex items-center justify-center`}
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
      
      {/* Chat window */}
      <div 
        className={`fixed ${positionClass} bottom-20 w-80 sm:w-96 bg-white rounded-lg shadow-xl z-50 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        {/* Chat header */}
        <div className="bg-[#1A4A4C] text-white p-4 rounded-t-lg flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1A4A4C]" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold">Connect1to1 Support</h3>
              <p className="text-xs">
                {chatStage === 'pre-chat' ? 'Start a conversation' : 
                 chatStage === 'bot' ? 'Chatting with AI Assistant' : 
                 'Connected with Support Agent'}
              </p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200"
            aria-label="Close chat"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        
        {/* Chat body */}
        <div className="p-4 h-80 overflow-y-auto bg-gray-50">
          {chatStage === 'pre-chat' ? (
            <form onSubmit={handleSubmitPreChatForm} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                <input
                  type="text"
                  id="name"
                  value={preChatForm.name}
                  onChange={(e) => setPreChatForm({...preChatForm, name: e.target.value})}
                  className={`w-full px-3 py-2 border ${formErrors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A4A4C] focus:border-transparent`}
                  placeholder="Your name"
                />
                {formErrors.name && <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <input
                  type="email"
                  id="email"
                  value={preChatForm.email}
                  onChange={(e) => setPreChatForm({...preChatForm, email: e.target.value})}
                  className={`w-full px-3 py-2 border ${formErrors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A4A4C] focus:border-transparent`}
                  placeholder="your.email@example.com"
                />
                {formErrors.email && <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                <input
                  type="text"
                  id="company"
                  value={preChatForm.company}
                  onChange={(e) => setPreChatForm({...preChatForm, company: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A4A4C] focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">How can we help? *</label>
                <textarea
                  id="inquiry"
                  value={preChatForm.inquiry}
                  onChange={(e) => setPreChatForm({...preChatForm, inquiry: e.target.value})}
                  className={`w-full px-3 py-2 border ${formErrors.inquiry ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-[#1A4A4C] focus:border-transparent`}
                  placeholder="Please describe your inquiry"
                  rows={3}
                ></textarea>
                {formErrors.inquiry && <p className="mt-1 text-xs text-red-500">{formErrors.inquiry}</p>}
              </div>
              
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#1A4A4C] text-white rounded-md font-medium hover:bg-[#143638] transition-colors"
              >
                Start Chat
              </button>
            </form>
          ) : (
            <>
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.sender !== 'user' && (
                    <div className={`h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center mr-2 ${
                      message.sender === 'bot' ? 'bg-[#1A4A4C]' : 'bg-[#C99B2D]'
                    }`}>
                      {message.sender === 'bot' ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                  )}
                  
                  <div 
                    className={`max-w-[75%] p-3 rounded-lg ${
                      message.sender === 'user' 
                        ? 'bg-[#1A4A4C] text-white rounded-br-none' 
                        : message.sender === 'bot'
                          ? 'bg-gray-200 text-gray-800 rounded-bl-none'
                          : 'bg-[#C99B2D] text-white rounded-bl-none'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs mt-1 opacity-70 text-right">{formatTime(message.timestamp)}</p>
                  </div>
                  
                  {message.sender === 'user' && (
                    <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center ml-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
              
              {isTyping && (
                <div className="flex items-center mb-4">
                  <div className={`h-8 w-8 rounded-full flex-shrink-0 flex items-center justify-center mr-2 ${
                    chatStage === 'bot' ? 'bg-[#1A4A4C]' : 'bg-[#C99B2D]'
                  }`}>
                    {chatStage === 'bot' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <div className="bg-gray-200 p-3 rounded-lg rounded-bl-none">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef}></div>
            </>
          )}
        </div>
        
        {/* Chat input */}
        {chatStage !== 'pre-chat' && (
          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-200 flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#1A4A4C] focus:border-transparent"
              placeholder="Type your message..."
              disabled={isTyping}
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#1A4A4C] text-white rounded-r-md font-medium hover:bg-[#143638] transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={!inputValue.trim() || isTyping}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </form>
        )}
      </div>
    </>
  );
}
