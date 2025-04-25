import React from 'react';
import { IconType } from 'react-icons';

// Navigation Types
export interface NavLink {
  href: string;
  label: string;
}

// Project Types
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
}

// Common Component Props
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  isLoading?: boolean;
}

// Skill Types
export interface Skill {
  icon: IconType;
  name: string;
  color: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: Skill[];
}

export interface SkillIconProps {
  icon: IconType;
  name: string;
  color: string;
}

export interface SkillCardProps {
  title: string;
  description: string;
  skills: Skill[];
} 