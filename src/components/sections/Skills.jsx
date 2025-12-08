import { motion } from 'framer-motion';
import { skills, frameworks } from '../../utils/constants';
import SkillCard from '../ui/SkillCard';
import Card from '../ui/Card';
import FadeIn from '../animations/FadeIn';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Skills',
      subtitle: 'Programming languages and technologies',
      items: skills,
    },
    {
      title: 'Frameworks',
      subtitle: 'Frameworks I work with',
      items: frameworks,
    },
  ];

  return (
    <section id="skills" className="section bg-gray-50/50 dark:bg-dark-50/50">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-dark-400 max-w-2xl mx-auto px-4">
              Technologies and tools I work with to bring ideas to life.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <FadeIn
              key={category.title}
              direction="up"
              delay={categoryIndex * 0.1}
            >
              <div>
                <div className="text-center mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-dark-700 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-dark-400">
                    {category.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.03,
                        ease: 'easeOut',
                      }}
                    >
                      <SkillCard
                        name={item.name}
                        icon={item.icon}
                        color={item.color}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Additional Info */}
        <FadeIn direction="up" delay={0.5}>
          <div className="mt-16 text-center">
            <Card variant="default" className="max-w-2xl mx-auto">
              <p className="text-gray-600 dark:text-dark-400 leading-relaxed">
                I'm always eager to learn new technologies and improve my skills.
                If you're working with something interesting, I'd love to hear about it!
              </p>
            </Card>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;

