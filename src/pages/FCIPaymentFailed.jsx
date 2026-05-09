// src/pages/FCIPaymentFailed.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { AlertCircle, ArrowRight, HelpCircle, Mail, Phone } from 'lucide-react';

const FCIPaymentFailed = () => {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-gradient-to-br from-red-50 to-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6"
        >
          <AlertCircle className="h-10 w-10 text-red-500" />
        </motion.div>
        
        <h1 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
          Payment Failed
        </h1>
        
        <p className="text-gray-600 mb-4">
          We couldn't process your payment at this time. This could be due to:
        </p>
        
        <div className="bg-white rounded-xl p-6 text-left mb-8">
          <ul className="space-y-2 text-gray-600">
            <li>• Insufficient funds in your account</li>
            <li>• Incorrect payment details entered</li>
            <li>• Network connectivity issues</li>
            <li>• Payment timeout</li>
          </ul>
        </div>
        
        <p className="text-gray-600 mb-8">
          Please try again or contact our support team for assistance.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link
            to="/fci#purchase"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:bg-primary/90 transition-colors"
          >
            Try Again
            <ArrowRight className="h-4 w-4" />
          </Link>
          
          <a
            href="https://wa.me/255746820288"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-50 transition-colors"
          >
            <Phone className="h-4 w-4" />
            Contact Support
          </a>
        </div>
        
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center justify-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            Need Help?
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            If you've been charged but didn't receive your download, please contact us:
          </p>
          <div className="space-y-2 text-sm">
            <a href="mailto:hello@thecatalog.co.tz" className="text-primary hover:underline block">
              hello@thecatalog.co.tz
            </a>
            <a href="tel:+255746820288" className="text-primary hover:underline block">
              +255 746 820 288 (Call/WhatsApp)
            </a>
          </div>
        </div>
        
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
          >
            Return to Homepage
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default FCIPaymentFailed;