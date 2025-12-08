import { Moon, Sun } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-3 rounded-full glass-strong border border-white/30 shadow-lg hover:shadow-xl transition-all group"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.9 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-primary-400 group-hover:text-primary-300 transition-colors" />
        ) : (
          <Sun className="w-5 h-5 text-primary-600 group-hover:text-primary-700 transition-colors" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;

