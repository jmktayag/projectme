import { Project } from './types';

export const woodworkingProjects: Project[] = [
  {
    id: "woodworking-hanging-shelf",
    title: "Hanging Shelf",
    subtitle: "A handcrafted hanging shelf made from reclaimed pine wood",
    description: "A handcrafted hanging shelf made from reclaimed pine wood, showcasing sustainable woodworking practices and rustic design.",
    technologies: ["Pine", "Hand Tools", "Finishing"],
    image: "/images/projects/hanging-shelves.jpg",
    featured: true,
    category: "Woodworking",
    projectType: "personal"
  },
  {
    id: "woodworking-wooden-coasters",
    title: "Wooden Coasters",
    subtitle: "Handcrafted pine coasters with a clean, natural finish—designed to protect surfaces and add a warm, personal touch to your daily coffee moments.",
    description: "A set of handcrafted wooden coasters made from smooth pine, designed to bring both function and warmth to your daily rituals. Each coaster is precision-cut and sealed with a natural matte finish to preserve the wood grain and protect against moisture. The set pairs perfectly with any morning brew or cozy corner setup.",
    technologies: ["Pine", "Hand Tools", "Finishing"],
    image: "/images/projects/coaster.jpg",
    featured: true,
    category: "Woodworking",
    projectType: "personal"
  },
  {
    id: "woodworking-console-table",
    title: "Console Table",
    subtitle: "A handcrafted console table that pairs natural wood with a crisp white frame—built to bring warmth, greenery, and balance into any living space.",
    description: "This handcrafted console table blends warm wood tones with a clean white frame for a light and airy indoor accent. Designed with a slatted lower shelf for added storage or styling, the piece works perfectly as an entryway console, a hallway feature, or a cozy corner highlight.",
    technologies: ["Hardwood", "Mortise & Tenon", "Hand Tools", "Wood Finish"],
    image: "/images/projects/console.jpg",
    featured: true,
    category: "Woodworking",
    projectType: "personal"
  },
  {
    id: "woodworking-monitor-riser",
    title: "Monitor Riser",
    subtitle: "A minimalist wooden monitor stand that elevates your workspace with clean lines and natural materials.",
    description: "Custom-built monitor riser designed to improve ergonomics and add a touch of warmth to the workspace. Crafted from solid pine with a natural finish that highlights the wood grain, this piece combines functionality with aesthetic appeal. Features include a raised platform for optimal screen height and a storage compartment underneath for organizing desk essentials.",
    technologies: ["Pine", "Hand Tools", "Natural Finish", "Joinery"],
    image: "/images/projects/monitor-riser1.jpg",
    images: [
      "/images/projects/monitor-riser2.jpg",
      "/images/projects/monitor-riser3.jpg",
    ],
    featured: true,
    category: "Woodworking",
    projectType: "personal"
  }
]; 