export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  actions?: {
    label: string;
    url: string;
    type?: 'primary' | 'secondary' | 'tertiary' | 'gumroad' | 'appstore';
    icon?: string;
  }[];
  featured?: boolean;
  category: 'Software Development' | 'Books' | 'Woodworking';
  projectType: 'personal' | 'professional';
}

export const projects: Project[] = [
  {
    id: "project-snuggleScales",
    title: "Snuggle Scales – AI-Powered Interactive Storytelling App",
    subtitle: "A subscription-based mobile application that transforms family reading into an interactive experience.",
    description: "Snuggle Scales is a subscription-based mobile application designed to transform family reading into an interactive and gamified experience.",
    technologies: ["iOS", "Swift", "SwiftUI", "Firebase"],
    image: "/images/projects/snuggle_scales.png",
    actions: [
      {
        label: "Download on App Store",
        url: "https://apps.apple.com/app/snuggle-scales/id6474188399",
        type: "appstore"
      }
    ],
    featured: true,
    category: "Software Development",
    projectType: "personal"
  },
  {
    id: "secure-mobile-banking",
    title: "Secure Mobile Banking App",
    subtitle: "Enterprise banking application for European & APAC Financial Institutions",
    description: "Part of development of a secure mobile banking application serving multiple financial institutions across Europe and APAC regions. Focused on creating an intuitive and accessible user experience while maintaining strict security standards and regulatory compliance. Key contributions included implementing robust transaction management, payment systems, and security features.\n\nNote: Due to confidentiality, the image below is a representative design for a mobile banking app project I contributed to, focusing on security, performance, and user experience.",
    technologies: [
      "Swift",
      "Objective-C", 
      "Firebase",
      "Biometric Authentication",
      "Security"
    ],
    image: "/images/projects/banking-app.png",
    actions: [
      {
        label: "Case Study",
        url: "#",
        type: "primary"
      }
    ],
    category: "Software Development",
    projectType: "professional"
  },
  {
    id: "project-portfolio",
    title: "Personal Portfolio Website",
    subtitle: "A playful yet minimalistic portfolio showcasing my diverse projects",
    description: "Designed and developed a playful yet minimalistic personal portfolio to showcase woodworking, cycling vlogs, mobile apps, and writing projects. Built with Next.js, React, TailwindCSS, and TypeScript.",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    image: "/images/projects/mk-logo.png",
    actions: [
      {
        label: "Visit Site",
        url: "https://jundalisay.com",
        type: "primary"
      },
      {
        label: "Source Code", 
        url: "https://github.com/jundalisay/portfolio",
        type: "secondary"
      }
    ],
    category: "Software Development",
    projectType: "personal"
  },
  {
    id: "project-erna",
    title: "ERNA – Risk Reduction App",
    subtitle: "Grand Prize Winner of the 2013 DOST 4A SLC Fair and Exhibits Mobile App Competition",
    description: "ERNA is a Risk Reduction Management App that won the Grand Prize at the 2013 DOST 4A SLC Fair and Exhibits Mobile App Competition.",
    technologies: ["Mobile App", "Risk Management", "DOST"],
    image: "https://img.youtube.com/vi/ztiPobPBdsI/maxresdefault.jpg",
    actions: [
      {
        label: "Watch Demo",
        url: "https://youtu.be/ztiPobPBdsI?si=aaSV23whlvVv5qrA",
        type: "primary"
      }
    ],
    category: "Software Development",
    projectType: "personal"
  },
  {
    id: "book-echomind",
    title: "Mastering ChatGPT: The Smart Way to AI Conversations",
    subtitle: "An easy-to-follow guide that helps beginners understand and maximize the power of ChatGPT.",
    description: "An easy-to-follow guide that helps beginners understand and maximize the power of ChatGPT.",
    technologies: ["AI", "ChatGPT", "Productivity"],
    image: "/images/projects/mastering.png",
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
  },
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