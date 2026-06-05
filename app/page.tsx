import Header from "./components/Header";
import Footer from "./components/Footer";
import ArticleCard from "./components/ArticleCard";
import { getAllPosts } from "./data";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />

      <main className="pt-14">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="max-w-site mx-auto px-6 md:px-12 pt-24 pb-22 border-b border-border">
          {/* Overline */}
          <p
            className="font-sans text-[0.65rem] font-600 uppercase tracking-widest text-accent mb-8 opacity-0-init animate-fade-up"
            style={{ animationFillMode: "forwards", letterSpacing: "0.2em" }}
          >
            Est. 2024 — Independent AI Writing
          </p>

          {/* Massive display headline */}
          <h1
            className="font-sans font-700 text-display-xl text-ink leading-none tracking-tighter mb-10 opacity-0-init animate-fade-up animate-delay-100 max-w-5xl"
            style={{ animationFillMode: "forwards" }}
          >
            Understanding
            <br />
            <span className="text-accent">artificial</span>
            <br />
            intelligence.
          </h1>

          {/* Sub-headline */}
          <div
            className="max-w-xl opacity-0-init animate-fade-up animate-delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            <p className="font-serif text-[1.0625rem] text-ink-soft leading-relaxed italic">
              Clear, rigorous writing on how modern AI systems actually work —
              for engineers, researchers, and curious readers who want depth
              without jargon.
            </p>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap items-center gap-10 mt-14 opacity-0-init animate-fade-up animate-delay-300"
            style={{ animationFillMode: "forwards" }}
          >
            {[
              { value: `${posts.length}`, label: "Articles published" },
              { value: "4", label: "Topic categories" },
              { value: "3", label: "Contributing writers" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-sans font-700 text-3xl text-ink tracking-tight" style={{ letterSpacing: "-0.02em" }}>
                  {stat.value}
                </p>
                <p className="font-sans text-xs text-muted mt-0.5 uppercase tracking-widest" style={{ letterSpacing: "0.1em" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Article Feed ─────────────────────────────────── */}
        <section className="max-w-site mx-auto px-6 md:px-12">
          {/* Feed header */}
          <div
            className="flex items-center justify-between py-8 opacity-0-init animate-fade-up animate-delay-200"
            style={{ animationFillMode: "forwards" }}
          >
            <h2 className="font-sans text-[0.65rem] font-600 uppercase tracking-widest text-muted" style={{ letterSpacing: "0.15em" }}>
              Latest Articles
            </h2>
            <span className="font-sans text-[0.65rem] text-muted">
              {posts.length} articles
            </span>
          </div>

          {/* Single-column feed, constrained to article width */}
          <div className="max-w-article">
            {posts.map((post, i) => (
              <ArticleCard key={post.slug} post={post} index={i} />
            ))}
          </div>

          {/* End of feed marker */}
          <div className="max-w-article border-t border-border pt-10 pb-4">
            <p className="font-sans text-xs text-muted text-center uppercase tracking-widest" style={{ letterSpacing: "0.15em" }}>
              End of feed
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
