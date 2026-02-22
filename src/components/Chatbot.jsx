import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoChatbubbleEllipses, IoClose, IoSend } from 'react-icons/io5';
import ReactMarkdown from 'react-markdown'; // 1. Import it
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
        <div className="fixed bottom-6 right-6 z-[9999]">
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="bg-cyan-500 p-4 rounded-full shadow-lg text-white text-3xl"
            >
                {isOpen ? <IoClose /> : <IoChatbubbleEllipses />}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.9 }}
                        className="absolute bottom-20 right-0 w-[350px] h-[450px] bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                    >
                        <div className="bg-cyan-600 p-4 text-white font-bold flex justify-between">
                            <span>Mudassir AI</span>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-4">
                            {messages.map((msg, i) => (
                                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] p-3 rounded-xl text-sm ${
                                        msg.role === 'user' ? 'bg-cyan-600 text-white' : 'bg-slate-800 text-gray-200 border border-slate-700'
                                    }`}>
                                        
                                        {/* 2. USE REACT MARKDOWN HERE */}
                                        <ReactMarkdown
                                            components={{
                                                // Style links specifically
                                                a: ({ node, ...props }) => (
                                                    <a 
                                                        {...props} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer" 
                                                        className="text-cyan-400 underline font-bold hover:text-cyan-300 break-all" 
                                                    />
                                                ),
                                                // Style bullet points if the AI lists projects
                                                ul: ({ node, ...props }) => <ul className="list-disc ml-4 mt-2" {...props} />,
                                                li: ({ node, ...props }) => <li className="mb-1" {...props} />,
                                                // Style bold text
                                                strong: ({ node, ...props }) => <strong className="text-white font-semibold" {...props} />
                                            }}
                                        >
                                            {msg.content}
                                        </ReactMarkdown>

                                    </div>
                                </div>
                            ))}
                            {loading && <div className="text-xs text-cyan-400 animate-pulse">Mudassir AI is typing...</div>}
                            <div ref={chatEndRef} />
                        </div>

                        <div className="p-4 bg-slate-800 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                                placeholder="Ask about me..."
                                className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-cyan-500"
                            />
                            <button onClick={handleSend} className="text-cyan-500 text-2xl">
                                <IoSend />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Chatbot;