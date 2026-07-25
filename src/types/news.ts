export interface News {
  id: number;
  created_at: string;

  title: string;
  category: string;
  summary: string;
  author: string;
  readTime: number | null;
  content: string;

  slug: string;

  newsImage: string[];

  user_id: string;
}