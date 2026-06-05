export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number; // minutes
  date: string;
  author: string;
  content: string;
}
