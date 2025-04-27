export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  image: string;
  images?: string[];
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

export interface ProjectsByCategory {
  'Software Development': Project[];
  'Books': Project[];
  'Woodworking': Project[];
} 