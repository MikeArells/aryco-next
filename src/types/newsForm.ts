export interface NewsFormData {
  title: string;

  category: string;

  summary: string;

  author: string;

  readTime: number | null;

  content: string;

  slug: string;

  newsImage: File[];
}