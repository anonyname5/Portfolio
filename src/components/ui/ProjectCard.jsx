import { motion } from 'framer-motion';
import { Github, ExternalLink, ZoomIn } from 'lucide-react';
import { useCallback } from 'react';
import Button from './Button';

const ProjectCard = ({ project, index, onImageClick }) => {
  const handleOpenModal = useCallback((e) => {
    e.stopPropagation();
    if (onImageClick && project.image) {
      onImageClick(project.image, project.title);
    }
  }, [onImageClick, project]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.4, delay: index * 0.08, ease: 'easeOut' }}
      className="group"
      style={{ willChange: 'transform, opacity' }}
    >
      <div className="glass-light dark:glass-dark border border-white/20 dark:border-white/10 rounded-2xl overflow-hidden hover:border-primary-400 dark:hover:border-primary-500 transition-all h-full flex flex-col">
        {/* Project Image/Thumbnail */}
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-500">
          {project.image ? (
            <div
              className="w-full h-full cursor-pointer"
              onClick={handleOpenModal}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <div className={`bg-gradient-to-br ${project.gradient} w-full h-full flex items-center justify-center`}>
                <span className="text-4xl font-bold text-white opacity-80">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-primary-500/0 group-hover:bg-primary-500/20 transition-all duration-300 flex items-center justify-center gap-4 pointer-events-none">
            {project.image && (
              <motion.div
                className="opacity-0 group-hover:opacity-100 p-3 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm pointer-events-auto cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={handleOpenModal}
              >
                <ZoomIn className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </motion.div>
            )}
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 p-3 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-0 group-hover:opacity-100 p-3 rounded-full bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm pointer-events-auto"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              </motion.a>
            )}
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 flex-grow flex flex-col">
          <div className="mb-4">
            <h3 className="text-xl font-bold text-gray-900 dark:text-dark-700 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-3">
              {project.subtitle}
            </p>
            <p className="text-gray-600 dark:text-dark-400 text-sm leading-relaxed text-justify">
              {project.description}
            </p>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-medium rounded-full glass-light dark:glass-dark border border-white/20 dark:border-white/10 text-gray-700 dark:text-dark-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            {project.liveUrl && (
              <Button
                variant="primary"
                size="sm"
                className="flex-1 group/btn"
                onClick={() => window.open(project.liveUrl, '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2 inline-block group-hover/btn:translate-x-1 transition-transform" />
                Live Demo
              </Button>
            )}
            {project.githubUrl && (
              <Button
                variant="secondary"
                size="sm"
                className="flex-1 group/btn"
                onClick={() => window.open(project.githubUrl, '_blank')}
              >
                <Github className="w-4 h-4 mr-2 inline-block" />
                Code
              </Button>
            )}
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default ProjectCard;

