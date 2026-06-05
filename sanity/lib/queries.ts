import { groq } from "next-sanity";

export const ALL_ARTICLES_QUERY = groq`
  *[_type == "article"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    categoryTag,
    excerpt,
    readTime,
    publishedAt
  }
`;

export const ARTICLE_BY_SLUG_QUERY = groq`
  *[_type == "article" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    categoryTag,
    excerpt,
    mainContent,
    readTime,
    publishedAt
  }
`;

export const ALL_SLUGS_QUERY = groq`
  *[_type == "article"] { "slug": slug.current }
`;