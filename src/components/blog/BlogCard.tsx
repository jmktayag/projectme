import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { BlogPost } from '@/types/blog';
import BlogModal from './BlogModal';

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export const BlogCard = ({ post, index }: BlogCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
        className="bg-gray-700 rounded-lg shadow-sm cursor-pointer overflow-hidden"
        onClick={() => setIsModalOpen(true)}
      >
        {post.coverImage && (
          <div className="relative w-full pt-[56.25%] overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 hover:scale-105"
              priority={index < 3}
            />
            {post.featured && (
              <div className="absolute top-3 right-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                Featured
              </div>
            )}
          </div>
        )}
        
        <div className="p-6 space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="text-sm text-blue-400 font-medium">
              {post.category}
            </div>
            <div className="text-sm text-gray-400">
              {new Date(post.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-2">
            {post.title}
          </h3>
          
          <div className="text-gray-300 mb-4">
            <p className="line-clamp-3">{post.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-blue-900 text-blue-200 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <div className="text-sm text-gray-400">
            {post.readingTime}
          </div>
        </div>
      </motion.div>
      
      <BlogModal 
        post={post} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}; 