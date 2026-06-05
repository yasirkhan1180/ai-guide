import { client } from "./client";
import {
  ALL_ARTICLES_QUERY,
  ARTICLE_BY_SLUG_QUERY,
  ALL_SLUGS_QUERY,
} from "./queries";

export type Article = {
  _id: string;
  title: string;
  slug: string;
  categoryTag: string;
  excerpt: string;
  readTime: number;
  publishedAt: string;
};

export type ArticleFull = Article & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mainContent: any[];
};

export async function getAllArticles(): Promise<Article[]> {
  return client.fetch(ALL_ARTICLES_QUERY, {}, { next: { revalidate: 60 } });
}

export async function getArticleBySlug(slug: string): Promise<ArticleFull | null> {
  return client.fetch(
    ARTICLE_BY_SLUG_QUERY,
    { slug },
    { next: { revalidate: 60 } }
  );
}

export async function getAllSlugs(): Promise<{ slug: string }[]> {
  return client.fetch(ALL_SLUGS_QUERY, {}, { next: { revalidate: 3600 } });
}