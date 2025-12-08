import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { smoothScrollTo } from '../../utils/smoothScroll';
import { navLinks } from '../../utils/constants';
import ThemeToggle from '../ui/ThemeToggle';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { activeSection } = useScrollPosition();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    const sectionId = href.replace('#', '');
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      smoothScrollTo(sectionId);
    }, 100);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 md:py-3' : 'py-3 md:py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom">
        <div className={`glass-strong rounded-xl md:rounded-2xl px-4 md:px-6 py-3 md:py-4 ${
          scrolled ? 'shadow-lg' : 'shadow-md'
        }`}>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="text-xl md:text-2xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Portfolio
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-primary-500 dark:text-primary-400'
                        : 'text-gray-700 dark:text-dark-400 hover:text-primary-500 dark:hover:text-primary-400'
                    }`}
                    whileHover={{ y: -2 }}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500"
                        layoutId="activeSection"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsMobileMenuOpen(!isMobileMenuOpen);
                }}
                className="p-2 rounded-lg glass-light dark:glass-dark border border-white/20 z-10 relative"
                whileTap={{ scale: 0.95 }}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-900 dark:text-dark-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-900 dark:text-dark-600" />
                )}
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden mt-4 pt-4 border-t border-white/20 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex flex-col gap-2 pb-2">
                  {navLinks.map((link) => {
                    const isActive = activeSection === link.href.replace('#', '');
                    return (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          handleNavClick(link.href);
                        }}
                        className={`px-4 py-3 rounded-lg text-base font-medium transition-colors touch-manipulation ${
                          isActive
                            ? 'bg-primary-500/20 text-primary-600 dark:text-primary-400'
                            : 'text-gray-700 dark:text-dark-400 hover:bg-white/10 active:bg-white/20'
                        }`}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {link.name}
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;

