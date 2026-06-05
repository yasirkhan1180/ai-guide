import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe to the AI-guide newsletter.",
};

export default function NewsletterPage() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <div className="max-w-site mx-auto px-6 md:px-12 pt-20 pb-14">
          <div className="max-w-article">
            {/* Overline */}
            <p
              className="font-sans text-[0.65rem] font-600 uppercase tracking-widest text-accent mb-8"
              style={{ letterSpacing: "0.2em" }}
            >
              Newsletter
            </p>

            <h1
              className="font-sans font-700 text-display-md text-ink mb-6"
              style={{ letterSpacing: "-0.025em" }}
            >
              New articles,
              <br />
              in your inbox.
            </h1>

            <p className="font-serif text-[1.0625rem] text-ink-soft leading-relaxed italic mb-12">
              No summaries, no roundups. When we publish something worth
              reading, we&apos;ll send it to you directly.
            </p>

            {/* Subscription form */}
            <div className="border-t border-border pt-10">
              <form
                className="flex flex-col sm:flex-row gap-3"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 font-sans text-sm border border-border bg-white px-4 py-3 text-ink placeholder:text-slate-400 focus:outline-none focus:border-ink transition-colors duration-200"
                />
                <button
                  type="submit"
                  className="font-sans text-xs font-600 uppercase tracking-widest px-8 py-3 bg-ink text-bg hover:bg-accent transition-colors duration-200 whitespace-nowrap"
                  style={{ letterSpacing: "0.1em" }}
                >
                  Subscribe
                </button>
              </form>
              <p className="font-sans text-xs text-muted mt-4">
                No spam. One email per new article. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
