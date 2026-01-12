"use client";

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, ChevronRight, MessageSquare, ExternalLink, Headphones } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqData } from '@/lib/faq-data';
import { toast } from 'sonner';
import { companyDetails } from "@/lib/companydetails";

const CHIME_URL = 'https://assets.mixkit.co/active_storage/sfx/2354/2354-preview.mp3';

type Message = {
  id: string;
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
};

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isIdentified, setIsIdentified] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '' });
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Check operating hours (9 AM - 6 PM Colombo Time)
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      // Colombo is UTC +5.5
      const colomboTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Colombo' }));
      const hours = colomboTime.getHours();
      const day = colomboTime.getDay(); // 0 = Sunday, 6 = Saturday
      
      const isWorkingDay = day >= 1 && day <= 5;
      const isWorkingHour = hours >= 9 && hours < 18;
      
      setIsOnline(isWorkingDay && isWorkingHour);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Re-check every minute
    return () => clearInterval(interval);
  }, []);

  // Global event listener for opening chat
  useEffect(() => {
    const handleToggle = () => setIsOpen(true);
    window.addEventListener('vexel-chat-open', handleToggle);
    return () => window.removeEventListener('vexel-chat-open', handleToggle);
  }, []);

  // Load identity from localStorage
  useEffect(() => {
    const savedLine = localStorage.getItem('vexel_chat_user');
    if (savedLine) {
      setUserData(JSON.parse(savedLine));
      setIsIdentified(true);
    }
  }, []);

  // Scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Request browser notification permission
  useEffect(() => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      if (Notification.permission === 'default') {
        Notification.requestPermission();
      }
    }
  }, []);

  const playChime = () => {
    const audio = new Audio(CHIME_URL);
    audio.volume = 0.4;
    audio.play().catch(() => {}); // Catch if browser blocks auto-play
  };

  const sendNotification = (text: string) => {
    if (typeof window !== 'undefined' && document.hidden && Notification.permission === 'granted') {
      new Notification('Vexel Support', {
        body: text,
        icon: companyDetails.logos.main
      });
    }
  };

  const handleIdentification = (e: React.FormEvent) => {
    e.preventDefault();
    if (userData.name && userData.email) {
      localStorage.setItem('vexel_chat_user', JSON.stringify(userData));
      setIsIdentified(true);
      // Add welcome message
      setMessages([
        {
          id: 'welcome',
          type: 'bot',
          text: `Hi ${userData.name}! ${isOnline ? "How can I help you today?" : "We're currently offline, but you can still search our FAQs or leave a message below."}`,
          timestamp: new Date()
        }
      ]);
    }
  };

  const findBestAnswer = (query: string) => {
    const q = query.toLowerCase();
    // Search in FAQ
    const match = faqData.find(f => 
      f.question.toLowerCase().includes(q) || 
      q.includes(f.question.toLowerCase())
    );

    if (match) return match.answer;

    // Keyword matching fallback
    const keywords = [
      { keys: ['price', 'pricing', 'cost', 'plan'], answer: "You can find our detailed pricing at vexelsystems.com/pricing. We offer Starter, Professional, and Enterprise plans." },
      { keys: ['contact', 'human', 'person', 'support', 'care'], answer: "I can connect you with our customer care team! Just click the 'Talk to Human' button below." },
      { keys: ['pos', 'hardware', 'register', 'terminal'], answer: "Vexel POS works both online and offline. We support a wide range of hardware bundles. Check out our 'POS Services' category for more details." },
      { keys: ['hi', 'hello', 'hey'], answer: "Hello! How can I assist you with Vexel Systems today?" }
    ];

    for (const k of keywords) {
      if (k.keys.some(key => q.includes(key))) return k.answer;
    }

    return "I'm not sure I have a specific answer for that. Would you like to check our full FAQ section or talk to a member of our customer care team?";
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    const query = inputValue;
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const responseText = findBestAnswer(query);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        text: responseText,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
      
      // Auditory & Visual Notifications
      playChime();
      sendNotification(responseText);
      
      // If window is minimized or tab is backgrounded
      if (!isOpen || document.hidden) {
        toast("New message from Vexel Support", {
          description: responseText.slice(0, 60) + (responseText.length > 60 ? '...' : ''),
          action: {
            label: "Open Chat",
            onClick: () => setIsOpen(true)
          },
          duration: 5000,
          icon: <MessageSquare size={16} className="text-primary" />
        });
      }
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-100 font-sans">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="absolute bottom-24 right-0 w-[300px] h-[540px] bg-white dark:bg-[#0a0a0a] rounded-3xl shadow-2xl shadow-primary/20 border border-black/5 dark:border-white/5 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className={`p-6 text-white flex items-center justify-between transition-colors duration-500 ${isOnline ? 'bg-primary' : 'bg-zinc-800'}`}>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="font-bold">Vexel Chat</h3>
                  <div className="flex items-center gap-2 text-xs opacity-80">
                    <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></span>
                    {isOnline ? 'Online | Support Assistant' : 'Offline | 09:00 - 18:00 LKT'}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-6 scroll-smooth">
              {!isIdentified ? (
                // Lead Capture Form
                <div className="h-full flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <User size={32} />
                    </div>
                    <h4 className="text-xl font-bold mb-2">Welcome!</h4>
                    <p className="text-foreground/60">Please let us know who you are to start the conversation.</p>
                  </div>
                  
                  <form onSubmit={handleIdentification} className="space-y-4">
                    <div>
                      <label className="text-sm font-bold mb-1.5 block">Full Name</label>
                      <input 
                        required
                        type="text"
                        placeholder="John Doe"
                        value={userData.name}
                        onChange={e => setUserData({...userData, name: e.target.value})}
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold mb-1.5 block">Email Address</label>
                      <input 
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={userData.email}
                        onChange={e => setUserData({...userData, email: e.target.value})}
                        className="w-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <button 
                      type="submit"
                      className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:brightness-105 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2 group"
                    >
                      Start Chatting
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                </div>
              ) : (
                // Chat Interface
                <div className="space-y-4">
                  {messages.map((msg) => (
                    <div 
                      key={msg.id}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] p-4 rounded-2xl ${
                        msg.type === 'user' 
                        ? 'bg-primary text-white rounded-tr-none' 
                        : 'bg-black/5 dark:bg-white/5 text-foreground rounded-tl-none'
                      }`}>
                        <p className="text-sm leading-relaxed">{msg.text}</p>
                        <span className="text-[10px] opacity-40 mt-1 block">
                          {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-black/5 dark:bg-white/5 p-4 rounded-2xl rounded-tl-none flex gap-1">
                        <span className="w-1.5 h-1.5 bg-foreground/20 rounded-full animate-bounce"></span>
                        <span className="w-1.5 h-1.5 bg-foreground/20 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                        <span className="w-1.5 h-1.5 bg-foreground/20 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Footer / Input */}
            {isIdentified && (
              <div className="p-4 border-t border-black/5 dark:border-white/5 bg-black/5 dark:bg-white/5">
                <div className="mb-3">
                  <a 
                    href={`https://wa.me/94771234567?text=Hi, I'm ${userData.name}. I need help with...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-green-500/10 text-green-500 rounded-lg text-sm font-bold hover:bg-green-500/20 transition-all border border-green-500/20"
                  >
                    <ExternalLink size={14} />
                    Not satisfied? Talk to Human
                  </a>
                </div>
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input 
                    type="text"
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    placeholder="Type your question..."
                    className="flex-1 bg-white dark:bg-black/20 border border-black/10 dark:border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-primary transition-all"
                  />
                  <button 
                    type="submit"
                    className="p-2 bg-primary text-white rounded-xl hover:brightness-110 transition-all"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 group relative"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <MessageCircle size={28} />
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Unread Badge (Simulated) */}
        {!isOpen && !isIdentified && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white dark:border-[#0a0a0a]">
            1
          </span>
        )}
      </motion.button>
    </div>
  );
}
