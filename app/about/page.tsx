import type { Metadata } from "next";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About",
  description: "About AI-guide — who we are and what we write about.",
};

export default function AboutPage() {
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
              About
            </p>

            <h1
              className="font-sans font-700 text-display-md text-ink mb-8"
              style={{ letterSpacing: "-0.025em" }}
            >
              We write about AI
              <br />
              for people who think.
            </h1>

            <div className="article-body">
              <p>
                AI-guide is an independent publication focused on the ideas,
                systems, and decisions shaping modern artificial intelligence.
                We write for engineers building with these systems, researchers
                advancing them, and curious readers who want to understand what&apos;s
                actually happening beneath the headlines.
              </p>

              <p>
                We aim for the standard of explanation you&apos;d expect from a
                brilliant colleague who has time to sit down and explain
                something properly: technically precise, but never needlessly
                obscure. No hype. No doom. Just clear thinking about complex
                systems.
              </p>

              <h2>What we cover</h2>

              <p>
                Our writing spans four areas: <strong>Fundamentals</strong> (how
                the underlying systems work), <strong>Models</strong> (what
                frontier AI can and can&apos;t do), <strong>Practice</strong> (how
                to build with these tools), and <strong>Opinion</strong> (where
                thoughtful people disagree).
              </p>

              <h2>Who writes here</h2>

              <p>
                AI-guide is written by a small group of practitioners and
                researchers. We accept occasional contributions from external
                writers whose work meets our standards for rigor and clarity.
                If you&apos;d like to pitch something, reach out.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
