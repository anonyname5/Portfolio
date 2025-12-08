import { motion } from 'framer-motion';

const Card = ({
  children,
  variant = 'default',
  hover = true,
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-xl p-6';
  
  const variants = {
    default: 'glass-light dark:glass-dark border border-white/20 dark:border-white/10',
    strong: 'glass-strong border border-white/30',
    solid: 'bg-white dark:bg-dark-100 border border-gray-200 dark:border-dark-200',
  };

  const hoverStyles = hover
    ? 'hover:shadow-xl hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20 transition-shadow'
    : '';

  return (
    <motion.div
      className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}
      whileHover={hover ? { y: -4, scale: 1.02 } : {}}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      style={{ willChange: hover ? 'transform' : 'auto' }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;

