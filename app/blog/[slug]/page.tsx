import Link from "next/link";
import { getArticleBySlug, getAllSlugs, Article } from "@/sanity/lib/fetch";
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

// Fixed: Explicitly typed 'item' to satisfy TypeScript strict mode
export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((item: { slug: string }) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: "Not Found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: Props) {
  const article: Article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  return (
    <>
      <Header />
      <main className="pt-14">
        <header className="max-w-site mx-auto px-6 md:px-12 pt-20 pb-14 border-b border-border">
          <div className="max-w-article">
            <div className="flex items-center gap-2 mb-8">
              <Link href="/" className="font-sans text-[0.65rem] uppercase tracking-widest text-muted hover:text-ink transition-colors duration-150" style={{ letterSpacing: "0.12em" }}>
                Articles
              </Link>
              <span className="text-muted text-xs">›</span>
              <CategoryTag category={article.categoryTag} />
            </div>

            <h1 className="font-sans font-700 text-display-md text-ink mb-6" style={{ letterSpacing: "-0.025em" }}>
              {article.title}
            </h1>

            <p className="font-serif text-[1.0625rem] text-ink-soft leading-relaxed italic mb-8">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <span className="font-sans text-xs font-600 text-muted">A</span>
                </div>
                <div>
                  <p className="font-sans text-sm font-500 text-ink">AI Guide</p>
                  <p className="font-sans text-xs text-muted">{formatDate(article.publishedAt)}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-muted">
                <span className="font-sans text-xs">{article.readTime} min read</span>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-site mx-auto px-6 md:px-12 py-14">
          <div className="max-w-article">
            <div className="article-body prose prose-sm max-w-none">
              <PortableText value={article.mainContent} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}