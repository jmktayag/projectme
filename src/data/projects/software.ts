import { Project } from './types';

export const softwareProjects: Project[] = [
  {
    id: "project-snuggleScales",
    title: "Snuggle Scales – AI-Powered Interactive Storytelling App",
    subtitle: "A subscription-based mobile application that transforms family reading into an interactive experience.",
    description: "Snuggle Scales is a subscription-based mobile application designed to transform family reading into an interactive and gamified experience.",
    technologies: ["iOS", "Swift", "SwiftUI", "Firebase"],
    image: "/images/projects/snuggle_scales.png",
    images: [
      "/images/projects/snuggle-1.png",
      "/images/projects/snuggle-2.png",
      "/images/projects/snuggle-3.png",
      "/images/projects/snuggle-4.png",
      "/images/projects/snuggle-5.png",
      "/images/projects/snuggle-6.png"
    ],
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
    actions: [],
    category: "Software Development",
    projectType: "professional"
  },
  {
    id: "project-portfolio",
    title: "Personal Portfolio Website",
    subtitle: "A playful yet minimalistic portfolio showcasing my diverse projects",
    description: "Designed and developed a playful yet minimalistic personal portfolio to showcase woodworking, cycling vlogs, mobile apps, and writing projects. Built with Next.js, React, TailwindCSS, and TypeScript.",
    technologies: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    image: "/images/projects/hero-screen.png",
    actions: [
      {
        label: "Visit Site",
        url: "https://mckeindev.vercel.app/",
        type: "primary"
      },
      {
        label: "Source Code", 
        url: "https://github.com/jmktayag",
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
    id: "project-cl",
    title: "CleanLink Site Master",
    subtitle: "Mobile Workforce Management App",
    description: "An app for businesses that have staff working on multiple sites. It integrates seamlessly with CleanLink Software's web-based Site Master application. Use it to assign, schedule, report progress and monitor work at each of your sites. You can also collect data using your own customised forms, such as Quality Audits, Health & Safety Audits, Service and Staff Reviews.",
    technologies: ["Mobile App", "UI/UX Design", "Material Design", "Objective-C"],
    image: "/images/projects/cleanlink-1.png",
    images: [
      "/images/projects/cleanlink-logo.png"
    ],
    actions: [
      {
        label: "Learn More",
        url: "https://apps.apple.com/us/app/cl-site-master/id1367180561",
        type: "primary"
      }
    ],
    category: "Software Development",
    projectType: "professional"
  }
]; 