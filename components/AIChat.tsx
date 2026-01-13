
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, User, Bot, Sparkles } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { Message } from '../types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Hi! I'm Andy's AI assistant. I can help answer questions about his 30+ years of networking experience, CCIE certification, or specific technical skills." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Map history for Gemini
      // Exclude the initial greeting from the history sent to the API
      // as Gemini requires the first message to be from the user
      const historyMessages = messages.slice(1);

      const history = historyMessages.map(m => ({
        role: m.role === 'user' ? 'user' as const : 'model' as const,
        parts: [{ text: m.text }]
      }));

      const responseText = await geminiService.chat(history, userMessage);
      setMessages(prev => [...prev, { role: 'model', text: responseText || "I'm not sure about that." }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'model', text: "Error communicating with the assistant." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 no-print">
      {!isOpen && (
        <div className="relative group">
          <button
            onClick={() => setIsOpen(true)}
            className="bg-blue-700 hover:bg-blue-800 text-white p-4 rounded-full shadow-xl transition-all hover:scale-110 flex items-center gap-2"
          >
            <MessageSquare className="w-6 h-6" />
            <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-medium">
              Ask Andy's Assistant
            </span>
          </button>
          <div className="absolute top-16 right-0 bg-amber-100 dark:bg-slate-700 text-amber-900 dark:text-amber-100 px-3 py-1.5 rounded-xl shadow-lg border border-amber-200 dark:border-slate-600 mt-2 animate-bounce-subtle origin-top-right whitespace-nowrap">
            <div className="absolute -top-2 right-6 w-4 h-4 bg-amber-100 dark:bg-slate-700 transform rotate-45 border-l border-t border-amber-200 dark:border-slate-600"></div>
            <p className="text-xs font-bold text-center leading-tight">Ask about Andy</p>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-80 sm:w-96 flex flex-col h-[500px] border border-slate-300 dark:border-slate-800 overflow-hidden animate-in slide-in-from-bottom-10 duration-300">
          <div className="bg-blue-700 dark:bg-blue-800 p-4 text-white flex justify-between items-center shrink-0">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 p-1.5 rounded-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sm">Network Career AI</h3>
                <p className="text-xs text-blue-100">Consult Andy's Background</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-blue-600 p-1 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>


          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-100 dark:bg-slate-950">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${m.role === 'user' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300' : 'bg-white dark:bg-slate-800 border dark:border-slate-700 text-slate-400 dark:text-slate-500'}`}>
                    {m.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div className={`p-3 rounded-2xl text-sm shadow-sm ${m.role === 'user' ? 'bg-blue-700 text-white rounded-tr-none' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-tl-none'}`}>
                    {m.role === 'user' ? (
                      m.text
                    ) : (
                      <div className="prose prose-sm max-w-none prose-p:leading-snug prose-li:my-0 dark:prose-invert">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                          {m.text}
                        </ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex gap-2 max-w-[85%]">
                  <div className="shrink-0 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border dark:border-slate-700 text-slate-400 dark:text-slate-500 flex items-center justify-center">
                    <Bot className="w-4 h-4 animate-pulse" />
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-3 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-700 shadow-sm">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                      <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSend} className="p-4 border-t dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about CCIE, SD-Access, or projects..."
                className="flex-1 bg-slate-100 dark:bg-slate-800 border-none rounded-xl px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500 dark:text-slate-100 dark:placeholder-slate-500"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-blue-700 text-white p-2 rounded-xl hover:bg-blue-800 disabled:opacity-50 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )
      }
    </div >
  );
};

export default AIChat;
