import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import ProjectModal from './ProjectModal';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to get button class based on type
  const getButtonClass = (type?: string) => {
    switch (type) {
      case 'primary':
        return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
      case 'secondary':
        return 'bg-gray-800 text-white hover:bg-gray-900 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2';
      case 'tertiary':
        return 'bg-green-600 text-white hover:bg-green-700 focus:ring-2 focus:ring-green-500 focus:ring-offset-2';
      case 'gumroad':
        return 'bg-[#FF90E8] text-black hover:bg-[#FF7AE0] font-medium focus:ring-2 focus:ring-pink-500 focus:ring-offset-2';
      case 'appstore':
        return 'bg-black text-white hover:bg-gray-800 font-medium flex items-center focus:ring-2 focus:ring-gray-500 focus:ring-offset-2';
      default:
        return 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2';
    }
  };

  // Function to render button content based on type
  const renderButtonContent = (action: any) => {
    if (action.type === 'appstore') {
      return (
        <>
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          {action.label}
        </>
      );
    }
    return action.label;
  };

  // Check if the image URL is external
  const isExternalImage = project.image.startsWith('http');

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="relative w-full pt-[56.25%] overflow-hidden">
          <Image
            src={project.image}
            alt={`${project.title} screenshot`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 hover:scale-105"
            unoptimized={isExternalImage}
            priority={index < 3} // Prioritize loading for first 3 images
          />
          {project.featured && (
            <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              {project.category}
            </div>
            <div className={`text-xs px-2 py-0.5 rounded-full ${
              project.projectType === 'professional' 
                ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' 
                : 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
            }`}>
              {project.projectType === 'professional' ? 'Professional' : 'Personal'}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          
          <div className="text-gray-600 dark:text-gray-300 mb-4">
            <p className="line-clamp-3">{project.subtitle}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-3 mt-6">
            {project.actions?.map((action, i) => (
              <Link 
                key={i}
                href={action.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none ${getButtonClass(action.type)}`}
                onClick={(e) => e.stopPropagation()}
              >
                {renderButtonContent(action)}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
      
      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default ProjectCard; 