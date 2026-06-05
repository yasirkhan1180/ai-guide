import { Post } from "./types";

export const posts: Post[] = [
  {
    slug: "the-attention-mechanism-explained",
    title: "The Attention Mechanism, Explained for the Rest of Us",
    excerpt: "Every modern language model is built on attention. But what does it actually mean for a model to 'attend' to something?",
    category: "Fundamentals",
    readTime: 7,
    date: "2026-06-05",
    author: "Muhammad Yasir Khan",
    content: "<p>In 2017, a paper titled Attention Is All You Need changed the trajectory of machine learning.</p>"
  },
  {
    slug: "context-windows-and-what-they-mean",
    title: "Context Windows Are Getting Longer. Here's Why It Matters.",
    excerpt: "From 4K tokens in early GPT-3 to millions of tokens today.",
    category: "Models",
    readTime: 5,
    date: "2024-05-20",
    author: "Marcus Webb",
    content: "<p>One of the most important axes along which AI models have improved isn't raw capability.</p>"
  },
  {
    slug: "prompt-engineering-is-dead-long-live-prompt-engineering",
    title: "Prompt Engineering Is Dead. Long Live Prompt Engineering.",
    excerpt: "Everyone said prompting was a temporary skill that would be engineered away.",
    category: "Practice",
    readTime: 6,
    date: "2024-05-12",
    author: "Priya Anand",
    content: "<p>In 2022, a peculiar job title began appearing on LinkedIn.</p>"
  }
];

export function getAllPosts(): Post[] {
  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
