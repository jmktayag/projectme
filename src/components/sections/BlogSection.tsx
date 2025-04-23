'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Getting Started with Next.js 14",
      excerpt: "Learn how to build modern web applications with Next.js 14 and its new features.",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Web Development"
    },
    {
      title: "Mastering TypeScript for React",
      excerpt: "A comprehensive guide to using TypeScript with React for type-safe development.",
      date: "March 10, 2024",
      readTime: "8 min read",
      category: "TypeScript"
    },
    {
      title: "Building Scalable APIs with Node.js",
      excerpt: "Best practices for designing and implementing scalable REST APIs using Node.js.",
      date: "March 5, 2024",
      readTime: "6 min read",
      category: "Backend"
    }
  ];

  return (
    <section id="blog" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Latest Posts
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-blue-600 dark:text-blue-400">
                    {post.category}
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {post.readTime}
                  </span>
                  <Link
                    href="#"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection; 