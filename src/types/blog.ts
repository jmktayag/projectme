export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  publishedAt: string;
  readingTime: string;
  tags: string[];
  featured?: boolean;
  category: 'Software Development' | 'Personal Growth';
} 