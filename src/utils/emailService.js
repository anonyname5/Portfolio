// src/utils/emailService.js
import emailjs from '@emailjs/browser';

export const sendEmail = async (formData) => {
  try {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      return {
        success: false,
        message: 'Email service is not configured. Please check your environment variables.',
      };
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      publicKey
    );

    if (response.status === 200) {
      return { success: true, message: 'Email sent successfully! I\'ll get back to you soon.' };
    } else {
      return { success: false, message: 'Failed to send email. Please try again.' };
    }
  } catch (error) {
    console.error('Email send error:', error);
    return {
      success: false,
      message: error.text || 'Failed to send email. Please try again later.',
    };
  }
};

