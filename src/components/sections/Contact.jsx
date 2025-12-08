import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo, socialLinks } from '../../utils/constants';
import Card from '../ui/Card';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';
import { sendEmail } from '../../utils/emailService';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (status.type) {
      setStatus({ type: null, message: '' });
    }
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return false;
    }
    if (!formData.email.trim()) {
      setStatus({ type: 'error', message: 'Please enter your email.' });
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please enter a message.' });
      return false;
    }
    if (formData.message.trim().length < 10) {
      setStatus({ type: 'error', message: 'Message must be at least 10 characters long.' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const result = await sendEmail(formData);
      setStatus({ type: result.success ? 'success' : 'error', message: result.message });
      
      if (result.success) {
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'An unexpected error occurred. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="section bg-gray-50/50 dark:bg-dark-50/50">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-dark-400 max-w-2xl mx-auto">
              Have a project in mind? Looking for a developer? Let's chat about how we can work together.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up" delay={0.2}>
            <Card variant="strong" className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-dark-400 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-light dark:glass-dark border border-white/20 dark:border-white/10 bg-white/50 dark:bg-dark-100/50 text-gray-900 dark:text-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                    disabled={isLoading}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-dark-400 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg glass-light dark:glass-dark border border-white/20 dark:border-white/10 bg-white/50 dark:bg-dark-100/50 text-gray-900 dark:text-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    disabled={isLoading}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-dark-400 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg glass-light dark:glass-dark border border-white/20 dark:border-white/10 bg-white/50 dark:bg-dark-100/50 text-gray-900 dark:text-dark-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or just say hello..."
                    disabled={isLoading}
                  />
                </div>

                {/* Status Message */}
                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-lg ${
                      status.type === 'success'
                        ? 'bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800'
                        : 'bg-error-50 dark:bg-error-900/20 border border-error-200 dark:border-error-800'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle className="w-5 h-5 text-success-600 dark:text-success-400 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 text-error-600 dark:text-error-400 flex-shrink-0" />
                    )}
                    <p
                      className={`text-sm font-medium ${
                        status.type === 'success'
                          ? 'text-success-700 dark:text-success-300'
                          : 'text-error-700 dark:text-error-300'
                      }`}
                    >
                      {status.message}
                    </p>
                  </motion.div>
                )}

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isLoading}
                  disabled={isLoading}
                  className="w-full group"
                >
                  {!isLoading && <Send className="w-5 h-5 mr-2 inline-block group-hover:translate-x-1 transition-transform" />}
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </Card>
          </FadeIn>

          {/* Alternative Contact Methods */}
          <FadeIn direction="up" delay={0.4}>
            <div className="mt-12 text-center">
              <p className="text-gray-600 dark:text-dark-400 mb-6">
                Prefer email? Reach me directly at
              </p>
              <motion.a
                href={socialLinks.email}
                className="inline-flex items-center gap-2 text-lg font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                {personalInfo.email}
              </motion.a>
              <p className="text-sm text-gray-500 dark:text-dark-500 mt-4">
                Or connect with me on{' '}
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  LinkedIn
                </a>{' '}
                and{' '}
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  GitHub
                </a>
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Contact;

