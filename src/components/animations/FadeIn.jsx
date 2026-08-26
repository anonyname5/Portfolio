import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const FadeIn = ({ children, delay = 0, direction = 'up', className = '' }) => {
  // Trigger as soon as the element edges into the viewport (rootMargin) rather
  // than waiting until 30% is visible — this removes the "content appears late"
  // lag while scrolling.
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '0px 0px -80px 0px',
    triggerOnce: true,
  });

  const variants = {
    up: {
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 }
    },
    down: {
      hidden: { opacity: 0, y: -40 },
      visible: { opacity: 1, y: 0 }
    },
    left: {
      hidden: { opacity: 0, x: -40 },
      visible: { opacity: 1, x: 0 }
    },
    right: {
      hidden: { opacity: 0, x: 40 },
      visible: { opacity: 1, x: 0 }
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={className}
      style={{ willChange: inView ? 'auto' : 'transform, opacity' }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;

