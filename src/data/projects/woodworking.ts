import { Project } from './types';

export const woodworkingProjects: Project[] = [
  {
    id: "woodworking-hanging-shelf",
    title: "Hanging Shelf",
    subtitle: "A handcrafted hanging shelf made from reclaimed pine wood",
    description: "A handcrafted hanging shelf made from reclaimed pine wood, showcasing sustainable woodworking practices and rustic design.",
    technologies: ["Pine", "Hand Tools", "Finishing"],
    image: "/images/projects/hanging-shelves.jpg",
    actions: [
      {
        label: "View Gallery",
        url: "https://mckeindev.vercel.app/",
        type: "primary"
      },
    ],
    featured: true,
    category: "Woodworking",
    projectType: "personal"
  }
]; 