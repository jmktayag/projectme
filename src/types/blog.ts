export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: {
    type: 'paragraph' | 'image';
    content: string;
    imageAlt?: string;
  }[];
  coverImage: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
  category: 'Software Development' | 'Personal Growth' | 'Productivity';
} 