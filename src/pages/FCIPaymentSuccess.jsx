// src/pages/FCIPaymentSuccess.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Download, Mail, ArrowRight } from 'lucide-react';

const FCIPaymentSuccess = () => {
  const [downloadUrl, setDownloadUrl] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    // Get order details from URL params or state
    const orderId = new URLSearchParams(window.location.search).get('orderId');
    
    // Fetch download link from backend
    // fetchDownloadLink(orderId).then(url => setDownloadUrl(url));
    
    // Simulate
    setTimeout(() => {
      setDownloadUrl('/api/download/fci-book.pdf');
      setEmailSent(true);
    }, 1000);
  }, []);

  return (
    <main className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-green-50 to-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <CheckCircle className="h-10 w-10 text-green-500" />
        </motion.div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your copy of The Female Cycle Intelligence Framework™ is ready.
        </p>
        
        <div className="bg-gray-50 rounded-2xl p-6 mb-8">
          {downloadUrl && (
            <a
              href={downloadUrl}
              download
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-colors"
            >
              <Download className="h-5 w-5" />
              Download PDF Now
            </a>
          )}
          
          {emailSent && (
            <p className="text-sm text-gray-500 mt-4 flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              A download link has also been sent to your email
            </p>
          )}
        </div>
        
        <Link
          to="/fci"
          className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
        >
          Back to Book Page
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </main>
  );
};

export default FCIPaymentSuccess;