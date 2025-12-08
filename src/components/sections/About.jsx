import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { personalInfo } from '../../utils/constants';
import Card from '../ui/Card';
import Button from '../ui/Button';
import FadeIn from '../animations/FadeIn';

const About = () => {
  const handleDownloadCV = () => {
    window.open(personalInfo.resume, '_blank');
  };

  return (
    <section id="about" className="section">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="gradient-text">About</span> Me
            </h2>
            <p className="text-lg text-gray-600 dark:text-dark-400 max-w-2xl mx-auto">
              Get to know more about my background, experience, and what drives me as a developer.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Avatar/Image */}
          <FadeIn direction="left" delay={0.2}>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                {/* Profile Picture */}
                <div className="aspect-square rounded-2xl overflow-hidden glass-light dark:glass-dark border border-white/20 dark:border-white/10 shadow-xl">
                  {personalInfo.avatar ? (
                    <img
                      src={personalInfo.avatar}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary-400 to-secondary-500 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white">
                        {personalInfo.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </span>
                    </div>
                  )}
                </div>
                {/* Decorative elements */}
                {/* Decorative elements - Monochrome Gray Theme (Premium) */}
                <motion.div
                  className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500 rounded-full blur-2xl opacity-15"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatType: 'reverse',
                  }}
                  style={{ willChange: 'transform, opacity' }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-500 rounded-full blur-2xl opacity-15"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.15, 0.3, 0.15],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    repeatType: 'reverse',
                  }}
                  style={{ willChange: 'transform, opacity' }}
                />
              </div>
            </div>
          </FadeIn>

          {/* Bio Text */}
          <FadeIn direction="right" delay={0.3}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-700 mb-4">
                  Who I Am
                </h3>
                <p className="text-gray-600 dark:text-dark-400 leading-relaxed">
                  {personalInfo.bio.para1}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-700 mb-4">
                  What I Do
                </h3>
                <p className="text-gray-600 dark:text-dark-400 leading-relaxed">
                  {personalInfo.bio.para2}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-700 mb-4">
                  My Journey
                </h3>
                <p className="text-gray-600 dark:text-dark-400 leading-relaxed">
                  {personalInfo.bio.para3}
                </p>
              </div>

              <div className="pt-4">
                <Button
                  variant="primary"
                  onClick={handleDownloadCV}
                  className="group"
                >
                  <Download className="w-5 h-5 mr-2 inline-block group-hover:translate-y-1 transition-transform" />
                  Download CV
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats Cards */}
        <FadeIn direction="up" delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {personalInfo.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
              >
                <Card variant="strong" className="text-center">
                  <motion.div
                    className="text-4xl md:text-5xl font-extrabold gradient-text mb-2"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.08 + 0.2,
                      ease: 'easeOut',
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-sm md:text-base text-gray-600 dark:text-dark-400 font-medium">
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default About;

