import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Info, Settings, Check, X, Shield, Clock, Globe } from 'lucide-react';
import { formatDate } from '../utils/formatDate';

const CookiesPolicyPage = () => {
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  });

  const lastUpdated = new Date();
  const formattedDate = lastUpdated.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  const cookieTypes = [
    {
      name: 'Necessary Cookies',
      icon: Shield,
      description: 'These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility.',
      examples: ['Session cookies', 'Security cookies', 'Load balancing cookies'],
      required: true
    },
    {
      name: 'Analytics Cookies',
      icon: Globe,
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: ['Google Analytics', 'Page visit statistics', 'User behavior data'],
      required: false
    },
    {
      name: 'Marketing Cookies',
      icon: Info,
      description: 'These cookies are used to track visitors across websites to display relevant advertisements and measure marketing effectiveness.',
      examples: ['Ad tracking', 'Retargeting pixels', 'Campaign measurement'],
      required: false
    },
    {
      name: 'Functional Cookies',
      icon: Settings,
      description: 'These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.',
      examples: ['Language preferences', 'Region selection', 'Saved settings'],
      required: false
    }
  ];

  const handleSavePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));
    setShowPreferences(false);
  };

  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
              <Cookie className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-display font-semibold tracking-tight text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg md:text-xl text-secondary mb-4">
              Last updated: {formattedDate}
            </p>
            <p className="text-primary font-medium max-w-2xl mx-auto">
              Learn about how we use cookies to improve your browsing experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide valuable information to website owners.
            </p>
          </motion.div>

          {/* Cookie Types */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-6">
              Types of Cookies We Use
            </h2>
            <div className="space-y-6">
              {cookieTypes.map((cookie, index) => {
                const Icon = cookie.icon;
                return (
                  <motion.div
                    key={cookie.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-display font-semibold text-gray-900">
                            {cookie.name}
                          </h3>
                          {cookie.required && (
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                              Required
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{cookie.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {cookie.examples.map((example) => (
                            <span
                              key={example}
                              className="px-3 py-1 bg-white text-gray-600 text-xs rounded-full"
                            >
                              {example}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Manage Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              Manage Your Cookie Preferences
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You can manage your cookie preferences at any time. You can also set your browser to block or alert you about these cookies.
            </p>
            
            {!showPreferences ? (
              <button
                onClick={() => setShowPreferences(true)}
                className="btn-primary px-6 py-3 text-sm inline-flex items-center gap-2"
              >
                <Settings className="h-4 w-4" />
                Customize Cookie Settings
              </button>
            ) : (
              <div className="bg-gray-50 rounded-2xl p-6">
                <h3 className="font-display font-semibold text-gray-900 mb-4">
                  Cookie Preferences
                </h3>
                <div className="space-y-4 mb-6">
                  {cookieTypes.map((cookie) => (
                    <div key={cookie.name} className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">{cookie.name}</p>
                        <p className="text-xs text-gray-500">{cookie.description.substring(0, 60)}...</p>
                      </div>
                      {cookie.required ? (
                        <span className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
                          Always Active
                        </span>
                      ) : (
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={preferences[cookie.name.toLowerCase().split(' ')[0]]}
                            onChange={(e) => {
                              const key = cookie.name.toLowerCase().split(' ')[0];
                              setPreferences(prev => ({ ...prev, [key]: e.target.checked }));
                            }}
                            className="sr-only peer"
                          />
                          <div className="w-10 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-4 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={handleSavePreferences}
                    className="flex-1 btn-primary py-2 text-sm flex items-center justify-center gap-2"
                  >
                    <Check className="h-4 w-4" />
                    Save Preferences
                  </button>
                  <button
                    onClick={() => setShowPreferences(false)}
                    className="flex-1 btn-outline py-2 text-sm flex items-center justify-center gap-2"
                  >
                    <X className="h-4 w-4" />
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Third-Party Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              Third-Party Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the service and deliver advertisements. These cookies may be set by:
            </p>
            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              <li>Google Analytics for traffic analysis</li>
              <li>Social media platforms for sharing features</li>
              <li>Advertising networks for marketing</li>
              <li>Payment processors for transaction security</li>
            </ul>
          </motion.div>

          {/* Updates */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary/5 rounded-3xl p-8"
          >
            <h2 className="text-2xl font-display font-semibold text-gray-900 mb-4">
              Updates to This Policy
            </h2>
            <p className="text-gray-600 mb-4">
              We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page and updating the "Last updated" date.
            </p>
            <p className="text-gray-600">
              If you have any questions about our use of cookies, please contact us at{' '}
              <a href="mailto:privacy@thecatalog.co.tz" className="text-primary hover:underline">
                privacy@thecatalog.co.tz
              </a>
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default CookiesPolicyPage;