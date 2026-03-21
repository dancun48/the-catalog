import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Circle, ChevronRight } from 'lucide-react';
import { MedicalDisclaimer } from './MedicalDisclaimer';

export const BookingStepper = ({ currentStep, onStepChange }) => {
  const steps = [
    { id: 1, name: 'Choose Service', description: 'Select consultation type' },
    { id: 2, name: 'Your Details', description: 'Contact & health info' },
    { id: 3, name: 'Schedule', description: 'Pick date & time' },
    { id: 4, name: 'Payment', description: 'Secure payment' },
    { id: 5, name: 'Confirmation', description: 'Session confirmed' }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center flex-1">
              <div className="relative">
                {currentStep > step.id ? (
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                ) : currentStep === step.id ? (
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-sm font-bold">{step.id}</span>
                  </div>
                ) : (
                  <div className="w-10 h-10 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">{step.id}</span>
                  </div>
                )}
              </div>
              <div className="text-center mt-2">
                <p className={`text-sm font-medium ${currentStep >= step.id ? 'text-primary' : 'text-gray-500'}`}>
                  {step.name}
                </p>
                <p className="text-xs text-gray-400 hidden md:block">{step.description}</p>
              </div>
            </div>
            {index < steps.length - 1 && (
              <ChevronRight className={`w-5 h-5 ${currentStep > step.id ? 'text-primary' : 'text-gray-300'}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

// BookingForm component that integrates the disclaimer
export const BookingForm = () => {
  const [step, setStep] = useState(1);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: ''
  });

  const handleNext = () => {
    if (step === 1 && !disclaimerAccepted) {
      alert('Please accept the medical disclaimer to continue');
      return;
    }
    setStep(step + 1);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <BookingStepper currentStep={step} />
      
      {step === 1 && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="text-2xl font-semibold">Select Your Service</h2>
          <div className="space-y-3">
            {['Preventive Health Consultation', 'Health Optimization Session', 'Workplace Wellness Program'].map((service) => (
              <label key={service} className="flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="service"
                  value={service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="mr-3"
                />
                <span>{service}</span>
              </label>
            ))}
          </div>
          
          <MedicalDisclaimer showCheckbox onConsentChange={setDisclaimerAccepted} />
          
          <button
            onClick={handleNext}
            disabled={!formData.service || !disclaimerAccepted}
            className="w-full py-3 bg-primary text-white rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continue
          </button>
        </motion.div>
      )}
      
      {/* Additional steps would go here */}
    </div>
  );
};