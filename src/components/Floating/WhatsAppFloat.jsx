import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, ChevronRight } from 'lucide-react';

const WhatsAppFloat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSendMessage = () => {
    if (message.trim()) {
      const whatsappUrl = `https://wa.me/255146820288?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      setMessage('');
      setIsOpen(false);
    }
  };

  const quickReplies = [
    'I need help with booking',
    'Corporate wellness programs',
    'Health check-up packages',
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* WhatsApp Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-15 right-6 z-50 w-14 h-14 bg-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center group"
            aria-label="WhatsApp chat"
            style={{ bottom: 'calc(2rem + 10px)' }} // Position above back-to-top button
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
            )}
          </motion.button>

          {/* WhatsApp Chat Popup */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="fixed bottom-20 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
                style={{ bottom: 'calc(6rem + 10px)' }}
              >
                {/* Header */}
                <div className="bg-green-500 p-4 text-white">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Chat with us</h3>
                      <p className="text-xs text-green-100">Typically replies within 5 mins</p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="p-4">
                  <div className="mb-4">
                    <div className="bg-gray-100 rounded-lg p-3 mb-2 max-w-[80%]">
                      <p className="text-sm text-gray-800">
                        👋 Hi! How can we help you today?
                      </p>
                    </div>
                    <p className="text-[0.625rem] text-gray-500">Online • Usually replies instantly</p>
                  </div>

                  {/* Quick Replies */}
                  <div className="mb-4">
                    <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickReplies.map((reply, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            setMessage(reply);
                            setTimeout(() => handleSendMessage(), 100);
                          }}
                          className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-2 rounded-full transition-colors"
                        >
                          {reply}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="flex-1 px-4 py-2 border border-gray-200 rounded-full text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!message.trim()}
                      className={`p-2 rounded-full transition-colors ${
                        message.trim()
                          ? 'bg-green-500 text-white hover:bg-green-600'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <Send className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Footer */}
                  <p className="text-[0.625rem] text-gray-400 mt-3 text-center">
                    By chatting you agree to our{' '}
                    <a href="/privacy" className="text-green-500 hover:underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppFloat;