import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import { projects, socialLinks } from '../../utils/constants';
import ProjectCard from '../ui/ProjectCard';
import FadeIn from '../animations/FadeIn';
import Button from '../ui/Button';

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const allProjects = projects;

  return (
    <section id="projects" className="section">
      <div className="container-custom">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-dark-400 max-w-2xl mx-auto">
              A collection of projects I've built. Each one represents a learning journey and a solution to a real problem.
            </p>
          </div>
        </FadeIn>

        {/* Featured Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {allProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

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
    </section>
  );
};

export default Projects;

