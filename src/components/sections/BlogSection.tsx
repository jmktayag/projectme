'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { BlogCard } from '@/components/blog/BlogCard';
import { blogPosts } from '@/data/blog-posts';

const BlogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get categories from blog posts
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  // Filter and sort blog posts based on selected category
  const filteredPosts = blogPosts
    .filter(post => !selectedCategory || post.category === selectedCategory)
    .sort((a, b) => {
      // Featured posts always come first, regardless of category
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0;
    });

  // Simulate loading state
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="blog" className="py-20 bg-gray-900 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Blog
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A collection of my thoughts and insights on web development, programming, and technology.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            // Loading placeholders
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-300 dark:bg-gray-700"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-full mb-2"></div>
                  <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-5/6 mb-4"></div>
                  <div className="flex gap-2 mb-4">
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-16"></div>
                    <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-20"></div>
                  </div>
                </div>
              </div>
            ))
          ) : filteredPosts.length > 0 ? (
            // Actual blog post cards
            filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))
          ) : (
            // No posts found
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 