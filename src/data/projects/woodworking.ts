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
        url: "https://woodworking-one-demo.com",
        type: "primary"
      },
      {
        label: "Order Custom",
        url: "https://etsy.com/woodworking-one",
        type: "tertiary"
      }
    ],
    featured: true,
    category: "Woodworking",
    projectType: "personal"
  },
  {
    id: "woodworking-rustic-bookshelf",
    title: "Rustic Bookshelf",
    subtitle: "A rustic bookshelf made from pine with custom metal brackets and distressed finish",
    description: "A rustic bookshelf crafted from pine wood, featuring custom metal brackets and a carefully applied distressed finish. This piece combines traditional woodworking techniques with modern design elements to create a unique and functional storage solution.",
    technologies: ["Pine", "Metal Brackets", "Staining", "Distressing Techniques"],
    image: "/images/projects/woodworking2.jpg",
    actions: [
      {
        label: "View Details",
        url: "https://woodworking-two-demo.com",
        type: "primary"
      }
    ],
    category: "Woodworking",
    projectType: "personal"
  }
]; 