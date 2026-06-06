import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border mt-30 py-16">
      <div className="max-w-site mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          {/* Left: wordmark + tagline */}
          <div>
            <Link
              href="/"
              className="font-sans font-700 text-sm tracking-widest uppercase text-ink hover:text-accent transition-colors duration-200 block mb-2"
              style={{ letterSpacing: "0.18em" }}
            >
              AI-guide
            </Link>
            <p className="font-serif text-xs text-muted italic">
              Navigating the Intelligence Age
            </p>
          </div>

          {/* Right: links */}
          <div className="flex items-center gap-8">
            {[
              { href: "/", label: "Articles" },
              { href: "/about", label: "About" },
              { href: "/newsletter", label: "Newsletter" },
              { href: "/rss.xml", label: "RSS" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-sans text-xs uppercase tracking-widest text-muted hover:text-ink transition-colors duration-200"
                style={{ letterSpacing: "0.1em" }}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <p className="font-sans text-xs text-muted">
            © {new Date().getFullYear()} AI-guide. All rights reserved.
          </p>
          <p className="font-sans text-xs text-muted">
            Built with Next.js 14 · Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
