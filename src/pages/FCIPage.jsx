// src/pages/FCIPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Brain, 
  Heart, 
  MessageCircle,
  FileText,
  Shield,
  CreditCard,
  Smartphone,
  Lock,
  Download,
  Star,
  Users,
  Briefcase,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

// Placeholder images - replace with actual images
import bookCover from '../assets/images/fci/fci-cover.png';
import authorImage from '../assets/images/fci/dr-erick.png';

const FCIPage = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [paymentError, setPaymentError] = useState('');

  // Product details
  const product = {
    id: 'FCI_BOOK_001',
    name: 'The Female Cycle Intelligence Framework™',
    price: 10000, // TZS 10,000 (after discount)
    originalPrice: 15000,
    discount: 5000,
    currency: 'TZS'
  };

  // Calculate total - MOVED BEFORE functions that use it
  const totalAmount = product.price * quantity;
  const totalOriginal = product.originalPrice * quantity;
  const totalSavings = totalOriginal - totalAmount;

  // AzamPay configuration - REPLACE WITH YOUR ACTUAL CREDENTIALS
  const AZAMPAY_CONFIG = {
    sandbox: {
      merchantAccountNumber: 'YOUR_SANDBOX_MERCHANT_ACCOUNT',
      merchantId: 'YOUR_SANDBOX_MERCHANT_ID',
      apiKey: 'YOUR_SANDBOX_API_KEY',
      apiSecret: 'YOUR_SANDBOX_API_SECRET',
      baseUrl: 'https://sandbox.azampay.co.tz',
      returnUrl: `${window.location.origin}/fci/payment-success`,
      failUrl: `${window.location.origin}/fci/payment-failed`
    },
    production: {
      merchantAccountNumber: 'YOUR_PRODUCTION_MERCHANT_ACCOUNT',
      merchantId: 'YOUR_PRODUCTION_MERCHANT_ID',
      apiKey: 'YOUR_PRODUCTION_API_KEY',
      apiSecret: 'YOUR_PRODUCTION_API_SECRET',
      baseUrl: 'https://api.azampay.co.tz',
      returnUrl: `${window.location.origin}/fci/payment-success`,
      failUrl: `${window.location.origin}/fci/payment-failed`
    }
  };

  // Use sandbox for testing, switch to production when ready
  const isProduction = false; // Set to true when going live
  const config = isProduction ? AZAMPAY_CONFIG.production : AZAMPAY_CONFIG.sandbox;

  // Payment providers
  const paymentProviders = [
    { id: 'mobile', name: 'Mobile Money', icon: Smartphone, providers: ['M-Pesa', 'Tigo Pesa', 'Airtel Money'] },
    { id: 'card', name: 'Card Payment', icon: CreditCard, providers: ['Visa', 'Mastercard'] }
  ];

  const [selectedProvider, setSelectedProvider] = useState('mobile');

  // Features
  const features = [
    { icon: Brain, title: 'Energy & Focus', description: 'Understand how cycle phases affect your daily performance' },
    { icon: TrendingUp, title: 'Decision Making', description: 'Learn when you make better strategic choices' },
    { icon: Heart, title: 'Emotional Intelligence', description: 'Navigate relationships with cycle awareness' },
    { icon: MessageCircle, title: 'Communication', description: 'Improve workplace and personal dynamics' }
  ];

  // Benefits for organizations
  const orgBenefits = [
    'Reduce burnout and improve retention',
    'Create inclusive workplace policies',
    'Boost team productivity and morale',
    'Support female talent development'
  ];

  // Handle AzamPay payment
  const initiatePayment = async () => {
    // Validation
    if (!name || !email || !phone) {
      setPaymentError('Please fill in your name, email, and phone number');
      return;
    }

    if (!agreed) {
      setPaymentError('Please agree to the terms and conditions');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setPaymentError('Please enter a valid email address');
      return;
    }

    // Validate phone (basic)
    if (phone.length < 10) {
      setPaymentError('Please enter a valid phone number');
      return;
    }

    setPaymentError('');
    setIsProcessing(true);

    try {
      console.log('Sending payment request to backend...');
      console.log('Total amount:', totalAmount);
      
      const response = await fetch('http://localhost:5000/api/payments/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          amount: totalAmount,
          currency: 'TZS',
          customerName: name,
          customerEmail: email,
          customerPhone: phone,
          productName: product.name,
          quantity: quantity,
          paymentMethod: selectedProvider,
          provider: selectedProvider === 'mobile' ? 'M-Pesa' : undefined,
          returnUrl: `${window.location.origin}/fci/payment-success`,
          failUrl: `${window.location.origin}/fci/payment-failed`
        })
      });

      console.log('Response status:', response.status);
      
      // Check if response is ok
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error response:', errorText);
        throw new Error(`Server responded with status ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Payment response:', result);

      if (result.success && result.paymentUrl) {
        // Store orderId in sessionStorage for later verification
        sessionStorage.setItem('fci_order_id', result.orderId);
        sessionStorage.setItem('fci_customer_email', email);
        // Redirect to AzamPay payment page
        window.location.href = result.paymentUrl;
      } else {
        throw new Error(result.message || 'Payment initialization failed');
      }
    } catch (error) {
      console.error('Payment error details:', error);
      setPaymentError(error.message || 'Payment failed. Please try again or contact support.');
      setIsProcessing(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>The Female Cycle Intelligence Framework™ | The Catalog</title>
        <meta name="description" content="A practical system for optimizing human performance in work and life. Understand how cycle phases influence energy, focus, and decision-making." />
      </Helmet>

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-rose-50 via-white to-purple-50 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 right-20 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-10 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Product Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Mother's Day Offer</span>
                  <span className="text-xs text-primary">Ends 15 June, 2026</span>
                </div>

                <h1 className="text-4xl font-display font-bold tracking-tight text-gray-900 leading-tight mb-4">
                  The <span className="text-secondary">Female Cycle Intelligence <span className="text-primary">Framework™</span></span>
                </h1>
                
                <p className="text-lg text-gray-600 mb-4">
                  A practical system for optimizing human performance in work and life
                </p>
                
                <p className="text-primary font-medium italic mb-6 border-l-4 border-primary pl-4">
                  "You've been taught to perform consistently in a body that is not designed to be constant."
                </p>
                
                {/* Pricing */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl font-bold text-primary">TZS {totalAmount.toLocaleString()}/-</div>
                  <div className="text-lg text-gray-400 line-through">TZS {totalOriginal.toLocaleString()}/-</div>
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    Save {Math.round((product.discount / product.originalPrice) * 100)}%
                  </div>
                </div>
                
                {/* Author */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                    <img src={authorImage} alt="Dr. Erick G Otieno" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Dr. Erick G Otieno, MD</p>
                    <p className="text-sm text-gray-500">Author & Preventive Health Physician</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column - Book Cover */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative h-autoflex items-center justify-center"
              >
                <div className="relative z-10">
                  <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl p-4 shadow-2xl">
                    <img 
                      src={bookCover} 
                      alt="The Female Cycle Intelligence Framework Book Cover"
                      className="w-full max-w-md mx-auto rounded-2xl shadow-lg h-[400px] object-contain"
                    />
                  </div>
                </div>
                
                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 z-20">
                  <Download className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">PDF Format</span>
                </div>
                <div className="absolute -bottom-4 -left-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 z-20">
                  <FileText className="h-4 w-4 text-secondary" />
                  <span className="text-sm font-medium">28 Pages</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                Inside the Framework
              </h2>
              <p className="text-lg text-secondary max-w-2xl mx-auto">
                Learn how cycle phases influence your daily performance and practical tools to optimize your work and life
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Purchase Section with AzamPay Integration */}
        <section className="py-16 bg-gray-50" id="purchase">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                Get Your Copy Today
              </h2>
              <p className="text-secondary">Instant PDF download after payment</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Product Summary */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">The Female Cycle Intelligence Framework™</span>
                    <span className="font-medium">TZS {product.price.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Quantity</span>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-8 h-8 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        -
                      </button>
                      <span className="font-medium w-8 text-center">{quantity}</span>
                      <button 
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-8 h-8 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <div className="border-t pt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-primary text-xl">TZS {totalAmount.toLocaleString()}</span>
                    </div>
                    {totalSavings > 0 && (
                      <p className="text-xs text-green-600 mt-1">You saved TZS {totalSavings.toLocaleString()}</p>
                    )}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-600 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    Instant PDF download after payment
                  </p>
                  <p className="text-sm text-gray-600 flex items-center gap-2 mt-2">
                    <Lock className="h-4 w-4 text-green-500" />
                    Secure payment via AzamPay
                  </p>
                </div>
              </motion.div>

              {/* Payment Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Payment Details</h3>
                
                {/* Personal Information */}
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="you@example.com"
                      required
                    />
                    <p className="text-xs text-gray-500 mt-1">The PDF will be sent to this email</p>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-primary"
                      placeholder="+255 XXX XXX XXX"
                      required
                    />
                  </div>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                  <div className="flex gap-4">
                    {paymentProviders.map((provider) => {
                      const Icon = provider.icon;
                      return (
                        <button
                          key={provider.id}
                          type="button"
                          onClick={() => setSelectedProvider(provider.id)}
                          className={`flex-1 flex items-center justify-center gap-2 p-3 rounded-xl border transition-all ${
                            selectedProvider === provider.id
                              ? 'border-primary bg-primary/5 ring-1 ring-primary'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          <span className="text-sm font-medium">{provider.name}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="flex items-start gap-3 mb-6">
                  <input
                    type="checkbox"
                    id="agree"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1"
                  />
                  <label htmlFor="agree" className="text-sm text-gray-600">
                    I agree to the <Link to="/terms" className="text-primary hover:underline">Terms & Conditions</Link> and{' '}
                    <Link to="/refund" className="text-primary hover:underline">Refund Policy</Link>
                  </label>
                </div>

                {/* Error Message */}
                {paymentError && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-xl flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 text-red-500" />
                    <p className="text-sm text-red-600">{paymentError}</p>
                  </div>
                )}

                {/* Payment Button */}
                <button
                  onClick={initiatePayment}
                  disabled={isProcessing}
                  className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Pay TZS {totalAmount.toLocaleString()} via AzamPay
                      <CreditCard className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-center text-gray-500 mt-4">
                  Secure payment powered by AzamPay. Your information is encrypted and secure.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* For Organizations Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-4">
                  For Organizations & Teams
                </h2>
                <p className="text-gray-600 mb-6">
                  Designed for professionals, leaders, and organizations, this framework gives you the clarity to align work with how the body actually functions.
                </p>
                <ul className="space-y-3 mb-8">
                  {orgBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => navigate('/contact#book-now')}
                  className="btn-outline px-6 py-3 inline-flex items-center gap-2"
                >
                  Contact for Bulk Purchase
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Book Details</h3>
                <div className="space-y-3">
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Format</span>
                    <span className="font-medium">PDF (Instant Download)</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Pages</span>
                    <span className="font-medium">28 Pages</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Language</span>
                    <span className="font-medium">English</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Release Date</span>
                    <span className="font-medium">01 April, 2026</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-gray-600">Publisher</span>
                    <span className="font-medium">The Catalog Healthcare</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-secondary">Everything you need to know about the framework</p>
            </div>

            <div className="space-y-4">
              {[
                { q: "What format is the book in?", a: "The book is available as a PDF document that you can download instantly after payment." },
                { q: "How do I get access after payment?", a: "After successful payment, you'll receive an email with a download link. You can also download directly from the success page." },
                { q: "Can I purchase for my team?", a: "Yes! Contact us directly for bulk purchase discounts and team licensing options." },
                { q: "What payment methods are accepted?", a: "We accept Mobile Money (M-Pesa, Tigo Pesa, Airtel Money) and Card Payments via AzamPay." },
                { q: "Is there a refund policy?", a: "Digital products are non-refundable. Please contact us if you experience any issues with your download." }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-5 shadow-sm"
                >
                  <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-600 text-sm">{faq.a}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-br from-primary to-primary/90">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Understand Your Cycle?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              This is where awareness begins. Implementation comes next.
            </p>
            <a
              href="#purchase"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Get Your Copy Now
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </section>
      </main>
    </>
  );
};

export default FCIPage;