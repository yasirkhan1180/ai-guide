import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-14">
        <div className="max-w-site mx-auto px-6 md:px-12 pt-32 pb-20">
          <div className="max-w-article">
            <p
              className="font-sans text-[0.65rem] font-600 uppercase tracking-widest text-accent mb-8"
              style={{ letterSpacing: "0.2em" }}
            >
              404
            </p>
            <h1
              className="font-sans font-700 text-display-md text-ink mb-6"
              style={{ letterSpacing: "-0.025em" }}
            >
              Page not found.
            </h1>
            <p className="font-serif text-[1.0625rem] text-ink-soft italic leading-relaxed mb-10">
              The article or page you&apos;re looking for doesn&apos;t exist. It may have
              moved, or the URL might be incorrect.
            </p>
            <Link
              href="/"
              className="font-sans text-xs font-600 uppercase tracking-widest text-accent hover:text-ink transition-colors duration-200 border-b border-accent pb-0.5"
              style={{ letterSpacing: "0.1em" }}
            >
              ← Back to all articles
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
