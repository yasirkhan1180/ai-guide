import Link from "next/link";
import { Post } from "../../types";
import { formatDate } from "../../data";
import CategoryTag from "./CategoryTag";

interface ArticleCardProps {
  post: Post;
  index: number;
}

export default function ArticleCard({ post, index }: ArticleCardProps) {
  return (
    <article
      className="group border-t border-border py-10 opacity-0-init animate-fade-up"
      style={{ animationDelay: `${200 + index * 80}ms`, animationFillMode: "forwards" }}
    >
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Top meta row */}
        <div className="flex items-center gap-3 mb-4">
          <CategoryTag category={post.category} />
          <span className="font-sans text-[0.65rem] text-muted uppercase tracking-widest" style={{ letterSpacing: "0.1em" }}>
            {post.readTime} min read
          </span>
        </div>

        {/* Title */}
        <h2 className="font-sans font-700 text-[1.375rem] leading-snug tracking-tight text-ink mb-3 group-hover:text-accent transition-colors duration-200" style={{ letterSpacing: "-0.02em" }}>
          {post.title}
        </h2>

        {/* Excerpt — capped to 2 lines via line-clamp */}
        <p className="font-serif text-[0.9375rem] text-ink-soft leading-relaxed line-clamp-2 mb-5">
          {post.excerpt}
        </p>

        {/* Bottom row */}
        <div className="flex items-center justify-between">
          <span className="font-sans text-xs text-muted">
            {formatDate(post.date)} · {post.author}
          </span>
          <span className="font-sans text-xs font-500 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center gap-1">
            Read article
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="translate-x-0 group-hover:translate-x-0.5 transition-transform duration-200">
              <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </article>
  );
}
