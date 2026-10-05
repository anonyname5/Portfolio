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
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
              My <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-dark-400 max-w-2xl mx-auto px-4">
              A journey through my professional and educational milestones.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 sm:left-8 top-8 bottom-8 w-0.5 -translate-x-1/2 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 dark:from-primary-800 dark:via-primary-600 dark:to-primary-800" />

            {/* Experience Items */}
            <div className="space-y-8 sm:space-y-10">
              {experience.map((item, index) => {
                const Icon = getIcon(item.type);
                const color = getColor(item.type);
                const isCurrent = /present/i.test(item.period);

                return (
                  <FadeIn
                    key={item.id}
                    direction="up"
                    delay={index * 0.1}
                  >
                    <div className="relative flex items-start gap-4 sm:gap-6">
                      {/* Timeline Dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <div
                          className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center glass-strong border-2 ${
                            color === 'primary'
                              ? 'border-primary-500 bg-primary-500/20 dark:bg-primary-500/10'
                              : color === 'secondary'
                              ? 'border-secondary-500 bg-secondary-500/20 dark:bg-secondary-500/10'
                              : 'border-accent-500 bg-accent-500/20 dark:bg-accent-500/10'
                          }`}
                        >
                          <Icon
                            className={`w-6 h-6 sm:w-8 sm:h-8 ${
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
                      <div className="flex-1 min-w-0">
                        <Card variant="strong" className="relative">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3">
                            <div className="min-w-0">
                              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-dark-700 mb-1">
                                {item.title}
                              </h3>
                              <p className="text-base sm:text-lg font-semibold text-primary-600 dark:text-primary-400">
                                {item.company}
                              </p>
                            </div>
                            <div className="flex flex-shrink-0 items-center gap-2 sm:flex-col sm:items-end">
                              <span className="flex items-center gap-2 whitespace-nowrap text-sm text-gray-600 dark:text-dark-500">
                                <Calendar className="w-4 h-4" />
                                {item.period}
                              </span>
                              {isCurrent && (
                                <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                                  Current
                                </span>
                              )}
                            </div>
                          </div>

                          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-dark-500 mb-4">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>{item.location}</span>
                          </div>

                          {item.description && (
                            <p className="text-gray-600 dark:text-dark-500 leading-relaxed mb-4">
                              {item.description}
                            </p>
                          )}

                          {item.achievements && item.achievements.length > 0 && (
                            <div className="pt-4 border-t border-gray-200 dark:border-dark-200">
                              <ul className="space-y-2.5">
                                {item.achievements.map((achievement, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-3 text-sm leading-relaxed text-gray-600 dark:text-dark-500"
                                  >
                                    <span className="mt-[0.55em] h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-500 dark:bg-primary-400" />
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

