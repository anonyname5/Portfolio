import { Github, Building2, User } from 'lucide-react';
import { useState, useCallback } from 'react';
import { projects, socialLinks } from '../../utils/constants';
import ProjectCard from '../ui/ProjectCard';
import ImageModal from '../ui/ImageModal';
import FadeIn from '../animations/FadeIn';
import Button from '../ui/Button';

const Projects = () => {
  const comingSoonProject = {
    id: 'coming-soon',
    title: 'Coming Soon',
    subtitle: 'More projects are on the way',
    description: 'I am currently building new work to showcase here. Check back soon for the next project update.',
    image: '',
    tags: ['In Progress', 'New Idea'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
  };
  const projectGroups = [
    {
      key: 'organization',
      title: 'Organization Projects',
      subtitle: 'Enterprise systems I build and maintain at work.',
      icon: Building2,
      items: projects.filter((project) => project.organization),
    },
    {
      key: 'personal',
      title: 'Personal Projects',
      subtitle: 'Side projects I build to learn and explore new stacks.',
      icon: User,
      items: [...projects.filter((project) => !project.organization), comingSoonProject],
    },
  ];
  const [modalState, setModalState] = useState({ isOpen: false, imageSrc: '', imageAlt: '' });

  const handleImageClick = useCallback((imageSrc, imageAlt) => {
    setModalState({ isOpen: true, imageSrc, imageAlt });
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalState({ isOpen: false, imageSrc: '', imageAlt: '' });
  }, []);

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 sm:mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-dark-400 max-w-2xl mx-auto px-4">
              A collection of projects I've built. Each one represents a learning journey and a solution to a real problem.
            </p>
          </div>
        </FadeIn>

        {projectGroups.map(({ key, title, subtitle, icon: Icon, items }) => (
          <div key={key} className="mb-12 sm:mb-16">
            <FadeIn direction="up">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2.5 rounded-xl glass-light dark:glass-dark border border-white/20 dark:border-white/10">
                  <Icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-dark-700">
                    {title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-dark-400">
                    {subtitle}
                  </p>
                </div>
              </div>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {items.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onImageClick={handleImageClick}
                />
              ))}
            </div>
          </div>
        ))}

        {/* View All on GitHub */}
        <FadeIn direction="up" delay={0.4}>
          <div className="text-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => window.open(socialLinks.github, '_blank')}
              className="group"
            >
              <Github className="w-5 h-5 mr-2 inline-block group-hover:rotate-12 transition-transform" />
              View All on GitHub
            </Button>
          </div>
        </FadeIn>
      </div>

      {/* Image Modal - Rendered at root level via Portal */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        imageSrc={modalState.imageSrc}
        imageAlt={modalState.imageAlt}
      />
    </section>
  );
};

export default Projects;

