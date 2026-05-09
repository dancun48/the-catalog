// src/services/api.js
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    
    const defaultOptions = {
      headers: {
        'Content-Type': 'application/json',
      },
      ...options
    };

    try {
      const response = await fetch(url, defaultOptions);
      
      // Check if response is ok
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  // Payment endpoints
  async createOrder(orderData) {
    return this.request('/payments/create-order', {
      method: 'POST',
      body: JSON.stringify(orderData)
    });
  }

  async verifyPayment(orderId) {
    return this.request(`/payments/verify/${orderId}`);
  }

  async getOrder(orderId) {
    return this.request(`/payments/order/${orderId}`);
  }

  async generateDownloadLink(orderId, email) {
    return this.request('/payments/generate-download', {
      method: 'POST',
      body: JSON.stringify({ orderId, email })
    });
  }

  // Health check
  async healthCheck() {
    return this.request('/health');
  }
}

export const api = new ApiService();