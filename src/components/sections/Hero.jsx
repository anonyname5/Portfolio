import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ChevronDown, ExternalLink } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { personalInfo, socialLinks } from '../../utils/constants';
import Button from '../ui/Button';
import { smoothScrollTo } from '../../utils/smoothScroll';

const Hero = () => {
  const handleScrollToProjects = () => {
    smoothScrollTo('projects');
  };

  const handleDownloadCV = () => {
    window.open(personalInfo.resume, '_blank');
  };

  const socialIcons = [
    { icon: Github, href: socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: socialLinks.email, label: 'Email' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 animated-gradient opacity-20 dark:opacity-10" />
      
      {/* Floating Orbs - Monochrome Gray Theme (Premium & Minimalist) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-4 sm:left-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-primary-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 dark:opacity-8"
          animate={{
            x: [0, 40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse',
          }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute top-40 right-4 sm:right-10 w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 bg-secondary-500 rounded-full mix-blend-multiply filter blur-xl opacity-15 dark:opacity-8"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse',
          }}
          style={{ willChange: 'transform' }}
        />
        <motion.div
          className="absolute bottom-20 left-1/2 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-accent-500 rounded-full mix-blend-multiply filter blur-xl opacity-12 dark:opacity-6"
          animate={{
            x: [0, 25, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: 'easeInOut',
            repeatType: 'reverse',
          }}
          style={{ willChange: 'transform' }}
        />
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 px-4 sm:px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium mb-3 sm:mb-4"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-4 sm:mb-6 px-2"
          >
            <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
            <br />
            <span className="text-gray-900 dark:text-dark-700">
              {personalInfo.name.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-dark-400 mb-4 sm:mb-6 px-2"
          >
            {personalInfo.title}
          </motion.p>

          {/* Typing Animation Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="min-h-[50px] sm:min-h-[60px] md:min-h-[80px] mb-6 sm:mb-8 px-2"
          >
            <TypeAnimation
              sequence={[
                ...personalInfo.taglines.flatMap((tagline, index) => [
                  tagline,
                  2000,
                ]),
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-gray-600 dark:text-dark-500"
            />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={handleScrollToProjects}
              className="group"
            >
              View My Work
              <ExternalLink className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleDownloadCV}
              className="group"
            >
              <Download className="w-5 h-5 mr-2 inline-block group-hover:translate-y-1 transition-transform" />
              Download CV
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass-light dark:glass-dark border border-white/20 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-500 transition-all"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-gray-700 dark:text-dark-400" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.button
          onClick={() => smoothScrollTo('about')}
          className="flex flex-col items-center gap-2 text-gray-600 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium">Scroll</span>
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;

