import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { experience } from '../../utils/constants';
import FadeIn from '../animations/FadeIn';
import Card from '../ui/Card';

const Experience = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'work':
        return Briefcase;
      case 'education':
        return GraduationCap;
      case 'certification':
        return Award;
      default:
        return Briefcase;
    }
  };

  const getColor = (type) => {
    switch (type) {
      case 'work':
        return 'primary';
      case 'education':
        return 'secondary';
      case 'certification':
        return 'accent';
      default:
        return 'primary';
    }
  };

  return (
    <section id="experience" className="section">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-dark-400 max-w-2xl mx-auto">
              A journey through my professional and educational milestones.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 dark:from-primary-800 dark:via-primary-600 dark:to-primary-800 transform md:-translate-x-1/2" style={{ willChange: 'auto' }} />

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((item, index) => {
                const Icon = getIcon(item.type);
                const color = getColor(item.type);
                const isEven = index % 2 === 0;

                return (
                  <FadeIn
                    key={item.id}
                    direction={isEven ? 'left' : 'right'}
                    delay={index * 0.1}
                  >
                    <div
                      className={`relative flex items-start gap-6 ${
                        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                      }`}
                    >
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-full flex items-center justify-center glass-strong border-2 ${
                            color === 'primary'
                              ? 'border-primary-500 bg-primary-500/20 dark:bg-primary-500/10'
                              : color === 'secondary'
                              ? 'border-secondary-500 bg-secondary-500/20 dark:bg-secondary-500/10'
                              : 'border-accent-500 bg-accent-500/20 dark:bg-accent-500/10'
                          }`}
                        >
                          <Icon
                            className={`w-8 h-8 ${
                              color === 'primary'
                                ? 'text-primary-600 dark:text-primary-400'
                                : color === 'secondary'
                                ? 'text-secondary-600 dark:text-secondary-400'
                                : 'text-accent-600 dark:text-accent-400'
                            }`}
                          />
                        </div>
                      </div>

                      {/* Content Card */}
                      <div
                        className={`flex-1 ${
                          isEven ? 'md:text-left' : 'md:text-right'
                        }`}
                      >
                        <Card variant="strong" className="relative">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-dark-700 mb-1">
                                {item.title}
                              </h3>
                              <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                                {item.company}
                              </p>
                            </div>
                            <div
                              className={`flex items-center gap-2 text-sm text-gray-600 dark:text-dark-400 ${
                                isEven ? 'md:justify-start' : 'md:justify-end'
                              }`}
                            >
                              <Calendar className="w-4 h-4" />
                              <span>{item.period}</span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-400 mb-4">
                            <MapPin className="w-4 h-4" />
                            <span>{item.location}</span>
                          </div>

                          <p className="text-gray-600 dark:text-dark-400 leading-relaxed mb-4">
                            {item.description}
                          </p>

                          {item.achievements && item.achievements.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-dark-200">
                              <ul
                                className={`space-y-2 ${
                                  isEven ? 'md:text-left' : 'md:text-right'
                                }`}
                              >
                                {item.achievements.map((achievement, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-sm text-gray-600 dark:text-dark-400"
                                  >
                                    <span className="text-primary-500 dark:text-primary-400 mt-1">
                                      •
                                    </span>
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </Card>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

