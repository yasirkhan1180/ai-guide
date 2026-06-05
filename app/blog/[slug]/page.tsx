import Link from "next/link";
import { getArticleBySlug, getAllSlugs } from "@/sanity/lib/fetch";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CategoryTag from "../../components/CategoryTag";
import { formatDate } from "@/sanity/lib/utils";
import { PortableText } from "next-sanity";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    return { title: "Not Found" };
  }
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug);
  if (!article) {
    notFound();
  }

  return (
    <>
      <Header />

      <main className="pt-14">
        {/* ── Article Header ─────────────────────────────── */}
        <header className="max-w-site mx-auto px-6 md:px-12 pt-20 pb-14 border-b border-border">
          <div className="max-w-article">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-8">
              <Link
                href="/"
                className="font-sans text-[0.65rem] uppercase tracking-widest text-muted hover:text-ink transition-colors duration-150"
                style={{ letterSpacing: "0.12em" }}
              >
                Articles
              </Link>
              <span className="text-muted text-xs">›</span>
              <CategoryTag category={article.categoryTag} />
            </div>

            {/* Title */}
            <h1
              className="font-sans font-700 text-display-md text-ink mb-6"
              style={{ letterSpacing: "-0.025em" }}
            >
              {article.title}
            </h1>

            {/* Excerpt / deck */}
            <p className="font-serif text-[1.0625rem] text-ink-soft leading-relaxed italic mb-8">
              {article.excerpt}
            </p>

            {/* Byline */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                {/* Avatar placeholder */}
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <span className="font-sans text-xs font-600 text-muted">
                    A
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-500 text-ink">AI Guide</p>
                  <p className="font-sans text-xs text-muted">{formatDate(article.publishedAt)}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-muted">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2" />
                  <path d="M6.5 3.5v3l2 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
                <span className="font-sans text-xs">{article.readTime} min read</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── Article Body ───────────────────────────────── */}
        <div className="max-w-site mx-auto px-6 md:px-12 py-14">
          <div className="max-w-article">
            <div className="article-body prose prose-sm max-w-none">
              <PortableText value={article.mainContent} />
            </div>
          </div>
        </div>

        {/* ── Article Footer ─────────────────────────────── */}
        <div className="max-w-site mx-auto px-6 md:px-12">
          <div className="max-w-article border-t border-border pt-12 pb-4">
            {/* Author card */}
            <div className="bg-slate-50 border border-border p-6 mb-14">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <span className="font-sans text-sm font-600 text-muted">
                    A
                  </span>
                </div>
                <div>
                  <p className="font-sans text-sm font-600 text-ink mb-1">AI Guide</p>
                  <p className="font-serif text-xs text-muted italic leading-relaxed">
                    Clear, rigorous writing on how modern AI systems actually work —
                    for engineers, researchers, and curious readers who want depth
                    without jargon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
