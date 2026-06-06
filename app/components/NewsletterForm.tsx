'use client';

export default function NewsletterForm() {
  return (
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
  );
}
