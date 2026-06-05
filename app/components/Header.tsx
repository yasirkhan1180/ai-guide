import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-site mx-auto px-6 md:px-12 h-14 flex items-center justify-between">
        {/* Wordmark */}
        <Link
          href="/"
          className="font-sans font-700 text-sm tracking-widest uppercase text-ink hover:text-accent transition-colors duration-200"
          style={{ letterSpacing: "0.18em" }}
        >
          AI-guide
        </Link>

        {/* Nav */}
        <nav className="flex items-center gap-8">
          <Link
            href="/"
            className="font-sans text-xs font-500 tracking-wide text-muted hover:text-ink transition-colors duration-200 uppercase"
            style={{ letterSpacing: "0.1em" }}
          >
            Articles
          </Link>
          <Link
            href="/about"
            className="font-sans text-xs font-500 tracking-wide text-muted hover:text-ink transition-colors duration-200 uppercase"
            style={{ letterSpacing: "0.1em" }}
          >
            About
          </Link>
          <Link
            href="/newsletter"
            className="font-sans text-xs font-500 px-4 py-1.5 border border-ink text-ink hover:bg-ink hover:text-bg transition-all duration-200 uppercase tracking-wide"
            style={{ letterSpacing: "0.1em" }}
          >
            Subscribe
          </Link>
        </nav>
      </div>
    </header>
  );
}
