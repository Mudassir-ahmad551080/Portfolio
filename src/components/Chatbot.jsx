import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChatbubbleEllipses, IoClose, IoSend } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { role: 'ai', content: "Hi! I'm Mudassir's AI assistant. Ask me anything about his skills, projects, or contact info!" }
    ]);
    const [loading, setLoading] = useState(false);
    const chatEndRef = useRef(null);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim()) return;
        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput("");
        setLoading(true);

        try {
            const response = await axios.post('https://chat-backend-orcin-one.vercel.app/api/info', { text: input });
            const aiMsg = { role: 'ai', content: response.data.data };
            setMessages(prev => [...prev, aiMsg]);
        } catch (error) {
            setMessages(prev => [...prev, { role: 'ai', content: "Sorry, I'm having trouble connecting right now." }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="z-[9999]">
            {/* TOGGLE BUTTON: Fixed to bottom right, slightly adjusted for mobile vs desktop */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-cyan-500 p-4 rounded-full shadow-lg text-white text-2xl sm:text-3xl z-[9999]"
            >
                {isOpen ? <IoClose /> : <IoChatbubbleEllipses />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        // RESPONSIVE CLASSES HERE:
                        // Mobile (Default): Fixed position, stretches left-4 to right-4, 60% viewport height
                        // Desktop (sm:): Specific width/height, anchored to the right
                        className="fixed bottom-20 right-4 left-4 h-[60vh] 
                                   sm:bottom-24 sm:right-6 sm:left-auto sm:w-[350px] sm:h-[450px] 
                                   bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-[9998]"
                    >
                        {/* Header */}
                        <div className="bg-cyan-600 p-3 sm:p-4 text-white font-bold flex justify-between items-center shadow-md">
                            <span className="flex items-center gap-2">
                                {/* Optional: Add a small avatar or icon here */}
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                Mudassir AI
                            </span>
                            <span className="text-xs font-normal opacity-80">Online</span>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-4 bg-slate-900/50 scrollbar-thin scrollbar-thumb-cyan-600 scrollbar-track-slate-800">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3 rounded-xl text-sm shadow-sm ${
                                        msg.role === 'user' 
                                            ? 'bg-cyan-600 text-white rounded-br-none' 
                                            : 'bg-slate-800 text-gray-200 border border-slate-700 rounded-bl-none'
                                    }`}>
                                        <ReactMarkdown
                                            components={{
                                                a: ({ node, ...props }) => (
                                                    <a 
                                                        {...props} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="text-cyan-400 underline font-bold hover:text-cyan-300 break-all" 
                                                    />
                                                ),
                                                ul: ({ node, ...props }) => <ul className="list-disc ml-4 mt-2 space-y-1" {...props} />,
                                                li: ({ node, ...props }) => <li className="" {...props} />,
                                                p: ({ node, ...props }) => <p className="mb-1 last:mb-0" {...props} />,
                                                strong: ({ node, ...props }) => <strong className="text-cyan-200 font-semibold" {...props} />
                                            }}
                                        >
                                            {msg.content}
                                        </ReactMarkdown>
                                    </div>
                                </div>
                            ))}
                            {loading && (
                                <div className="flex justify-start">
                                    <div className="bg-slate-800 p-3 rounded-xl rounded-bl-none border border-slate-700">
                                        <div className="flex gap-1">
                                            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce"></span>
                                            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-75"></span>
                                            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce delay-150"></span>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-3 sm:p-4 bg-slate-800 border-t border-slate-700 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about me..."
                                className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors placeholder-gray-500"
                            />
                            <button 
                                onClick={handleSend} 
                                disabled={loading || !input.trim()}
                                className="bg-cyan-600 hover:bg-cyan-500 disabled:bg-slate-700 disabled:text-slate-500 text-white p-2 rounded-lg transition-colors flex items-center justify-center"
                            >
                                <IoSend className="text-xl" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;