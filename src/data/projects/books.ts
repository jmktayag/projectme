import { Project } from './types';

export const bookProjects: Project[] = [
  {
    id: "book-echomind",
    title: "Mastering ChatGPT: The Smart Way to AI Conversations",
    subtitle: "An easy-to-follow guide that helps beginners understand and maximize the power of ChatGPT.",
    description: "An easy-to-follow guide that helps beginners understand and maximize the power of ChatGPT.",
    technologies: ["AI", "ChatGPT", "Productivity"],
    image: "/images/projects/mastering.png",
    images: [
      "/images/projects/echo-1.png",
      "/images/projects/echo-2.png",
      "/images/projects/echo-3.png",
      "/images/projects/echo-4.png",
      "/images/projects/echo-5.png",
      "/images/projects/echo-6.png"
    ],
    actions: [
      {
        label: "Buy on Gumroad",
        url: "https://username.gumroad.com/l/book-one",
        type: "gumroad"
      }
    ],
    featured: true,
    category: "Books",
    projectType: "personal"
  }
]; 