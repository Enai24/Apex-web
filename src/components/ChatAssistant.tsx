import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, Maximize2, Minimize2 } from 'lucide-react';

// Define message types
interface Message {
  id: string;
  content: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

// Define suggested questions
const suggestedQuestions = [
  "What services does Apex Enterprises offer?",
  "How do you ensure compliance with Indian labor laws?",
  "What industries do you specialize in?",
  "How much does your staffing service cost?",
  "What is your process for onboarding new clients?",
  "How quickly can you deploy staff across India?"
];

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: 'Hello! I\'m Apex Assistant. How can I help you today with your workforce needs in India?',
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  // Focus input when chat is opened
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputValue('');

    // Simulate assistant response after a short delay
    setTimeout(() => {
      generateResponse(inputValue);
    }, 1000);
  };

  const generateResponse = (query: string) => {
    let response = '';
    
    // Simple rule-based responses (in a real app, this would be handled by a backend API)
    const normalizedQuery = query.toLowerCase();
    
    if (normalizedQuery.includes('service') || normalizedQuery.includes('offer')) {
      response = "Apex Enterprises offers a comprehensive range of workforce solutions including contract staffing, permanent recruitment, payroll processing, and compliance management across India.";
    }
    else if (normalizedQuery.includes('compliance') || normalizedQuery.includes('law')) {
      response = "We ensure 100% compliance with all Indian labor laws through our dedicated compliance team that stays updated with changing regulations across all states. We handle PF, ESI, professional tax, and labor law compliance to eliminate your regulatory risks.";
    }
    else if (normalizedQuery.includes('industry') || normalizedQuery.includes('specialize')) {
      response = "We specialize in several key industries including IT & ITES, BFSI, Manufacturing, Retail, Telecom, and Healthcare with tailored solutions for each sector's unique challenges.";
    }
    else if (normalizedQuery.includes('cost') || normalizedQuery.includes('price') || normalizedQuery.includes('fee')) {
      response = "Our pricing depends on several factors including number of employees, service type, and location. We offer transparent cost-plus, percentage-based, fixed fee, and custom enterprise pricing models. Would you like to get a custom quote?";
    }
    else if (normalizedQuery.includes('onboarding') || normalizedQuery.includes('process')) {
      response = "Our client onboarding process typically takes 2-3 weeks and includes initial consultation, proposal & documentation, compliance setup, system integration, team deployment, and ongoing support.";
    }
    else if (normalizedQuery.includes('deploy') || normalizedQuery.includes('quick') || normalizedQuery.includes('fast')) {
      response = "We can deploy staff across India within 7-14 days depending on the role requirements and location. For urgent needs, we offer expedited deployment options for metro cities.";
    }
    else {
      response = "Thank you for your question. Our team would be happy to provide you with more detailed information. Would you like to speak with a workforce solutions specialist?";
    }

    const assistantMessage: Message = {
      id: Date.now().toString(),
      content: response,
      sender: 'assistant',
      timestamp: new Date()
    };
    
    setMessages(prevMessages => [...prevMessages, assistantMessage]);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputValue(question);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 0);
  };

  return (
    <>
      {/* Floating chat button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="Chat with Apex Assistant"
      >
        <MessageSquare className="h-6 w-6" />
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className={`fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 ${
            isMinimized ? 'h-14 w-80' : 'h-[500px] w-80 sm:w-96'
          }`}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between bg-blue-600 px-4 py-3 text-white">
            <div className="flex items-center">
              <MessageSquare className="mr-2 h-5 w-5" />
              <h3 className="font-medium">Apex Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={toggleMinimize}
                className="rounded p-1 hover:bg-blue-500 focus:outline-none"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
              </button>
              <button
                onClick={toggleChat}
                className="rounded p-1 hover:bg-blue-500 focus:outline-none"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              {/* Messages container */}
              <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`max-w-[85%] rounded-lg px-4 py-2 ${
                        message.sender === 'user' 
                          ? 'bg-blue-600 text-white' 
                          : 'bg-white border border-gray-200 text-gray-800'
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <div className="mt-1 text-right">
                        <span 
                          className={`text-xs ${
                            message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Suggested questions */}
              {messages.length === 1 && (
                <div className="bg-gray-50 px-4 pb-2">
                  <p className="mb-2 text-xs font-medium text-gray-500">SUGGESTED QUESTIONS:</p>
                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        onClick={() => handleSuggestedQuestion(question)}
                        className="rounded-full bg-white px-3 py-1 text-xs text-blue-700 border border-blue-200 hover:bg-blue-50 transition-colors"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Input area */}
              <div className="border-t border-gray-200 p-3 bg-white">
                <div className="flex items-end">
                  <textarea
                    ref={inputRef}
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyPress={handleInputKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 resize-none rounded-lg border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                    rows={1}
                  />
                  <button
                    onClick={sendMessage}
                    disabled={inputValue.trim() === ''}
                    className={`ml-2 flex h-10 w-10 items-center justify-center rounded-full ${
                      inputValue.trim() === '' 
                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                    aria-label="Send message"
                  >
                    <Send className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
} 