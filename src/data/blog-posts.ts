import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Building a Modern Portfolio with Next.js and Tailwind CSS',
    description: 'Learn how to create a stunning portfolio website using Next.js 14, Tailwind CSS, and Framer Motion. This comprehensive guide covers everything from setup to deployment.',
    content: `# Building a Modern Portfolio with Next.js and Tailwind CSS

In today's digital age, having a professional portfolio website is essential for showcasing your work and skills. In this article, we'll explore how to build a modern, responsive portfolio using Next.js 14 and Tailwind CSS.

## Why Next.js and Tailwind CSS?

Next.js provides an excellent foundation for building modern web applications with features like:
- Server-side rendering
- Static site generation
- API routes
- Built-in image optimization

Tailwind CSS, on the other other hand, offers a utility-first approach to styling that makes it easy to create beautiful, responsive designs.

## Getting Started

First, let's create a new Next.js project with Tailwind CSS:

\`\`\`bash
npx create-next-app@latest my-portfolio --typescript --tailwind --eslint
\`\`\`

## Project Structure

A well-organized project structure is crucial for maintainability. Here's how we'll structure our portfolio:

\`\`\`
src/
  ├── app/
  │   ├── layout.tsx
  │   └── page.tsx
  ├── components/
  │   ├── layout/
  │   ├── sections/
  │   └── ui/
  ├── styles/
  └── types/
\`\`\`

## Key Features

1. **Responsive Design**
   - Mobile-first approach
   - Fluid typography
   - Responsive images

2. **Animations**
   - Smooth page transitions
   - Scroll animations
   - Hover effects

3. **Performance**
   - Image optimization
   - Code splitting
   - Lazy loading

## Conclusion

Building a modern portfolio with Next.js and Tailwind CSS provides a solid foundation for showcasing your work. The combination of these technologies allows for creating beautiful, performant websites with excellent developer experience.

Remember to:
- Keep your code organized
- Optimize for performance
- Test across different devices
- Regular updates and maintenance`,
    coverImage: '/images/blog/nextjs-portfolio.jpg',
    publishedAt: '2024-03-15T10:00:00Z',
    readingTime: '8 min read',
    tags: ['Next.js', 'Tailwind CSS', 'Web Development', 'Portfolio'],
    featured: true,
    category: 'Software Development'
  },
  {
    id: '2',
    title: 'The Journey of Continuous Learning in Tech',
    description: 'Explore the importance of continuous learning in the tech industry and discover effective strategies to stay updated with the latest technologies and trends.',
    content: `# The Journey of Continuous Learning in Tech

In the fast-paced world of technology, continuous learning isn't just a choice—it's a necessity. This article explores the importance of staying current and shares strategies for effective learning.

## Why Continuous Learning Matters

The tech industry evolves rapidly, and staying relevant requires:
- Keeping up with new technologies
- Understanding emerging trends
- Adapting to changing methodologies
- Building a growth mindset

## Effective Learning Strategies

### 1. Structured Learning
- Set clear learning goals
- Create a learning schedule
- Use online platforms (Coursera, Udemy, etc.)
- Participate in coding challenges

### 2. Practical Application
- Build personal projects
- Contribute to open source
- Solve real-world problems
- Document your learning journey

### 3. Community Engagement
- Join tech communities
- Attend meetups and conferences
- Participate in hackathons
- Network with other developers

## Overcoming Challenges

Common obstacles in continuous learning include:
- Time management
- Information overload
- Maintaining motivation
- Balancing work and learning

## Conclusion

Continuous learning is a journey, not a destination. By adopting the right strategies and maintaining a growth mindset, you can stay relevant and thrive in the tech industry.

Remember:
- Stay curious
- Be consistent
- Share your knowledge
- Embrace challenges`,
    coverImage: '/images/blog/continuous-learning.jpg',
    publishedAt: '2024-03-10T14:30:00Z',
    readingTime: '10 min read',
    tags: ['Learning', 'Career Growth', 'Technology', 'Personal Development'],
    category: 'Personal Growth'
  },
  {
    id: '3',
    title: 'Mastering TypeScript: A Comprehensive Guide',
    description: 'Dive deep into TypeScript and learn how to leverage its powerful features to write more maintainable and robust code. From basic types to advanced concepts.',
    content: `# Mastering TypeScript: A Comprehensive Guide

TypeScript has revolutionized the way we write JavaScript applications. In this comprehensive guide, we'll explore TypeScript's key features and how to use them effectively.

## Why TypeScript?

TypeScript adds static typing to JavaScript, providing several benefits:
- Better code completion
- Catch errors early
- Improved maintainability
- Better documentation

## Getting Started with TypeScript

First, install TypeScript:

\`\`\`bash
npm install -g typescript
\`\`\`

## Basic Types

TypeScript provides several basic types:

\`\`\`typescript
let name: string = 'John';
let age: number = 30;
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3];
let tuple: [string, number] = ['John', 30];
\`\`\`

## Advanced Types

### Interfaces

\`\`\`typescript
interface User {
  name: string;
  age: number;
  email?: string;
}

const user: User = {
  name: 'John',
  age: 30
};
\`\`\`

### Generics

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
\`\`\`

## Best Practices

1. **Use Strict Mode**
   - Enable strict type checking
   - Catch more potential errors

2. **Type Inference**
   - Let TypeScript infer types when possible
   - Explicitly type when necessary

3. **Documentation**
   - Use JSDoc comments
   - Document complex types

## Conclusion

TypeScript is a powerful tool that can significantly improve your development workflow. By understanding and applying its features effectively, you can write more maintainable and robust code.

Remember to:
- Start with basic types
- Gradually adopt advanced features
- Use strict mode
- Keep learning and practicing`,
    coverImage: '/images/blog/typescript-guide.jpg',
    publishedAt: '2024-03-05T09:15:00Z',
    readingTime: '12 min read',
    tags: ['TypeScript', 'JavaScript', 'Programming', 'Web Development'],
    category: 'Software Development'
  },
  {
    id: '4',
    title: 'Building Resilience in Software Development',
    description: 'Learn how to develop mental resilience and handle challenges in software development, from debugging complex issues to managing project stress.',
    content: `# Building Resilience in Software Development

Software development is as much about technical skills as it is about mental resilience. This article explores how to build and maintain resilience in the face of technical challenges and project pressures.

## Understanding Resilience

Resilience in software development means:
- Handling technical challenges effectively
- Managing project stress
- Bouncing back from failures
- Maintaining work-life balance

## Key Areas of Focus

### 1. Technical Challenges
- Break down complex problems
- Use systematic debugging approaches
- Document solutions for future reference
- Learn from mistakes

### 2. Project Management
- Set realistic expectations
- Communicate effectively
- Manage time efficiently
- Handle scope changes

### 3. Personal Well-being
- Take regular breaks
- Practice stress management
- Maintain work-life balance
- Stay physically active

## Building Resilience

### Daily Practices
- Regular exercise
- Mindfulness meditation
- Continuous learning
- Social connections

### Professional Development
- Skill diversification
- Knowledge sharing
- Mentorship
- Community involvement

## Conclusion

Building resilience is a continuous process that requires both technical and personal development. By focusing on these areas, you can become a more effective and balanced developer.

Remember:
- Stay curious
- Embrace challenges
- Take care of yourself
- Keep learning and growing`,
    coverImage: '/images/blog/resilience.jpg',
    publishedAt: '2024-03-01T16:45:00Z',
    readingTime: '8 min read',
    tags: ['Career Growth', 'Mental Health', 'Productivity', 'Well-being'],
    category: 'Personal Growth'
  }
]; 