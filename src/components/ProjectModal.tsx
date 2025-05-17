import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;
  
  // State for image gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);
  
  // Get all images (primary image + additional images)
  const allImages = project.images 
    ? [project.image, ...project.images] 
    : [project.image];
  
  // Check if current image is portrait
  useEffect(() => {
    const checkImageOrientation = () => {
      // Create a temporary image element
      const tempImg = document.createElement('img');
      tempImg.src = allImages[currentImageIndex];
      
      tempImg.onload = () => {
        // If height is greater than width, it's portrait
        setIsPortrait(tempImg.height > tempImg.width);
      };
    };
    
    checkImageOrientation();
  }, [currentImageIndex, allImages]);
  
  // Navigation functions for image gallery
  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

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
  const isExternalImage = (url: string) => url.startsWith('http');

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900/75 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all relative">
                {/* Image Gallery */}
                <div className="relative w-full pt-[56.25%] overflow-hidden rounded-lg mb-6 bg-black">
                  <Image
                    src={allImages[currentImageIndex]}
                    alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                    className={isPortrait ? "object-contain" : "object-cover"}
                    unoptimized={isExternalImage(allImages[currentImageIndex])}
                    priority
                  />
                  
                  {/* Navigation Arrows - Only show if there are multiple images */}
                  {allImages.length > 1 && (
                    <>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          goToPreviousImage();
                        }}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        aria-label="Previous image"
                      >
                        <ChevronLeftIcon className="h-6 w-6" />
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          goToNextImage();
                        }}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                        aria-label="Next image"
                      >
                        <ChevronRightIcon className="h-6 w-6" />
                      </button>
                    </>
                  )}
                  
                  {/* Image Counter */}
                  {allImages.length > 1 && (
                    <div className="absolute bottom-3 right-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                      {currentImageIndex + 1} / {allImages.length}
                    </div>
                  )}
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
                
                {/* Thumbnail Navigation - Only show if there are multiple images */}
                {allImages.length > 1 && (
                  <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
                    {allImages.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`relative w-20 h-12 flex-shrink-0 rounded overflow-hidden bg-black ${
                          currentImageIndex === index ? 'ring-2 ring-blue-500' : ''
                        }`}
                        aria-label={`View image ${index + 1}`}
                      >
                        <Image
                          src={img}
                          alt={`Thumbnail ${index + 1}`}
                          fill
                          sizes="80px"
                          className="object-contain"
                          unoptimized={isExternalImage(img)}
                        />
                      </button>
                    ))}
                  </div>
                )}

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

                <Dialog.Title
                  as="h3"
                  className="text-2xl font-bold leading-6 text-gray-900 dark:text-white mb-2"
                >
                  {project.title}
                </Dialog.Title>

                <div className="text-gray-600 dark:text-gray-300 mb-4">
                  <p>{project.subtitle}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="prose dark:prose-invert max-w-none mb-6">
                  <p className="whitespace-pre-line">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-3 mt-6">
                  {project.actions?.map((action, i) => (
                    <Link
                      key={i}
                      href={action.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none ${getButtonClass(action.type)}`}
                    >
                      {renderButtonContent(action)}
                    </Link>
                  ))}
                </div>
                
                {/* Close button in lower-right corner */}
                <div className="mt-6 flex justify-end">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 dark:bg-gray-700 px-4 py-2 text-sm font-medium text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                    onClick={onClose}
                  >
                    Close
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProjectModal; 