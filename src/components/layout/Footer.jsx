import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../utils/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { icon: Github, href: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: socialLinks.email, label: 'Email' },
  ];

  return (
    <footer className="border-t border-gray-200 dark:border-dark-200 py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-600 dark:text-dark-400">
            © {currentYear} {socialLinks.github.split('/').pop()}. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-light dark:glass-dark border border-white/20 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-500 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-5 h-5 text-gray-700 dark:text-dark-400" />
              </motion.a>
            ))}
          </div>

          {/* Built with */}
          <p className="text-sm text-gray-500 dark:text-dark-500">
            Built with <span className="text-primary-500">React</span> &{' '}
            <span className="text-secondary-500">Vite</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

