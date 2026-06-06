import { client } from "./client";
import { ALL_ARTICLES_QUERY, ARTICLE_BY_SLUG_QUERY, ALL_SLUGS_QUERY } from "./queries";

// Define the interface that matches your Sanity Schema
export interface Article {
  _id: string;
  title: string;
  slug: string;
  categoryTag: string;
  excerpt: string;
  mainContent: any; // Using 'any' here is standard for PortableText arrays
  readTime: number;
  publishedAt: string;
  author: string;
}

// Fetch all articles for the homepage feed
export async function getAllArticles(): Promise<Article[]> {
  return await client.fetch(ALL_ARTICLES_QUERY);
}

// Fetch a single article by slug
export async function getArticleBySlug(slug: string): Promise<Article> {
  return await client.fetch(ARTICLE_BY_SLUG_QUERY, { slug });
}

// Fetch all slugs for Static Site Generation (SSG)
export async function getAllSlugs() {
  return await client.fetch(ALL_SLUGS_QUERY);
}