import React, { useState } from 'react';
import { AlertTriangle, Heart, ExternalLink } from 'lucide-react';

export const MedicalDisclaimer = ({ compact = false, showCheckbox = false, onConsentChange }) => {
  const [consented, setConsented] = useState(false);

  const handleConsentChange = (e) => {
    setConsented(e.target.checked);
    if (onConsentChange) {
      onConsentChange(e.target.checked);
    }
  };

  if (compact) {
    return (
      <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-xl">
        <div className="flex items-start">
          <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0 mt-0.5" />
          <div className="text-sm text-amber-700">
            <p className="font-medium mb-1">Medical Disclaimer</p>
            <p>
              Services are provided by licensed medical doctors. Online consultations have limitations 
              compared to in-person evaluations.
            </p>
            <a href="/how-it-works#disclaimer" className="inline-flex items-center text-amber-800 hover:underline mt-1 text-xs">
              Read full disclaimer
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2">Important Medical Information</h3>
          <p className="text-sm text-gray-700 mb-3">
            The Catalog Healthcare provides medical consultations by licensed doctors. All medical decisions 
            are based on clinical judgment and information provided. Online consultations have limitations 
            compared to in-person evaluations.
          </p>
          <p className="text-sm text-amber-700 font-medium">
            ⚠️ For medical emergencies, please seek immediate care at a qualified medical facility.
          </p>
          
          {showCheckbox && (
            <label className="flex items-start gap-3 mt-4 pt-3 border-t border-amber-200">
              <input
                type="checkbox"
                checked={consented}
                onChange={handleConsentChange}
                className="mt-1 w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
              />
              <span className="text-sm text-gray-700">
                I acknowledge that I have read and understand the medical disclaimer. I consent to receive 
                medical consultation services under these conditions.
              </span>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};