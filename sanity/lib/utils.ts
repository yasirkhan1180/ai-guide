import { groq } from "next-sanity";

export const ALL_ARTICLES_QUERY = groq`
  *[_type == "article" && defined(publishedAt)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    categoryTag,
    excerpt,
    readTime,
    publishedAt,
    author
  }
`;

export const ARTICLE_BY_SLUG_QUERY = groq`
  *[_type == "article" && slug.current == $slug && defined(publishedAt)][0] {
    _id,
    title,
    "slug": slug.current,
    categoryTag,
    excerpt,
    mainContent,
    readTime,
    publishedAt,
    author
  }
`;

export const ALL_SLUGS_QUERY = groq`
  *[_type == "article" && defined(publishedAt)] {
    "slug": slug.current
  }
`;