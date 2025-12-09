// src/utils/emailService.js
import emailjs from '@emailjs/browser';

/**
 * Check if EmailJS is properly configured
 * @returns {boolean} True if all required environment variables are set
 */
export const isEmailConfigured = () => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Debug logging (remove in production)
    if (import.meta.env.DEV) {
        console.log('EmailJS Config Check:', {
            serviceId: serviceId ? '✓ Set' : '✗ Missing',
            templateId: templateId ? '✓ Set' : '✗ Missing',
            publicKey: publicKey ? '✓ Set' : '✗ Missing',
        });
    }

  return !!(serviceId && templateId && publicKey);
};

/**
 * Send an email using EmailJS
 * @param {Object} formData - The form data containing name, email, and message
 * @param {string} formData.name - Sender's name
 * @param {string} formData.email - Sender's email address
 * @param {string} formData.message - Message content
 * @returns {Promise<{success: boolean, message: string}>} Result of the email send operation
 */
export const sendEmail = async (formData) => {
  try {
    // Validate form data
    if (!formData || !formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: 'Please fill in all required fields.',
      };
    }

    // Check if EmailJS is configured
    if (!isEmailConfigured()) {
      console.warn('EmailJS is not configured. Missing environment variables.');
      return {
        success: false,
        message: 'Email service is not configured. Please check your environment variables.',
      };
    }

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Prepare template parameters matching your EmailJS template
    const templateParams = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
      time: new Date().toLocaleString(), // Current date and time
      title: `Form Submission from ${formData.name.trim()}`, // Email subject/title
    };

    // Send email via EmailJS
    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      publicKey
    );

    // Check response status
    if (response.status === 200 || response.text === 'OK') {
      return { 
        success: true, 
        message: 'Email sent successfully! I\'ll get back to you soon.' 
      };
    } else {
      console.error('EmailJS response error:', response);
      return { 
        success: false, 
        message: 'Failed to send email. Please try again.' 
      };
    }
  } catch (error) {
    console.error('Email send error:', error);
    
    // Provide more specific error messages
    let errorMessage = 'Failed to send email. Please try again later.';
    
    if (error.text) {
      errorMessage = error.text;
    } else if (error.message) {
      errorMessage = error.message;
    } else if (typeof error === 'string') {
      errorMessage = error;
    }
    
    return {
      success: false,
      message: errorMessage,
    };
  }
};

