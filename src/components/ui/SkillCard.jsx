import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';

const SkillCard = ({ name, icon, color, level }) => {
  // For now, we'll use a simple icon placeholder
  // In production, you'd use actual tech icons from a library or SVGs
  const IconComponent = icon ? () => (
    <div
      className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl font-bold"
      style={{ backgroundColor: `${color}20`, color }}
    >
      {name.charAt(0)}
    </div>
  ) : HelpCircle;

  return (
    <motion.div
      className="group relative"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ willChange: 'transform' }}
    >
      <div className="glass-light dark:glass-dark border border-white/20 dark:border-white/10 rounded-xl p-6 text-center hover:border-primary-400 dark:hover:border-primary-500 transition-all cursor-default">
        <div className="flex justify-center mb-4">
          {icon ? (
            <IconComponent />
          ) : (
            <HelpCircle className="w-12 h-12" style={{ color }} />
          )}
        </div>
        <h3 className="font-semibold text-gray-900 dark:text-dark-700 mb-2">
          {name}
        </h3>
        {level && (
          <div className="w-full bg-gray-200 dark:bg-dark-200 rounded-full h-2">
            <motion.div
              className="h-2 rounded-full"
              style={{ backgroundColor: color }}
              initial={{ width: 0 }}
              whileInView={{ width: `${level}%` }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            />
          </div>
        )}
      </div>

      {/* Tooltip on hover */}
      <motion.div
        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 dark:bg-dark-800 text-white dark:text-dark-100 text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-10"
        initial={{ y: 5 }}
        whileHover={{ y: 0 }}
      >
        {name}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-dark-800" />
      </motion.div>
    </motion.div>
  );
};

export default SkillCard;

