import { motion } from 'framer-motion';
import {
  Github,
  ExternalLink,
  ZoomIn,
  Building2,
  ScrollText,
  Receipt,
  FileSpreadsheet,
  Workflow,
  SquareKanban,
  ListChecks,
  HeartPulse,
  Utensils,
  ShoppingCart,
  MapPinned,
  QrCode,
  Sparkles,
  FolderCode,
} from 'lucide-react';
import { useCallback } from 'react';
import Button from './Button';

const PROJECT_ICONS = {
  scroll: ScrollText,
  receipt: Receipt,
  spreadsheet: FileSpreadsheet,
  pipeline: Workflow,
  kanban: SquareKanban,
  checklist: ListChecks,
  health: HeartPulse,
  food: Utensils,
  cart: ShoppingCart,
  map: MapPinned,
  qr: QrCode,
};

const DOT_PATTERN = {
  backgroundImage: 'radial-gradient(currentColor 1px, transparent 1px)',
  backgroundSize: '14px 14px',
};

const ProjectCard = ({ project, index, onImageClick }) => {
  const isComingSoon = project.id === 'coming-soon';
  const isOngoing = project.status === 'ongoing';
  const isMobile = project.platform === 'mobile';
  const PlaceholderIcon = isComingSoon
    ? Sparkles
    : PROJECT_ICONS[project.icon] || FolderCode;
  const placeholderCaption = isComingSoon
    ? 'In Progress'
    : project.tags.slice(0, 2).join(' · ');

  const handleOpenModal = useCallback((e) => {
    e.stopPropagation();
    if (onImageClick && project.image) {
      onImageClick(project.image, project.title);
    }
  }, [onImageClick, project]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: Math.min(index, 3) * 0.06, ease: 'easeOut' }}
      className="group"
    >
      <div className={`glass-light dark:glass-dark border rounded-2xl overflow-hidden transition-all h-full flex flex-col ${
        isComingSoon
          ? 'border-dashed border-primary-300/70 dark:border-primary-500/60 hover:border-primary-400 dark:hover:border-primary-400'
          : isOngoing
          ? 'border-emerald-400/60 dark:border-emerald-500/50 hover:border-emerald-500 dark:hover:border-emerald-400 ring-1 ring-emerald-400/20'
          : 'border-white/20 dark:border-white/10 hover:border-primary-400 dark:hover:border-primary-500'
      }`}>
        {/* Project Image/Thumbnail */}
        <div className="relative aspect-[16/10] overflow-hidden bg-primary-100 dark:bg-dark-100 border-b border-black/5 dark:border-white/5">
          <div className="absolute inset-0 text-primary-300 dark:text-dark-200" style={DOT_PATTERN} />

          {project.image && isMobile && (
            <button
              type="button"
              onClick={handleOpenModal}
              aria-label={`View ${project.title} screenshot`}
              className="absolute left-1/2 top-5 w-[42%] aspect-[9/17] -translate-x-1/2 cursor-zoom-in rounded-[1.5rem] border-[5px] border-gray-900 bg-gray-950 shadow-2xl ring-1 ring-white/10 overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
            >
              <span className="absolute top-1 left-1/2 z-10 h-1.5 w-8 -translate-x-1/2 rounded-full bg-gray-900" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full rounded-[1.1rem] object-contain object-top pt-3"
                loading="lazy"
              />
            </button>
          )}

          {project.image && !isMobile && (
            <button
              type="button"
              onClick={handleOpenModal}
              aria-label={`View ${project.title} screenshot`}
              className="absolute left-5 right-5 top-5 -bottom-px flex flex-col cursor-zoom-in rounded-t-xl bg-white dark:bg-dark-100 shadow-2xl ring-1 ring-black/10 overflow-hidden transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
            >
              <span className="flex h-5 flex-shrink-0 items-center gap-1.5 border-b border-black/5 bg-gray-100 px-2.5 dark:bg-dark-200">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              <img
                src={project.image}
                alt={project.title}
                className="w-full flex-1 min-h-0 object-cover object-left-top"
                loading="lazy"
              />
            </button>
          )}

          {!project.image && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="rounded-2xl bg-white dark:bg-dark-200 p-4 shadow-lg ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:scale-105">
                <PlaceholderIcon className="h-9 w-9 text-primary-700 dark:text-dark-700" strokeWidth={1.75} />
              </div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-600 dark:text-dark-500">
                {placeholderCaption}
              </span>
            </div>
          )}
          {isComingSoon && (
            <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-white/90 text-black dark:bg-dark-800/90 dark:text-black">
              Coming Soon
            </div>
          )}
          {isOngoing && (
            <div className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-emerald-500/95 text-white shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
              </span>
              Ongoing
            </div>
          )}
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center gap-4 pointer-events-none">
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
            <h3 className={`text-xl font-bold mb-2 ${isComingSoon ? 'text-black dark:text-white' : 'text-gray-900 dark:text-dark-700'}`}>
              {project.title}
            </h3>
            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium mb-2">
              {project.subtitle}
            </p>
            {project.organization && (
              <div className="flex items-center gap-1.5 mb-3">
                <Building2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  {project.organization}
                </span>
              </div>
            )}
            <p className="text-gray-600 dark:text-dark-400 text-sm leading-relaxed text-justify">
              {project.description}
            </p>
            {isComingSoon && (
              <p className="mt-3 text-sm font-medium text-primary-600 dark:text-primary-400">
                Next showcase project is currently in progress.
              </p>
            )}
            {isOngoing && (
              <p className="mt-3 text-sm font-medium text-emerald-600 dark:text-emerald-400">
                Actively in development as part of company work.
              </p>
            )}
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

